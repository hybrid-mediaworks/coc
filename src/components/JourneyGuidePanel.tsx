"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { markVisited, TOUR_PAGES, type Visited } from "@/lib/journeyGuide";

// Side "User Journey Guide" tab + slide-out panel — port of the plugin's frontend.js.
// Rendered once in the layout so it is on every page, collapsed by default. Opening it
// lists the tour with visited pages ticked, the current page highlighted and the first
// unvisited page as the recommended next step.
// Uses its own ids (#jgp-*, styled in base.css) so the preserved jQuery plugin script,
// which binds #jg-toggle-btn and rewrites #jg-page-list, cannot interfere.

export const OPEN_JOURNEY_GUIDE_EVENT = "jg:open";

const LABEL = ["U", "S", "E", "R", null, "J", "O", "U", "R", "N", "E", "Y", null, "G", "U", "I", "D", "E"];
const normalise = (path: string) => path.replace(/\/+$/, "") || "/";

export default function JourneyGuidePanel() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState<Visited>({});

  useEffect(() => {
    setVisited(markVisited(pathname));
  }, [pathname]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_JOURNEY_GUIDE_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_JOURNEY_GUIDE_EVENT, onOpen);
  }, []);

  const current = normalise(pathname);
  const count = TOUR_PAGES.filter((p) => visited[p.id]).length;
  const progress = Math.round((count / TOUR_PAGES.length) * 100);
  const recommended = TOUR_PAGES.findIndex((p) => !visited[p.id]);

  return (
    <div id="jgp-wrapper" className={open ? "jg-open" : undefined}>
      <div id="jgp-sidebar">
        <button id="jgp-toggle-btn" type="button" aria-label="Open Journey Guide" aria-expanded={open} aria-controls="jgp-panel" onClick={() => setOpen((o) => !o)}>
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
          <span id="jgp-panel-title">Your Journey Guide</span>
          <button id="jgp-panel-close" type="button" aria-label="Close panel" onClick={() => setOpen(false)}>
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
                onClick={() => router.push(page.path)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(page.path);
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
