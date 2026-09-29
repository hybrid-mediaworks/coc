import "@/app/shared/pages/32ce57296007.css";
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Page55388 from "@/components/documents/Page55388";
import { fetchPageData, fetchStaffPost } from "@/lib/wordpress";
import { staffPageScripts } from "./pageScripts";

// Every staff member's page (WordPress "authors" posts under /staff/), rendered with the
// author template 55388. Name, role, photo, LinkedIn and bio all come from the builder API,
// so a new staff member needs no route of their own. The blog feed below the bio paginates
// with ?page=N, like /mental-health/blog.

export const revalidate = 60;

const identityOf = (slug: string) => {
  const decoded = decodeURIComponent(slug);
  return { path: `/staff/${decoded}`, slug: decoded };
};

// The builder answers an unknown path with any page sharing the slug, and the path check
// in fetchPageData lets top-level pages through under /staff/ (author posts report no parent).
// A staff post's canonical URL always sits under /staff/, so /staff/about-us stays a 404.
const isStaffPage = (canonical: string | undefined, path: string) => {
  if (!canonical) return true;
  try {
    return new URL(canonical).pathname.replace(/\/+$/, "").toLowerCase() === path.toLowerCase();
  } catch {
    return false;
  }
};

// WordPress's own title, used when the SEO title is blank ("Alijah Lott - Connections Mental Health").
const fallbackTitle = (fields: Record<string, string>) => {
  const name = (fields.h1 || `${fields.first_name ?? ""} ${fields.last_name ?? ""}`).replace(/\s+/g, " ").trim();
  const brand = fields.brand || "Connections Mental Health";
  return name ? `${name} - ${brand}` : brand;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const identity = identityOf(slug);
  const data = await fetchPageData(identity);
  if (!data || !isStaffPage(data.seo?.canonical, identity.path)) return {};
  return {
    title: data.seo.title || fallbackTitle(data.fields),
    description: data.seo.description || "",
    ...(data.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ slug }, { page }] = await Promise.all([params, searchParams]);
  const identity = identityOf(slug);
  const [data, staffPost] = await Promise.all([fetchPageData(identity, { present: true }), fetchStaffPost(identity.slug)]);
  if (!data || !isStaffPage(data.seo?.canonical, identity.path)) notFound();
  const postId = staffPost?.id ?? data.id;
  // The headshot is the authors post's featured image, as on the live site; the builder's
  // featured image is only a fallback (for some staff it is a landscape photo of another post).
  const photo = staffPost?.image;
  const featuredImage = photo?.src || data.fields.featured_image || (typeof data.featured_image === "string" ? data.featured_image : "");
  const scripts = staffPageScripts({
    id: postId,
    title: fallbackTitle(data.fields),
    featuredImage,
    url: `https://connectionsoc.com${identity.path}/`,
  });
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+" + JSON.stringify(` postid-${postId} elementor-page-55388`) + ";" }} />
      <Page55388
        {...data.fields}
        featured_image={featuredImage}
        __imageId={photo ? String(photo.id) : ""}
        __imageWidth={photo ? String(photo.width) : ""}
        __imageHeight={photo ? String(photo.height) : ""}
        __path={identity.path}
        __page={page ?? ""}
        __present={(data.present ?? []).join(",")}
      />
      <Script id="page-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scripts }} />
    </>
  );
}
