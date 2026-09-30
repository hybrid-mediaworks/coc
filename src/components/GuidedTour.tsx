"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { markVisited, TOUR_PAGES, type Visited } from "@/lib/journeyGuide";

// "Treatment Guidance Website Tour" widget: shows only the next page in the tour, i.e. the
// first tour page not yet visited (jg_visited cookie), or a completion note once every page
// has been visited. Nothing renders until the cookie has been read (as on the live site,
// where the server markup is hidden until the script runs). No element ids, so the plugin's
// preserved jQuery script (which targets #jg-guided-tour) leaves this alone.
// Styled by the .jg-next-only rules in base.css; the old three-column .jg-sc-guided styles
// in the page stylesheets no longer match anything here.

export default function GuidedTour() {
  const pathname = usePathname();
  const [visited, setVisited] = useState<Visited | null>(null);

  useEffect(() => {
    setVisited(markVisited(pathname));
  }, [pathname]);

  if (!visited) return null;

  const index = TOUR_PAGES.findIndex((p) => !visited[p.id]);
  const next = index === -1 ? undefined : TOUR_PAGES[index];

  return (
    <div className="jg-sc-guided-wrap jg-next-only" data-shortcode="guided">
      <div className="jg-next-card">
        <h3 className="jg-next-title">{next ? "Next Page In Tour" : "Journey Completed"}</h3>
        {next ? (
          <Link href={next.path} className="jg-next-link" data-num={index + 1}>
            <span className="jg-next-num">{index + 1}</span>
            <span className="jg-next-label">{next.label}</span>
          </Link>
        ) : (
          <p className="jg-next-complete">You have completed the guided site tour.</p>
        )}
      </div>
    </div>
  );
}
