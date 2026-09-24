// WordPress dates arrive as ISO 8601 in UTC ("2025-03-21T17:08:34+00:00").
// Show them in the site's timezone so a late-evening post keeps its local day.
const SITE_TIMEZONE = "America/Los_Angeles";

const LONG_DATE = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: SITE_TIMEZONE,
});

// "2025-03-21T17:08:34+00:00" -> "March 21, 2025"; "" for missing/invalid input.
export function formatLongDate(iso: string | undefined): string {
  if (!iso) return "";
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? "" : LONG_DATE.format(date);
}
