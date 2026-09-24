"use client";
import { useEffect } from "react";

const THEME_OWNS_MEGA_MENU = false;
const POPUP_ANIMATION_NAMES: string[] = ["fadeInLeft"];
const POPUP_ANIMATION_DURATION_FALLBACK = 1.25;

const popupDuration = (modal: HTMLElement) =>
  Number(modal.getAttribute("data-animation-duration")) || POPUP_ANIMATION_DURATION_FALLBACK;

const animatePopup = (modal: HTMLElement, name: string | null, reverse: boolean) => {
  const content = modal.querySelector(".dialog-widget-content");
  if (!name || !(content instanceof HTMLElement)) return null;
  content.classList.remove("animated", "reverse");
  for (const n of POPUP_ANIMATION_NAMES) content.classList.remove(n);
  void content.offsetWidth;
  content.style.animationDuration = popupDuration(modal) + "s";
  content.classList.add("animated", name);
  if (reverse) content.classList.add("reverse");
  return content;
};

const openPopup = (modal: HTMLElement) => {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  animatePopup(modal, modal.getAttribute("data-entrance-animation"), false);
};

const closePopup = (modal: HTMLElement) => {
  modal.setAttribute("aria-hidden", "true");
  const content = animatePopup(modal, modal.getAttribute("data-exit-animation"), true);
  if (!content) {
    modal.style.display = "none";
    return;
  }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    content.removeEventListener("animationend", finish);
    modal.style.display = "none";
    content.classList.remove("animated", "reverse");
    for (const n of POPUP_ANIMATION_NAMES) content.classList.remove(n);
  };
  content.addEventListener("animationend", finish);
  window.setTimeout(finish, popupDuration(modal) * 1000 + 100);
};

// Matches the n_accordion_animation_duration Elementor exports for every accordion.
const ACCORDION_DURATION = 400;
const accordionAnimations = new WeakMap<HTMLElement, Animation>();

// <details> accordions (Elementor nested accordion, rich-text FAQs, location
// lists). The <details> element itself is animated between its summary-only
// height and its full height, so it works whatever the panel markup is. The
// data-state attribute tracks intent, since `open` stays set until a closing
// slide finishes.
const isDetailsOpen = (item: HTMLDetailsElement) =>
  item.dataset.state ? item.dataset.state === "open" : item.open;

// Accordions styled with a ::details-content transition (e.g. the .hmga
// location lists) already slide natively and use `name` for exclusivity.
const hasNativeDetailsAnimation = (item: HTMLDetailsElement) => {
  const durations = getComputedStyle(item, "::details-content").transitionDuration;
  return durations.split(",").some((d) => parseFloat(d) > 0);
};

const closedDetailsHeight =(item: HTMLDetailsElement) => {
  const summary = item.querySelector(":scope > summary");
  const cs = getComputedStyle(item);
  let height =
    parseFloat(cs.paddingTop) +
    parseFloat(cs.paddingBottom) +
    parseFloat(cs.borderTopWidth) +
    parseFloat(cs.borderBottomWidth);
  if (summary) {
    const ss = getComputedStyle(summary);
    height +=
      summary.getBoundingClientRect().height + parseFloat(ss.marginTop) + parseFloat(ss.marginBottom);
  }
  return height + "px";
};

const setDetailsOpen = (item: HTMLDetailsElement, open: boolean) => {
  item.dataset.state = open ? "open" : "closed";
  item.querySelector(":scope > summary")?.setAttribute("aria-expanded", String(open));
  const running = accordionAnimations.get(item);
  const from = running || !open ? item.getBoundingClientRect().height + "px" : closedDetailsHeight(item);
  if (open) item.open = true;
  running?.cancel();
  const to = open ? item.getBoundingClientRect().height + "px" : closedDetailsHeight(item);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animation = item.animate(
    [
      { height: from, boxSizing: "border-box", overflow: "hidden" },
      { height: to, boxSizing: "border-box", overflow: "hidden" },
    ],
    { duration: reduceMotion ? 0 : ACCORDION_DURATION, easing: "ease-in-out" }
  );
  accordionAnimations.set(item, animation);
  animation.onfinish = () => {
    accordionAnimations.delete(item);
    if (!open) item.open = false;
  };
};

// Essential Addons advanced accordion (.eael-adv-accordion): each item is a
// header + a content panel shown via the `active` class (display:block). The
// first item ships as `active-default`, which base.css styles as open; the
// plugin's JS normally swaps it for `active`, so it is folded in on first use.
const isEaelOpen = (header: Element) =>
  header.classList.contains("active") || header.classList.contains("active-default");

const setEaelOpen = (header: Element, open: boolean) => {
  const content = header.parentElement?.querySelector(":scope > .eael-accordion-content");
  const apply = (on: boolean) => {
    for (const el of [header, content]) {
      if (!el) continue;
      el.classList.remove("active-default");
      el.classList.toggle("active", on);
    }
  };
  header.setAttribute("aria-expanded", String(open));
  if (!(content instanceof HTMLElement)) {
    apply(open);
    return;
  }
  const running = accordionAnimations.get(content);
  const measure = () => {
    const cs = getComputedStyle(content);
    return { height: content.getBoundingClientRect().height + "px", paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom };
  };
  const collapsed = { height: "0px", paddingTop: "0px", paddingBottom: "0px" };
  const from = running || !open ? measure() : collapsed;
  apply(true); // keep the panel displayed while it slides
  running?.cancel();
  const to = open ? measure() : collapsed;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animation = content.animate(
    [
      { ...from, overflow: "hidden" },
      { ...to, overflow: "hidden" },
    ],
    { duration: reduceMotion ? 0 : ACCORDION_DURATION, easing: "ease-in-out" }
  );
  accordionAnimations.set(content, animation);
  animation.onfinish = () => {
    accordionAnimations.delete(content);
    if (!open) apply(false);
  };
};

export default function WidgetInteractions() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      if (!THEME_OWNS_MEGA_MENU && !target.closest(".has-mega-menu")) {
        for (const openItem of document.querySelectorAll(".has-mega-menu.is-open")) {
          openItem.classList.remove("is-open");
          openItem.querySelector("a[aria-haspopup]")?.setAttribute("aria-expanded", "false");
        }
      }

      const actionLink = target.closest('a[href^="#elementor-action"]');
      if (actionLink) {
        e.preventDefault();
        const href = decodeURIComponent(actionLink.getAttribute("href") || "");
        const isClose = href.indexOf("popup:close") !== -1;
        const settingsMatch = href.match(/settings=([^&]+)/);
        let popupId = "";
        if (settingsMatch) {
          try {
            popupId = String(JSON.parse(atob(settingsMatch[1])).id || "");
          } catch {}
        }
        const modal = popupId
          ? document.getElementById("elementor-popup-modal-" + popupId)
          : actionLink.closest(".elementor-popup-modal");
        if (modal instanceof HTMLElement) {
          if (isClose) closePopup(modal);
          else openPopup(modal);
        }
        return;
      }

      const closeButton = target.closest(".dialog-close-button");
      if (closeButton) {
        const modal = closeButton.closest(".elementor-popup-modal");
        if (modal instanceof HTMLElement) closePopup(modal);
        return;
      }

      const backdrop = target.closest(".elementor-popup-modal");
      if (backdrop instanceof HTMLElement && !target.closest(".dialog-widget-content")) {
        closePopup(backdrop);
        return;
      }

      const megaLink = THEME_OWNS_MEGA_MENU ? null : target.closest('a[href="#"]');
      const megaItem =
        megaLink && megaLink.parentElement?.classList.contains("has-mega-menu")
          ? megaLink.parentElement
          : null;
      if (megaLink && megaItem) {
        e.preventDefault();
        const open = !megaItem.classList.contains("is-open");
        for (const other of document.querySelectorAll(".has-mega-menu.is-open")) {
          if (other !== megaItem) {
            other.classList.remove("is-open");
            other.querySelector("[aria-haspopup]")?.setAttribute("aria-expanded", "false");
          }
        }
        megaItem.classList.toggle("is-open", open);
        megaLink.setAttribute("aria-expanded", String(open));
        return;
      }

      const menuToggle = target.closest(".elementor-menu-toggle");
      if (menuToggle) {
        const active = menuToggle.classList.toggle("elementor-active");
        menuToggle.setAttribute("aria-expanded", String(active));
        const widget = menuToggle.closest(".elementor-widget-nav-menu") ?? menuToggle.parentElement;
        const dropdown = widget?.querySelector(".elementor-nav-menu--dropdown");
        if (dropdown instanceof HTMLElement) {
          dropdown.classList.toggle("elementor-active", active);
          dropdown.setAttribute("aria-hidden", String(!active));
          dropdown.style.display = active ? "block" : "none";
        }
        return;
      }

      const subLink = target.closest(".elementor-nav-menu--dropdown li.menu-item-has-children > a");
      if (subLink) {
        const href = subLink.getAttribute("href") ?? "";
        const onArrow = !!target.closest(".sub-arrow");
        if (onArrow || href === "" || href === "#") {
          e.preventDefault();
          const open = subLink.classList.toggle("elementor-active");
          const sub = subLink.parentElement?.querySelector(":scope > ul");
          if (sub instanceof HTMLElement) sub.style.display = open ? "block" : "none";
          return;
        }
      }

      const eaelHeader = target.closest(".eael-adv-accordion .eael-accordion-header");
      if (eaelHeader) {
        e.preventDefault();
        const open = !isEaelOpen(eaelHeader);
        const accordion = eaelHeader.closest(".eael-adv-accordion");
        // One item open at a time unless the widget is explicitly a toggle group.
        if (open && accordion?.getAttribute("data-accordion-type") !== "toggle") {
          for (const other of accordion?.querySelectorAll(".eael-accordion-header") ?? []) {
            if (other !== eaelHeader && other.closest(".eael-adv-accordion") === accordion && isEaelOpen(other)) {
              setEaelOpen(other, false);
            }
          }
        }
        setEaelOpen(eaelHeader, open);
        return;
      }

      const detailsSummary = target.closest("details > summary");
      const detailsItem = detailsSummary?.parentElement;
      if (detailsItem instanceof HTMLDetailsElement && !hasNativeDetailsAnimation(detailsItem)) {
        e.preventDefault();
        const open = !isDetailsOpen(detailsItem);
        const siblings = Array.from(
          detailsItem.parentElement?.querySelectorAll(":scope > details") ?? [detailsItem]
        ).filter((d): d is HTMLDetailsElement => d instanceof HTMLDetailsElement);
        for (const d of siblings) {
          // A shared `name` makes the browser close siblings instantly, which
          // would skip their closing slide; exclusivity is handled here instead.
          d.removeAttribute("name");
          if (open && d !== detailsItem && isDetailsOpen(d)) setDetailsOpen(d, false);
        }
        setDetailsOpen(detailsItem, open);
        return;
      }

      const accTitle = target.closest(
        ".elementor-accordion .elementor-tab-title, .elementor-toggle .elementor-tab-title"
      );
      if (accTitle) {
        e.preventDefault();
        const wasActive = accTitle.classList.contains("elementor-active");
        const accordion = accTitle.closest(".elementor-accordion");
        if (accordion && !wasActive) {
          for (const t of accordion.querySelectorAll(".elementor-tab-title.elementor-active")) {
            t.classList.remove("elementor-active");
            t.setAttribute("aria-expanded", "false");
          }
          for (const c of accordion.querySelectorAll(".elementor-tab-content")) {
            if (c instanceof HTMLElement) c.style.display = "none";
          }
        }
        accTitle.classList.toggle("elementor-active", !wasActive);
        accTitle.setAttribute("aria-expanded", String(!wasActive));
        const content = accTitle.parentElement?.querySelector(".elementor-tab-content");
        if (content instanceof HTMLElement) content.style.display = wasActive ? "none" : "block";
        return;
      }

      const tabTitle = target.closest(".elementor-tabs .elementor-tab-title");
      if (tabTitle) {
        e.preventDefault();
        const tabs = tabTitle.closest(".elementor-tabs");
        const idx = tabTitle.getAttribute("data-tab");
        if (!tabs || !idx) return;
        for (const t of tabs.querySelectorAll(".elementor-tab-title")) {
          const on = t.getAttribute("data-tab") === idx;
          t.classList.toggle("elementor-active", on);
          t.setAttribute("aria-expanded", String(on));
        }
        for (const c of tabs.querySelectorAll(".elementor-tab-content")) {
          if (!(c instanceof HTMLElement)) continue;
          const on = c.getAttribute("data-tab") === idx;
          c.classList.toggle("elementor-active", on);
          c.style.display = on ? "block" : "none";
        }
        return;
      }

      const ariaTab = target.closest('[role="tab"][aria-controls]');
      if (ariaTab) {
        e.preventDefault();
        const nTabs = ariaTab.closest(".e-n-tabs");
        if (nTabs) nTabs.classList.add("e-activated");
        const tablist = ariaTab.closest('[role="tablist"]') ?? ariaTab.parentElement;
        const tabs = tablist
          ? Array.from(tablist.querySelectorAll('[role="tab"][aria-controls]'))
          : [ariaTab];
        for (const tab of tabs) {
          const selected = tab === ariaTab;
          tab.setAttribute("aria-selected", String(selected));
          tab.setAttribute("tabindex", selected ? "0" : "-1");
          tab.classList.toggle("is-active", selected);
          const panel = document.getElementById(tab.getAttribute("aria-controls") ?? "");
          if (panel) {
            panel.classList.toggle("e-active", selected);
            panel.classList.toggle("is-active", selected);
          }
        }
        return;
      }

      const lightboxLink = target.closest("a[data-elementor-open-lightbox]");
      if (lightboxLink) {
        const mode = lightboxLink.getAttribute("data-elementor-open-lightbox");
        const href = lightboxLink.getAttribute("href") ?? "";
        const isImage = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i.test(href);
        if (mode !== "no" && isImage) {
          e.preventDefault();
          const overlay = document.createElement("div");
          overlay.style.cssText =
            "position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:zoom-out";
          const img = document.createElement("img");
          img.src = href;
          img.alt = "";
          img.style.cssText = "max-width:90vw;max-height:90vh;object-fit:contain";
          overlay.appendChild(img);
          const onKey = (ev: KeyboardEvent) => {
            if (ev.key === "Escape") close();
          };
          const close = () => {
            overlay.remove();
            document.removeEventListener("keydown", onKey);
          };
          overlay.addEventListener("click", close);
          document.addEventListener("keydown", onKey);
          document.body.appendChild(overlay);
        }
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;
      for (const sub of document.querySelectorAll(
        ".elementor-nav-menu--main li.menu-item-has-children > ul"
      )) {
        if (!(sub instanceof HTMLElement)) continue;
        const li = sub.parentElement;
        if (!li) continue;
        if (li.contains(target)) {
          const nested = !!li.parentElement?.closest("li.menu-item-has-children");
          sub.style.display = "block";
          sub.style.position = "absolute";
          sub.style.zIndex = "9999";
          sub.style.top = nested ? "0" : "100%";
          sub.style.left = nested ? "100%" : "0";
        } else {
          sub.style.display = "none";
        }
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      for (const m of document.querySelectorAll(".elementor-popup-modal")) {
        if (m instanceof HTMLElement && m.style.display !== "none") closePopup(m);
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
