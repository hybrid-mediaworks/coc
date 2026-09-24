import "@/app/shared/pool-a8ca03f5.css";
import "@/app/shared/pages/f662c53d9b2b.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import MentalHealthAnxietyDisorders from "@/components/templates/MentalHealthAnxietyDisorders";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

const PREFIX = "/mental-health/anxiety-disorders";
const FALLBACK_SLUGS = ["why-do-i-wake-up-anxious","anxiety-and-adhd","how-to-help-someone-with-anxiety","coping-skills-for-anxiety","can-anxiety-make-you-feel-sick","anxiety-and-sleep","gabapentin-for-anxiety","can-anxiety-cause-fever","can-anxiety-cause-shortness-of-breath","breathing-techniques-for-anxiety"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Fmental-health%2Fanxiety-disorders`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK_SLUGS.map((slug) => ({ slug }));
    const pages = (await res.json()) as { slug: string }[];
    return pages.map((p) => ({ slug: p.slug }));
  } catch {
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchPageData(identityFor(slug));
  if (!data) return {};
  return {
    title: data.seo.title || undefined,
    description: data.seo.description || undefined,
    ...(data.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [data] = await Promise.all([
    fetchPageData(identityFor(slug), { present: true }),
  ]);
  if (!data) notFound();
  const Template: ComponentType<Record<string, string>> = MentalHealthAnxietyDisorders;
  const bodyClasses = " page-id-" + data.id + " elementor-page-" + data.id + (data.templates?.ids ?? []).map((n) => " elementor-page-" + n).join("");
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+" + JSON.stringify(bodyClasses) + ";" }} />
      <Template {...data.fields} __present={(data.present ?? []).join(",")} />
    </>
  );
}
