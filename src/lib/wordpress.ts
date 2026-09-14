const WORDPRESS_URL = process.env.WORDPRESS_URL;
if (!WORDPRESS_URL) throw new Error("WORDPRESS_URL is not set");

const REVALIDATE = Number(process.env.WORDPRESS_REVALIDATE_SECONDS ?? "60");

const SECTION_TIMEOUT_MS = Number(process.env.WORDPRESS_SECTION_TIMEOUT_MS ?? "5000");

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
  present: string[];
  meta: { slug: string; parent: string; updatedAt: string; createdAt: string };
};

export type PageIdentity = { id?: number; path?: string; slug?: string };

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
  try {
    const res = await fetch(`${WORDPRESS_URL}/wp-json/builder/v1/page-data?${query}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as BuilderPageData;
  } catch {
    return null;
  }
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
