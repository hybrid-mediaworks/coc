"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { SwiperOptions } from "swiper/types";

const initialized = new WeakSet<Element>();

function toCount(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function toSpacing(value: unknown, fallback: number): number {
  const size = (value as { size?: unknown } | undefined)?.size;
  const n = size === "" || size == null ? NaN : Number(size);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

// Swiper 11's loop mode needs at least twice as many slides as are visible at
// once; with fewer it silently locks (no drag, no autoplay). Elementor's own
// Swiper 8 cloned slides for loop mode, so carousels like "8 slides, 8 per
// view" were built to rely on that. Clone copies until there are enough.
// Returns the real slide count when clones were added, else 0.
function fillLoopSlides(wrapper: HTMLElement, needed: number): number {
  const originals = Array.from(wrapper.children).filter(
    (c): c is HTMLElement => c instanceof HTMLElement && c.classList.contains("swiper-slide")
  );
  if (originals.length === 0 || originals.length >= needed) return 0;
  for (let i = originals.length; i < needed; i++) {
    const clone = originals[i % originals.length].cloneNode(true) as HTMLElement;
    clone.classList.add("swiper-slide-duplicate");
    clone.setAttribute("aria-hidden", "true");
    clone.removeAttribute("id");
    for (const node of clone.querySelectorAll("[id]")) node.removeAttribute("id");
    for (const node of clone.querySelectorAll("a, button, input, select, textarea, [tabindex]")) {
      node.setAttribute("tabindex", "-1");
    }
    wrapper.appendChild(clone);
  }
  return originals.length;
}

export default function Carousels() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    const containers = Array.from(
      document.querySelectorAll(".swiper, .swiper-container")
    ).filter((el) => !initialized.has(el));
    if (containers.length === 0) return;
    (async () => {
      const [{ default: Swiper }, { Navigation, Pagination, Autoplay }] = await Promise.all([
        import("swiper"),
        import("swiper/modules"),
      ]);
      if (cancelled) return;
      for (const el of containers) {
        if (!(el instanceof HTMLElement) || initialized.has(el)) continue;
        initialized.add(el);
        const wrapper = el.querySelector(".swiper-wrapper");
        if (wrapper instanceof HTMLElement) {
          wrapper.style.transform = "";
          wrapper.style.transitionDuration = "";
        }
        const widget = el.closest("[data-settings]");
        let settings: Record<string, unknown> = {};
        try {
          settings = JSON.parse(widget?.getAttribute("data-settings") ?? "{}");
        } catch {
          settings = {};
        }
        // Elementor omits settings left at their defaults; these mirror its
        // carousel handler (desktop 3, tablet 2 unless desktop shows 1, mobile 1).
        const desktop = toCount(settings.slides_to_show, 3);
        const tablet = toCount(settings.slides_to_show_tablet, desktop === 1 ? 1 : 2);
        const mobile = toCount(settings.slides_to_show_mobile, 1);
        const gapDesktop = toSpacing(settings.image_spacing_custom, 0);
        const gapTablet = toSpacing(settings.image_spacing_custom_tablet, gapDesktop);
        const gapMobile = toSpacing(settings.image_spacing_custom_mobile, gapTablet);
        const loop = settings.infinite === "yes" || settings.loop === "yes";
        const realCount =
          loop && wrapper instanceof HTMLElement
            ? fillLoopSlides(wrapper, Math.max(desktop, tablet, mobile) * 2)
            : 0;
        const options: SwiperOptions = {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: mobile,
          spaceBetween: gapMobile,
          breakpoints: {
            768: { slidesPerView: tablet, spaceBetween: gapTablet },
            1025: { slidesPerView: desktop, spaceBetween: gapDesktop },
          },
          loop,
          speed: toCount(settings.speed, 500),
          autoplay:
            settings.autoplay === "yes"
              ? { delay: toCount(settings.autoplay_speed, 5000) }
              : false,
        };
        const scope = widget ?? el;
        const nextEl = scope.querySelector(".elementor-swiper-button-next, .swiper-button-next");
        const prevEl = scope.querySelector(".elementor-swiper-button-prev, .swiper-button-prev");
        if (nextEl instanceof HTMLElement && prevEl instanceof HTMLElement) {
          options.navigation = { nextEl, prevEl };
        }
        const paginationEl = scope.querySelector(".swiper-pagination");
        if (paginationEl instanceof HTMLElement) {
          options.pagination = realCount
            ? {
                // Clones would each get a bullet; draw one per real slide instead.
                el: paginationEl,
                type: "custom",
                renderCustom: (swiper) => {
                  const active = swiper.realIndex % realCount;
                  return Array.from({ length: realCount }, (_, i) =>
                    `<span class="swiper-pagination-bullet${i === active ? " swiper-pagination-bullet-active" : ""}" data-slide="${i}" role="button" tabindex="0" aria-label="Go to slide ${i + 1}"></span>`
                  ).join("");
                },
              }
            : { el: paginationEl, clickable: true };
        }
        const swiper = new Swiper(el, options);
        if (realCount && paginationEl instanceof HTMLElement) {
          paginationEl.addEventListener("click", (e) => {
            const bullet = (e.target as Element).closest("[data-slide]");
            if (bullet) swiper.slideToLoop(Number(bullet.getAttribute("data-slide")));
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pathname]);
  return null;
}
