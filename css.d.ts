import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
  // Scraped markup puts href on non-anchor tags. React passes it through at runtime; only TS objects.
  interface HTMLAttributes<T> {
    href?: string;
  }
}
