import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout4 from '../layouts/Layout-4';


export default function Reviews(props: Record<string, string>) {
  const brand = props.brand ?? "Connections Mental Health";
  const year = props.year ?? "2025";
  return (
    <Layout4>
      <div id="content" className="site-main post-5841 page type-page status-publish has-post-thumbnail hentry">
        <div className="page-content">
          <div className="elementor elementor-5841">
            <div className="elementor-element elementor-element-85ba5db e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-d2beed8 elementor-widget-mobile__width-auto elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/735d7f4a434910a2b14b0530fca8d6c2.webp" width={365} height={537} alt="" className="attachment-full size-full wp-image-54516 entered error" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-e64c913 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-4ee1960 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Our Reviews</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-48b458e elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Real words from real people who walked through our doors. Every story shared below represents a life reclaimed — and it’s the exact reason we do what we do at Connections.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-88dc5a0 elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/7bf0b19e7905ce1d68945364479ddf7f.webp" width={364} height={537} alt="" className="attachment-full size-full wp-image-54517 entered error" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b344e8a e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-3afb762 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Treatment Guidance Website Tour</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2670c88 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>After reading this current page, click on the next page we recommend here, or at the bottom of this page.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fc9afca elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div id="jg-guided-tour" className="jg-sc-guided-wrap">
                        <div id="jg-guided-multi" className="jg-sc-guided jg-guided-multi">
                          <div className="jg-guided-col jg-guided-left">
                            <h3 className="jg-guided-heading">Last Page Visited</h3>
                            <h3 className="jg-guided-heading jg-icon-list">
                              {" "}
                              <link rel="preload" as="image" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" fetchPriority="high" /><img fetchPriority="high" src="/images/31cfb037858751399a6f0b354f9d2c67.svg" alt="check-icon" className="jg-guided-heading-icon" />
                              {"Last Page Visited: "}
                            </h3>
                            <div className="jg-guided-visited-list">
                              <ul className="jg-guided-visited-items"></ul>
                            </div>
                          </div>
                          <div className="jg-guided-col jg-guided-center">
                            <div className="jg-guided-img-wrap">
                              <img loading="lazy" src="/images/a0a6c9cd21c84889b34601bb3c2fbc3b.webp" alt="" className="jg-guided-img jg-guided-current-img" />
                              <div className="jg-guided-img-label">
                                <h3 className="jg-guided-heading jg-icon-list">
                                  {" "}
                                  <img loading="lazy" src="/images/31cfb037858751399a6f0b354f9d2c67.svg" alt="check-icon" className="jg-guided-heading-icon" />
                                  {" Current Guided Tour Page: "}
                                </h3>
                                <strong className="jg-guided-current-label"></strong>
                              </div>
                            </div>
                          </div>
                          <div className="jg-guided-col jg-guided-right">
                            <h3 className="jg-guided-heading jg-guided-next-heading">Next Page in tour</h3>
                            <ul className="jg-guided-next-list">
                              <li className="jg-guided-next-item">
                                <Link href="/reviews/#" className="jg-guided-next-link jg-guided-next-primary" />
                              </li>
                              <li className="jg-guided-complete-item">
                                <span className="jg-guided-next-link jg-guided-complete-msg">You have completed the guided site tour.</span>
                              </li>
                              <li className="jg-guided-divider"></li>
                              <li>
                                <span className="jg-guided-next-link jg-guided-view-full">
                                  <img loading="lazy" src="/images/d9d39b93d1be9517fe04969b782997a6.svg" alt="" className="jg-guided-view-full-icon" />
                                  {" View Full Guided Site Tour"}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="jg-guided-single" className="jg-sc-guided jg-guided-single">
                          <div className="jg-guided-col jg-guided-left">
                            <h3 className="jg-guided-heading">Guided Website Tour</h3>
                            <div className="jg-guided-visited-progress">
                              <span className="jg-gv-check">✓</span>
                              <span className="jg-gv-label">Last Pages Visited</span>
                              <div className="jg-gv-bar">
                                <div className="jg-gv-bar-fill"></div>
                              </div>
                            </div>
                            <ul className="jg-guided-visited-items">
                              <li>
                                <Link href="/reviews/" className="jg-gvi-link" title="Go back to Reviews">
                                  <span className="jg-gvi-num">6</span>
                                  <span className="jg-gvi-label">Reviews</span>
                                </Link>
                              </li>
                            </ul>
                            <hr className="jg-guided-hr" />
                            <p className="jg-guided-count-label">11 Page Guided Tour</p>
                          </div>
                          <div className="jg-guided-col jg-guided-center">
                            <div className="jg-guided-img-wrap">
                              <Image src="/images/a0a6c9cd21c84889b34601bb3c2fbc3b.webp" width={382} height={398} alt="" className="jg-guided-img jg-guided-current-img entered error" />
                              <div className="jg-guided-img-label">
                                <h3 className="jg-guided-heading jg-icon-list">
                                  {" "}
                                  <Image src="https://connectionsoc.com/wp-content/uploads/2026/06/Fram54e.svg" width={24} height={24} alt="check-icon" className="jg-guided-heading-icon entered error" />
                                  {" Current Guided Tour Page: "}
                                </h3>
                                <strong className="jg-guided-current-label">Reviews</strong>
                              </div>
                            </div>
                          </div>
                          <div className="jg-guided-col jg-guided-right">
                            <h3 className="jg-guided-heading jg-guided-next-heading">Next Page In Tour</h3>
                            <ul className="jg-guided-next-list">
                              <li className="jg-guided-next-item">
                                <Link href="/protect-your-job-while-in-treatment/" className="jg-guided-next-link jg-guided-next-primary">
                                  <span className="jg-gvi-num">1</span>
                                  <span>Protect your job while you come to treatment</span>
                                </Link>
                              </li>
                              <li className="jg-guided-complete-item">
                                <span className="jg-guided-next-link jg-guided-complete-msg">You have completed the guided site tour.</span>
                              </li>
                              <li className="jg-guided-divider"></li>
                              <li>
                                <span href="/protect-your-job-while-in-treatment/" className="jg-guided-next-link jg-guided-view-full">
                                  <Image src="https://connectionsoc.com/wp-content/uploads/2026/06/Frame45te4t.svg" width={28} height={28} alt="" className="jg-guided-view-full-icon entered error" />
                                  {" View Full Guided Site Tour"}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="jg-guided-none" className="jg-sc-guided jg-guided-none">
                          <h3 className="jg-guided-heading jg-guided-none-heading">Start Full Guided Site Tour</h3>
                          <div className="jg-guided-none-body">
                            <div className="jg-guided-none-left">
                              <Link href="/reviews/#" className="jg-guided-none-link jg-guided-none-p1" />
                            </div>
                            <div className="jg-guided-col jg-guided-center">
                              <div className="jg-guided-img-wrap">
                                <img loading="lazy" src="/images/a0a6c9cd21c84889b34601bb3c2fbc3b.webp" alt="" className="jg-guided-img" />
                                <div className="jg-guided-img-label jg-guided-img-label-cta">
                                  <span className="jg-guided-next-link jg-guided-view-full">
                                    <img loading="lazy" src="/images/d9d39b93d1be9517fe04969b782997a6.svg" alt="" className="jg-guided-view-full-icon" />
                                    {" View Full Guided Site Tour"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="jg-guided-none-right">
                              <Link href="/reviews/#" className="jg-guided-none-link jg-guided-none-p2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ddf2a16 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-27c38b5 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">What Our Clients Say</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c215572 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div className=" ti-widget " data-pid="8eaa7f977e02684714667b2799b">
                        <div className="ti-widget-container ti-col-5">
                          <div className="ti-widget-header">
                            <div className="ti-platform-tabs">
                              <div className="ti-platform-tab-items">
                                <div className="ti-tab-item ti-tab-active">
                                  <div className="ti-item-label">All reviews</div>
                                </div>
                                <div role="button" className="ti-tab-item" aria-label="Google reviews">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" className="ti-platform-icon" />
                                  <div className="ti-item-label">Google</div>
                                </div>
                                <div role="button" className="ti-tab-item" aria-label="Yelp reviews">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" className="ti-platform-icon" />
                                  <div className="ti-item-label">Yelp</div>
                                </div>
                              </div>
                              <div className="ti-platform-tab-nav">
                                <div role="button" className="ti-arrow-next" aria-label="Next platform"></div>
                                <div role="button" className="ti-arrow-prev" aria-label="Previous platform"></div>
                              </div>
                            </div>
                            <div className="ti-header-content source-all ti-active">
                              <div className="ti-header-rating-text">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 5" className="ti-star f" />
                                </span>
                                <span className="ti-header-rating">4.9</span>
                                <span className="ti-header-rating-reviews">135 reviews</span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-header-rating">4.9</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Default/star/f.svg" width={17} height={17} alt="Trustindex star 5" className="ti-star f" />
                                </span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-header-rating-reviews">135 reviews</span>
                              </div>
                              <div className="ti-header-write-btn-container">
                                <Link href="" role="button" className="ti-header-write-btn" aria-label="Write a review">Write a review</Link>
                                <div className="ti-write-btn-dropdown">
                                  <div className="ti-write-btn-dropdown-inner">
                                    <a href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJd4fSyQDR3IAROK8XU_ZQD1c" rel="noopener nofollow" role="button" className="ti-write-btn-dropdown-item" target="_blank" aria-label="Write a review to Google">
                                      {" "}
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" className="ti-platform-icon" />
                                      {" Google "}
                                    </a>
                                    <a href="https://www.yelp.com/writeareview/biz/connections-mental-health-tustin-3" rel="noopener nofollow" role="button" className="ti-write-btn-dropdown-item" target="_blank" aria-label="Write a review to Yelp">
                                      {" "}
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" className="ti-platform-icon" />
                                      {" Yelp "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ti-header-content source-Google">
                              <div className="ti-header-logo">
                                <Image src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" width={150} height={21} alt="Google" className="ti-header-logo-img" />
                              </div>
                              <div className="ti-header-rating-text">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                </span>
                                <span className="ti-header-rating">4.9</span>
                                <span className="ti-header-rating-reviews">123 reviews</span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-header-rating">4.9</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                </span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-header-rating-reviews">123 reviews</span>
                              </div>
                              <div className="ti-header-write-btn-container">
                                <a href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJd4fSyQDR3IAROK8XU_ZQD1c" rel="noopener nofollow" role="button" className="ti-header-write-btn" target="_blank" aria-label="Write a review to Google">Write a review</a>
                              </div>
                            </div>
                            <div className="ti-header-content source-Yelp">
                              <div className="ti-header-logo">
                                <Image src="https://cdn.trustindex.io/assets/platform/Yelp/logo.svg" width={150} height={21} alt="Yelp" className="ti-header-logo-img" />
                              </div>
                              <div className="ti-header-rating-text">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/h.svg" width={17} height={17} alt="Yelp star 5.0.7" className="ti-star h" />
                                </span>
                                <span className="ti-header-rating">4.7</span>
                                <span className="ti-header-rating-reviews">12 reviews</span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-header-rating">4.7</span>
                                <span className="ti-stars">
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                  <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/h.svg" width={17} height={17} alt="Yelp star 5.0.7" className="ti-star h" />
                                </span>
                              </div>
                              <div className="ti-header-rating-text ti-mobile">
                                <span className="ti-rating-text">Excellent</span>
                                <span className="ti-header-rating-reviews">12 reviews</span>
                              </div>
                              <div className="ti-header-write-btn-container">
                                <a href="https://www.yelp.com/writeareview/biz/connections-mental-health-tustin-3" rel="noopener nofollow" role="button" className="ti-header-write-btn" target="_blank" aria-label="Write a review to Yelp">Write a review</a>
                              </div>
                            </div>
                            <div className="ti-widget-header-tick"></div>
                          </div>
                          <div className="ti-reviews-container">
                            <div className="ti-reviews-container-wrapper">
                              <div className="ti-column">
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg" alt="sarah cromar profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sarah C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 31, 2026 at 5:14 AM GMT+5</span>
                                            {" 1 month ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I came to this place, unsure of what to experience and hoping for help. I have experienced significant improvement for a New starting in life. I am forever grateful for what this place has provided to me not only the staff, but also the clients to relate to. This organization has provided so much support to all needs of each client regardless other situation and background. The people here are totally friendly and helpful and have become like family throughout my stay. For anyone that needs supp</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-09.svg" alt="A.J. Ortega profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">A.j. O</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 9, 2026 at 9:43 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"A close friend of mine recently received treatment at Connections OC Mental Health in Tustin, and I couldn't be more impressed with the care they received. From what they shared, the staff was incredibly compassionate, professional, and genuinely invested in helping them succeed. They always felt supported, respected, and encouraged throughout their time there."}
                                        <br />
                                        <br />
                                        {"The facility itself was clean, welcoming, and created a comfortable environment for healing. My friend spoke very highly of the therapists, case managers, and the entire team, saying they went above and beyond to make a difficult time much easier to navigate."}
                                        <br />
                                        <br />
                                        {"I'm grateful places like Connections OC Mental Health exist for people who need support. Based on my friend's experience, I would highly recommend them to anyone seeking quality mental health treatment."}
                                      </div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg" alt="Emily W. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Emily W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 23, 2026 at 5:00 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Had a fabulous time. Felt like the Ritz Carlton in Beverly Hills compared to being in a psych ward such as College Hospital Cerritos. Vibes - immaculate, food - 8/10, therapy - fun and intriguing, the setting was swanky, the psychiatrist was the only downfall bc they were nonexistent LOL that was the hardest part of my stay bc the first night you are detoxing from ALL meds, yes even prescription ones. The lovely staff who are just doing their jobs have to deal with the fallout of those of us who"}
                                        <br />
                                        <br />
                                        {"Though that culture shock is very jarring. It actually helps greatly to learn what are the root causes of your pain so you can actually work towards addressing that, instead of masking it with medication, which is a true crisis in our nation currently."}
                                        <br />
                                        <br />
                                        {"Anyhoo, had a great time. Truly reflected on myself and why forgiveness towards myself is such a hard thing for me to accept as well as learning to lower the standards that I set upon myself. Bc truthfully, the longest relationship any of us will ever have, is with ourself. Idk about you but I'd much rather be stuck with my best friend and not my most evil foe."}
                                      </div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLr_E-EpsoSlX465WCQncoU88UezcwqZNkf3k-XTWBjCqqY=w40-h40-c-rp-mo-br100" alt="Martini Nash profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Martini N</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 28, 2026 at 8:20 PM GMT+5</span>
                                            {" 3 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I spent about 45 days here and never encountered any problems. The staff here was amazing as well as the clients I got to be around. I was able to build positive relationships with everyone I came across while getting the help I desperately needed. I recommend anyone who is struggling to mentally, give Connections a call. I flew out here all the way from Missouri and had the time of my life!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUtjWEZAH6h0XJ5Wqd35GjiDS8Le7gxS1NVsuKvwC4VJrkJokhq=w40-h40-c-rp-mo-br100" alt="Albert Aguilar profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Albert A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 15, 2026 at 7:23 PM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I was just discharged from the Orange location and my stay was incredible. Awesome and attentive staff; great food; family like atmosphere. I felt supported 100% of the way. If you’re struggling and thinking about residential treatment, Connections is the way to go!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVjx3MTJ4VoKBNbbR24INT1UDF_2Joj-r2wfiD5FY4yEiXtsIxo1g=w40-h40-c-rp-mo-br100" alt="Jonathan Bueno profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jonathan B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 1, 2026 at 10:22 PM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">A close friend of mine had a positive experience at Connection Mental Health Treatment Program. The staff is supportive, professional, and genuinely committed to helping clients grow and succeed. A special shoutout to Jeff Robinson, he is a wonderful case manager who truly cares about his clients. He goes above and beyond to make sure people feel heard, supported, and on the right path. I highly recommend this program to anyone seeking quality mental health care.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKtSgfIHm6okOQYRWEL0c2NEJpJYiXsM_H70LCC97A6eNLm8w=w40-h40-c-rp-mo-br100" alt="Gabrielle Piche profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Gabrielle P</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 6, 2026 at 11:09 PM GMT+5</span>
                                            {" 5 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections Has been very good to my mental Health and helped me find my true self! Thank you</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXO7xG3qJPrG6Hoj-dVov1Yhdjcg_Y8aaUmqIpVQN7CsgYcMG8X=w40-h40-c-rp-mo-br100" alt="Bryan Munroe profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Bryan M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 12, 2026 at 11:11 AM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections was the best experience I’ve ever had at a treatment facility. I’ve been struggling with my alcoholism and addiction for over 25 years and Connections was the first mental health treatment center where I have been able to get help with the trauma I’ve experienced in my life.  I was able to get to the root causes of why I have drank and used for the majority of my life. The staff at Connections are so kind, caring and understanding that ithey helped my anxiety and stress fade almost i</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX9vPLSXaJ5y7z43n7zJ_gE-9KHV_qgRZNtvM6UrClQHwibW1ol=w40-h40-c-rp-mo-br100" alt="Maxwell Matthews profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Maxwell M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">January 8, 2026 at 8:22 AM GMT+5</span>
                                            {" 8 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I stayed here for over 40 days. The staff here are incredible. Everyone is so kind and friendly. The house is clean and well managed. I felt very safe and supported while staying here. If I had ever need to stay or need help and seek residential care again. With no doubt, I would return here in a second. Can’t recommend enough.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJulWgY0wvqrIMxcLTBUmFa6U_EwcVWAORRPr_aV3xA28Ht7w=w40-h40-c-rp-mo-br100" alt="Dargan Rogers profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Dargan R</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">December 31, {year} at 10:20 PM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Connections is a supportive and welcoming mental health facility that truly prioritizes patient care. From the moment you walk in, the environment feels calm and respectful, which makes a big difference when seeking help. The staff are compassionate, attentive, and genuinely invested in each individual’s well-being."}
                                        <br />
                                        {"The therapists and counselors take time to listen and create personalized treatment plans rather than using a one-size-fits-all approach. Appointments are handled professionally, and communication is clear, which helps reduce stress during the treatment process. The facility itself is clean, organized, and designed to feel safe and comfortable."}
                                        <br />
                                        {"Overall, Connections provides a positive and encouraging space for mental health support. It’s a place where people can feel heard, respected, and supported on their journey toward better mental health."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVjKGAHt81AzWCkuDdE43x2QdFJi1Ith5Wd6F7-ktuZMPNHDccX=w40-h40-c-rp-mo-br100" alt="Fire Coeli profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Fire C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 20, {year} at 10:12 PM GMT+5</span>
                                            {" 10 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections OC at Bigelow Park both changed and saved my life. I will be forever grateful for all of the help, support, and guidance that the staff provided. They even embraced my ESA pet. I’m also grateful for all of the tools I learned that will help me moving forward. My time spent there was priceless.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg" alt="Dan F. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Dan F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 7, {year} at 5:00 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Just finished residential treatment here and onto the php program the staff and clients are all super caring and kind. It feels like a real home and a family!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWwDjLAQkWuuJdpEwUYu0k1kgfEHXr4zbtuVqUKJNfv_eEEI4E=w40-h40-c-rp-mo-br100" alt="Isaiah Alcocer profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Isaiah A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 22, {year} at 2:50 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park has been an incredible experience for my family. A family member of mine went through their program, and every part of their stay exceeded our expectations. Their case manager, Manny Espinoza, was especially supportive — always there to help with anything they needed and to make them feel comfortable and cared for. The facility itself is beautiful, with a full-time chef who prepares amazing meals, great therapy sessions, and truly impactful groups. It made</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKrGDpqr4FdUj6H6Zbq6F_cGy0UBZUT7LQjThmSKLTX1rS1lQ=w40-h40-c-rp-mo-br100" alt="Stephanie Garcia profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Stephanie G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 26, {year} at 2:46 AM GMT+5</span>
                                            {" 12 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" width={17} height={17} alt="Google star 5" className="ti-star e" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I would recommend this place. I feel like God guided me here, so it’s been heaven sent. All the staff make you feel welcomed and loved. They’re very professional. I love the holistic approaches such as sound baths, cupping, etc and helping me get a medical massage appt made. Staff that stood out was Allie, Mary, Leon, Alissa,  case manager manny, therapist Matt. They all were exceptional at what they do. For example Allie would listen intently when we needed to cry or vent and had positive feedb</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUk7hJqobbkqUxKzWLwgMhlZHgzkoWbTvbmh-c-I7pKN8cbkwIp=w40-h40-c-rp-mo-br100" alt="Rowan MacBride profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Rowan M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 3, {year} at 12:12 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a good place to take time for yourself to not only stabilize your mental health, but also relearn things about yourself, process difficult memories and emotions, form strong bonds with people inside this treatment center and in your life outside of here. If you are looking for things that make life worth living, this is a great opportunity. Also Dave Jeff and Ryan are pretty cool so that’s good too.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIVZE6js2iOIXPQWgGAZRh7VFsUxWneG6Bdl4KRjwGRHV_YRQ=w40-h40-c-rp-mo-br100" alt="mark ballard profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Mark B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 14, {year} at 2:10 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Had a great experience with connections. Pablo did great with my family member we were kept informed throughout the entire process and felt really well prepared for our loved to return home</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVrc0GxImR4IZbf6M33xv-SrOWrOp7huz8qipejAvedZa8k-RI=w40-h40-c-rp-mo-br100" alt="Brady Sellers profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Brady S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 25, {year} at 8:09 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Amazing program with amazing staff highly recommend</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIJgWxWioQ2dirP8ZGj4nm90tMncqtnectHd69gxuk-mO53hA=w40-h40-c-rp-mo-br100" alt="Randy Jones profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Randy J</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 24, {year} at 10:50 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park was the right place at the right time for our loved one. The building is clean, safe, and honestly quite beautiful—just the kind of setting that encourages healing. The meals were top-notch, thanks to a chef who makes fresh, high-quality food any time of day. We didn’t expect that level of care, and it really made a difference. The staff showed genuine kindness, and Manny Espinoza, the case manager, was especially helpful. He gave us solid support and reso</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX5oC4qKgWYbnII4lp4cHma465HHoo7wsnVzJ83gLcE938X2EIo=w40-h40-c-rp-mo-br100" alt="Kimberlee Hamilton Jones profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Kimberlee H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 30, {year} at 9:03 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Sending my son to Connections was one of the hardest decisions we have ever had to make, but also one of the best. From day one, the staff made us feel supported, informed, and genuinely cared for. I could tell they truly understood what we were going through. The level of attention and compassion they showed—not just to my son, but to our whole family—was incredible. Watching him begin to heal, regain confidence, and reconnect with life has been nothing short of amazing. I’m so thankful to Conn</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUMN-3lb_6hdEYNNlTl-SaSRktShS__GvnOWVa3oy4cBm8EIaVo=w40-h40-c-rp-mo-br100" alt="Christina Garcia profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Christina G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 8, {year} at 11:09 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">From the environment to the staff, Connections in Villa Park sets a high standard for mental health treatment. The facility is pristine and well-designed, offering a quiet, secure space to heal. The in-house chef delivers exceptional meals that feel personalized and nourishing. I’m especially thankful for Manny Espinoza, the case manager, whose support, care, and resource referrals made a world of difference. Highly recommend this program to anyone in need of compassionate, professional help.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLo-zyFZQK2rm19it-5mjmtKpiEJdE2RuiOgu6pxY9sr_vtgA=w40-h40-c-rp-mo-br100" alt="simon muy profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Simon M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 4:09 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">This place has been a great experience. I was addicted to cocaine and alcohol for over 13 years and finally sought out help. They’ve changed my outlook on life and kept me striving through hard times</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWE9m1yxXoQyRSzQvf3urNNEzq22WuMCjNTS7iZIdnvBErNRw7l=w40-h40-c-rp-mo-br100" alt="Hillary Delira profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Hillary D</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 29, {year} at 11:38 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The staff is so friendly and professional. I was really struggling and they helped me get through one of the darkest times in my life. Thank you Connections!!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJVvo86gj7_8zK-v3q1E0Pm3mfVMLQWA0PbahX_V-6ESPyy=w40-h40-c-rp-mo-br100" alt="Bradley McIntosh profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Bradley M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 6:37 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections mental health turned out being the best thing I never thought I needed. The staff was extremely professional and kind and help me immensely in my early stages of sobriety. I was extremely apprehensive in regards to treatment and sobriety in general and they met me exactly where I was at and were able to help me work through those fears become the person I am today. They were very in tune with the sobriety community in the area and were able to help me build a foundation to stay sober</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXDWp7SZlqCp-kAJpViWvYnMOHkDlAruqEbd6v0tCFBZy4ba841=w40-h40-c-rp-mo-br100" alt="York-Houngan profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">York-Houngan</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 8, {year} at 4:30 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Going to Connections was a life changing experience for me. The name is fitting for it because the way it is setup encourages you to connect with clients and staff."}
                                        <br />
                                        {"I have been to other residential treatment centers that were good but at some of them I felt like the layout encouraged isolation when not in groups. Connections gives the feeling of communal living with people with a common goal of recovering."}
                                        <br />
                                        {"The staff are all amazing and super helpful. Jeff is a great case manager who will go out of his way to help. Pablo helped me a lot and gave great advice. Melia cares about the clients and does optional morning book studies that are helpful. Bekah, J, and Dave are also great. I could keep listing off staff members but my point is that they’re all there to help you and make you feel at home."}
                                        <br />
                                        {"The groups give a good personal feeling and many of them feel like sitting around having meaningful conversations about mental health and substance use. They sometimes will take clients on walks around the area and do regular vape and smoke runs. I’m thankful for having gone there and would recommend it to anyone seeking recovery. The combination of 12 steps, mental health, and yoga/sound bowls/meditations gives a well-rounded approach to recovery and the therapists are great. Ryan the therapist"}
                                        <br />
                                        {"If you’re considering going there, I would highly recommend it and good luck to everyone seeking treatment."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWR_qkeMj5RMuQm0iFcTITx6t1D2Xy-MJHhX1Yadf7-Xc-a-vP-=w40-h40-c-rp-mo-br100" alt="Christian Gomez profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Christian G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 17, 2024 at 12:35 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">A safe haven for anyone looking to recover. Beautiful facility with qualified who go above and beyond.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-column">
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-09.svg" alt="River Cooksey profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">River C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 16, 2026 at 12:38 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections Mental health definitely saved my life. I was going through the hardest time in my life when I found out about connections. When I got there I was nothing but welcomed and supported in every way. Staff is incredibly supportive and helpful and nothing but kind and understanding. Allison, Dave, Eric, Ryan, and Jeff did nothing but the absolute best they could to help me be supported. They are the biggest contributors to my healing journey here. When I got here I had doubts at getting h</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-02.svg" alt="Pascual A. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Pascual A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 8, 2026 at 5:00 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Facility is clean, staff is beyond amazing because they truly care about each individual</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-07.svg" alt="Carolyn profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Carolyn</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 20, 2026 at 3:15 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections residential behavioral health changed my life. I can not recommend this program enough. It transformed me at my core and healed me in ways I couldn’t have imagined. Their staff is beyond amazing. My case manager was incredibly kind, compassionate and patient. He shows understanding and has always been there for his clients. It can be nerve wracking to make the first step toward healing but if you’re reading this and struggling to make the call- I highly recommend that you do. The beh</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXbpPodAbID-s6PxCJzWkX41nAcRNuQ6_XblCsNbxJdjVT6F8vceg=w40-h40-c-rp-mo-br100" alt="Rina Sands profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Rina S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 27, 2026 at 9:02 AM GMT+5</span>
                                            {" 3 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" width={17} height={17} alt="Google star 5" className="ti-star e" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I was at Connections for about 8 days for trauma. Connections is a smaller facility that hosts 6 clients at the most. I love the smaller setting because I was able to connect and get to know everyone in the house well. The facility is beautiful and clean. My case manager is Angelina, and she is the sweetest person who always try to accommodate your needs and made your stay comfortable.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVr3z8KzbLquHS41rMrK_XKWJsKUpLZKF_qeYthCVfxaqff-OJsqw=w40-h40-c-rp-mo-br100" alt="Marcus Harper profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Marcus H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 14, 2026 at 2:29 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">This clinical team here is amazing. To be able to feel cared for by every staff member is unfounded in my experience which puts this place above the rest. The food was top tier too.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLu-ggFRBsjk6EQhuxNrvjea_s1dosdvtsNIbndg7CfNACmlQ=w40-h40-c-rp-mo-ba12-br100" alt="G Llavinski profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">G L</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 1, 2026 at 3:30 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My experience is as a parent of someone  who went through the district's programs.  The staff there was regularly communicating with us on how he was doing, what he was working on etc.   They obviously knew what they were doing.   I was so reassured by their communications and the results I saw in my son.  It was life changing for him and we will be forever grateful.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKptvZoI-BR_lYfiaL4FGyFAKTaBi_ilKYuCF9FsVdi75fgJQ=w40-h40-c-rp-mo-br100" alt="Chris Field profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Chris F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">March 23, 2026 at 9:28 AM GMT+5</span>
                                            {" 6 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My adult daughter had been struggling and everyone at Connections supported her as she made her journey from residential to PHP. We are especially grateful to Jeff who kept my family informed throughout.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJOm1A-_x-RzOKWL5I8ak6IJWF4TAtn4U8hIBNrHmElHwCAGw=w40-h40-c-rp-mo-br100" alt="Heir Daniel profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Heir D</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 5, 2026 at 10:44 PM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Staff was very nice and attentive , food was great and opportunities to go on outings were nice. Would recommend going here if a family member is struggling</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJeYJTA9hNpBb_RkavsLou_kT2gxag6m8u_2Gud2kOJQkbmXg=w40-h40-c-rp-mo-br100" alt="Alex Lemoine profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alex L</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">January 2, 2026 at 11:19 PM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"This place is top notch . They have a genuine caring staff that goes above and beyond to help each client individually exactly where"}
                                        <br />
                                        {"They were at . Would highly recommend."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKV9sjEgcfbFB3m8DtDRlfbVl7uJYREJ-TUzdbg8ipyEj3nGg=w40-h40-c-rp-mo-br100" alt="ayden carney profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Ayden C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">December 31, {year} at 10:14 PM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"My experience with Connections was a really positive one. The environment felt welcoming and supportive from the start, and the people there were kind, respectful, and genuinely caring."}
                                        <br />
                                        <br />
                                        {"I’m very grateful for my time with Connections and I would absolutely recommend this place to anyone looking for a comfortable, encouraging environment."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="/images/4884d415124b9e69b06d4c150b5c6060.webp" alt="Azalea S. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Azalea S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 20, {year} at 5:00 AM GMT+5</span>
                                            {" 10 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My time spent at Connections made me into a better person. I learned so much and will never forget everything that was done for me here. The staff is caring and attentive, the environment is beautiful, and the program is educational and informative. I miss Connections already!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUnSXq9vuQBZGoKpurf02xY8BY_m6Eo_Alydb5y4EgikquVMf94=w40-h40-c-rp-mo-br100" alt="sparkle Harrigan profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sparkle H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 4, {year} at 12:02 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"My daughter struggled with severe OCD, anxiety, and depression, her entire junior high years, on through to 12 grade. She dealt with a lot of bullying in school, and this made her a very timid, shy kid, who ultimatum developed"}
                                        <br />
                                        {"all these disorders, along with very intrusive thoughts. Everywhere she went, she believed everyone was looking at her and thinking negatively about her. She was very afraid of her peers, and couldn’t even make friends due to the intrusive thoughts making her believe no one liked her, and no one wanted to talk to her, which caused her to go into a shell and not be able to converse with others her age. This got worse as she got older. By 11th grade she was admitted 5150 to Fremont Hospital, and l"}
                                        <br />
                                        {"This was only the first treatment center in our long journey."}
                                        <br />
                                        {"She ultimately ended up in two other centers throughout her teen years, Only to see no difference at all in her mental health. By age 18, and her senior year of high school. We finally moved from Fresno, California, to the Los Angeles area for my husband’s job, and we found connections mental health. From the first phone call with The lady on the other line I"}
                                        <br />
                                        {"Felt comfortable, and understood, moreover; I had a strong feeling this was the perfect place."}
                                        <br />
                                        <br />
                                        {"My daughter and I showed up at the treatment home, and the intake process was a breeze! We met the entire staff who was amazing! (Especially her case manager Jeff, Who I ultimately ended up saving in my phone contact as “jeff the king!” lol)"}
                                        <br />
                                        {"from the very start, my daughter and I felt safe with one of these treatment homes finally! I couldn’t believe when I had to leave, my daughter, for the first time wasn’t crying and begging me not to leave her there. She was actually OK with me leaving this time, and gave me a hug and was ready for this journey. That is how comfortable they made her feel."}
                                        <br />
                                        <br />
                                        {"Throughout her stay here, she was able to use her phone regularly, (certain hour) and every phone call home was positive. This was a first for me because, at other places, every call was always her crying and begging to come home."}
                                        <br />
                                        <br />
                                        {"They had many fun outings, and group sessions were very educational. My daughter made strong, lasting, friendships with her roommate and other girls who were also in the program. My daughter felt seen and heard here. She told me that it was the first time she felt like she was somewhere where people actually cared about her and wanted to help her. Everyone there wanted nothing but the best for one another. Her relationships became more of a sisterhood. My daughter is home now, and we have seen a"}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocK6bLQpiLPZCVn-2k620SN8YybJBo0f_DrlAJa9x3G64aZ29g=w40-h40-c-rp-mo-br100" alt="Brian Aquino profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Brian A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 21, {year} at 8:35 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"I can’t say enough good things about Connections Mental Health in Villa Park. My family member went through their program and had such a positive, life-changing experience. Their case manager, Manny Espinoza, went above and beyond to make them feel supported and comfortable every step of the way. The home itself is beautiful — the food is amazing thanks to their full-time chef, and the groups and therapy sessions truly make an impact. This place made a real difference in our lives, and I would r"}
                                        <br />
                                        <br />
                                        {"⸻"}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocI51yRYYVT_ZPLlMw8GLD_BJ-JzSJUTAU_-hwaCaW9Nds4p=w40-h40-c-rp-mo-br100" alt="Carter profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Carter</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 23, {year} at 10:13 PM GMT+5</span>
                                            {" 12 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">i’m so very thankful for all the staff here at connections. they were always willing to help me even when i was at my lowest. thank you for everything you guys did for me!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWhKqmArdz9owkw3350ujBJq7AnisYyQBEwOYyFDMT5uDkgWeZu=w40-h40-c-rp-mo-br100" alt="Gloria profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Gloria</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 31, {year} at 9:36 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">We really appreciate the care and compassion that went into planning our family members recovery. Jeff Robbins was there every step of the way and his follow through has been amazing. We felt well informed and supported. Sometimes it takes a village and this was definitely the right place.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLTANZnMV7lvYay-lZ-kQGlc-QJc9pCEpV-jjNys1vn_6XTrA=w40-h40-c-rp-mo-br100" alt="Ross profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Ross</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 7, {year} at 11:51 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Good solid place to go to in a time of need whether you are struggling with alcoholism or a more severe mental illness. The staff are friendly and kind. The house is good typically having six people to a staff of five. This is a good program helped me out in many ways.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVi4gat4EjvtpkIktFoAtDKoI1BHCCnoxn6O82xfIh87Z_v4jjL=w40-h40-c-rp-mo-br100" alt="andria fierro profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Andria F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 25, {year} at 5:45 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The staff at Connections in Tustin  were such a blessing for my family member.   Especially Jeff who went above and beyond to make sure my family member was comfortable and felt safe to get the help they so desperately needed.  The entire staff was wonderful and welcoming.   Andria F</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJEcpg1Uha2kBPZ9G_ySTADejAzMUaM1pw1aQzos3omS7hiPw=w40-h40-c-rp-mo-br100" alt="Daniel Hernandez profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Daniel H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 24, {year} at 10:49 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park provided exactly what our loved one needed during a very difficult period. The facility is not only secure and well-maintained but also beautifully designed, creating a calm environment that supports healing. One of the unexpected highlights was the exceptional food—meals are freshly prepared by a skilled chef, offering nourishment and comfort at all hours. The staff was consistently kind and attentive, and we are especially grateful for case manager Manny</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLZxmQgJ-wWYr_Q5WUWyUycOpaCFoEaf-1x4oqCNSpbBFAejA=w40-h40-c-rp-mo-br100" alt="Eliza Blocker profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Eliza B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 29, {year} at 3:10 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Awesome place! 100% recommend.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocISmKdoYDBCbAnGpcymS_HsZRugvXJunXsI9z-1c0InI_6gnw=w40-h40-c-rp-mo-br100" alt="Nancy profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Nancy</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 7, {year} at 11:49 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Connections Villa Park is an amazing residential mental health facility. Their clinical team is outstanding , food is also amazing!"}
                                        <br />
                                        <br />
                                        {"Manny, the case manager relates to patients in an outstanding way he stands for compassion, dedication and love. I would send anyone that I love and care about here and if I ever needed it, I would return again."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKTcpzhljrH9Xj1Juu4T-rRPNx5Y2b8fBn9GUrrTHvJCF9ZJw=w40-h40-c-rp-mo-br100" alt="Alisia Magallanes profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alisia M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 3:57 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I would recommend Connections to anyone. Im sober, healthy, &amp; most of all happy. I wouldn't be able to do it without the staff. they're the most down to earth people &amp; i will ever hold each and every one of them close to my heart.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLFuxeLMb3S7qQeIp447Vfk0ejg-Vjq5oIHOubqNSA4GHzAVQ=w40-h40-c-rp-mo-br100" alt="Dravyn profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Dravyn</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 26, {year} at 2:01 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Great place for people looking for a mental/drug related rehabilitation, Nice and awesome staff and great communication between you the client and then</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWytPU-GlhoPORDL3hLNFh9rZVokreOGO8mWL6XpooZxypeDqq2aQ=w40-h40-c-rp-mo-br100" alt="brianna aquino profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Brianna A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 6:27 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The staff here are kind, professional, and truly care about their clients. Bringing my loved one here was the best decision I made. I felt supported every step of the way. Their case manager, Manny, is a great guy and played a big part in helping change my loved one’s life. Highly recommend for anyone seeking quality mental health care</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVeHrXWbOZ_-JakvzxdFeyHLuMJNXgCndImKCw25XTQxlfQXcbp=w40-h40-c-rp-mo-br100" alt="Derek Velker profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Derek V</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 9, 2024 at 5:12 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Was looking for treatment for a close friend of mine. There is a lot of places who I could tell just didn’t care, but Connections made it very clear it was a priority to them. From the first call, they made the process smooth and accommodating to make sure my friend had a smooth intake process for something that was very difficult for him. Thank you to all of the staff!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJ_HiMgmXhfmCgwHfGyoF4gS8SwKpVzmG83RH6d4xtqwfPgHw=w40-h40-c-rp-mo-br100" alt="Brennan Clarke profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Brennan C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 10, 2024 at 1:31 AM GMT+5</span>
                                            {" 2 years ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">When sending a loved one to get treatment you want to know they’re going to a safe, professional environment. The facility is as described and run by those that truly have the experience to give that family member the opportunity to succeed in sobriety.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-column">
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg" alt="Cookim Snookims (Cookim_snookims) profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Cookim S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 14, 2026 at 8:36 PM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The Tustin home was extremely welcoming, my case worker and the staff are amazing, I came in nervous and unwell mentally and am set off on a good path to self sustain. I never would have thought I'd be where I'm at without them, the Case Manager of the Tustin location(whom I'm not allowed to name unfortunately) is an absolute dream to work with, I am glad I trusted them with my mental well being as they did their best for me and I'm now doing my best for myself.</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg" alt="Jose Melendez profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jose M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 7, 2026 at 11:36 PM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Good place all the staff were great am staff Austin wanya heath austin had great conversations with me super humble and understandin to pm staff Eddie smooth and easy going great dude. Nicky super cool and down to earth. Night shift was wonderful didnt mind me getting up tarin up cookies and milk at 3 am. Kristof my casemanager went overboard with managing my case while there did more then he should definitely put in some free overtime there, wish he could of gave me some surfing lessons but its</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-01.svg" alt="Faro Sclafani profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Faro S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 4, 2026 at 2:25 AM GMT+5</span>
                                            {" 3 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Where do I start? My 1st time in treatment I was terrified of the unknown and so many questions. Connections staff from admissions down to myCase manager, my therapist, and the staff all of them were so compassionate, patient, understanding and each and everyone went out of there way to help whatever needs that I needed. Kindness and compassion and tolerance along with the professionalism of the entire 6 weeks I was there and the changes and coping skills I developed will forever be with me to u</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="/images/51bb890309682aaeb97293cc2dccc921.webp" alt="Alison C. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alison C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 22, 2026 at 5:00 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I loved my stay here staff was really cool. They made me feel heard and wanted. Jeff is a good case manager.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXG1biJSuKqYv9sEIdwkIGXQU2_TPed7uYzIvVQzZJrwlll0M_o=w40-h40-c-rp-mo-br100" alt="Carey Yath profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Carey Y</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 14, 2026 at 2:02 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">If you are looking for a safe place to work on mental health or recovery, this is the place to be. The staff are knowledgeable, supportive, and genuinely care about the people there. They also do a great job supporting families and helping them stay involved throughout the process. The environment feels safe and welcoming, and the staff make a difficult time feel a lot more manageable. The case managers and the rest of the team are caring, understanding, and always willing to help.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX6ucaqIU5Q_eGD7fAq5aPJlDDWS_DQxSpbzSn8JI5o1x56zdc=w40-h40-c-rp-mo-br100" alt="Rebecca Bates profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Rebecca B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 1, 2026 at 12:24 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"I can’t say enough good things about this dual diagnosis residential facility. The staff truly care about each person who walks through their doors and treat clients with compassion, respect, and understanding. They provide excellent support for both mental health and substance abuse recovery, creating a safe environment where real healing can happen."}
                                        <br />
                                        <br />
                                        {"The therapists and case managers are knowledgeable, attentive, and always willing to go the extra mile. The program is structured, supportive, and focused on helping clients build the tools they need for long-term success. The facility itself is clean, comfortable, and welcoming, which makes a huge difference during the recovery process."}
                                        <br />
                                        <br />
                                        {"If you or a loved one is looking for a place that genuinely cares and provides high-quality treatment for co-occurring disorders, I highly recommend this program."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocL3BA1Kiqfp1qUicRxaxkRR9OIp864ekM7vqY47YCi_q2yJLw=w40-h40-c-rp-mo-br100" alt="Deyon Hettiarachchi profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Deyon H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">March 22, 2026 at 8:53 AM GMT+5</span>
                                            {" 6 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a safe Haven for those struggling with mental health. The facility is clean and the staff goes above and beyond to treat every client with compassion and care.  The individual therapy and groups are top-tier.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVr5TATb4Zu7L7cjFNTJIMRWrZP7c5bQnx20ezsY8-GI5cYTVbo=w40-h40-c-rp-mo-br100" alt="Madelyn Knazze profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Madelyn K</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 5, 2026 at 9:48 PM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">This place has been such a positive experience for me. The staff are incredibly kind, patient, and comforting, and you can tell they truly care about the people they help. I never felt judged, only supported and listened to. They create a really safe and welcoming environment, and I’m honestly so thankful I found this place.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVa703FagE5Pgt9noYgkEZhRp0zxivKQ_eDrwsMuUGtY_PHqIcJ=w40-h40-c-rp-mo-br100" alt="Jessica Rasberry profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jessica R</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">January 1, 2026 at 4:52 AM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is an amazing program. The group therapy and the individualized care are top notch. I would not send anybody anywhere else... they are the best. The staff are so compassionate, professional, and educated in the field of mental health.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjV18CKZpOfFEFDpIPH31Ovo2vDJ9h3_OaXDqCZiN5u6RW12MuX1=w40-h40-c-rp-mo-br100" alt="Jay Fields profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jay F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">December 23, {year} at 10:50 PM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">nah it’s a really nice place ,i like it ,christof is very cool,kya is chill,patrick is funny ,david big dawg ,he already know what’s going on what’s understood ain’t gotta be explained,but yuh its a good program hands down ,food is good ,life is good ,come connect!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIoj8SBQMwK7hZb0ZTEx33fUpV4DF6g4lPXN3nIvmOyWHy3qQ=w40-h40-c-rp-mo-br100" alt="audrey avery profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Audrey A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 18, {year} at 2:53 AM GMT+5</span>
                                            {" 10 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"I just discharged from staying here 30 days. Coming here saved my life and saved me from myself. I learned so much and have such a positive outlook on life. The staff is amazing."}
                                        <br />
                                        {"Dave- the best case manager. So funny and truly has your best interest at heart. He does what he says he’s going to do without having to remind him. My dad is also a huge fan of Dave."}
                                        <br />
                                        {"Alissa- the cutest ever. Made me so comfortable my second day and she is hilarious. She was always cleaning and making the house look great."}
                                        <br />
                                        {"Mary- she truly loves her job and the clients and has so much fun and makes things fun for the clients and advocates for them. She made me feel so emotionally safe. She truly loves taking the clients on the outings and to the gym."}
                                        <br />
                                        {"Patrick- amazing. So funny and caring and listened to me when I needed to talk about things and was upset. You can tell he genuinely cares and also played many board games with me, we had so much fun."}
                                        <br />
                                        {"Leon- the warmest and most welcoming person ever. You can tell he loves his job as well and greets each client individually and always has a smile on his face."}
                                        <br />
                                        {"Kya- makes such great conversation and truly cares. she can relate a lot and is SO supportive."}
                                        <br />
                                        {"Loea- she gets stuff DONE. She is always running around on a mission and is so efficient. When you ask for something or help she is glad to help with a smile on her face. You never feel like a burden with her."}
                                        <br />
                                        {"Matt- great therapist! listens, challenges you, and dissects what you say. he is funny and easy to warm up to."}
                                        <br />
                                        {"Joe in admissions- helped me every step of the way and explained everything I asked and was happy to. Truly cares and has followed up after. 10/10 admission process."}
                                        <br />
                                        {"Chef- so funny and real. She makes amazing food and will customize the food or substitute a meal if wanted."}
                                        <br />
                                        {"I love you all!!!"}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWp1PXZD49q9UBl6odsiCN6ce4OJa9Lxc4ShuYXsPubeSHFTB4=w40-h40-c-rp-mo-br100" alt="G0thicBunniez profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">G0Thicbunniez</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 29, {year} at 9:13 PM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Good</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJglrDivlOLcCeE6EgMl_coqaxZc7RYY_vuH2NjbD8DBZixdQ=w40-h40-c-rp-mo-br100" alt="Ge Sa profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Ge S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 18, {year} at 4:50 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        <div className="ti-review-image ti-has-more-image">
                                          <img loading="lazy" src="https://lh3.googleusercontent.com/grass-cs/ACvplmOMSqWEvwPkMku5ld2ppyyzju_N5CFROUSKl15BXQAmfKTSsPpaHLs3r4Me65mYdfK4VXx8gOHSclWUMZL4KaK-jwfcEGVo8XxmDP3bRdO7aYddaDjLu68oXwTzrrEUkw6V6P6oEyYjH1kj=k-no" alt="" />
                                          <div className="ti-more-image-count">+2</div>
                                        </div>
                                        {"This residencial facility provides exceptional service. The environment is very comforting."}
                                        <br />
                                        {"All-star staff and fantastic chef. Her food is amazingly delicious and nutritious."}
                                        <br />
                                        {"Great cognitive, dialectical, interpersonal, mindfulness and holistic (InnerG) therapy group sessions. Accommodating to each clients needs. Extracurricular activities also included. Shout out to the technicians and facilitators for the support."}
                                        <br />
                                        {"Staff: Ryan, David, Allie, Alisa, Mary, Leon, Michael, Allison, Cindy, Christian, Chef Tos, House manager Dave, Case Manager Manny, Therapists Luis & Matt and the Clinical Director Sean are wonderful!"}
                                        <br />
                                        {"Facilitators: Alex, Tori and Brailey (InnerG), Marlene, Chris, Josh and Willow are great at what they do!"}
                                        <br />
                                        {"If you or a loved one needs help. This place is highly recommended."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjW8-fL2faa7xpy3IUOFhLUQI7DAKCLrlGqz24JIFRFQq-xT_oc=w40-h40-c-rp-mo-br100" alt="Jesse Green profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jesse G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 13, {year} at 9:47 PM GMT+5</span>
                                            {" 12 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Leon made my morning by guiding me down off the a hard night of sleep. He wakes me up every morning lightly and does it with a smile every time. He does his job effortlessly. You can tell when someone is passionate about their job. He definitely is! 💪🙏❤️</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJPNXPYV2pgsAGV-BjJr2XWQx_jFAcnOJJ38BHDSF_VwWS3kQ=w40-h40-c-rp-mo-br100" alt="Julie Morton profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Julie M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 30, {year} at 10:59 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"I had the privilege of working with Connections Mental Health, and I am incredibly impressed with the level of care, compassion, and professionalism they provide. From the moment I was greeted at the airport to the moment I walked through the door, I felt welcomed and supported by their dedicated staff. The residential facility is warm, comfortable, and thoughtfully designed to promote healing. The therapist and case manager are not only highly skilled but truly invested in the well-being of eac"}
                                        <br />
                                        <br />
                                        {"I particularly appreciated the personalized treatment plans and holistic approach they take to mental health/substance use disorder, combining therapy, support groups, and wellness practices to address the mind, body, and spirit. It's clear that the staff at Connections are deeply passionate about their work and genuinely care about helping their clients recover and thrive."}
                                        <br />
                                        <br />
                                        {"If you or a loved one is seeking support for mental health challenges, I wholeheartedly recommend Connections Mental Health. They offer a safe, nurturing environment for anyone in need of guidance and healing."}
                                        <br />
                                        <br />
                                        {"-Julie Morton"}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocISJD8dH1G8Fu1R_OVDIFUqZCu5FpzNvil3gJ0NUhLK1WFhhQ=w40-h40-c-rp-mo-br100" alt="Olga profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Olga</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 29, {year} at 5:54 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"A close family member of mine attended this recovery center, and the transformation I’ve witnessed is nothing short of incredible. From the very beginning, the staff treated them with dignity, compassion, and understanding. They created a safe and supportive environment where real healing could take place."}
                                        <br />
                                        {"As a family, we felt included in the process and supported every step of the way. The changes we’ve seen—not just in their recovery, but in their confidence, hope, and outlook on life—are priceless. I am forever grateful to this center and its amazing team for giving my loved one a second chance at life."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjU07Ut_9hVQUQrh_NyNnMAZjsjHoKHVs7r5htFRg-6p6aV0ujI=w40-h40-c-rp-mo-br100" alt="Jeannie Marie profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jeannie M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 25, {year} at 6:39 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My 19 year old daughter has been in and out of treatment facilities for the past year and a half.  She was in treatment at connections this spring and she (we) had an absolutely wonderful experience with them throughout the entire process.  They were so kind and helpful, even months after my daughter completed the program.  She enjoyed her stay and really did well there after trying several other treatment programs that just didn't work for her.  Her therapist, Ryan, was fantastic. There are no </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="/images/0d3e6cc87e45d54b68c91e0c9c469b65.webp" alt="Alexandria G. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alexandria G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 11, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"As a therapist providing group therapy here, I can confidently say that I recommend Connections Mental Health. I get to see this treatment team in action and they really care. "}
                                        <br />
                                        <br />
                                        {"I have been brining therapy groups to Connections for years and the staff here are excellent! They really care about the clients. I always see Jeff taking the clients to the gym and Justine is always taking time to help clients individually. Arianna and Alison are like a double dose of care...I have witnessed them genuinely love on clients and make sure they feel comfortable while working on their Mental Health."}
                                        <br />
                                        <br />
                                        {"I cant forget Melia...She works in the Administration now, but I worked with her while she was at the treatment facility and she too really set a hig bar for what it means to provide caring, quality treatment to clients. As a therapist, I highly recommend Connections."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjU7fAl0hjQUCAv7XefZQM9JtEuRB6akvbIpO-g_3RgkLgqlk54=w40-h40-c-rp-mo-br100" alt="Hallie Thompson profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Hallie T</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 21, {year} at 11:42 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections was a wonderful facility for my family member. Everyone I was in contact with were very caring, compassionate and responsive, as well as generous with their time whenever I had questions. I especially appreciated the care and attention provided by the case manager, Manny. He was very kind, responsive, caring and helpful. Highly recommend!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVIVVCkkg3BKwIc54XNFxixcDCEC8_jCTCIqIGwnv6WB3_R-D-G=w40-h40-c-rp-mo-br100" alt="Maiya Gonzales profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Maiya G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 7, {year} at 11:18 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I can’t say enough good things about Connections Villa Park. From their incredible chef to the amazing clinical staff, every detail is handled with care. Manny, the case manager, was especially compassionate and supportive throughout the process. If my family ever needed mental health treatment again, this is the only place I’d trust.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUw49mhh7Kbzmw7JlWmcgtXOAw976kcDtlJpZAe8PTddHg91Idf=w40-h40-c-rp-mo-br100" alt="Hector Camaras profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Hector C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 1:22 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">If you’re looking for quality mental health care, {brand} in Villa Park is a place I wholeheartedly recommend. The staff is incredibly dedicated and supportive, and the facility is always spotless. They even have a chef preparing meals on-site, adding a special touch to the healing environment. Manny, one of the case managers, is not only professional but genuinely cares about each client. This is a well-run program that provides excellent care for those in need.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjV2xEk-WtO_7-lZM4gbkqcjcak7VdgwqcZx6fAIbVEabn2m6q2U=w40-h40-c-rp-mo-br100" alt="Tricia Yeomans profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Tricia Y</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 19, {year} at 2:38 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a unique place that happens to capture an atmosphere of peace, serenity and community. When I ask most people what they like the best, which I have to agree, is the kind and thoughtful staff, cutting-edge care, and industry leading group facilitators. Transitions are very uncomfortable, Connections provides the wholistic approach easing and padding this sensitive time.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-09.svg" alt="Nicholas T. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Nicholas T</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Great staff! Provides the highest level of care for any mental health needs. My loved one is in good hands with Connections.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWaJcwtv3TjF1_yXhqLWkYjC1zBzHYcZ7M2RMmqYkzfwlbVLojc=w40-h40-c-rp-mo-br100" alt="David Chaparro profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">David C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 29, 2024 at 1:21 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} has the most caring and qualified staff that go above and beyond for patients in their care.  The groups are outstanding and the clinical team truly cares. I personally know many of the staff there and would trust them caring for a loved one.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWQmoG-2coRYg-s5ynya9OfTTcetIc3-1GccI-W57iRX-D-irgI=w40-h40-c-rp-mo-br100" alt="Jared Swartz profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jared S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 9, 2024 at 8:50 PM GMT+5</span>
                                            {" 2 years ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections has amazing staff who are always willing to help when it is needed, and they are great at helping clients become stabilized on their medications. I highly recommend if you are looking for help with mental health</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-column">
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg" alt="jarilyn profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jarilyn</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 9, 2026 at 9:58 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My family member was really struggling with his mental health, and Connections helped him so much. Everyone there was kind and really cared about him. He’s doing so much better now and has gotten his relationship with our family back. I’m so thankful for everything they did for him.</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg" alt="Sean Saffari profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sean S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 30, 2026 at 11:27 PM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Great place. Great staff. A real safe haven for people going through challenging times.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-01.svg" alt="Sarah Karabelas profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sarah K</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 1, 2026 at 4:54 AM GMT+5</span>
                                            {" 3 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My 21 year old son flew from MN to participate in this program and it has been hands down the best decision he has ever made. He is growing confident, he is emotionally regulated, he is spiritual, and he tells me this is the happiest he's ever been. Jeff is his case manager and he keeps me informed of his progress and answers all of my questions.</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVVJhkbdBSoNvhhhJBoigllPXmSLFVs3uSmTuC_ADIh-sGp33w4=w40-h40-c-rp-mo-br100" alt="xu yinghong profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Xu Y</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 20, 2026 at 9:00 PM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I love staying here</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLEqmHSBd4tvK7C6zgiqXDX7ZbfPZuaLkSw5Bvw7T3s0C-50Q=w40-h40-c-rp-mo-br100" alt="Stephanie Novack profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Stephanie N</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 9, 2026 at 3:58 PM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I just returned home from a 40 day stay here. My experience was very good. I am much better than when I arrived. Kristof, the case manager was extremely helpful and worked tirelessly to address concerns. The staff, especially Wanye, Austin, and Carlos were so kind and understanding and gave me a lot of support and encouragement. I felt safe and supported. I would definitely recommend. I am glad I am feeling better but I miss everyone already.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJ8AR4MLaJoJZ7LfYU4mrg0-CmQMy2SJjl1SQIuAdEV5lk1dQ=w40-h40-c-rp-mo-ba12-br100" alt="Alison Hunter profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alison H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 1, 2026 at 12:14 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Great place. Cares for the clients.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVB5g9LUXBwIYeX-_ech6sxuRdhbSg8GvD34XS9XN1rvLM1lbYi=w40-h40-c-rp-mo-br100" alt="Sarah Field profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sarah F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">March 20, 2026 at 3:29 AM GMT+5</span>
                                            {" 6 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The staff here actually care about your wellbeing and success. I had a great experience and feel confident taking my next steps in my recovery journey. :)</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUzRsfjHUgya3ItfBgFxQyxgAdgxgo-osZvM6uXvi_8wqGc2vA=w40-h40-c-rp-mo-br100" alt="Rodrick Bennett profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Rodrick B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 5, 2026 at 12:25 AM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">THIS PLACE IS GREAT FROM STAFF TO THE COOK! Awesome  housing and amazing people!!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjV70R0kjtz9fAslgLGZO7uf59ImVtqri09Pv_UoMaCryuasB8hDZw=w40-h40-c-rp-mo-br100" alt="Elizabeth Wald profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Elizabeth W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">January 1, 2026 at 4:19 AM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I professionally know the group therapist, Alexandria, and she really brings the most evidenced based treatment approaches to the center. Clients always get top quality care at Connections.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIDTazXktdc8SC2mXB703BS2DSwurKk2Z4SLEhVGS3xf7FHKA=w40-h40-c-rp-mo-ba12-br100" alt="J Calderon profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">J C</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">December 22, {year} at 4:03 AM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Thank you for helping my family member. There are not words to express my gratitude. Every single person since I called last September have been communicative, supportive and beyond understanding.  Helping our family members navigate mental health and addiction at the same time is beyond exhausting.  Attending AlAnon meetings does help those of us who love our family members who suffer greatly.  Together, never alone we do recover.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWaSkTzDoZefBUvZHcTPKGQPXIxLAlpOESjYU3RTyP1M-XKn7sXTQ=w40-h40-c-rp-mo-br100" alt="Alex Sierra profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alex S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 8, {year} at 1:57 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"My time at Connections has been truly life-changing. Every person there was amazing in helping me understand my mental health and learn how to better use my coping mechanisms, all while building an incredible support system around me."}
                                        <br />
                                        <br />
                                        {"From the very beginning, the experience was seamless. After my initial contact, I was picked up by an Uber and brought to the house, where Beca and David welcomed me with kindness and care. They made my arrival experience so comforting and positive."}
                                        <br />
                                        <br />
                                        {"Throughout my stay, Justine, Allison, Loyed, and Arianna were absolutely amazing—always willing to listen and offer support when I needed it most. Jeff also went above and beyond, helping me with work-related documents and ensuring everything was taken care of."}
                                        <br />
                                        <br />
                                        {"If you’re ever struggling with your mental health, I can’t recommend Connections enough. Taking that first step can be difficult, but I can honestly say I have no regrets. This place and the people here truly care and make a difference."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjULGmIvIRdwCo6ibl68NuRgVJQhveSt_H1i_zVUXX5zIz2VPJO9=w40-h40-c-rp-mo-br100" alt="Julia Y profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Julia Y</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 28, {year} at 11:09 PM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Best experience I’ve ever had receiving unconditional, patient, and loving support around the many faces and facets of my recovery. 10/10 facility.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKv0pu1ZpOO703CnqCj9DyDy14T-5NF04XMFXJQuaycTDNP0Q=w40-h40-c-rp-mo-br100" alt="Meghan Lapolla profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Meghan L</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 17, {year} at 4:32 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I have recently completed 60 days of residential treatment at Connections OC, specifically the Villa Park house. My experience here has been eye-opening, uplifting, inspiring and transformative. I learned to better cope with chronic anxiety, depression and PTSD after many years of substance abuse and a very recent tragic loss. I appreciated the well-rounded, holistic approach to healing physically, emotionally and spiritually. I felt that my personal and professional needs were met by staff on a</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX21a8MKZPVDLja3qqPatujAmushnA40R0mYDysjkYWREp4LaaL=w40-h40-c-rp-mo-br100" alt="Yolanda Robinson profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Yolanda R</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 13, {year} at 12:46 AM GMT+5</span>
                                            {" 13 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" width={17} height={17} alt="Google star 5" className="ti-star e" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"The house was warm and welcoming, the staff was amazing, The Treatment was new to me in so many ways but extremely helpful, what i most appreciate is the care that I received ❤️ by the staff when I became sick ,from hospital to hospital they didn't stop until I received the help that was needed. That was so important being that I was so far from home 🏡 they sent staff with me at all times ,thanks Leon, Allie your care and concern for me made me feel like the Queen you called me .Now let's talk "}
                                        <br />
                                        {"Toast to the cook."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKFHHOyjndrLOQCgOrXVfPbn9ObDn7AW8nqVhVVXDQe6Qqf8g=w40-h40-c-rp-mo-br100" alt="Dani Bouchard profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Dani B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 27, {year} at 12:04 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Jeff Robbin’s thorough work made a positive impact on my recovery experience. Very personable and inspiring. Willing to work with all clients’ personal needs and wills, does his best to tailor each client conducive for their best level of treatment. JEFF ROBBINS IS THE GOAT AND DESERVES A RAISE - Danielle M. Bouchard</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUKMxzvKZNBU4-UA0oSd50XiJW8Csgg98cg8P51rt2cKAoU84Ia=w40-h40-c-rp-mo-br100" alt="isaiah boone profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Isaiah B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 26, {year} at 12:59 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Staff is awesome and extremely accommodating to each individual clients specific needs. I personally made a full turn around in mental health recovery within 30 days here and have seen the same with majority of the clients. Connections is my number one recommendation for anywhere in the country for residential mental health recovery.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg" alt="Andria F. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Andria F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 25, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">The staff at Connections in Tustin  were such a blessing for my family member.   Especially Jeff who went above and beyond to make sure my family member was comfortable and felt safe to get the help they so desperately needed.  The entire staff was wonderful and welcoming.   Andria F</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjULCqmyUnInz8ar0SkQYn2zdeZ8B41tEod1QhEz_ADlsOmLY8Q=w40-h40-c-rp-mo-br100" alt="Joseph Fortune profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Joseph F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 2, {year} at 10:22 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">It was amazing!! The staff at Connections were all excellent and the experience was exactly what I needed! 10/10 would highly recommend!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjV4LOyRh9yThLvYmZpzYMqA1-54BmWVF5ALI7r-sPSGhvCela60=w40-h40-c-rp-mo-br100" alt="Adrian Diaz profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Adrian D</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 10, {year} at 7:42 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park provided outstanding care for my family member. The facility is not only clean and beautiful but also designed to offer a safe and comfortable environment for healing. The staff is both professional and empathetic, making sure that each person feels valued and supported. A major highlight is the top-tier chef who prepares fresh meals around the clock, enhancing the overall experience. Manny Espinoza, the case manager, was incredibly helpful, offering perso</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-02.svg" alt="Pascual A. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Pascual A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Best mental health facility in Orange County. Staff is amazing and so supportive as they have first hand experience with mental health and makes them relatable. Facility is clean and in a nice neighborhood which makes all the difference. If you or your loved one is struggling I highly recommend.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocILHttaGnfT6tsMDbvRmS6HFLVXqNOq_vhsqj8XT2VIUqpkCg=w40-h40-c-rp-mo-br100" alt="Cecy Aquino profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Cecy A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 1:13 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park is an outstanding facility with top-tier staff who truly care. The environment is always clean and well-maintained, and they even have an on-site chef providing fresh meals. The staff members are compassionate and attentive, and Manny, one of the case managers, is especially kind and supportive. If your son or daughter is struggling with mental health challenges, I highly recommend this place. They run a tight ship and provide exceptional care.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjU23goVLT3qZO8wzfQpPdpXgIZeYLfxfX3Q8JHmEHS2Bh4zzoyCqg=w40-h40-c-rp-mo-br100" alt="Jon Bacak profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jon B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 8:33 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Connections OC is hands down one of the best mental health treatment centers in Orange County. The quality of care, the professionalism of the staff, and the overall environment all speak to how seriously this program takes mental health and recovery."}
                                        <br />
                                        <br />
                                        {"The clinical team is exceptional. Every therapist, group facilitator, and clinician brings a high level of skill, experience, and genuine compassion to the work they do. They take an individualized approach, meeting each client where they are and helping them make meaningful progress at their own pace. The therapeutic programming is well-rounded, thoughtful, and truly designed to support long-term healing."}
                                        <br />
                                        <br />
                                        {"The support staff is just as impressive. Everyone on the team is approachable, attentive, and goes out of their way to make clients feel comfortable and supported. You can tell this is a place where people care deeply about the work they do and the people they serve. That kind of atmosphere makes a huge difference in the treatment experience."}
                                        <br />
                                        <br />
                                        {"Connections also stands out for its extra touches, like having an on-site chef who prepares fresh, nourishing meals every day. It might seem small, but those details add up and show how much thought goes into creating a space where people can focus on healing."}
                                        <br />
                                        <br />
                                        {"The environment is structured but welcoming, and the overall atmosphere encourages growth, honesty, and connection. Everything about the program—from clinical services to day-to-day operations—is run with intention and heart."}
                                        <br />
                                        <br />
                                        {"Connections OC sets the standard for mental health treatment in the area and is truly a place where real healing happens."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-03.svg" alt="Jon B. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jon B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Connections OC is hands down one of the best mental health treatment centers in Orange County. The quality of care, the professionalism of the staff, and the overall environment all speak to how seriously this program takes mental health and recovery."}
                                        <br />
                                        <br />
                                        {"The clinical team is exceptional. Every therapist, group facilitator, and clinician brings a high level of skill, experience, and genuine compassion to the work they do. They take an individualized approach, meeting each client where they are and helping them make meaningful progress at their own pace. The therapeutic programming is well-rounded, thoughtful, and truly designed to support long-term healing."}
                                        <br />
                                        <br />
                                        {"The support staff is just as impressive. Everyone on the team is approachable, attentive, and goes out of their way to make clients feel comfortable and supported. You can tell this is a place where people care deeply about the work they do and the people they serve. That kind of atmosphere makes a huge difference in the treatment experience."}
                                        <br />
                                        <br />
                                        {"Connections also stands out for its extra touches, like having an on-site chef who prepares fresh, nourishing meals every day. It might seem small, but those details add up and show how much thought goes into creating a space where people can focus on healing."}
                                        <br />
                                        <br />
                                        {"The environment is structured but welcoming, and the overall atmosphere encourages growth, honesty, and connection. Everything about the program--from clinical services to day-to-day operations--is run with intention and heart."}
                                        <br />
                                        <br />
                                        {"Connections OC sets the standard for mental health treatment in the area and is truly a place where real healing happens."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocImjPt_eW1d_MHkUOmQAW_0v1n7yq00q6uT9F3D4K5iqEelMg=w40-h40-c-rp-mo-br100" alt="Allyson Winne profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Allyson W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 28, 2024 at 11:34 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a wonderful and much needed addition to the Orange County residential mental health treatment space. They are one of few programs in Southern California that provide individualized, gender-specific residential mental health treatment. The clinical team and staff are compassionate, trauma informed, and committed to creating a comfortable and peaceful setting for healing. I would highly recommend this program to anyone seeking personalized and effective mental health treatment.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-07.svg" alt="Jay'la P. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Jay'la P</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 27, 2024 at 5:00 AM GMT+5</span>
                                            {" 2 years ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I absolutely loved my stay here! The staff are so caring and kind. Especially the case manager and therapist, they showed me nothing but love. Im so grateful for admissions in being so helpful getting me in. It was truly a life changing experience and ill forever be in debt to Connections for helping me start my life again. Its never too late, this place showed me that. I recommended Connections to my brother and a couple friends who were in need of a safe place to heal</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ti-column">
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg" alt="Justin Tran profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Justin T</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 9, 2026 at 9:56 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"My brother was really struggling with his mental health, and going to Connections was one of the best decisions he ever made. The staff truly cared about him and gave him the support and tools he needed to get back on track."}
                                        <br />
                                        <br />
                                        {"Since completing the program, he has made so much progress. He’s happier, healthier, and has been able to rebuild his relationships with our family. Seeing the positive changes in him has been amazing. We are so grateful for everything Connections did for him, and I would recommend them to anyone who needs help."}
                                      </div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-03.svg" alt="Emily Wang profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Emily W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 24, 2026 at 4:04 AM GMT+5</span>
                                            {" 2 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Had a fabulous time. Felt like the Ritz Carlton in Beverly Hills compared to being in a psych ward such as College Hospital Cerritos. Vibes - immaculate, food - 8/10, therapy - fun and intriguing, the setting was swanky, the psychiatrist was the only downfall bc they were nonexistent LOL that was the hardest part of my stay bc the first night you are detoxing from ALL meds, yes even prescription ones. The lovely staff who are just doing their jobs have to deal with the fallout of those of us who"}
                                        <br />
                                        <br />
                                        {"Though that culture shock is very jarring. It actually helps greatly to learn what are the root causes of your pain so you can actually work towards addressing that, instead of masking it with medication, which is a true crisis in our nation currently."}
                                        <br />
                                        <br />
                                        {"Anyhoo, had a great time. Truly reflected on myself and why forgiveness towards myself is such a hard thing for me to accept as well as learning to lower the standards that I set upon myself. Bc truthfully, the longest relationship any of us will ever have, is with ourself. Idk about you but I'd much rather be stuck with my best friend and not my most evil foe."}
                                      </div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-09.svg" alt="Denise Wilinski profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Denise W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">June 1, 2026 at 1:07 AM GMT+5</span>
                                            {" 3 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I would recommend Connections to anybody who asked me. They have a wonderful staff Who treat you with such respect it is amazing. Everybody wants to help you. I felt loved and secured from the moment. I walked in the door. I was scared when I started, and I cried when I left. I learned so much. I feel confident in myself now . A confidence that I have never had before. I feel very capable of success. The instructors and Therapist are amazing. The meditation ,breathing ,exercises,therapist and cl</div>
                                      <span className="ti-read-more" tabIndex={0}>
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVaBI8rm8HIULaA03PJuV2MCdFEZ-loeU3Kuw7VtVr44c9GJ_XM=w40-h40-c-rp-mo-br100" alt="Tyler Jackson profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Tyler J</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 16, 2026 at 2:07 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} offers compassionate and professional care for individuals seeking support with their mental health. The staff is attentive, understanding, and dedicated to creating a safe and welcoming environment for healing. Clients appreciate the personalized treatment approach and the genuine support they receive throughout their journey. It’s a trusted option for mental health treatment in Orange County.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIUeyz2gGrwD4RFrHIDQGf1AvPUiNiVg6PtGle0YyJLj2myBfA=w40-h40-c-rp-mo-br100" alt="milla profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Milla</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 5, 2026 at 11:07 PM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My time at connections was by far the best out of all the treatment centers I’ve been to! Kristoff and all of the staff were so helpful and really cared about building a relationship with all the clients, which made such an incredible difference in my treatment. I highly recommend Connections and wish I had more time there, it changed my outlook on life in such a positive way, I’m very grateful for connections.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJW_9w3BQjHEunb3GJMnh_DGIX2CCpBtWXsTR3gIJbOKbNe=w40-h40-c-rp-mo-br100" alt="Bruce Robbins profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Bruce R</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, 2026 at 1:29 AM GMT+5</span>
                                            {" 4 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Great facilities and wonderful staff.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjU1okimZKj2BJizZ4R0n9K2MORtFUMhp0-4q7Wpzb1CGERaWnWBqw=w40-h40-c-rp-mo-br100" alt="Steven Perry profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Steven P</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 18, 2026 at 1:59 AM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I want really thank Ryan and Jeff for their help. They are great with my recovery. Alli and her team treated as family. When I was so far away from mine. Thanks for everything.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLrLy_CSOy5PPhnyJagGb028c3Js_eWz3D38j7C1P86qJ36VQ=w40-h40-c-rp-mo-br100" alt="Sandra Wright profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Sandra W</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">February 2, 2026 at 3:45 AM GMT+5</span>
                                            {" 7 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Jeff provided thoughtful support and suggestions. Can’t say enough good things about Connections!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXSdww4PXP89-ymrrGV_xFEMEod2mN_j7xXkimRNgTLYYqHHYI3=w40-h40-c-rp-mo-br100" alt="Street Monk profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Street M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">January 1, 2026 at 1:33 AM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">This place got me in track to success, good food and good people.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX5TFGrCKfkwMYX0ClMrduoz2kf3K0HpRD2x2AV0Bmib_Io4s8h=w40-h40-c-rp-mo-br100" alt="Chloe G profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Chloe G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">December 19, {year} at 3:38 AM GMT+5</span>
                                            {" 9 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections has been an integral part of my recovery journey. Everything from the staff to the group therapy sessions has been amazing. I’d definitely recommend Connections if you are looking for a positive, healing recovery program.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjUpNxbxTN3bL8W84HaLqjGVeUnVimvj3GcVQZikk6MciHcPQCI=w40-h40-c-rp-mo-br100" alt="Daniel Frye profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Daniel F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">November 7, {year} at 9:32 PM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Just finished residential treatment here and onto the php program the staff and clients are all super caring and kind. It feels like a real home and a family!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjVfqa3ePu4ZAYV0ZlZb6wQHd0fSYerpSV3_wgANtZguvuIRad8=w40-h40-c-rp-mo-br100" alt="Ryan profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Ryan</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 22, {year} at 6:23 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Manny was great , went for runs home was nice and well kept</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjXGEYUugZgtYyUZSP7tXWExLTNAstsAgcItWy5VdJXcjbjp0LUN=w40-h40-c-rp-mo-br100" alt="Lauren Gale profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Lauren G</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">October 17, {year} at 4:23 AM GMT+5</span>
                                            {" 11 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My expierence with connections at the villa location has been so great, I had a supportive staff, met great people and had great groups. I want to shoutout some of my favorites manny the case worker is amazing at working with our needs and wants. He will go above and beyond for you, he is a sweetheart. Mary has a beautiful soul and is one of the sweetest ladies I’ve met. Lola is also very sweet. Michael is very funny and k enjoyed him as well. Everyone here made my time here worth it. Couldn’t o</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg" alt="Julie M. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Julie M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 12, {year} at 5:00 AM GMT+5</span>
                                            {" 13 months ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"I recently completed a 45 day stay at Connections Mental Health, and my experience was truly life-changing. From the moment I arrived, the staff created a safe, supportive, and compassionate environment that allowed me to focus fully on my healing. "}
                                        <br />
                                        <br />
                                        {"One person who stood out during my stay was my Behavioral Health Technician, ***ALLIE Duprel***. Her professionalism , patience, and genuine care made a significant difference in my recovery journey. She was always available to listen, offer enouragement, and provided guidance during both the good days and the difficult ones. Her dedication to the well-being of us patients shows in her interactions with us. I felt respected and valued throughout my time there."}
                                        <br />
                                        <br />
                                        {"Thanks to the structured program and the support of my team, I left Connections Mental Health with new tools, a stronger mindset, and a sense of hope that I didn't think I would find again. I am incredibly grateful for the staff-especially the BHTs-for helping me take these steps forward."}
                                        <br />
                                        <br />
                                        {"I would highly recommend Connections Mental Health to anyone seeking a compassionate and effective treatment environment."}
                                        <br />
                                        <br />
                                        {"***Julie Morton***"}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJKV9o1v4mBdNIT93yCYkkUOVhs1oqwrDCSaMopYXUhdb-dcg=w40-h40-c-rp-mo-br100" alt="Teddy Sandy profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Teddy S</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">August 18, {year} at 11:38 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} is an incredible place of healing. My family member was given not just care, but compassion, dignity, and respect. The facility is absolutely beautiful—peaceful surroundings and a home-like atmosphere that makes you feel safe. The therapy and case management were second to none. Manny Espinoza, our case manager, went the extra mile in every way, making sure all needs were met and more. I truly thank God for this facility and the people in it. If you or someone you love </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocIOA0_n23b-k_4mkAK1nV37IbIoYTbQcxhBVyhbRIbYJdn0Eg=w40-h40-c-rp-mo-br100" alt="Brianna Aquino profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Brianna A</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 25, {year} at 10:19 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">{brand} in Villa Park offers a peaceful, natural setting that truly feels like home. The environment is calm and supportive, making it easier to focus on healing and growth. The private chef prepares delicious, healthy meals every day — a thoughtful touch that adds real comfort. Case manager Manny Espinoza is incredibly attentive and caring, always going above and beyond. His support makes a real difference in the recovery journey.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjW9tXdFRztC6JsGQnSIeVD_gmhNxHjqAHyJGI_iSBKTQdBV6v0ZRg=w40-h40-c-rp-mo-ba12-br100" alt="J B profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">J B</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">July 1, {year} at 12:47 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">My stay at Connection Mental Health  was truly life-changing. The staff provided a safe, supportive environment where I felt heard and understood. The group sessions and therapy were powerful and helped me gain the tools I needed not just for my recovery, but to rebuild trust and connection with my family. I’m incredibly grateful for the impact this place has had on my life. I highly recommend Connection Mental Health to anyone looking for real healing and lasting change.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocJ-SAp9WYE7Eu-OTdYjwv4mLIKvzz1kntY8fgdZQMTmPCHKGA=w40-h40-c-rp-mo-br100" alt="Alec Freeman profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Alec F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 30, {year} at 9:30 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is the definition of a quality treatment facility. Their case managers, therapists, and support staff are compassionate, knowledgeable and ready to help in any situation. Anyone that walks through their doors gets outstanding care.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjX4jb0pvAJcWARD-asSkFnj71n7vifhfxm8yAWTezYT5QhKfYY=w40-h40-c-rp-mo-br100" alt="Art Franco profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Art F</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">May 9, {year} at 4:23 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Connections Mental Health in Villa Park exceeded our expectations in every way. From the moment my loved one entered the program, they were treated with compassion, dignity, and respect. The facility is secure and thoughtfully maintained, creating a safe environment for healing. One of the standout features is their around-the-clock chef, which adds a level of comfort not often found in treatment centers."}
                                        <br />
                                        <br />
                                        {"We were especially grateful for the support provided by Manny Espinoza, the case manager assigned to my family member. His warmth, professionalism, and dedication were evident throughout their stay. He was instrumental in helping us navigate the next steps after treatment, offering excellent resources and ensuring a smooth transition."}
                                        <br />
                                        <br />
                                        {"I can’t recommend Connections Mental Health enough for those seeking a high-quality, caring mental health program."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Yelp ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Yelp</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Yelp/icon.svg" width={20} height={20} alt="Yelp" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="/images/1e29a08e911386984be141ef7c9fff24.webp" alt="Shawn D. profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Shawn D</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 5:00 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Yelp/star/f.svg" width={17} height={17} alt="Yelp star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-color-blue">
                                        <span className="ti-verified-tooltip">Verified</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">I had a really great experience here. I didn't arrive under the best circumstances, but the cleanilness of the facility and the kindness of the staff helped me make the best of a really tough time..I felt safe and cared for. if you need to push the pause button on life this is a great place to do it.</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/ALV-UjWdVizUDtZEIJ1MmKWwlWIocYOKffkw2Nnasd7xVXA5fv0jUxay=w40-h40-c-rp-mo-br100" alt="Abby Lira profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Abby L</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 30, {year} at 12:09 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a great place! I am so happy to have found it, it have saved so many people’s lives!! Highly recommend!!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKgy95osIavktgnSmkUyvURpYczW45yjxcyK0BEeEIwyXcsGA=w40-h40-c-rp-mo-br100" alt="Rachel Heiden profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Rachel H</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">April 17, {year} at 7:31 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">
                                        {"Choosing this residential treatment program was one of the best decisions you could ever make. From the moment clients arrive, they are supported, respected, and truly seen. The staff are compassionate, knowledgeable, and deeply committed to helping each individual heal and grow."}
                                        <br />
                                        <br />
                                        {"The clinical team provides the tools and insight you needed to understand your mental health and begin making meaningful changes. The combination of individual therapy, group sessions, and holistic approaches (like mindfulness and wellness activities) create a safe, structured environment for real progress."}
                                        <br />
                                        <br />
                                        {"If you’re looking for a place where healing is taken seriously, and you’re treated with dignity and care, I can’t recommend this program enough. It’s more than treatment—it’s transformation."}
                                      </div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocKCxZCSk0ehFXH8DwhxaKqKqfFwNiYX72DH6i8iRR1DHkyzew=w40-h40-c-rp-mo-br100" alt="Benjamin Rogers profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Benjamin R</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">March 13, {year} at 4:48 AM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">Connections is a very good detox and residential. I highly recommend Connections to anyone who wants to go to detox and residential!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ti-review-item source-Google ti-image-layout-thumbnail ti-hide">
                                  <div className="ti-inner">
                                    <div className="ti-review-header">
                                      <div className="ti-platform-icon ti-with-tooltip">
                                        <span className="ti-tooltip">Posted on Google</span>
                                        <Image src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" width={20} height={20} alt="Google" />
                                      </div>
                                      <div className="ti-profile-img">
                                        <img loading="lazy" src="https://lh3.googleusercontent.com/a/ACg8ocLJEmeGpThdzTCSnZEOY__jN9nctndaqjMzLtW1xPkNPM7tdA=w40-h40-c-rp-mo-br100" alt="Gabby M profile picture" />
                                      </div>
                                      <div className="ti-profile-details">
                                        <div className="ti-name">Gabby M</div>
                                        <div className="ti-date">
                                          <span className="ti-with-tooltip">
                                            {" "}
                                            <span className="ti-tooltip">September 18, 2024 at 9:18 PM GMT+5</span>
                                            {" 1 year ago "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <span className="ti-stars">
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 1" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 2" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 3" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 4" className="ti-star f" />
                                      <Image src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" width={17} height={17} alt="Google star 5" className="ti-star f" />
                                      <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                        <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                      </span>
                                    </span>
                                    <div className="ti-review-content">
                                      <div className="ti-review-text-container ti-inner">This place was great! Connections not only focused on mental health but also substance abuse recovery. The case manager Jeff cares so much about everyone and really gets things done for the clients. All the staff have been super kind and caring and I would recommend this place!</div>
                                      <span className="ti-read-more">
                                        <span></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ti-load-more-reviews-container">
                            <div className="ti-load-more-reviews-button" tabIndex={0}>Load more</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b5f2be6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-2616ed0 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Continue Your Journey</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-838966e elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div id="jg-continue-grid" className="jg-sc-continue">
                        <Link href="/protect-your-job-while-in-treatment/" className="jg-sc-card jg-sc-recommended" data-pid="59777">
                          <span className="jg-sc-bubble jg-sc-unvisited">1</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Protect your job while you come to treatment</span>
                            <span className="jg-sc-card-meta">+ Recommended next step</span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/mental-health/therapy/does-insurance-cover-residential-mental-health-treatment/" className="jg-sc-card" data-pid="54868">
                          <span className="jg-sc-bubble jg-sc-unvisited">2</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Can Insurance cover rehab treatment?</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/why-traveling-or-staying-close-to-home/" className="jg-sc-card" data-pid="59467">
                          <span className="jg-sc-bubble jg-sc-unvisited">3</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Why Traveling or Staying Close to home can both be great options.</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/our-facilities/" className="jg-sc-card" data-pid="55098">
                          <span className="jg-sc-bubble jg-sc-unvisited">4</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Locations &amp; Galleries</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/staff/" className="jg-sc-card" data-pid="6354">
                          <span className="jg-sc-bubble jg-sc-unvisited">5</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Staff page</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/reviews/" className="jg-sc-card jg-sc-visited" data-pid="5841">
                          <span className="jg-sc-bubble jg-sc-visited-bubble">
                            <img loading="lazy" src="https://connectionsoc.com/wp-content/uploads/2026/06/Frame-2147227796.svg" alt="Visited" className="jg-sc-bubble-icon" />
                          </span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Reviews</span>
                            <span className="jg-sc-card-meta">✓ Visited</span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/what-to-bring-to-rehab/" className="jg-sc-card" data-pid="59360">
                          <span className="jg-sc-bubble jg-sc-unvisited">7</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">What to bring to treatment</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/treatment-therapies-we-provide/" className="jg-sc-card" data-pid="59580">
                          <span className="jg-sc-bubble jg-sc-unvisited">8</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Treatment &amp; Therapies we provide</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/rehab-admissions/" className="jg-sc-card" data-pid="56277">
                          <span className="jg-sc-bubble jg-sc-unvisited">9</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Admissions Process</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/contact/" className="jg-sc-card" data-pid="31">
                          <span className="jg-sc-bubble jg-sc-unvisited">10</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Contact Us</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                        <Link href="/mental-health/residential-vs-inpatient-mental-health-treatment/" className="jg-sc-card" data-pid="9665">
                          <span className="jg-sc-bubble jg-sc-unvisited">11</span>
                          <span className="jg-sc-card-text">
                            <span className="jg-sc-card-label">Residential Inpatient vs Hospital Inpatient</span>
                            <span className="jg-sc-card-meta"></span>
                          </span>
                          <span className="jg-sc-next-badge">NEXT</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout4>
  );
}
