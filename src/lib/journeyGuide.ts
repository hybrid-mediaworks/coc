// Journey Guide ("guided website tour") — port of the WordPress journey-guide-plugin.
// The tour is a fixed list of pages; visits are tracked in the `jg_visited` cookie as
// {"<page id>": true}, the same format the plugin's own scripts read.

export type TourPage = { id: number; label: string; path: string; thumb: string };

export const TOUR_PAGES: TourPage[] = [
  { id: 59777, label: "Protect your job while you come to treatment", path: "/protect-your-job-while-in-treatment", thumb: "/images/66b2e357729133a647af0a40aae359dd.webp" },
  { id: 54868, label: "Can Insurance cover rehab treatment?", path: "/mental-health/therapy/does-insurance-cover-residential-mental-health-treatment", thumb: "/images/8268bdbb105e28f510febf1305b65c04.webp" },
  { id: 59467, label: "Why Traveling or Staying Close to home can both be great options.", path: "/why-traveling-or-staying-close-to-home", thumb: "/images/4cb66a2a683399787b690f8aefcdb6fb.webp" },
  { id: 55098, label: "Locations & Galleries", path: "/our-facilities", thumb: "/images/a9b35d74e3a5bf18e0e9ffb351600c99.webp" },
  { id: 6354, label: "Staff page", path: "/staff", thumb: "/images/3ebaeecec0bd75f7aad77a47814b7d9e.webp" },
  { id: 5841, label: "Reviews", path: "/reviews", thumb: "/images/15feb34bc2d882f90eb99cb84cbf42f7.webp" },
  { id: 59360, label: "What to bring to treatment", path: "/what-to-bring-to-rehab", thumb: "/images/d81a7740063426ab4d9814de08ac931a.webp" },
  { id: 59580, label: "Treatment & Therapies we provide", path: "/treatment-therapies-we-provide", thumb: "/images/5122991f0d5f01987855eca7c0aca43c.webp" },
  { id: 56277, label: "Admissions Process", path: "/rehab-admissions", thumb: "/images/e67187f0cc6143b77b12261d3ecad74c.webp" },
  { id: 31, label: "Contact Us", path: "/contact", thumb: "/images/37595bb16f2a8c434d167ad312fd822f.webp" },
  { id: 9665, label: "Residential Inpatient vs Hospital Inpatient", path: "/mental-health/residential-vs-inpatient-mental-health-treatment", thumb: "/images/0655d0cd76b06efed197d64b0a275e12.webp" },
];

const COOKIE_KEY = "jg_visited";
const COOKIE_DAYS = 10;

export type Visited = Record<string, boolean>;

function readVisited(): Visited {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  if (!match) return {};
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

const normalise = (path: string) => path.replace(/\/+$/, "") || "/";

// Records the page at `pathname` as visited if it is part of the tour.
export function markVisited(pathname: string): Visited {
  const visited = readVisited();
  const page = TOUR_PAGES.find((p) => p.path === normalise(pathname));
  if (page && !visited[page.id]) {
    visited[page.id] = true;
    const expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(visited))}; expires=${expires}; path=/; SameSite=Lax`;
  }
  return visited;
}
