const WORDPRESS_URL = process.env.WORDPRESS_URL;
if (!WORDPRESS_URL) throw new Error("WORDPRESS_URL is not set");

const REVALIDATE = Number(process.env.WORDPRESS_REVALIDATE_SECONDS ?? "60");

const SECTION_TIMEOUT_MS = Number(process.env.WORDPRESS_SECTION_TIMEOUT_MS ?? "5000");

const PAGE_TIMEOUT_MS = Number(process.env.WORDPRESS_PAGE_TIMEOUT_MS ?? "20000");

const SITE_NAME = process.env.WORDPRESS_SITE_NAME ?? "";

type BuilderPageData = {
  apiVersion: string;
  id: number;
  template: string;
  templates: { slugs: string[]; ids: number[]; names: string[] };
  templateVersion: number | null;
  slug: string;
  fields: Record<string, string>;
  seo: { title: string; description: string; canonical: string; robots: string };
  // Featured image URL, or false when the page has none.
  featured_image?: string | false;
  present: string[];
  meta: { slug: string; parent: string; updatedAt: string; createdAt: string };
};

// The Builder API plugin hands back the SEO title template unresolved on roughly half the
// pages, so `seo.title` arrives as nothing but the separator (" | "). That string is truthy,
// so every `data.seo.title || "fallback"` in the routes silently kept it. The real value is
// still in the ACF `meta-title` field, so rebuild from there and let blanks fall through to
// each route's own fallback.
const TITLE_PLACEHOLDER = /^(see\s+rank\s?math|see\s+yoast|tbd|todo|n\/?a)\b/i;

// WordPress stores entities encoded ("Signs, Causes, &amp; Treatment"); React escapes the
// value again on render, which surfaces as a literal "&amp;". Decode once here, and drop a
// dangling separator for pages whose own WP title is empty ("| Connections Mental Health").
const tidyTitle = (raw: string) =>
  decodeEntities(raw)
    .replace(/^[\s|\-\u2013\u2014\u00b7\u00bb]+/, "")
    .replace(/[\s|\-\u2013\u2014\u00b7\u00bb]+$/, "")
    .trim();

function normaliseSeo(data: BuilderPageData): BuilderPageData {
  if (!data?.seo) return data;
  if (data.seo.description) data.seo.description = decodeEntities(data.seo.description);
  const current = tidyTitle(data.seo.title ?? "");
  if (current) {
    data.seo.title = current;
    return data;
  }

  const metaTitle = tidyTitle(data.fields?.["meta-title"] ?? "");
  if (!metaTitle || TITLE_PLACEHOLDER.test(metaTitle)) {
    data.seo.title = "";
    return data;
  }
  const brand = (data.fields?.brand ?? "").trim() || SITE_NAME;
  data.seo.title = brand ? `${metaTitle} | ${brand}` : metaTitle;
  return data;
}

export type PageIdentity = { id?: number; path?: string; slug?: string };

// The builder falls back to a slug lookup when the path matches nothing, so a request for a
// path WordPress does not have can come back with a *different* page that shares the last
// slug (e.g. /mental-health/therapy/trauma-disorder/ptsd returns /mental-health/trauma-disorder/ptsd).
// Rendering that would publish a duplicate of another page at a URL that does not exist.
// meta.slug is the page's own slug and meta.parent its parent's slug ("" at the top level),
// so they must match the requested path's last two segments.
const segmentOf = (s: string) => {
  try {
    return decodeURIComponent(s).toLowerCase();
  } catch {
    return s.toLowerCase();
  }
};

// "https://connectionsoc.com/a/b/" -> "a/b" (decoded, lowercase); null if there is no URL.
const pathOfUrl = (url: string | undefined): string | null => {
  if (!url) return null;
  try {
    return new URL(url).pathname.split("/").filter(Boolean).map(segmentOf).join("/");
  } catch {
    return null;
  }
};

// URL prefixes shared with a custom post type: /staff/<name> is either an "authors" post,
// whose meta.parent is "" because /staff/ is its rewrite base, or a child page of Staff.
const POST_TYPE_BASES = new Set(["staff"]);

function matchesPath(data: BuilderPageData, path: string): boolean {
  let segments = path.split("/").filter(Boolean).map(segmentOf);
  // Paginated archives (/staff/<name>/page/2) are the same post as their first page.
  if (segments.length >= 3 && segments[segments.length - 2] === "page" && /^\d+$/.test(segments[segments.length - 1])) {
    segments = segments.slice(0, -2);
  }
  if (segments.length === 0) return true; // home page
  // The canonical URL carries the page's full path, which is the only thing that tells
  // /mental-health/therapy/trauma-disorder/ptsd apart from /mental-health/trauma-disorder/ptsd
  // (same slug, same parent). Author posts (POST_TYPE_BASES) are checked by slug/parent below.
  const canonicalPath = pathOfUrl(data.seo?.canonical);
  if (canonicalPath !== null && !POST_TYPE_BASES.has(segments[0])) {
    return canonicalPath === segments.join("/");
  }
  if (!data.meta) return true; // nothing to compare
  const slug = segments[segments.length - 1];
  const parent = segments.length > 1 ? segments[segments.length - 2] : "";
  const actualParent = segmentOf(data.meta.parent ?? "");
  const parentOk =
    actualParent === parent || (segments.length === 2 && POST_TYPE_BASES.has(segments[0]) && actualParent === "");
  return segmentOf(data.meta.slug ?? "") === slug && parentOk;
}

// A slug is not unique across a page tree: /location-served/drug-rehab and
// /location-served/usa/drug-rehab share one, and WordPress answers with whichever it orders first.
// Always send the most specific identifier available.
export async function fetchPageData(
  identity: PageIdentity | string,
  options?: { present?: boolean }
): Promise<BuilderPageData | null> {
  const id = typeof identity === "string" ? { slug: identity } : identity;
  const parts: string[] = [];
  if (id.id) parts.push(`id=${id.id}`);
  else if (id.path) parts.push(`path=${encodeURIComponent(id.path)}`);
  // slug always travels too: plugins older than 1.5.0 require it and ignore id/path, so sending
  // only the specific identifier would 400 on every page of a site running an older plugin.
  if (id.slug) parts.push(`slug=${encodeURIComponent(id.slug)}`);
  if (options?.present) parts.push("present=1");
  const query = parts.join("&");
  if (!query) return null;
  // A full build fires thousands of these at WordPress and the odd one stalls. Without a
  // timeout a stalled request holds the page past Next's 180s prerender limit and fails the
  // whole build, so give up after PAGE_TIMEOUT_MS and try once more; on failure the route
  // falls back to its static fields and picks up live data on the next revalidation.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${WORDPRESS_URL}/wp-json/builder/v1/page-data?${query}`, {
        next: { revalidate: REVALIDATE },
        signal: AbortSignal.timeout(PAGE_TIMEOUT_MS),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as BuilderPageData;
      if (id.path && !id.id && !matchesPath(data, id.path)) return null;
      return normaliseSeo(data);
    } catch {
      // timed out or network error: retry once
    }
  }
  return null;
}

export type SectionItem = { href: string; title: string };


const stripTags = (s: string) => s.replace(/<[^>]*>/g, "");

const decodeEntities = (s: string) =>
  s
    .replace(/&#0?39;|&#8217;|&#8216;|&apos;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

const toRelative = (link: string) => {
  try {
    const u = new URL(link);
    return `${u.pathname}${u.search}`;
  } catch {
    return link;
  }
};

const cleanTitle = (raw: string) =>
  decodeEntities(stripTags(raw))
    .replace(/%sitename%/gi, SITE_NAME)
    .replace(/^[\s|\-\u2013\u2014]+/, "")
    .trim();

export async function fetchSectionItems(
  endpoint: string,
  path: string,
  id?: number | null
): Promise<SectionItem[] | null> {
  if (!endpoint) return null;
  const encoded = path.split("/").filter(Boolean).map(encodeURIComponent).join("/");
  let target = endpoint;
  if (target.includes("{path}")) {
    if (!encoded) return null;
    target = target.replace("{path}", encoded);
  }
  if (target.includes("{id}")) {
    if (!id) return null;
    target = target.replace("{id}", String(id));
  }
  if (target.includes("{")) return null;
  try {
    const res = await fetch(`${WORDPRESS_URL}${target}`, {
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(SECTION_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;

    const seen = new Set<string>();
    const items: SectionItem[] = [];
    for (const entry of data as Array<{ link?: string; url?: string; title?: string }>) {
      const link = entry?.link ?? entry?.url;
      if (!link || !entry?.title) continue;
      const href = toRelative(link);
      if (seen.has(href)) continue;
      const title = cleanTitle(entry.title);
      if (!title) continue;
      seen.add(href);
      items.push({ href, title });
    }
    return items.length ? items : null;
  } catch {
    return null;
  }
}

export type BlogPost = {
  id: number;
  href: string;
  title: string;
  image: { src: string; width: number; height: number } | null;
};

type WpBlogPage = {
  id: number;
  link: string;
  title?: { rendered?: string };
  acf?: { h1?: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      media_details?: { width?: number; height?: number };
    }>;
  };
};

const BLOG_QUERY =
  "/wp-json/wp/v2/pages?page_template_type=83,84&order_by=date&order=desc" +
  "&_fields=id,link,title,acf.h1,featured_media,_links,_embedded&_embed=wp:featuredmedia";

// Blog listing: WordPress pages using the blog templates (83, 84), newest first.
// `total` is X-WP-Total, the number of blog pages overall. Returns null on failure.
export async function fetchBlogPosts(
  offset: number,
  perPage: number
): Promise<{ posts: BlogPost[]; total: number } | null> {
  try {
    const res = await fetch(`${WORDPRESS_URL}${BLOG_QUERY}&per_page=${perPage}&offset=${offset}`, {
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(SECTION_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    const posts = (data as WpBlogPage[]).map((page) => {
      const media = page._embedded?.["wp:featuredmedia"]?.[0];
      const title = decodeEntities(stripTags(page.acf?.h1?.trim() || page.title?.rendered || "")).trim();
      return {
        id: page.id,
        href: toRelative(page.link),
        title,
        image: media?.source_url
          ? {
              src: media.source_url,
              width: media.media_details?.width ?? 1200,
              height: media.media_details?.height ?? 800,
            }
          : null,
      };
    });
    return { posts, total: Number(res.headers.get("X-WP-Total")) || posts.length };
  } catch {
    return null;
  }
}
