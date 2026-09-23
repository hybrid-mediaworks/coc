"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

export type DmgGalleryImage = { src: string; width: number; height: number };

// Clearance for the sticky site header when keeping the gallery top in view.
const HEADER_OFFSET = 100;

export default function DmgGallery({ id, images }: { id: string; images: DmgGalleryImage[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbReady, setLbReady] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [lbSrcIndex, setLbSrcIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const touchStartX = useRef(0);

  // Animate max-height to the grid's real height so the slide up/down runs
  // at an even speed (a 9999px target makes the collapse lag before moving).
  useEffect(() => {
    if (!expanded) return;
    const measure = () => {
      if (gridRef.current) setFullHeight(gridRef.current.scrollHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [expanded]);

  // While the grid collapses, scroll with it so the toggle button stays where
  // it was clicked and the photos visibly slide up into it. Once the top of
  // the gallery reaches the header, stop following and let the bottom edge
  // slide up in view. (Jumping to the gallery top instead, as the WordPress
  // script did, hid the whole collapse off-screen.)
  const followCollapse = (button: HTMLElement) => {
    const grid = gridRef.current;
    if (!grid) return;
    const anchor = button.getBoundingClientRect().top;
    const root = document.documentElement;
    const prevAnchor = root.style.overflowAnchor;
    root.style.overflowAnchor = "none"; // native scroll anchoring would fight the manual follow
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      root.style.overflowAnchor = prevAnchor;
      grid.removeEventListener("transitionend", onEnd);
    };
    // Photos have their own hover transitions that bubble up; only the grid's
    // max-height transition marks the end of the collapse.
    const onEnd = (ev: TransitionEvent) => {
      if (ev.target === grid && ev.propertyName === "max-height") finish();
    };
    grid.addEventListener("transitionend", onEnd);
    window.setTimeout(finish, 1500);
    const step = () => {
      if (done) return;
      const drift = button.getBoundingClientRect().top - anchor;
      const room = Math.max(0, HEADER_OFFSET - grid.getBoundingClientRect().top);
      const dy = Math.max(drift, -room);
      // "instant": the site sets html { scroll-behavior: smooth }, which would
      // restart a smooth scroll every frame and lag behind the collapse.
      if (dy < 0) window.scrollBy({ top: dy, behavior: "instant" });
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = !expanded;
    if (next && gridRef.current) setFullHeight(gridRef.current.scrollHeight);
    setExpanded(next);
    if (!next) followCollapse(e.currentTarget);
  };

  const open = (index: number) => {
    lbIndexRef.current = index;
    setLbIndex(index);
    setLbSrcIndex(index);
    setSwitching(false);
    setLbOpen(true);
    requestAnimationFrame(() => setTimeout(() => setLbReady(true), 10));
  };

  const close = useCallback(() => {
    setLbReady(false);
    setTimeout(() => setLbOpen(false), 350);
  }, []);

  const lbIndexRef = useRef(0);

  const nav = useCallback(
    (dir: number) => {
      const next = (lbIndexRef.current + dir + images.length) % images.length;
      lbIndexRef.current = next;
      setLbIndex(next);
      setSwitching(true);
      setTimeout(() => {
        setLbSrcIndex(next);
        setSwitching(false);
      }, 220);
    },
    [images.length]
  );

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [lbOpen, nav, close]);

  const lbClass = [lbOpen && "open", lbReady && "ready"].filter(Boolean).join(" ");

  return (
    <>
      <div className="g-wrap" id={id} ref={wrapRef}>
        <div
          ref={gridRef}
          className={expanded ? "dmg-grid expanded" : "dmg-grid"}
          style={expanded && fullHeight ? { maxHeight: fullHeight } : undefined}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="g-item"
              role="button"
              tabIndex={0}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              onClick={() => open(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  open(i);
                }
              }}
            >
              <Image
                src={img.src}
                alt="Gallery image"
                width={img.width}
                height={img.height}
                sizes="(max-width: 600px) 100vw, 50vw"
              />
              <div className="g-overlay"></div>
              <div className="g-line"></div>
              <div className="g-corner"></div>
            </div>
          ))}
        </div>
        <div className={expanded ? "dmg-fade hidden" : "dmg-fade"}></div>
        <button className="g-toggle dmg-toggle" type="button" aria-expanded={expanded} onClick={toggle}>
          {expanded ? "Show less ↑" : "Show all photos ↓"}
        </button>
      </div>
      <div
        id="dmg-lb"
        className={lbClass || undefined}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) nav(diff > 0 ? 1 : -1);
        }}
      >
        <div id="dmg-lb-box" role="dialog" aria-modal="true" aria-label="Image gallery">
          <button id="dmg-lb-close" type="button" aria-label="Close" onClick={close}>
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"></line>
              <line x1="17" y1="1" x2="1" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"></line>
            </svg>
          </button>
          <button id="dmg-lb-prev" type="button" aria-label="Previous" onClick={() => nav(-1)}>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <polyline points="13,3 6,10 13,17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
            </svg>
          </button>
          <button id="dmg-lb-next" type="button" aria-label="Next" onClick={() => nav(1)}>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <polyline points="7,3 14,10 7,17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
            </svg>
          </button>
          <div id="dmg-lb-img-wrap">
            {lbOpen ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img id="dmg-lb-img" className={switching ? "switching" : undefined} src={images[lbSrcIndex].src} alt="Gallery image" />
            ) : null}
          </div>
          <div id="dmg-lb-counter">{lbIndex + 1} / {images.length}</div>
          <div id="dmg-lb-bar">
            <div id="dmg-lb-bar-fill" style={{ width: `${((lbIndex + 1) / images.length) * 100}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
