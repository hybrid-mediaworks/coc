import { fetchSectionItems } from "@/lib/wordpress";
import RelatedCards from "@/components/RelatedCards";

const INTERLINKING_ENDPOINT = "/wp-json/rril/v1/interlinking/{path}";

// The interlinking API addresses pages by path without slashes ("/abc/xyz/"
// -> "abc/xyz"); the front page is "home".
const toInterlinkingPath = (path: string) => path.replace(/^\/+|\/+$/g, "") || "home";

// "Related pages" cards for the current page, fetched from WordPress at render
// time (cached per WORDPRESS_REVALIDATE_SECONDS) so the links ship in the HTML.
// Renders nothing if the API has no entries for the page or is unreachable.
export default async function RelatedPages({ path }: { path?: string }) {
  if (path === undefined) return null;
  const items = await fetchSectionItems(INTERLINKING_ENDPOINT, toInterlinkingPath(path));
  if (!items) return null;
  return <RelatedCards items={items} />;
}
