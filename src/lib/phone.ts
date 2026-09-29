export type PagePhone = { href: string; label: string };

// The builder fields that carry a page's phone number, most specific first. A value that
// starts with "tel:" is a link target; any other value is display text.
const PHONE_FIELDS = ["tel_phone_call_now", "tel_phone", "phone"] as const;

const TEL = /^tel:/i;
const digitsOf = (value: string) => value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

// The page's CTA phone: `href` from the first "tel:" value, `label` from a display value for
// the same number (so a facility's tel_phone_call_now is never labelled with the site-wide
// `phone`). With no matching display value the label is the tel: number itself; with no tel:
// value at all, the display value becomes both. Null when the page has no phone fields.
export function resolvePagePhone(fields: Record<string, unknown> | null | undefined): PagePhone | null {
  if (!fields) return null;
  const values = PHONE_FIELDS.map((key) => fields[key])
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => digitsOf(v).length >= 7);
  const tel = values.find((v) => TEL.test(v));
  const display = values.filter((v) => !TEL.test(v));
  if (tel) {
    const number = tel.replace(TEL, "").trim();
    const label = display.find((v) => digitsOf(v) === digitsOf(number)) ?? number;
    return { href: toHref(number), label };
  }
  if (display[0]) return { href: toHref(display[0]), label: display[0] };
  return null;
}

// "(657) 315-1723" -> "tel:657-315-1723": a tel: URI keeps only digits, "+" and separators.
const toHref = (number: string) =>
  "tel:" + number.replace(/[^\d+.-]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
