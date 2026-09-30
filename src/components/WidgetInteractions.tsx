"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

// Elementor's "prevent page scroll" popup setting (data-prevent-scroll). Locked on <html>:
// the layout's body-style-guard clears overflow set on <body> before the visitor has clicked.
const lockScroll = (modal: HTMLElement, lock: boolean) => {
  if (modal.hasAttribute("data-prevent-scroll")) document.documentElement.style.overflow = lock ? "hidden" : "";
};

const openPopup = (modal: HTMLElement) => {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  lockScroll(modal, true);
  animatePopup(modal, modal.getAttribute("data-entrance-animation"), false);
};

// Elementor video widgets with an image overlay render only the overlay and an empty
// .elementor-video; Elementor's frontend JS (not loaded here) builds the player on click.
// Do the same for YouTube from the widget's data-settings, autoplaying since it was a click.
const YOUTUBE_ID = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/;

const playVideoWidget = (overlay: Element) => {
  const widget = overlay.closest(".elementor-widget-video");
  const slot = widget?.querySelector(".elementor-video");
  if (!widget || !slot) return;
  let settings: Record<string, unknown> = {};
  try {
    settings = JSON.parse(widget.getAttribute("data-settings") ?? "{}");
  } catch {}
  if ((settings.video_type ?? "youtube") !== "youtube") return;
  // The scraped JSX keeps WordPress's escaped slashes ("https:\/\/…"), which survive JSON.parse.
  const id = String(settings.youtube_url ?? "").replace(/\\/g, "").match(YOUTUBE_ID)?.[1];
  if (!id) return;
  const params = new URLSearchParams({
    autoplay: "1",
    controls: settings.controls === "yes" ? "1" : "0",
    mute: settings.mute === "yes" ? "1" : "0",
    rel: settings.rel === "yes" ? "1" : "0",
    playsinline: "1",
  });
  if (settings.loop === "yes") {
    params.set("loop", "1");
    params.set("playlist", id); // YouTube only loops a single video as a playlist
  }
  if (settings.start) params.set("start", String(settings.start));
  if (settings.end) params.set("end", String(settings.end));
  const host = settings.yt_privacy === "yes" ? "www.youtube-nocookie.com" : "www.youtube.com";
  // Replaces the .elementor-video div itself, as Elementor's YouTube player does: the wrapper
  // is sized by aspect-ratio, but the placeholder div has no height, so an iframe inside it
  // would collapse to the browser's default 150px.
  const iframe = document.createElement("iframe");
  iframe.className = "elementor-video";
  iframe.src = `https://${host}/embed/${id}?${params}`;
  iframe.title = "YouTube video player";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  slot.replaceWith(iframe);
  overlay.remove();
};

const isAnyPopupOpen = () =>
  Array.from(document.querySelectorAll<HTMLElement>(".elementor-popup-modal")).some((m) => m.style.display !== "none");

// Exit-intent popup (Elementor popup 60459, trigger "exit_intent"): opens when the pointer
// leaves the page through the top edge, at most once per browser session, and not over
// another open popup. Like Elementor's trigger it needs a mouse, so touch devices never see it.
const EXIT_POPUP_ID = "elementor-popup-modal-60459";
const EXIT_POPUP_SESSION_KEY = "coc_exit_popup_shown";

const exitPopupShown = () => {
  try {
    return sessionStorage.getItem(EXIT_POPUP_SESSION_KEY) === "1";
  } catch {
    return false;
  }
};

const markExitPopupShown = () => {
  try {
    sessionStorage.setItem(EXIT_POPUP_SESSION_KEY, "1");
  } catch {
    // storage blocked: it can show again after a reload, which is acceptable
  }
};

type JQueryStop = (el: Element) => { stop: (clearQueue: boolean, jumpToEnd: boolean) => void };

// The mobile menu accordion (preserved-scripts.js) leaves classes and jQuery slide styles
// behind; put the menu back to its rendered state so it opens collapsed next time.
const resetPopupMenu = (modal: HTMLElement) => {
  const $ = (window as unknown as { jQuery?: JQueryStop }).jQuery;
  for (const el of modal.querySelectorAll(".navbar .dropdown-content, .navbar .geo-holder")) {
    $?.(el).stop(true, true);
    // geo-holders render collapsed with an inline display:none; dropdowns are collapsed by CSS.
    if (el.classList.contains("geo-holder")) el.setAttribute("style", "display:none");
    else el.removeAttribute("style");
  }
  for (const el of modal.querySelectorAll(".navbar.dropdown-open")) el.classList.remove("dropdown-open");
  for (const el of modal.querySelectorAll(".navbar .dropdown.active")) el.classList.remove("active");
  for (const el of modal.querySelectorAll(".navbar .parent-active")) el.classList.remove("parent-active");
  for (const el of modal.querySelectorAll(".navbar .content-active, .navbar .accordion-active")) {
    el.classList.remove("content-active", "accordion-active");
  }
};

const closePopup = (modal: HTMLElement) => {
  modal.setAttribute("aria-hidden", "true");
  lockScroll(modal, false);
  const content = animatePopup(modal, modal.getAttribute("data-exit-animation"), true);
  if (!content) {
    modal.style.display = "none";
    resetPopupMenu(modal);
    return;
  }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    content.removeEventListener("animationend", finish);
    modal.style.display = "none";
    resetPopupMenu(modal);
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

const IMAGE_HREF = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i;

// Links in the same Elementor lightbox slideshow as `link`, in gallery order. Carousel
// clones (swiper-slide-duplicate) are skipped so each image appears once.
const slideshowLinks = (link: Element): Element[] => {
  const id = link.getAttribute("data-elementor-lightbox-slideshow");
  if (!id) return [link];
  const links = Array.from(
    document.querySelectorAll(`a[data-elementor-open-lightbox][data-elementor-lightbox-slideshow="${CSS.escape(id)}"]`)
  ).filter((a) => IMAGE_HREF.test(a.getAttribute("href") ?? "") && !a.closest(".swiper-slide-duplicate"));
  const order = (a: Element) => Number(a.getAttribute("data-lightbox-index") ?? NaN);
  if (links.every((a) => Number.isFinite(order(a)))) links.sort((a, b) => order(a) - order(b));
  return links.length ? links : [link];
};

const ARROW_PATH = {
  prev: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  next: "M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z",
};

// Image lightbox for Elementor's data-elementor-open-lightbox links. A gallery (links sharing
// data-elementor-lightbox-slideshow) gets prev/next arrows, arrow-key and swipe navigation and
// an "n / total" counter; a single image opens on its own.
const openLightbox = (link: Element) => {
  const links = slideshowLinks(link);
  const hrefs = links.map((a) => a.getAttribute("href") ?? "");
  // A carousel loop clone is left out of `links`, so start from the original it copies:
  // same data-lightbox-index, else same image.
  const cloneIndex = () => {
    const order = link.getAttribute("data-lightbox-index");
    const byOrder = order === null ? -1 : links.findIndex((a) => a.getAttribute("data-lightbox-index") === order);
    return byOrder !== -1 ? byOrder : hrefs.indexOf(link.getAttribute("href") ?? "");
  };
  let index = Math.max(0, links.includes(link) ? links.indexOf(link) : cloneIndex());
  const multiple = hrefs.length > 1;

  const overlay = document.createElement("div");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image viewer");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:zoom-out;user-select:none";

  const img = document.createElement("img");
  img.alt = "";
  img.style.cssText = "max-width:90vw;max-height:90vh;object-fit:contain;cursor:default";
  overlay.appendChild(img);

  const button = (label: string, css: string, path: string) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", label);
    b.style.cssText =
      "position:absolute;display:flex;align-items:center;justify-content:center;width:48px;height:48px;padding:0;border:0;border-radius:50%;background:rgba(0,0,0,0.45);color:#fff;cursor:pointer;" +
      css;
    b.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg>`;
    overlay.appendChild(b);
    return b;
  };

  const closeButton = button("Close", "top:16px;right:16px;", "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
  const prevButton = multiple ? button("Previous image", "left:16px;top:50%;transform:translateY(-50%);", ARROW_PATH.prev) : null;
  const nextButton = multiple ? button("Next image", "right:16px;top:50%;transform:translateY(-50%);", ARROW_PATH.next) : null;

  const counter = document.createElement("div");
  counter.setAttribute("aria-live", "polite");
  counter.style.cssText = "position:absolute;bottom:16px;left:50%;transform:translateX(-50%);color:#fff;font-size:14px;letter-spacing:1px";
  if (multiple) overlay.appendChild(counter);

  const show = (i: number) => {
    index = (i + hrefs.length) % hrefs.length;
    img.src = hrefs[index];
    img.alt = links[index].getAttribute("data-elementor-lightbox-title") ?? "";
    counter.textContent = `${index + 1} / ${hrefs.length}`;
    // Warm the neighbours so stepping through the gallery does not flash.
    if (multiple) for (const n of [index - 1, index + 1]) new Image().src = hrefs[(n + hrefs.length) % hrefs.length];
  };

  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey);
    if (link instanceof HTMLElement) link.focus({ preventScroll: true });
  };
  const onKey = (ev: KeyboardEvent) => {
    if (ev.key === "Escape") close();
    else if (multiple && ev.key === "ArrowLeft") show(index - 1);
    else if (multiple && ev.key === "ArrowRight") show(index + 1);
  };

  overlay.addEventListener("click", (ev) => {
    const hit = ev.target instanceof Element ? ev.target : null;
    if (prevButton && hit && prevButton.contains(hit)) show(index - 1);
    else if (nextButton && hit && nextButton.contains(hit)) show(index + 1);
    else if (hit !== img) close();
  });

  let touchX: number | null = null;
  overlay.addEventListener("touchstart", (ev) => { touchX = ev.touches[0]?.clientX ?? null; }, { passive: true });
  overlay.addEventListener("touchend", (ev) => {
    const endX = ev.changedTouches[0]?.clientX;
    if (multiple && touchX !== null && endX !== undefined && Math.abs(endX - touchX) > 40) show(endX < touchX ? index + 1 : index - 1);
    touchX = null;
  });

  show(index);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
  closeButton.focus({ preventScroll: true });
};

export default function WidgetInteractions() {
  const router = useRouter();
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

      // Desktop dropdowns open on :hover, and a client-side navigation leaves the pointer where
      // it was, so the menu would stay open over the new page. Hide it until the pointer leaves.
      const dropdownLink = target.closest(".navbar .dropdown-content a[href]");
      const dropdown = dropdownLink?.closest(".dropdown");
      if (
        dropdownLink &&
        dropdown instanceof HTMLElement &&
        !dropdownLink.closest(".elementor-popup-modal") &&
        dropdownLink.getAttribute("href") !== "#"
      ) {
        dropdown.classList.add("is-dismissed");
        dropdown.classList.remove("active");
        dropdown.querySelector(".dropbtn")?.classList.remove("parent-active");
        dropdown.addEventListener("mouseleave", () => dropdown.classList.remove("is-dismissed"), { once: true });
      }

      // Popup markup (the mobile menu, 56579) and the menu's geo links (which preserved-scripts.js
      // clones on hover) are plain <a>, so their internal links would reload the whole document.
      // Route them client-side instead and close the popup. Caret clicks are left alone:
      // preserved-scripts.js uses them to toggle the menu accordion.
      const popupLink = target.closest(
        '.elementor-popup-modal a[href^="/"]:not([href^="//"]), .navbar .geo_links a[href^="/"]:not([href^="//"])'
      );
      if (
        popupLink instanceof HTMLAnchorElement &&
        !e.defaultPrevented &&
        !target.closest(".menu-caret") &&
        e.button === 0 &&
        !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) &&
        !popupLink.target
      ) {
        e.preventDefault();
        const modal = popupLink.closest(".elementor-popup-modal");
        if (modal instanceof HTMLElement) closePopup(modal);
        router.push(popupLink.getAttribute("href") ?? "/");
        return;
      }

      const videoOverlay = target.closest(".elementor-widget-video .elementor-custom-embed-image-overlay");
      if (videoOverlay) {
        e.preventDefault();
        playVideoWidget(videoOverlay);
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
        const isImage = IMAGE_HREF.test(href);
        if (mode !== "no" && isImage) {
          e.preventDefault();
          openLightbox(lightboxLink);
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
      // The overlay's play button is a role="button" div, so give it button keys.
      const playButton = e.target instanceof Element ? e.target.closest(".elementor-widget-video .elementor-custom-embed-play") : null;
      if (playButton && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        const overlay = playButton.closest(".elementor-custom-embed-image-overlay");
        if (overlay) playVideoWidget(overlay);
        return;
      }
      if (e.key !== "Escape") return;
      for (const m of document.querySelectorAll(".elementor-popup-modal")) {
        if (m instanceof HTMLElement && m.style.display !== "none") closePopup(m);
      }
    };

    // relatedTarget is null when the pointer leaves the window; clientY <= 0 means it went out
    // through the top (towards the tabs, address bar or close button).
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget !== null || e.clientY > 0) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      if (exitPopupShown() || isAnyPopupOpen()) return;
      const modal = document.getElementById(EXIT_POPUP_ID);
      if (!(modal instanceof HTMLElement)) return;
      markExitPopupShown();
      openPopup(modal);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("keydown", onKey);
    };
  }, [router]);
  return null;
}
