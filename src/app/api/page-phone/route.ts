import { fetchPageData } from "@/lib/wordpress";
import { resolvePagePhone } from "@/lib/phone";

// The CTA phone number for a page, from its builder fields (see resolvePagePhone). Read by
// DynamicPhones, which applies it to the header, footer and every tel: link on the page.
// GET /api/page-phone/?path=/facility/some-slug/  ->  { href, label } | { href: null }
export async function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("path") ?? "";
  const path = "/" + raw.split("/").filter(Boolean).join("/");
  const segments = path.split("/").filter(Boolean);
  const data = await fetchPageData({ path, slug: segments[segments.length - 1] ?? "" });
  const phone = resolvePagePhone(data?.fields);
  return Response.json(phone ?? { href: null, label: null }, {
    // WordPress data is revalidated every 60s server-side; let browsers and the CDN reuse it too.
    headers: { "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300" },
  });
}
