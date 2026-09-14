// @ts-nocheck
/* eslint-disable */
"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Chrome runtime: re-implement Elementor's JS-driven sticky header (see sticky-header.ts —
// typed + unit-tested there). Type-checking is disabled here because this is generated embedded
// code produced from that function via .toString(), not authored source.
const initStickyHeaders = function initStickyHeaders(doc) {
    const win = doc.defaultView;
    if (!win)
        return [];
    const instances = [];
    // Scope to the header chrome ONLY. Other elements (e.g. a sticky sidebar `.side-bar-area`) also
    // use Elementor sticky but are a different pattern (sticky-within-scroll, not a fixed top bar);
    // fixing them here shatters the page layout. The theme-builder header lives in this wrapper.
    const elements = Array.from(doc.querySelectorAll(".elementor-location-header .elementor-sticky"));
    for (const element of elements) {
        const header = element;
        if (header.getAttribute("data-sticky-init") === "1")
            continue; // idempotent
        if (win.getComputedStyle(header).display === "none")
            continue; // skip breakpoint-hidden variants
        let settings = {};
        try {
            settings = JSON.parse(header.getAttribute("data-settings") || "{}");
        }
        catch {
            settings = {};
        }
        if (settings.sticky !== "top")
            continue; // only the top-sticky header
        const effectsOffset = typeof settings.sticky_effects_offset === "number" ? settings.sticky_effects_offset : 90;
        header.setAttribute("data-sticky-init", "1");
        // A spacer holds the header's slot in normal flow so fixing the header doesn't jump content.
        const spacer = doc.createElement("div");
        spacer.className = "elementor-sticky__spacer";
        spacer.setAttribute("aria-hidden", "true");
        if (header.parentNode)
            header.parentNode.insertBefore(spacer, header);
        const update = () => {
            const scrollY = win.scrollY || win.pageYOffset || 0;
            const flowWidth = spacer.offsetWidth; // the in-flow spacer reports the header's real width
            const headerHeight = header.offsetHeight;
            header.style.position = "fixed";
            header.style.top = "0px";
            header.style.marginTop = "0px";
            header.style.marginBottom = "0px";
            if (flowWidth > 0)
                header.style.width = `${flowWidth}px`;
            if (headerHeight > 0)
                spacer.style.height = `${headerHeight}px`;
            if (scrollY >= effectsOffset)
                header.classList.add("elementor-sticky--effects");
            else
                header.classList.remove("elementor-sticky--effects");
        };
        const onScrollOrResize = () => update();
        win.addEventListener("scroll", onScrollOrResize, { passive: true });
        win.addEventListener("resize", onScrollOrResize);
        update();
        const destroy = () => {
            win.removeEventListener("scroll", onScrollOrResize);
            win.removeEventListener("resize", onScrollOrResize);
            header.style.position = "";
            header.style.top = "";
            header.style.width = "";
            header.style.marginTop = "";
            header.style.marginBottom = "";
            header.removeAttribute("data-sticky-init");
            if (spacer.parentNode)
                spacer.parentNode.removeChild(spacer);
        };
        instances.push({ header, spacer, update, destroy });
    }
    return instances;
};

export default function StickyHeader() {
  const pathname = usePathname();
  useEffect(() => {
    const instances = initStickyHeaders(document);
    return () => {
      instances.forEach((i) => i.destroy());
    };
  }, [pathname]);
  return null;
}
