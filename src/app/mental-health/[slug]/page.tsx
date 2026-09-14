import "@/app/shared/pool-a8ca03f5.css";
import "./page.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import MentalHealth from "@/components/templates/MentalHealth";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

const PREFIX = "/mental-health";
const FALLBACK_SLUGS = ["therapy","music-and-mental-health","impulsive-thoughts","how-to-improve-self-esteem","faq","mental-health-advocacy","mental-health-important-talk-about","time-off-mental-health","bad-mental-health-day","blunted-affect","psychological-health","mindfulness","causes-poor-mental-health","mental-health-stigma","emotional-triggers","holistic-mental-health-treatment","mental-illness-and-family","grief-counseling","liminal-spaces","art-and-mental-health","community-and-mental-health","self-worth","stress-management","social-media-and-mental-health","midlife-crisis","mental-health-intervention","how-bullying-affect-mental-health","journaling-mental-health","check-my-mental-health","exercise-and-mental-health","holidays-and-mental-health","mental-illness-be-cured","brain-fog","aging-and-mental-health","acts-of-self-care","improve-your-mental-health","stress","self-love-affirmations","feeling-lost-in-life","blog","burnout","evolution-mental-health-treatment"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Fmental-health`,
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
  const Template: ComponentType<Record<string, string>> = MentalHealth;
  const bodyClasses = " page-id-" + data.id + " elementor-page-" + data.id + (data.templates?.ids ?? []).map((n) => " elementor-page-" + n).join("");
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+" + JSON.stringify(bodyClasses) + ";" }} />
      <Template {...data.fields} __present={(data.present ?? []).join(",")} />
    </>
  );
}
