// Turns an ACF FAQ field ("<h3>Question</h3><p>Answer</p>…") into the
// .custom-accordion markup. Each <h3> starts an item; everything up to the next
// <h3> is its answer. Open/close behaviour comes from the site's preserved
// jQuery FAQ script, which targets this markup and opens the first item.

type FaqItem = { question: string; answer: string };

const HEADING = /<h3\b[^>]*>([\s\S]*?)<\/h3>/gi;
const HAS_BLOCK = /<(p|ul|ol|div|table|h[1-6])\b/i;

export function parseFaqs(html: string): FaqItem[] {
  const matches = Array.from(html.matchAll(HEADING));
  return matches
    .map((m, i) => {
      const start = (m.index ?? 0) + m[0].length;
      const end = i + 1 < matches.length ? (matches[i + 1].index ?? html.length) : html.length;
      const answer = html.slice(start, end).trim();
      return {
        question: m[1].trim(),
        answer: HAS_BLOCK.test(answer) ? answer : answer ? `<p>${answer}</p>` : "",
      };
    })
    .filter((item) => item.question !== "");
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="custom-accordion">
      {items.map((item, i) => (
        <div key={i} className={i === 0 ? "custom-accordion__item active" : "custom-accordion__item"}>
          <div className="accordion-item__header">
            <div className="accordion-item__title" dangerouslySetInnerHTML={{ __html: item.question }} />
            <div className="accordion-item__icon">
              <div className={i === 0 ? "closed-icon hidden" : "closed-icon"}></div>
              <div className={i === 0 ? "opened-icon" : "opened-icon hidden"}></div>
            </div>
          </div>
          <div className="accordion-item__content" dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      ))}
    </div>
  );
}
