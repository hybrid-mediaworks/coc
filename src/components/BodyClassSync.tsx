"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Each page sets its WordPress body classes (page-id-*, postid-*,
// elementor-page-*) with an inline <script>. Browsers only run inline scripts
// on a full page load, so after a client-side navigation <body> kept the
// previous page's classes, which breaks CSS keyed on them — e.g. the theme's
// `body:not([class*="elementor-page-"]) .site-main { max-width: 1140px }`
// boxing full-width pages. This re-applies the current page's classes.
const PAGE_CLASS = /(?:^|\s)(?:page-id|postid|elementor-page)-\d+/g;
const SCRIPT_CLASSES = /^document\.body\.className=[\s\S]*\)\+("(?:[^"\\]|\\.)*");?\s*$/;

export default function BodyClassSync() {
  const pathname = usePathname();
  useEffect(() => {
    for (const script of document.querySelectorAll("script:not([src])")) {
      const match = script.textContent?.trim().match(SCRIPT_CLASSES);
      if (!match) continue;
      let classes: string;
      try {
        classes = JSON.parse(match[1]);
      } catch {
        continue;
      }
      document.body.className = document.body.className.replace(PAGE_CLASS, "") + classes;
      return;
    }
  }, [pathname]);
  return null;
}
