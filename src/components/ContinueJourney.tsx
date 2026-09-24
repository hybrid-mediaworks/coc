"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { markVisited, TOUR_PAGES, type Visited } from "@/lib/journeyGuide";

// "Continue Your Journey" grid — port of hydrateGrid() in the plugin's shortcodes.js.
// Every tour page is a card; visited ones get a check bubble and "✓ Visited", and the
// first unvisited one is the recommended next step (with the NEXT badge). Until the
// cookie is read every card renders plain, matching the plugin's server markup. No
// element id, so the preserved jQuery script (which targets #jg-continue-grid) skips it.

const VISITED_ICON = "/images/0b501e8d0525a83306281decead071df.svg";

export default function ContinueJourney() {
  const pathname = usePathname();
  const [visited, setVisited] = useState<Visited | null>(null);

  useEffect(() => {
    setVisited(markVisited(pathname));
  }, [pathname]);

  const recommended = visited ? TOUR_PAGES.findIndex((p) => !visited[p.id]) : -1;

  return (
    <div className="jg-sc-continue" data-shortcode="continue">
      {TOUR_PAGES.map((page, i) => {
        const isVisited = !!visited?.[page.id];
        const isRecommended = !isVisited && i === recommended;
        const cls = ["jg-sc-card", isVisited && "jg-sc-visited", isRecommended && "jg-sc-recommended"].filter(Boolean).join(" ");
        return (
          <Link key={page.id} href={page.path} className={cls} data-pid={page.id} data-index={i}>
            {isVisited ? (
              <span className="jg-sc-bubble jg-sc-visited-bubble">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={VISITED_ICON} alt="Visited" className="jg-sc-bubble-icon" />
              </span>
            ) : (
              <span className="jg-sc-bubble jg-sc-unvisited">{i + 1}</span>
            )}
            <span className="jg-sc-card-text">
              <span className="jg-sc-card-label">{page.label}</span>
              <span className="jg-sc-card-meta">{isVisited ? "✓ Visited" : isRecommended ? "+ Recommended next step" : ""}</span>
            </span>
            <span className="jg-sc-next-badge" style={isRecommended ? undefined : { display: "none" }}>
              NEXT
            </span>
          </Link>
        );
      })}
    </div>
  );
}
