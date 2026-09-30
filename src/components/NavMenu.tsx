import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { MenuGeoLink, MenuItem } from "@/lib/wordpress";

// Renders the WordPress primary menu with the markup the theme's menu shortcode produces, so the
// existing CSS and the jQuery handlers in preserved-scripts.js (hover columns, geo links, mobile
// accordion) keep working. The desktop header and the mobile menu popup (56579) both use it.
// Like the theme, it renders three levels; deeper items (e.g. Bipolar > Hypomania) are skipped.

type Variant = "desktop" | "mobile";

type Cta = {
  image: { src: string; width: number; height: number };
  text: string;
  button: { href: string; label: string };
};

// The dropdown CTA panel and footer image are theme settings the menu endpoint does not
// return, keyed by the top-level item's slug. A top-level item marked is_cta without an entry
// here gets the panel title only.
const TOP_LEVEL: Record<string, { cta?: Cta; footerImage?: Cta["image"] }> = {
  "about-us": {
    cta: {
      image: { src: "/images/1e49fa0fa53e2635e6a8ceee1774104c.webp", width: 292, height: 194 },
      text: "Effective residential inpatient mental health treatment.",
      button: { href: "/contact/", label: "Get to know us" },
    },
  },
  locations: {
    cta: {
      image: { src: "/images/af117d424162946636056965b8e5a3e5.webp", width: 736, height: 526 },
      text: "Choose from our beautiful locations near beaches & national parks.",
      button: { href: "tel:+18882552112", label: "888-255-2112" },
    },
  },
  "mental-health-disorders": {
    footerImage: { src: "/images/af117d424162946636056965b8e5a3e5.webp", width: 736, height: 526 },
  },
  "mental-health-treatment": {
    cta: {
      image: { src: "/images/827a380a7c49f989f24dec7787b615d1.webp", width: 292, height: 194 },
      text: "Get dual-diagnosis treatment for SUD and mental health",
      button: { href: "tel:+18882552112", label: "888-255-2112" },
    },
  },
};

// WordPress sanitize_title, close enough for menu labels: "About Us" -> "about-us".
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&[a-z]+;|&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CARET_PATH =
  "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z";

function Caret({ large }: { large?: boolean }) {
  return (
    <svg
      className="menu-caret"
      width={14}
      height={14}
      viewBox="0 0 320 512"
      fill="#3a7380"
      aria-hidden="true"
      style={large ? { width: "24px", height: "24px" } : undefined}
    >
      <path d={CARET_PATH}></path>
    </svg>
  );
}

function NavLink({
  desktop,
  href,
  className,
  style,
  title,
  dataImg,
  children,
}: {
  desktop: boolean;
  href: string;
  className?: string;
  style?: CSSProperties;
  title?: string;
  dataImg?: string | null;
  children: ReactNode;
}) {
  const props = { className, style, title, "data-img": dataImg ?? undefined };
  return desktop && href.startsWith("/") ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export default function NavMenu({ items, variant }: { items: MenuItem[]; variant: Variant }) {
  const desktop = variant === "desktop";
  // The scraped desktop header pinned computed font sizes inline; the mobile popup never had them.
  const fs = (px: number): CSSProperties | undefined => (desktop ? { fontSize: `${px}px` } : undefined);
  // The shortcode output has a space between a label and its caret; the desktop JSX never did.
  const gap = desktop ? null : " ";

  const icon = (src: string | null) =>
    src ? (
      <>
        <img className="" src={src} alt="" loading="lazy" decoding="async" />{" "}
      </>
    ) : (
      " "
    );

  const geoLinks = (links: MenuGeoLink[], size: number) => (
    <div className="menu_links_wrapper">
      <div className="geo_links">
        {/* Plain <a> even on desktop: preserved-scripts.js clones these into .menu_links on hover,
            and a clone has no Link handler. WidgetInteractions routes every geo link instead. */}
        {links.map((g) => (
          <NavLink desktop={false} key={g.link + g.label} title={g.label} href={g.link} dataImg={g.image} style={fs(size)}>
            <span className="unhovered-label" style={fs(size)}>
              {g.label}
            </span>
            <span className="hovered-label" style={fs(size)}>
              {g.alt_label || g.label}
            </span>
          </NavLink>
        ))}
      </div>
      {links[0]?.image && (
        <div className="geo_image_box">
          {/* preserved-scripts.js swaps this src on hover, so it cannot be a next/image srcset */}
          <img src={links[0].image} className="geo-preview-img" alt="Location Preview" loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  );

  const geoHolder = (links: MenuGeoLink[], size: number) =>
    links.length > 0 && (
      <div className="geo-holder" style={{ display: "none" }}>
        {geoLinks(links, size)}
      </div>
    );

  const column = (col: MenuItem, index: number) => (
    <div key={col.ID} className={col.children.length ? "menu_col has-sub-menu" : "menu_col"}>
      <div className={`menu_col_title ${index === 0 ? "active " : ""}`}>
        <NavLink desktop={desktop} href={col.url} className="" style={fs(16)}>
          {col.title}
          {gap}
          <Caret large />
        </NavLink>
      </div>
      {col.children.length > 0 && (
        <ul>
          {col.children.map((item) => {
            const hasGeo = item.geo_links.length > 0;
            return (
              <li key={item.ID} style={fs(16)}>
                <NavLink desktop={desktop} className="" href={item.url} style={fs(hasGeo ? 14 : 16)}>
                  {icon(item.icon)}
                  <span className="unhovered-label" style={fs(14)}>
                    {item.title}
                  </span>
                  {hasGeo && (
                    <>
                      {" "}
                      <Caret large />
                    </>
                  )}
                </NavLink>
                {geoHolder(item.geo_links, 14)}
              </li>
            );
          })}
        </ul>
      )}
      {geoHolder(col.geo_links, 16)}
    </div>
  );

  const flatList = (children: MenuItem[]) => (
    <ul>
      {children.map((item) => (
        <li key={item.ID} style={fs(16)}>
          <NavLink desktop={desktop} href={item.url} style={fs(16)}>
            {icon(item.icon)}
            <span className="unhovered-label" style={fs(16)}>
              {item.title}
            </span>
            <span className="hovered-label" style={fs(16)}>
              {item.alt_title || item.title}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const ctaImage = (image: Cta["image"], alt: string, className: string) =>
    desktop ? (
      <Image src={image.src} alt={alt} width={image.width} height={image.height} className={className} />
    ) : (
      <img src={image.src} alt={alt} className={className || undefined} loading="lazy" decoding="async" />
    );

  const dropdown = (top: MenuItem) => {
    const slug = slugify(top.title);
    const settings = TOP_LEVEL[slug] ?? {};
    const cta = top.is_cta ? settings.cta : undefined;
    const footerImage = settings.footerImage ?? settings.cta?.image;
    const hasColumns = top.children.some((c) => c.children.length > 0);
    const isLocations = top.children.some(
      (c) => c.geo_links.length > 0 || c.children.some((g) => g.geo_links.length > 0)
    );
    const firstGeo = hasColumns ? top.children[0]?.geo_links ?? [] : [];
    const innerClass =
      "dropdown-content__inner" + (isLocations ? " is-locations-menu" : "") + (top.is_cta ? "" : " no_cta");

    return (
      <div key={top.ID} className={`dropdown menu-item-${slug}`}>
        <a className="dropbtn main_item " style={fs(16)}>
          {top.title}
          {gap}
          <Caret />
        </a>
        <div className="dropdown-content">
          <div className={innerClass}>
            <div className="sub_menu_row">
              {top.is_cta && (
                <div className="menu_cta_box">
                  <h4 className="active_dropdown_title" style={fs(24)}>
                    {top.title}
                  </h4>
                  {cta && (
                    <div className="menu_cta">
                      {ctaImage(cta.image, "", desktop ? "entered error" : "")}
                      <p style={fs(16)}>{cta.text}</p>
                      <NavLink desktop={desktop} href={cta.button.href} className="gradient-btn__blue" style={fs(16)}>
                        {cta.button.label}
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
              <div className="sub_menus_box">
                <div className="dynamic-content-wrapper">
                  <div className="menus_row">
                    {hasColumns ? top.children.map(column) : flatList(top.children)}
                  </div>
                  <div className="menu_links active">{firstGeo.length > 0 && geoLinks(firstGeo, 14)}</div>
                </div>
                <div className="cta-wrapper__header">
                  <NavLink desktop={desktop} className="gradient-btn__blue cta-wrapper__header-link" href="/our-facilities/" style={fs(16)}>
                    Areas We Serve
                  </NavLink>
                  <p style={fs(16)}>Why I should relocate for rehab?</p>
                </div>
              </div>
            </div>
            {footerImage && (
              <div className="mobile-image-footer">{ctaImage(footerImage, "Menu CTA Image", "mobile-geo-img")}</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      {items.map((top) =>
        top.children.length > 0 ? (
          dropdown(top)
        ) : (
          <NavLink desktop={desktop} key={top.ID} href={top.url} className="main_item" style={fs(16)}>
            {top.title}
          </NavLink>
        )
      )}
    </div>
  );
}
