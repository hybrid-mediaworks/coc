import "@/app/shared/pool-a8ca03f5.css";
// Header/footer chrome and utility classes (e.g. elementor-screen-only) ship in the route
// stylesheets; this is the one that styled this URL when [slug] served it.
import "@/app/shared/pages/72abeb68b062.css";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPageData } from "@/lib/wordpress";
import { BlogPagination, FeaturedCard, GridCard, loadBlogArchive, parseBlogPage } from "@/components/BlogArchive";

// Blog archive, rebuilt from the WordPress archive template (elementor-54531) so the
// shared stylesheet styles it. The feed itself lives in BlogArchive (shared with staff pages).
const PATH = "/mental-health/blog";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData({ path: PATH, slug: "blog" });
  return {
    title: data?.seo.title || "Blog | Connections Mental Health",
    description: data?.seo.description || undefined,
    alternates: { canonical: data?.seo.canonical || `https://connectionsoc.com${PATH}/` },
  };
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const current = parseBlogPage(pageParam);
  if (current === null) notFound();
  const archive = await loadBlogArchive(current);
  if (!archive) notFound();
  const { featuredPost, posts, lastPage } = archive;

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
                  <BlogPagination basePath={PATH} current={current} lastPage={lastPage} />
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
