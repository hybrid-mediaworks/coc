import type { CSSProperties } from "react";

// ACF wysiwyg fields arrive as HTML ("<p>…</p>"), but the hardcoded fallbacks in the
// generated page components are plain strings. Interpolating either one as a React child
// escapes the markup, so the tags show up as visible text.
const HAS_MARKUP = /<[a-z][\s\S]*>/i;

export default function RichText({
  html,
  className,
  style,
  tocSource,
}: {
  html: string;
  className?: string;
  style?: CSSProperties;
  // Marks the content as a source of table-of-contents headings (see BlogTocList).
  tocSource?: boolean;
}) {
  const marker = tocSource ? { "data-toc-source": "" } : {};
  // plain text keeps the <p> the scraped markup used, so spacing is unchanged
  if (!HAS_MARKUP.test(html)) {
    return (
      <p className={className} style={style} {...marker}>
        {html}
      </p>
    );
  }
  // HTML may carry several block elements, which a <p> cannot legally contain
  return <div className={className} style={style} {...marker} dangerouslySetInnerHTML={{ __html: html }} />;
}
