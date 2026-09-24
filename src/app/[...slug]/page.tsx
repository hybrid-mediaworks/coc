import "@/app/shared/pool-a8ca03f5.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPageData } from "@/lib/wordpress";
import { resolveTemplate, templateProps } from "@/components/templates/registry";

// Catch-all for builder pages that have no route of their own: pages imported into
// WordPress after this site was generated (new geo, national or blog pages, at any depth).
// The design comes from the page's builder template via the registry, so nothing needs
// adding here when editors publish more pages.
//
// Next resolves static and more specific dynamic routes first, so every existing page keeps
// its own route and only unmatched paths land here. Nothing is prerendered: a new page
// renders on its first request and is then cached like the rest of the site (ISR).
// A path WordPress does not know, or a page with no registered template, is a 404.

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

const pathOf = (slug: string[]) => "/" + slug.map(decodeURIComponent).join("/");

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchPageData({ path: pathOf(slug), slug: slug[slug.length - 1] });
  if (!data) return {};
  return {
    title: data.seo.title || undefined,
    description: data.seo.description || undefined,
    ...(data.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = pathOf(slug);
  const data = await fetchPageData({ path, slug: slug[slug.length - 1] }, { present: true });
  if (!data) notFound();
  const Template = await resolveTemplate(data);
  if (!Template) notFound();
  const bodyClasses = ` page-id-${data.id} elementor-page-${data.id}`;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+" + JSON.stringify(bodyClasses) + ";" }} />
      <Template {...templateProps(data, path)} />
    </>
  );
}
