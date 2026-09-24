import type { ComponentType } from "react";

// Dynamic template assignment: binds the builder API's template value to the component
// that renders it, so newly imported pages pick up the right design without a route file.
//
// The API returns `template` (the primary term, e.g. "cro1-geo") and `templates.slugs`
// (every term, e.g. ["cro1-geo", "geo"]). These mirror the WordPress page_template_type
// taxonomy, a closed set maintained in the builder. Adding a template later is one entry
// here plus one wrapper in ./registry/ (component + its stylesheet).
//
// Templates load lazily, so a page only ships the stylesheet of the template it renders.

type TemplateComponent = ComponentType<Record<string, string>>;
type Loader = () => Promise<{ default: TemplateComponent }>;

const TEMPLATES: Record<string, Loader> = {
  cro1: () => import("./registry/Cro1"),
  cro2: () => import("./registry/Cro2"),
  "cro1-geo": () => import("./registry/Cro1Geo"),
  blog: () => import("./registry/Blog"),
  "cro1-blog": () => import("./registry/Blog"),
};

type TemplateInfo = { template?: string; templates?: { slugs?: string[] } };

const normalize = (value: string) => value.trim().toLowerCase();

// The component for a page's template, or null when the page has no template or an
// unregistered one (callers decide the fallback: a route's own component, or a 404).
export async function resolveTemplate(data: TemplateInfo): Promise<TemplateComponent | null> {
  const candidates = [data.template ?? "", ...(data.templates?.slugs ?? [])].map(normalize).filter(Boolean);
  for (const key of candidates) {
    const load = TEMPLATES[key];
    if (load) return (await load()).default;
  }
  if (candidates.length && process.env.NODE_ENV !== "production") {
    console.warn(`[templates] no template registered for ${JSON.stringify(candidates)}; using the route fallback.`);
  }
  return null;
}

type PageData = TemplateInfo & {
  fields: Record<string, string>;
  present?: string[];
  featured_image?: string | false;
  meta?: { createdAt?: string };
};

// The props every template component takes: the builder fields plus the page-level values
// the generated page files pass alongside them.
export function templateProps(data: PageData, path: string): Record<string, string> {
  return {
    ...data.fields,
    __path: path,
    __createdAt: data.meta?.createdAt ?? "",
    __featuredImage: typeof data.featured_image === "string" ? data.featured_image : "",
    __present: (data.present ?? []).join(","),
  };
}
