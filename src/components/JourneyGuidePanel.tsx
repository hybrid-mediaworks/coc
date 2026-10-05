"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { markVisited, TOUR_PAGES, type Visited } from "@/lib/journeyGuide";

// Side "User Journey Guide" tab + slide-out panel — port of the plugin's frontend.js.
// Rendered once in the layout so it is on every page, collapsed by default. Opening it
// lists the tour with visited pages ticked, the current page highlighted and the first
// unvisited page as the recommended next step.
// Uses its own ids (#jgp-*, styled in base.css) so the preserved jQuery plugin script,
// which binds #jg-toggle-btn and rewrites #jg-page-list, cannot interfere.

// On the first AUTO_OPEN_VIEWS page views (any pages), slide the panel open once the visitor
// scrolls the hero off the screen (any viewport) — or AUTO_OPEN_DELAY_MS after load on pages
// without a hero section — keep it open for AUTO_OPEN_MS,
// then close it unless the visitor has toggled it themselves. Only views where it actually slid
// out are counted, per browser, in AUTO_OPEN_COOKIE.
const AUTO_OPEN_VIEWS = 2;
const AUTO_OPEN_DELAY_MS = 1000;
const AUTO_OPEN_MS = 4500;
const AUTO_OPEN_COOKIE = "jg_autoopen_views";
// Top-level Elementor sections: flexbox containers (.e-parent) and legacy sections.
const SECTION_SELECTOR = "main .e-con.e-parent, main .elementor-section.elementor-top-section";
// Until the visitor opens the panel themselves (OPENED_COOKIE), the tab gets the attention
// animations: a one-off "peek", a heartbeat ring and a periodic chevron nudge (.jg-attention in base.css).
const OPENED_COOKIE = "jg_opened";
const COOKIE_DAYS = 365;

const hasCookie = (name: string) => document.cookie.split("; ").some((c) => c.startsWith(`${name}=`));
const setCookie = (name: string, value = "1") => {
  const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
};
const readAutoOpenViews = () => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${AUTO_OPEN_COOKIE}=(\\d+)`));
  return match ? Number(match[1]) : 0;
};

// The section the visitor must scroll past before the auto-open: the hero (first visible
// top-level section in the page content).
const autoOpenSection = () =>
  Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).find(
    (el) => !el.parentElement?.closest(SECTION_SELECTOR) && el.offsetHeight > 0
  ) ?? null;

const LABEL = ["U", "S", "E", "R", null, "J", "O", "U", "R", "N", "E", "Y", null, "G", "U", "I", "D", "E"];
const normalise = (path: string) => path.replace(/\/+$/, "") || "/";

export default function JourneyGuidePanel() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState<Visited>({});
  // jg-touched: the panel has been open this session, so the tab's entrance slide must not
  // replay when it reappears on close. jg-attention: the visitor has never opened it themselves.
  const [touched, setTouched] = useState(false);
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setVisited(markVisited(pathname));
  }, [pathname]);

  // Pending auto-open/auto-close. Any manual toggle cancels it, so the timer never opens or
  // closes the panel against the visitor. Kept across renders: the panel lives in the layout.
  const autoTimer = useRef<number | null>(null);
  // The path whose view gets the auto-open (one of the first AUTO_OPEN_VIEWS), else null.
  const autoOpenPath = useRef<string | null>(null);
  const cancelAuto = () => {
    if (autoTimer.current !== null) window.clearTimeout(autoTimer.current);
    autoTimer.current = null;
  };
  const toggle = (next: boolean) => {
    cancelAuto();
    autoOpenPath.current = null; // also stops a mobile auto-open still waiting for the scroll
    setOpen(next);
    if (next && attention) {
      setAttention(false);
      setCookie(OPENED_COOKIE);
    }
  };
  // Picking a page collapses the panel.
  const goTo = (path: string) => {
    toggle(false);
    router.push(`${path}/`);
  };

  useEffect(() => {
    if (!hasCookie(OPENED_COOKIE)) setAttention(true);
  }, []);
  useEffect(() => {
    if (open) setTouched(true);
  }, [open]);

  // Decides once per page view (the ref stops a re-run effect for the same path deciding again)
  // whether it may auto-open: only while fewer than AUTO_OPEN_VIEWS views have actually slid it out.
  const checkedPath = useRef<string | null>(null);
  useEffect(() => {
    if (checkedPath.current !== pathname) {
      checkedPath.current = pathname;
      autoOpenPath.current = readAutoOpenViews() < AUTO_OPEN_VIEWS ? pathname : null;
    }
    if (autoOpenPath.current !== pathname) return;
    const autoOpen = () => {
      autoOpenPath.current = null;
      setCookie(AUTO_OPEN_COOKIE, String(readAutoOpenViews() + 1)); // only views that slid it out count
      setOpen(true);
      autoTimer.current = window.setTimeout(() => {
        autoTimer.current = null;
        setOpen(false);
      }, AUTO_OPEN_MS);
    };

    // Wait until that section has scrolled out of view; pages without it fall back to the delay.
    const target = autoOpenSection();
    let frame = 0;
    const check = () => {
      frame = 0;
      if (!target || autoOpenPath.current !== pathname || target.getBoundingClientRect().bottom > 0) return;
      window.removeEventListener("scroll", onScroll);
      autoOpen();
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };
    if (target) {
      window.addEventListener("scroll", onScroll, { passive: true });
      check(); // a restored scroll position may already be past it
    } else {
      autoTimer.current = window.setTimeout(autoOpen, AUTO_OPEN_DELAY_MS);
    }

    // Leaving the page mid auto-open closes it, so the next page starts from a closed panel.
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      if (autoTimer.current === null) return;
      cancelAuto();
      setOpen(false);
    };
  }, [pathname]);

  const current = normalise(pathname);
  const count = TOUR_PAGES.filter((p) => visited[p.id]).length;
  const progress = Math.round((count / TOUR_PAGES.length) * 100);
  const recommended = TOUR_PAGES.findIndex((p) => !visited[p.id]);

  return (
    <div id="jgp-wrapper" className={[open && "jg-open", touched && "jg-touched", attention && "jg-attention"].filter(Boolean).join(" ") || undefined}>
      <div id="jgp-sidebar">
        <button id="jgp-toggle-btn" type="button" aria-label="Open Journey Guide" aria-expanded={open} aria-controls="jgp-panel" onClick={() => toggle(!open)}>
          <span className="jg-arrow jg-arrow-desktop">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect width={24} height={24} rx="12" fill="white" fillOpacity="0.25"></rect>
              <path d="M16.68 12.528C16.9059 12.336 17 12.064 17 11.792C17 11.536 16.9059 11.264 16.68 11.136L11.1082 6.336C10.8824 6.128 10.6376 6 10.2424 6C9.94118 6 9.69647 6.064 9.47059 6.272C9.22588 6.464 9.07529 6.736 9.07529 6.992C9.07529 7.264 9.15059 7.536 9.37647 7.728L14.1765 11.872L9.30118 16.336C9.07529 16.528 9 16.8 9 17.072C9 17.328 9.15059 17.6 9.37647 17.808C9.62118 17.936 9.94118 18 10.2424 18C10.5624 18 10.8824 17.872 11.1082 17.664L16.68 12.528Z" fill="#EDEDED" fillOpacity="0.9"></path>
            </svg>
          </span>
          <span className="jg-arrow jg-arrow-mobile">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </button>
        <div id="jgp-sidebar-label" aria-hidden="true">
          {LABEL.map((ch, i) => (ch ? <span key={i}>{ch}</span> : <span key={i} className="jg-spacer"></span>))}
        </div>
        <div id="jgp-sidebar-progress-wrap">
          <div id="jgp-sidebar-progress-bar" style={{ height: `${progress}%` }}></div>
        </div>
      </div>

      <div id="jgp-panel" aria-hidden={!open}>
        <div id="jgp-panel-header">
          <span id="jgp-panel-title">
            {/* The header wordmark, cropped to the loops mark by .jgp-logo (no icon-only asset exists). */}
            <span className="jgp-logo" aria-hidden="true">
              <Image src="/images/f9aeb5f0d1b26afe75118db15b3bb151.webp" alt="" width={648} height={118} />
            </span>
            <span className="jgp-panel-heading">
              Website Guide
              <span id="jgp-panel-subtitle">Hand-picked pages that help our visitors</span>
            </span>
          </span>
          <button id="jgp-panel-close" type="button" aria-label="Close panel" onClick={() => toggle(false)}>
            &times;
          </button>
        </div>
        <div id="jgp-progress-bar-wrap">
          <div id="jgp-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div id="jgp-progress-label">
          {count} of {TOUR_PAGES.length} visited
        </div>
        <ul id="jgp-page-list">
          {TOUR_PAGES.map((page, i) => {
            const isVisited = !!visited[page.id];
            const isCurrent = page.path === current;
            const isRecommended = i === recommended;
            const cls = [isCurrent && "jg-current", isRecommended && "jg-recommended"].filter(Boolean).join(" ");
            return (
              <li
                key={page.id}
                className={cls || undefined}
                role="link"
                tabIndex={open ? 0 : -1}
                onClick={() => goTo(page.path)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") goTo(page.path);
                }}
              >
                <span className={`jg-step-bubble ${isVisited ? "jg-visited" : "jg-unvisited"}`}>{isVisited ? null : i + 1}</span>
                <span className="jg-step-text">
                  <span className="jg-step-label">{page.label}</span>
                  {isVisited ? (
                    <span className="jg-step-meta">
                      <span className="jg-visited-tag">✓ Visited</span>
                    </span>
                  ) : isRecommended ? (
                    <span className="jg-step-meta jg-recommended-text">+ Recommended next step</span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
