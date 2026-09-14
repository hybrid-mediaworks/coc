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

      const loadMore = target.closest("#relatedloadMoreBtn");
      if (loadMore instanceof HTMLElement) {
        e.preventDefault();
        const scope = loadMore.closest(".elementor-shortcode") ?? document;
        const cards = Array.from(scope.querySelectorAll(".card")).filter(
          (c): c is HTMLElement => c instanceof HTMLElement
        );
        const hidden = cards.filter((c) => c.style.display === "none");
        const batch = Number(loadMore.dataset.batch) || cards.length - hidden.length || 4;
        loadMore.dataset.batch = String(batch);
        for (const c of hidden.slice(0, batch)) c.style.display = "block";
        if (hidden.length <= batch) loadMore.style.display = "none";
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
