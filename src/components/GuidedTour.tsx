"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OPEN_JOURNEY_GUIDE_EVENT } from "@/components/JourneyGuidePanel";
import { markVisited, TOUR_PAGES, type TourPage, type Visited } from "@/lib/journeyGuide";

// "Treatment Guidance Website Tour" widget — port of the plugin's shortcodes.js.
// Shows one of three panels from the visitor's progress (jg_visited cookie):
//   2+ tour pages visited -> last two visited, current page, next page
//   1 visited             -> that page, current page, next page
//   none                  -> the first two tour pages
// Nothing renders until the cookie has been read (as on the live site, where the
// server markup is hidden until the script runs). No element ids, so the plugin's
// preserved jQuery script (which targets #jg-guided-tour) leaves this alone.

const CHECK_ICON = "/images/Fram54e.svg";
const VIEW_FULL_ICON = "/images/Frame45te4t.svg";

// "View Full Guided Site Tour" opens the side Journey Guide panel.
const openJourneyPanel = () => window.dispatchEvent(new Event(OPEN_JOURNEY_GUIDE_EVENT));

function Num({ n }: { n: number }) {
  return <span className="jg-gvi-num">{n}</span>;
}

function ViewFull({ big }: { big?: boolean }) {
  return (
    <span style={{ cursor: "pointer", ...(big ? { fontSize: "20px" } : {}) }} className="jg-guided-next-link jg-guided-view-full" onClick={openJourneyPanel}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img width={28} height={28} src={VIEW_FULL_ICON} alt="" className="jg-guided-view-full-icon" /> View Full Guided Site Tour
    </span>
  );
}

function CurrentImage({ page }: { page: TourPage | undefined }) {
  return (
    <div className="jg-guided-col jg-guided-center">
      <div className="jg-guided-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width={382} height={398} className="jg-guided-img jg-guided-current-img" src={page?.thumb ?? TOUR_PAGES[0].thumb} alt="" />
        <div className="jg-guided-img-label">
          <h3 className="jg-guided-heading jg-icon-list">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width={24} height={24} src={CHECK_ICON} alt="check-icon" className="jg-guided-heading-icon" /> Current Guided Tour Page:
          </h3>
          <strong className="jg-guided-current-label">{page?.label ?? ""}</strong>
        </div>
      </div>
    </div>
  );
}

function NextColumn({ next, heading }: { next: TourPage | undefined; heading: string }) {
  const index = next ? TOUR_PAGES.indexOf(next) : -1;
  return (
    <div className="jg-guided-col jg-guided-right">
      <h3 className="jg-guided-heading jg-guided-next-heading">{next ? heading : "Journey Completed"}</h3>
      <ul className="jg-guided-next-list">
        {next ? (
          <li className="jg-guided-next-item">
            <Link href={next.path} className="jg-guided-next-link jg-guided-next-primary" data-num={index + 1}>
              <Num n={index + 1} />
              <span>{next.label}</span>
            </Link>
          </li>
        ) : (
          <li className="jg-guided-complete-item">
            <span className="jg-guided-next-link jg-guided-complete-msg">You have completed the guided site tour.</span>
          </li>
        )}
        <li className="jg-guided-divider"></li>
        <li>
          <ViewFull />
        </li>
      </ul>
    </div>
  );
}

function VisitedItem({ page }: { page: TourPage }) {
  return (
    <li>
      <Link href={page.path} className="jg-gvi-link" title={`Go back to ${page.label}`}>
        <Num n={TOUR_PAGES.indexOf(page) + 1} />
        <span className="jg-gvi-label">{page.label}</span>
      </Link>
    </li>
  );
}

export default function GuidedTour() {
  const pathname = usePathname();
  const [visited, setVisited] = useState<Visited | null>(null);

  useEffect(() => {
    setVisited(markVisited(pathname));
  }, [pathname]);

  if (!visited) return null;

  const visitedPages = TOUR_PAGES.filter((p) => visited[p.id]);
  const next = TOUR_PAGES.find((p) => !visited[p.id]);
  const progress = Math.round((visitedPages.length / TOUR_PAGES.length) * 100);
  const current = visitedPages[visitedPages.length - 1];

  if (visitedPages.length > 1) {
    return (
      <div className="jg-sc-guided-wrap" data-shortcode="guided">
        <div className="jg-sc-guided jg-guided-multi">
          <div className="jg-guided-col jg-guided-left">
            <h3 className="jg-guided-heading">Last Page Visited</h3>
            <h3 className="jg-guided-heading jg-icon-list">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={24} height={24} src={CHECK_ICON} alt="check-icon" className="jg-guided-heading-icon" />
              Last Page Visited:
            </h3>
            <div className="jg-guided-visited-list">
              <ul className="jg-guided-visited-items">
                {visitedPages.slice(-2).map((p) => (
                  <VisitedItem key={p.id} page={p} />
                ))}
              </ul>
            </div>
          </div>
          <CurrentImage page={current} />
          <NextColumn next={next} heading="Next Page in tour" />
        </div>
      </div>
    );
  }

  if (visitedPages.length === 1) {
    return (
      <div className="jg-sc-guided-wrap" data-shortcode="guided">
        <div className="jg-sc-guided jg-guided-single">
          <div className="jg-guided-col jg-guided-left">
            <h3 className="jg-guided-heading">Guided Website Tour</h3>
            <div className="jg-guided-visited-progress">
              <span className="jg-gv-check">&#10003;</span>
              <span className="jg-gv-label">Last Pages Visited</span>
              <div className="jg-gv-bar">
                <div className="jg-gv-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <ul className="jg-guided-visited-items">
              <VisitedItem page={current} />
            </ul>
            <hr className="jg-guided-hr" />
            <p className="jg-guided-count-label">{TOUR_PAGES.length} Page Guided Tour</p>
          </div>
          <CurrentImage page={current} />
          <NextColumn next={next} heading="Next Page In Tour" />
        </div>
      </div>
    );
  }

  const [p1, p2] = TOUR_PAGES;
  return (
    <div className="jg-sc-guided-wrap" data-shortcode="guided">
      <div className="jg-sc-guided jg-guided-none">
        <h3 className="jg-guided-heading jg-guided-none-heading">Start Full Guided Site Tour</h3>
        <div className="jg-guided-none-body">
          <div className="jg-guided-none-left">
            <Link href={p1.path} className="jg-guided-none-link jg-guided-none-p1" data-num={1}>
              <Num n={1} />
              <span>{p1.label}</span>
            </Link>
          </div>
          <div className="jg-guided-col jg-guided-center">
            <div className="jg-guided-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={382} height={398} className="jg-guided-img" src={p1.thumb} alt="" />
              <div className="jg-guided-img-label jg-guided-img-label-cta">
                <ViewFull big />
              </div>
            </div>
          </div>
          <div className="jg-guided-none-right">
            <Link href={p2.path} className="jg-guided-none-link jg-guided-none-p2" data-num={2}>
              <Num n={2} />
              <span>{p2.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
