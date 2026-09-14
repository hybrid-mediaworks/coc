// @ts-nocheck
/* eslint-disable */
"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Derived UI: rebuild each Elementor TOC from the page's rendered headings. Generated verbatim
// from apps/api/.../toc-regenerate.ts (typed + unit-tested there); type-checking is disabled here
// because this is embedded generated code, not authored source.
const regenerate = function regenerateTableOfContents(doc) {
    const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const widgets = doc.querySelectorAll('[data-widget_type="table-of-contents.default"]');
    widgets.forEach((widget) => {
        let settings = {};
        try {
            settings = JSON.parse(widget.getAttribute("data-settings") || "{}");
        }
        catch {
            settings = {};
        }
        const tags = Array.isArray(settings.headings_by_tags) && settings.headings_by_tags.length > 0
            ? settings.headings_by_tags
            : ["h2"];
        const containerSel = typeof settings.container === "string" && settings.container.trim() !== ""
            ? settings.container
            : ".content-area";
        const container = doc.querySelector(containerSel);
        const body = widget.querySelector(".elementor-toc__body");
        if (!container || !body)
            return;
        const headings = Array.from(container.querySelectorAll(tags.join(","))).filter((h) => (h.textContent || "").trim().length > 0);
        // A TOC with nothing to link to is noise: the shared component bakes the widget from the
        // representative page, so a page whose headings are absent (or empty after data binding) would
        // otherwise show an empty box or a "no headings" notice. Hide the whole widget instead.
        const host = widget.closest(".elementor-element") || widget;
        if (headings.length === 0) {
            host.setAttribute("hidden", "");
            host.setAttribute("data-toc-empty", "true");
            return;
        }
        if (host.hasAttribute("data-toc-empty")) {
            host.removeAttribute("hidden");
            host.removeAttribute("data-toc-empty");
        }
        // Assign the expected anchor ids by document order (idempotent — only sets when different).
        headings.forEach((heading, i) => {
            const id = `elementor-toc__heading-anchor-${i}`;
            if (heading.id !== id)
                heading.id = id;
        });
        const items = headings
            .map((heading, i) => '<li class="elementor-toc__list-item">' +
            '<div class="elementor-toc__list-item-text-wrapper">' +
            '<a class="elementor-toc__list-item-text elementor-toc__top-level" ' +
            'href="#elementor-toc__heading-anchor-' +
            i +
            '">' +
            escapeHtml((heading.textContent || "").trim()) +
            "</a></div></li>")
            .join("");
        const next = `<ol class="elementor-toc__list-wrapper">${items}</ol>`;
        if (body.innerHTML !== next)
            body.innerHTML = next;
    });
};

export default function TableOfContents() {
  const pathname = usePathname();
  useEffect(() => {
    regenerate(document);
  }, [pathname]);
  return null;
}
