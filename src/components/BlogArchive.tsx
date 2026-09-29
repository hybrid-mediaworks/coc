import Image from "next/image";
import Link from "next/link";
import { fetchBlogPosts, type BlogPost } from "@/lib/wordpress";

// Blog feed shared by the blog archive (/mental-health/blog) and the staff template
// (Page55388), which lists the same posts. The newest post is always featured at the top;
// the rest are paginated below it by offset, PER_PAGE at a time, via ?page=N.
const PER_PAGE = 6;
const FALLBACK_IMAGE = { src: "/images/5a1cfc37c5f812440fa391ca2c68b620.webp", width: 676, height: 476 };

// ?page= value -> page number; null when it is not a positive integer.
export function parseBlogPage(raw: string | undefined): number | null {
  const current = raw === undefined || raw === "" ? 1 : Number(raw);
  return Number.isInteger(current) && current >= 1 ? current : null;
}

// null when `current` is past the last page.
export async function loadBlogArchive(current: number) {
  // Post 0 is always featured; page N of the grid starts after it.
  const [featured, more] = await Promise.all([
    fetchBlogPosts(0, 1),
    fetchBlogPosts(1 + (current - 1) * PER_PAGE, PER_PAGE),
  ]);
  const total = more?.total ?? featured?.total ?? 0;
  const lastPage = Math.max(1, Math.ceil((total - 1) / PER_PAGE));
  if (current > lastPage) return null;
  return { featuredPost: featured?.posts[0], posts: more?.posts ?? [], current, lastPage };
}

// WordPress paginate_links() with end_size 1 and mid_size 2, as on the live site:
// first page, current page ±2, last page, with "…" filling the gaps.
function pageNumbers(current: number, last: number): Array<number | "dots"> {
  const out: Array<number | "dots"> = [];
  let gap = false;
  for (let n = 1; n <= last; n++) {
    if (n === 1 || n === last || Math.abs(n - current) <= 2) {
      out.push(n);
      gap = false;
    } else if (!gap) {
      out.push("dots");
      gap = true;
    }
  }
  return out;
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 19L13.575 17.6L18.175 13H2V11H18.175L13.6 6.4L15 5L22 12L15 19Z" fill="#74AFB2"></path>
    </svg>
  );
}

function LearnMore({ href }: { href: string }) {
  return (
    <div className="elementor-element elementor-element-63aa943d elementor-widget elementor-widget-button" data-widget_type="button.default">
      <div className="elementor-widget-container">
        <div className="elementor-button-wrapper">
          <Link className="elementor-button elementor-button-link elementor-size-sm" href={href}>
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-icon">
                <ArrowIcon />
              </span>
              <span className="elementor-button-text">Learn More</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PostTitle({ post }: { post: BlogPost }) {
  return (
    <div className="elementor-element elementor-element-757665c7 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <h5 className="elementor-heading-title elementor-size-default">
          <Link href={post.href}>{post.title}</Link>
        </h5>
      </div>
    </div>
  );
}

function PostImage({ post, sizes, priority }: { post: BlogPost; sizes: string; priority?: boolean }) {
  const image = post.image ?? FALLBACK_IMAGE;
  return (
    <Link href={post.href}>
      <Image src={image.src} alt="" width={image.width} height={image.height} sizes={sizes} priority={priority} className="attachment-full size-full" />
    </Link>
  );
}

// Featured card (loop template 54548): image left, title and button right.
export function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <div className={`elementor elementor-54548 e-loop-item e-loop-item-${post.id}`} data-elementor-type="loop-item" data-elementor-id="54548">
      <div className="elementor-element elementor-element-d27f5d5 blog-card-v1 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-33787913 elementor-widget__width-initial elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <PostImage post={post} sizes="(max-width: 767px) 100vw, 50vw" priority />
            </div>
          </div>
          <div className="elementor-element elementor-element-5f85ab4b e-con-full e-flex e-con e-child">
            <PostTitle post={post} />
            <LearnMore href={post.href} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid card (loop template 54536): image and title, button below.
export function GridCard({ post }: { post: BlogPost }) {
  return (
    <div className={`elementor elementor-54536 e-loop-item e-loop-item-${post.id}`} data-elementor-type="loop-item" data-elementor-id="54536">
      <div className="elementor-element elementor-element-d27f5d5 blog-card-v1 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-5f85ab4b e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-33787913 elementor-widget elementor-widget-image" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <PostImage post={post} sizes="(max-width: 767px) 100vw, 50vw" />
              </div>
            </div>
            <PostTitle post={post} />
          </div>
          <LearnMore href={post.href} />
        </div>
      </div>
    </div>
  );
}

// `basePath` is the page's own path without a trailing slash; page 1 links to it bare.
export function BlogPagination({ basePath, current, lastPage }: { basePath: string; current: number; lastPage: number }) {
  if (lastPage <= 1) return null;
  const pageHref = (n: number) => (n === 1 ? `${basePath}/` : `${basePath}/?page=${n}`);
  return (
    <nav className="elementor-pagination" aria-label="Pagination">
      {pageNumbers(current, lastPage).map((n, i) =>
        n === "dots" ? (
          <span key={`dots-${i}`} className="page-numbers dots">&hellip;</span>
        ) : n === current ? (
          <span key={n} aria-current="page" className="page-numbers current">
            <span className="elementor-screen-only">Page</span>
            {n}
          </span>
        ) : (
          <Link key={n} className="page-numbers" href={pageHref(n)}>
            <span className="elementor-screen-only">Page</span>
            {n}
          </Link>
        )
      )}
    </nav>
  );
}
