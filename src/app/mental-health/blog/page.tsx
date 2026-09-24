import "@/app/shared/pool-a8ca03f5.css";
// Header/footer chrome and utility classes (e.g. elementor-screen-only) ship in the route
// stylesheets; this is the one that styled this URL when [slug] served it.
import "../[slug]/page.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogPosts, fetchPageData, type BlogPost } from "@/lib/wordpress";

// Blog archive, rebuilt from the WordPress archive template (elementor-54531) so the
// shared stylesheet styles it. The newest post is always featured at the top; the
// rest are paginated below it by offset, PER_PAGE at a time.
const PATH = "/mental-health/blog";
const PER_PAGE = 6;
const FALLBACK_IMAGE = { src: "/images/5a1cfc37c5f812440fa391ca2c68b620.webp", width: 676, height: 476 };

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData({ path: PATH, slug: "blog" });
  return {
    title: data?.seo.title || "Blog | Connections Mental Health",
    description: data?.seo.description || undefined,
    alternates: { canonical: data?.seo.canonical || `https://connectionsoc.com${PATH}/` },
  };
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

const pageHref = (n: number) => (n === 1 ? PATH : `${PATH}?page=${n}`);

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
function FeaturedCard({ post }: { post: BlogPost }) {
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
function GridCard({ post }: { post: BlogPost }) {
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

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const current = pageParam === undefined ? 1 : Number(pageParam);
  if (!Number.isInteger(current) || current < 1) notFound();

  // Post 0 is always featured; page N of the grid starts after it.
  const [featured, more] = await Promise.all([
    fetchBlogPosts(0, 1),
    fetchBlogPosts(1 + (current - 1) * PER_PAGE, PER_PAGE),
  ]);
  const total = more?.total ?? featured?.total ?? 0;
  const lastPage = Math.max(1, Math.ceil((total - 1) / PER_PAGE));
  if (current > lastPage) notFound();
  const featuredPost = featured?.posts[0];
  const posts = more?.posts ?? [];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+\" elementor-page-54531\";" }} />
      <div data-elementor-type="archive" data-elementor-id="54531" className="elementor elementor-54531 elementor-location-archive">
        <div className="elementor-element elementor-element-1784195 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-46981a2 elementor-widget-mobile__width-auto elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="/images/735d7f4a434910a2b14b0530fca8d6c2.webp" alt="" width={365} height={537} className="attachment-full size-full" />
              </div>
            </div>
            <div className="elementor-element elementor-element-d3c29b5 e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-823c8fe elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">Our Blog</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8d7f5cb elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="/images/7bf0b19e7905ce1d68945364479ddf7f.webp" alt="" width={364} height={537} className="attachment-full size-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-59339e39 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-17a1453 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-46060007 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-a8060ab e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-7768342a elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Explore our latest articles</h2>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-7329bfb e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-2730c31a elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Want to learn more about substance abuse and addiction problems? Take a look at some of our newest articles on the Renaissance Recovery blog.</p>
                    </div>
                  </div>
                </div>
              </div>
              {featuredPost ? (
                <div className="elementor-element elementor-element-8539ac1 elementor-grid-1 elementor-grid-tablet-1 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid" data-widget_type="loop-grid.post">
                  <div className="elementor-widget-container">
                    <div className="elementor-loop-container elementor-grid" role="list">
                      <FeaturedCard post={featuredPost} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="elementor-element elementor-element-c30dfd9 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-d8588cc elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">More articles</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-6f6e29cd archive-blog-posts-loop-grid elementor-grid-2 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid" data-widget_type="loop-grid.post">
                <div className="elementor-widget-container">
                  <div className="elementor-loop-container elementor-grid" role="list">
                    {posts.map((post) => (
                      <GridCard key={post.id} post={post} />
                    ))}
                  </div>
                  {lastPage > 1 ? (
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
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-629572d e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-0be79f9 e-con-full blog-last-sec e-flex e-con e-child">
              <div className="elementor-element elementor-element-88b7bdc elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">You’re Not Alone.</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-a0ebb24 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial cta-para elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Get treatment from a team of expert staff who is passionate about helping you experience peace.</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-403cb8d elementor-align-left elementor-mobile-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:844-759-0999">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Call Now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
