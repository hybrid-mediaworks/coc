"use client";
import { useEffect, useState } from "react";

export type GalleryImage = { id: number; url: string; alt: string; title: string; width: number; height: number };

// Elementor's breakpoints: tablet up to 1024px, mobile up to 767px.
const TABLET = "(max-width: 1024px)";
const MOBILE = "(max-width: 767px)";

// Elementor's gallery widget (masonry layout, links to the full image in its lightbox).
// Elementor lays masonry out in JS with its e-gallery library, which this site does not
// load, so the same placement is done here: each image goes into the currently shortest
// column, for 4/2/1 columns on desktop/tablet/mobile. The markup keeps Elementor's classes
// so the template's hover overlay and the site's lightbox handler (WidgetInteractions) apply.
export default function ElementorGallery({
  id,
  images,
  columns = { desktop: 4, tablet: 2, mobile: 1 },
  gap = 10,
}: {
  id: string;
  images: GalleryImage[];
  columns?: { desktop: number; tablet: number; mobile: number };
  gap?: number;
}) {
  // Server render and first paint use the desktop count; the effect corrects it.
  const [count, setCount] = useState(columns.desktop);

  useEffect(() => {
    const mobile = window.matchMedia(MOBILE);
    const tablet = window.matchMedia(TABLET);
    const update = () => setCount(mobile.matches ? columns.mobile : tablet.matches ? columns.tablet : columns.desktop);
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, [columns.desktop, columns.tablet, columns.mobile]);

  const cols: Array<Array<GalleryImage & { index: number }>> = Array.from({ length: count }, () => []);
  const heights = new Array<number>(count).fill(0);
  for (const [index, image] of images.entries()) {
    const shortest = heights.indexOf(Math.min(...heights));
    cols[shortest].push({ ...image, index });
    heights[shortest] += image.width > 0 ? image.height / image.width : 1;
  }

  return (
    <div className="elementor-gallery__container" style={{ display: "flex", alignItems: "flex-start", gap }}>
      {cols.map((col, c) => (
        <div key={c} style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column", gap }}>
          {col.map((image) => (
            <a
              key={image.id || image.url}
              className="e-gallery-item elementor-gallery-item elementor-animated-content"
              href={image.url}
              data-elementor-open-lightbox="yes"
              data-elementor-lightbox-slideshow={id}
              data-elementor-lightbox-title={image.title}
              // Columns reorder the DOM; the lightbox steps through the gallery's own order.
              data-lightbox-index={image.index}
            >
              <div
                className="e-gallery-image elementor-gallery-item__image"
                role="img"
                aria-label={image.alt}
                style={{ position: "relative", paddingBottom: `${image.width > 0 ? (image.height / image.width) * 100 : 100}%` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.url}
                  alt=""
                  width={image.width || undefined}
                  height={image.height || undefined}
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="elementor-gallery-item__overlay"></div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
