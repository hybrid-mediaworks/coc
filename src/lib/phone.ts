export type PagePhone = { href: string; label: string };

const TEL = /^tel:/i;
const digitsOf = (value: string) => value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

// The page's CTA phone, used by the header and every tel: button: link from `tel_phone`, label
// from `phone`, as given. A page without `tel_phone` (a facility page) falls back to its own
// `tel_phone_call_now` for both, then to `phone`. Null when the page has none of them.
export function resolvePagePhone(fields: Record<string, unknown> | null | undefined): PagePhone | null {
  const field = (key: string) => {
    const value = fields?.[key];
    return typeof value === "string" && digitsOf(value).length >= 7 ? value.replace(TEL, "").trim() : null;
  };
  const tel = field("tel_phone");
  const label = field("phone");
  if (tel) return { href: toHref(tel), label: label ?? tel };
  const callNow = field("tel_phone_call_now");
  if (callNow) return { href: toHref(callNow), label: callNow };
  if (label) return { href: toHref(label), label };
  return null;
}

// "(657) 315-1723" -> "tel:657-315-1723": a tel: URI keeps only digits, "+" and separators.
const toHref = (number: string) =>
  "tel:" + number.replace(/[^\d+.-]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
