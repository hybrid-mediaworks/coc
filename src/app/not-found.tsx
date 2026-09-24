import "@/app/shared/pool-a8ca03f5.css";
// Header/footer chrome ships in the route stylesheets; reuse the one the other
// rebuilt pages (blog, FAQ) use.
import "@/app/shared/pages/72abeb68b062.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 404 page, rebuilt from the WordPress error-404 template (elementor-56983) so the
// shared stylesheet styles it. Rendered for unmatched URLs and for notFound() calls.
export const metadata: Metadata = {
  title: "Page not found - Connections Mental Health",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+\" elementor-page-56983\";" }} />
      <div data-elementor-type="error-404" data-elementor-id="56983" className="elementor elementor-56983 elementor-location-single">
        <div className="elementor-element elementor-element-8ea8517 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-6489def e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-4a52d40 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">Page you are looking for does not exist</h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-2915ad8 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-tablet-align-center elementor-mobile-align-justify elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link className="elementor-button elementor-button-link elementor-size-sm" href="/">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Back to Homepage</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-29516ca e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-10cd6ed elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image src="/images/49a95867cfbfe3d52f89107cf044187a.webp" alt="" width={684} height={417} priority className="attachment-full size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
