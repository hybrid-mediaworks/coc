import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout2 from '../layouts/Layout-2';

const gridData0 = [
  {
    "image": "/images/60bc95f8efac45d8aa5da28669841e60.webp"
  },
  {
    "image": "/images/6f3b750517b36440e3b203bcfec3a49d.webp"
  },
  {
    "image": "/images/7af5e4605616ebe006c2e0ed0e8710a0.webp"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20980%20627'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20993%20583'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20985%20640'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20988%20586'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201006%20529'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20985%20616'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20967%20632'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20993%20652'%3E%3C/svg%3E"
  }
] as const;


export default function AboutUs(props: Record<string, string>) {
  const h1 = props.h1 ?? "About Us";
  return (
    <Layout2>
      <div id="content" className="site-main post-23 page type-page status-publish has-post-thumbnail hentry">
        <div className="page-content">
          <div className="elementor elementor-23">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-1398355 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-background-overlay"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba4b244">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e07bcc9 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">{h1}</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-f967c14 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        {" Learn more about Connections’ mission, "}
                        <br />
                        {"our clinical staff, and our accreditations. "}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-79921ac elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call Now</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-6cd991b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a34fef6">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-4b0a3d0 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Our Mission</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-33ed00c elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4abc414 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>At Connections, our mission is to provide safe, individualized care for our clients to find healing and lasting recovery from mental health adversity.</p>
                        <p>We are a compassion-first treatment center specializing in treating the person–not just their symptoms. Our clients receive the highest quality of individualized care, as we only see up to 6 patients at a time in our small, home-like treatment center.</p>
                        <p>We understand first-hand what it’s like to experience the journey of mental health recovery and are passionate about prioritizing the safety and comfort of you or your loved one during their time here.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6db956d">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-6f11a29 elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/d7d91eae3d49958bf199f939251a6b1e.webp" width={2560} height={1442} alt="an image of people learning about Connections mental health" className="attachment-full size-full wp-image-268" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-c0208d4 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-273ac5d">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e063b80 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Why Choose Connections?</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0098891 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ae7f38d elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>We specialize in individualized care in a peaceful, family-like environment, with a staff that genuinely cares about our patients’ recovery and wellbeing.</p>
                        <p>
                          {"With a max of only "}
                          <strong>6 guests</strong>
                          {" at any one time (a fraction of other residential mental health programs), our team of expert staff is able to administer "}
                          <Link href="/mental-health-treatment/">
                            <strong>one-on-one treatment</strong>
                          </Link>
                          {" to ensure that our clients receive the highest quality of care possible. We are passionate about getting our clients tailored support and treatment plans administered alongside close supervision and genuine care."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-cb30e7b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5ac2188" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-2bbf512 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/b90882a0bdef74d819073fc2d4375ade.webp" width={180} height={170} alt="an icon of a clock" className="attachment-full size-full wp-image-317 entered error" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-684d257 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          {"24/7 "}
                          <br />
                          {"Supervision"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-39b98dd" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-5fe156f elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/5f63e7ed8fb4db74263ff8f08ef9c0e0.webp" width={200} height={178} alt="an icon of a therapy session" className="attachment-full size-full wp-image-316 entered error" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-57bc775 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">6 Client Maximum for Individualized Care</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-cbc5a84" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-9519bcb elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/0a245fa90b0c1cb9a91494b9ea20feb1.webp" width={171} height={165} alt="an icon of people together" className="attachment-full size-full wp-image-315 entered error" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b0d16e5 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          {"Compassionate"}
                          <br />
                          {" Staff"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5ee31ac" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-6f29d94 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/721d610f1fb463adc7e7436fdd2c8f62.webp" width={177} height={156} alt="an icon of a house" className="attachment-full size-full wp-image-314 entered error" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-f6428ac elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          {"Family-Like"}
                          <br />
                          {" Environment"}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-4293425 elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1647ee">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-865441c elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <link rel="preload" as="image" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" fetchPriority="high" /><img fetchPriority="high" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="an image of people getting help with cognitive behavioral therapy" className="attachment-thumbnail size-thumbnail wp-image-267" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8180774 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-079a3ee" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-36a2980 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">FAQs</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-64e7fbd elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Have a question? Read our frequently asked questions page to learn more, or call us today to speak with our team.</div>
                    </div>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-e098ba0 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-baf0cbd">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-41a5f50 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="/faq/" className="elementor-button elementor-button-link elementor-size-sm">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">FAQs</span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b8aa634">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-c004959 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">Call Now</span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2b316c4 elementor-hidden-mobile" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-997642d elementor-widget elementor-widget-spacer" data-widget_type="spacer.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-spacer">
                          <div className="elementor-spacer-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-01ccc44 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b992564">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c7a890f elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Our Services</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e055ab3 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>At Connections, we utilize evidence-based treatments to bring you or your loved one the highest quality of care, rooted in the most recent psychiatric science. Our science-backed services include:</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0db7505 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/mental-health-treatment/" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Learn More</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-15916bf">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-2269687 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-432e10e">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-1cbc16f elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-treatment/emdr/">
                                      <span className="elementor-icon-list-icon">
                                        <svg className="e-font-icon-svg e-far-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">EMDR</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-treatment/cognitive-behavioral-therapy-cbt/">
                                      <span className="elementor-icon-list-icon">
                                        <svg className="e-font-icon-svg e-far-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">CBT</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-treatment/dbt/">
                                      <span className="elementor-icon-list-icon">
                                        <svg className="e-font-icon-svg e-far-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">DBT</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-74414a5">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-fbc2cf2 elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-treatment/medication-management/">
                                      <span className="elementor-icon-list-icon">
                                        <svg className="e-font-icon-svg e-far-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        {"Medication "}
                                        <br />
                                        {"Management"}
                                      </span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-treatment/motivational-interviewing/">
                                      <span className="elementor-icon-list-icon">
                                        <svg className="e-font-icon-svg e-far-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        {"Motivational"}
                                        <br />
                                        {" Interviewing"}
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="elementor-element elementor-element-d2a9fcb elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/mental-health-treatment/" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Learn More</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8f2fb0c elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-51c54b2">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-eff9706 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/51b7775ec0872e052c364fb889a742ad.webp" width={1707} height={2560} alt="an image of someone learning about Connections mental health" className="attachment-full size-full wp-image-266 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b437c61">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-2391caf elementor-hidden-desktop elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20620%20344'%3E%3C/svg%3E" alt="an image of someone learning about Connections Mental Health" className="attachment-full size-full wp-image-295" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d7ef428 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Conditions We Treat</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-562505c elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-cd71507 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-daadb18">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-4d41dab elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">We treat a wide range of mental health conditions with evidence-based techniques and an expert clinical staff. Conditions we treat include:</div>
                            </div>
                            <div className="elementor-element elementor-element-1f87b11 elementor-mobile-align-start elementor-widget-tablet__width-initial elementor-widget-mobile__width-auto elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/depression/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">Depression</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/anxiety-disorders/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">Anxiety</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/ptsd/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">PTSD</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                        <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text">Bipolar Disorder</span>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                        <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text">Borderline Personality Disorder (BPD)</span>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/mood-disorders/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">Mood Disorders</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/eating-disorders/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">Eating Disorders (ED)</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/ocd/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">OCD (Obsessive-Compulsive Disorder)</span>
                                    </Link>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                        <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text">Suicidal Ideation</span>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <Link href="/mental-health-disorders/">
                                      <span className="elementor-icon-list-icon">
                                        <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                          <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                        </svg>
                                      </span>
                                      <span className="elementor-icon-list-text">&amp; More</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="elementor-element elementor-element-7805b79 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call Now</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-13d9fea elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0a97b16">
                  <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
                    <div className="elementor-element elementor-element-8b8f212 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Inside Our Facility</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e2c5d4c elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-5111c27 elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Connections’ accommodations provide a comfortable, family-like environment.</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-037be5b elementor-arrows-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;arrows&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-bcac4eb32af28fa1" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                            {gridData0.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-prev" aria-label="1 / 19" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <Image src={item.image} width={7016} height={4342} alt="An image of a living room at the connections mental health house in villa park, california" className="swiper-slide-image entered error" />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-bcac4eb32af28fa1">
                            <svg className="e-font-icon-svg e-fas-caret-square-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                              <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM259.515 124.485l-123.03 123.03c-4.686 4.686-4.686 12.284 0 16.971l123.029 123.029c7.56 7.56 20.485 2.206 20.485-8.485V132.971c.001-10.691-12.925-16.045-20.484-8.486z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-bcac4eb32af28fa1">
                            <svg className="e-font-icon-svg e-fas-caret-square-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                              <path d="M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm140.485 355.515l123.029-123.029c4.686-4.686 4.686-12.284 0-16.971l-123.029-123.03c-7.56-7.56-20.485-2.206-20.485 8.485v246.059c0 10.691 12.926 16.045 20.485 8.486z"></path>
                            </svg>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-286cd5e elementor-widget__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Connections’ accommodations provide a comfortable, family-like environment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-5444041 elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-87f196a">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-6928e57 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="an image of people who got help at Connections Mental Health" className="attachment-thumbnail size-thumbnail wp-image-46" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-10b7eb9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e417d6">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-415ee27 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">You’re Not Alone.</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4c4d68c elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Get treatment from a team of expert staff who is passionate about helping you experience peace.</div>
                    </div>
                    <div className="elementor-element elementor-element-231f025 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call Now</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
