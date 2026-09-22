import type { CSSProperties } from "react";

// ACF wysiwyg fields arrive as HTML ("<p>…</p>"), but the hardcoded fallbacks in the
// generated page components are plain strings. Interpolating either one as a React child
// escapes the markup, so the tags show up as visible text.
const HAS_MARKUP = /<[a-z][\s\S]*>/i;

export default function RichText({
  html,
  className,
  style,
}: {
  html: string;
  className?: string;
  style?: CSSProperties;
}) {
  // plain text keeps the <p> the scraped markup used, so spacing is unchanged
  if (!HAS_MARKUP.test(html)) {
    return (
      <p className={className} style={style}>
        {html}
      </p>
    );
  }
  // HTML may carry several block elements, which a <p> cannot legally contain
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}
