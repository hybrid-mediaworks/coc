"use client";
import Link from "next/link";
import { useState } from "react";
import type { SectionItem } from "@/lib/wordpress";

// Mirrors the WordPress related-pages script: on desktop show 4 cards, then
// reveal 8 more per "Load More" click. Below 1024px every card is shown (the
// list scrolls), so the collapsing and the button are desktop-only via CSS.
const INITIAL = 4;
const STEP = 8;

export default function RelatedCards({ items }: { items: SectionItem[] }) {
  const [visible, setVisible] = useState(INITIAL);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((v) => v + STEP);
      setLoading(false);
    }, 400);
  };

  return (
    <div className="cards-wrapper">
      <div className="cards" role="list">
        {items.map((item, i) => (
          <article key={item.href} className={i < visible ? "card" : "card card--collapsed"} role="listitem">
            <Link href={item.href}>
              <h3>{item.title}</h3>
            </Link>
          </article>
        ))}
      </div>
      {visible < items.length ? (
        <div id="button-wrapper">
          <button id="relatedloadMoreBtn" type="button" onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
