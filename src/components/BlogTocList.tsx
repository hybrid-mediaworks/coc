"use client";
import { useEffect, useRef, useState } from "react";

type Item = { id: string; text: string };

// Client-side table of contents. Renders Elementor's TOC spinner, then reads the
// headings inside every element marked data-toc-source, in page order, gives them
// anchor ids and lists them. data-toc-source="all" (the h2___head + h2___con column)
// contributes every heading level; a bare data-toc-source (blog_section_1___con) only
// its <h2>s. When none of them has a heading, the whole TOC column is hidden.
const HEADINGS = '[data-toc-source] h2, [data-toc-source="all"] :is(h3, h4, h5, h6)';

export default function BlogTocList({ column = ".e-con" }: { column?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll(HEADINGS)).filter(
      (h) => (h.textContent ?? "").trim() !== ""
    );
    const found = headings.map((h, i) => {
      const id = `elementor-toc__heading-anchor-${i}`;
      h.id = id;
      return { id, text: (h.textContent ?? "").replace(/\s+/g, " ").trim() };
    });
    setItems(found);
    const host = ref.current?.closest(column);
    if (host instanceof HTMLElement) host.hidden = found.length === 0;
  }, [column]);

  return (
    <div ref={ref} id="elementor-toc__ab97e6c" className="elementor-toc__body">
      {items === null ? (
        <div className="elementor-toc__spinner-container" role="status" aria-label="Loading table of contents">
          <svg className="elementor-toc__spinner eicon-animation-spin e-font-icon-svg e-eicon-loading" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z"></path>
          </svg>
        </div>
      ) : (
        <ol className="elementor-toc__list-wrapper">
          {items.map((item) => (
            <li key={item.id} className="elementor-toc__list-item">
              <div className="elementor-toc__list-item-text-wrapper">
                <a href={`#${item.id}`} className="elementor-toc__list-item-text elementor-toc__top-level">
                  {item.text}
                </a>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
