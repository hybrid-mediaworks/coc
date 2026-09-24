import "@/app/shared/pool-a8ca03f5.css";
import "@/app/shared/pages/f662c53d9b2b.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import MentalHealthMoodDisordersDepression from "@/components/templates/MentalHealthMoodDisordersDepression";
import { fetchPageData } from "@/lib/wordpress";
import { resolveTemplate, templateProps } from "@/components/templates/registry";

export const revalidate = 60;
export const dynamicParams = true;

const PREFIX = "/mental-health/mood-disorders/depression";
const FALLBACK_SLUGS = ["passive-suicidal-ideation","childhood-trauma-and-depression","joking-about-suicide","loneliness-epidemic","postpartum-depression","self-hate","depression-and-substance-abuse","feeling-numb-emotionally","irritability-and-depression","mindfulness-exercises","depression-after-death-parent","depression-affects-daily-life","how-to-help-someone-with-depression","high-functioning-depression","does-depression-go-away","crippling-depression","depression-and-sleep","can-depression-make-you-sick","can-adderall-cause-depression","anxiety-and-depression","adhd-and-depression","job-making-me-depressed","stages-of-depression","depression-in-women","i-wish-i-was-dead","depression-headache"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Fmental-health%2Fmood-disorders%2Fdepression`,
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
  // The builder's template wins when the page has one; otherwise this route's own design.
  const Template: ComponentType<Record<string, string>> = (await resolveTemplate(data)) ?? MentalHealthMoodDisordersDepression;
  const bodyClasses = " page-id-" + data.id + " elementor-page-" + data.id + (data.templates?.ids ?? []).map((n) => " elementor-page-" + n).join("");
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+" + JSON.stringify(bodyClasses) + ";" }} />
      <Template {...templateProps(data, identityFor(slug).path)} />
    </>
  );
}
