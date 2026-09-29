"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { PagePhone } from "@/lib/phone";

// Phone numbers inside a link's text: "888-255-2112", "(657) 298-1982", "+1 844 759 0999",
// alone or in a label like "Call Now! 888-255-2112". Only the number is replaced, so text
// such as "Call Now" stays as it is.
const PHONE_NUMBER = /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
const hasPhone = (text: string) => new RegExp(PHONE_NUMBER.source).test(text);

const TEL_LINKS = 'a[href^="tel:" i]';

// What each tel: link looked like before any page's number was applied. The header, footer
// and popups outlive navigation, so a page without a number restores these defaults.
const originals = new WeakMap<HTMLAnchorElement, { href: string; texts: Array<[Text, string]> }>();

function phoneTexts(link: HTMLAnchorElement): Text[] {
  const out: Text[] = [];
  const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (hasPhone(node.nodeValue ?? "")) out.push(node as Text);
  }
  return out;
}

function remember(link: HTMLAnchorElement) {
  let saved = originals.get(link);
  if (!saved) {
    saved = { href: link.getAttribute("href") ?? "", texts: phoneTexts(link).map((t) => [t, t.nodeValue ?? ""]) };
    originals.set(link, saved);
  }
  return saved;
}

function apply(link: HTMLAnchorElement, phone: PagePhone | null) {
  const saved = remember(link);
  const href = phone ? phone.href : saved.href;
  if (link.getAttribute("href") !== href) link.setAttribute("href", href);
  for (const [node, text] of saved.texts) {
    if (!node.isConnected) continue;
    const next = phone ? text.replace(PHONE_NUMBER, phone.label) : text;
    if (node.nodeValue !== next) node.nodeValue = next;
  }
}

const applyAll = (root: ParentNode, phone: PagePhone | null) => {
  if (root instanceof HTMLAnchorElement && root.matches(TEL_LINKS)) apply(root, phone);
  for (const link of root.querySelectorAll<HTMLAnchorElement>(TEL_LINKS)) apply(link, phone);
};

const cache = new Map<string, Promise<PagePhone | null>>();
const phoneFor = (path: string) => {
  let pending = cache.get(path);
  if (!pending) {
    pending = fetch(`/api/page-phone/?path=${encodeURIComponent(path)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((body: { href: string | null; label: string | null } | null) =>
        body?.href && body.label ? { href: body.href, label: body.label } : null
      )
      .catch(() => null);
    cache.set(path, pending);
  }
  return pending;
};

// Points every tel: link on the page (header, footer, popups and CTAs) at the page's own
// number from the builder API (tel_phone_call_now / tel_phone / phone): the tel: value goes
// in href and the display value replaces link text that is a phone number. Links added later
// (carousel clones, lazily rendered widgets) get it too. CallTrackingMetrics then re-runs so
// any tracking-number swap applies to the page's number.
export default function DynamicPhones() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let phone: PagePhone | null = null;
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) applyAll(node, phone);
        }
      }
    });

    phoneFor(pathname).then((result) => {
      if (cancelled) return;
      phone = result;
      applyAll(document, phone);
      observer.observe(document.body, { childList: true, subtree: true });
      window.__ctm?.main?.runNow?.(document.body);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
