import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout2 from '../layouts/Layout-2';
import WidgetScript from '@/components/WidgetScript';
import GuidedTour from '@/components/GuidedTour';
import ContinueJourney from '@/components/ContinueJourney';

const gridData0 = [
  {
    "image": "/images/fbf88d2196ca87059f585b47a627dcd1.webp",
    "title": "Family-Like\nEnvironment"
  },
  {
    "image": "/images/d2cd4c69f15d2226aa0f4feb7e14dba2.webp",
    "title": "Individualized\nTreatment"
  },
  {
    "image": "/images/7bd567cb5842110dadadcf1d562f46a4.webp",
    "title": "Comfortable & \nSafe Environment"
  }
] as const;


export default function Contact(props: Record<string, string>) {
  const meta_title = "Contact Us";
  return (
    <Layout2>
      <div id="content" className="site-main post-31 page type-page status-publish has-post-thumbnail hentry">
        <div className="page-content">
          <div className="elementor elementor-31">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-9681560 elementor-section-height-min-height elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-background-overlay"></div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-87616dd">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-7f0a52d elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">{meta_title}</h1>
                      </div>
                    </div>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-ae10cb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3ee6840">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-fa9e8e5 elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
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
                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2b5b7f7">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-0281154 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="/contact/#form" className="elementor-button elementor-button-link elementor-size-sm">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">Contact Form</span>
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
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-735e673 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b177e01">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-cb3bcff elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">How Can We Help You?</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6531ee3 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>At Connections, our team is here to provide you with the support and guidance you need on your path to mental health recovery. If you have questions about our programs, want to know what your treatment options are, or simply need someone to talk to, we are here to assist you.</p>
                        <p>
                          <strong>
                            {"Call "}
                            <a href="https://app.calltrackingmetrics.com/target_numbers/TNI5F4DACF3ED891395CAA39E83E96FBD1F8FBB11CA1A9C8C3D905484DD8FB15EDC/edit" rel="noopener" target="_blank">844-759-0999</a>
                            {" now to talk to someone on our team, or request more information by email in the form below."}
                          </strong>
                        </p>
                      </div>
                    </div>
                    <section id="form" className="elementor-section elementor-inner-section elementor-element elementor-element-9cfd324 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4320926">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-c3c9d23 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">Get In Touch</h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-329e9b1 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>For more information about our program and costs please fill out your information here.</p>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-395ad93 elementor-widget elementor-widget-template" data-widget_type="template.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-template">
                                  <div className="elementor elementor-4461">
                                    <div className="elementor-element elementor-element-62a7c0d4 e-con-full e-flex e-con e-parent">
                                      <div className="elementor-element elementor-element-a065aa4 elementor-widget elementor-widget-html" data-widget_type="html.default">
                                        <div className="elementor-widget-container">
                                          <WidgetScript src="https://form.jotform.com/jsform/250221462439047" />
                                          <iframe loading="lazy" id="250221462439047" src="https://form.jotform.com/250221462439047?parentURL=https%3A%2F%2Fconnectionsoc.com%2Fcontact%2F&amp;jsForm=true" name="250221462439047" allow="geolocation; microphone; camera; fullscreen; payment" title="Contact Us - Connections" style={{minWidth: "100%", maxWidth: "100%", border: "none", height: "700px"}}></iframe>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6ce4519">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-d98fd69 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-47346e8">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-fca6679 elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <link rel="preload" as="image" href="/images/5f63e7ed8fb4db74263ff8f08ef9c0e0.webp" fetchPriority="high" /><img fetchPriority="high" src="/images/5f63e7ed8fb4db74263ff8f08ef9c0e0.webp" alt="an icon of a therapy session" className="attachment-full size-full wp-image-316" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-ee5ba50 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Individualized Treatment</h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-57d20b3 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>We serve a maximum of 6 clients at a time, ensuring tailored attention to meet your unique needs.</p>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-bec9fd1 elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <img loading="lazy" src="/images/0a245fa90b0c1cb9a91494b9ea20feb1.webp" alt="an icon of people together" className="attachment-full size-full wp-image-315" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-1a4c391 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Family-Like Environment</h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-52854fb elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">Passionate founders with personal experience foster a family-like atmosphere, encouraging client connections.</div>
                            </div>
                            <div className="elementor-element elementor-element-9611bfb elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <img loading="lazy" src="/images/721d610f1fb463adc7e7436fdd2c8f62.webp" alt="an icon of a house" className="attachment-full size-full wp-image-314" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-b19c94c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Comfortable and Safe Environment</h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-dcfe04b elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>We prioritize your well-being with a safe, 24/7 supervised treatment program for a comfortable recovery journey.</p>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-f820900 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
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
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-33671b0 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5eda4a2">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c241eb5 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/52b974ece3c12eb1c823d80fbeb1f1d9.webp" alt="an image of people who got help at Connections Mental Health" className="attachment-thumbnail size-thumbnail wp-image-46" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="elementor-element elementor-element-c546dd0 e-con-full e-flex e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-element elementor-element-ef470c5 e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-1b4e3b5 elementor-widget__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">{meta_title}</h1>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9ef8c49 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Call 844-759-0999</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fc5921a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                {gridData0.map((item, i) => (
                  <div key={i} className="elementor-element elementor-element-1332ff5 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-8726a37 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src={item.image} width={60} height={60} alt="" className="attachment-full size-full wp-image-57222" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-017f172 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">{item.title}</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-46af405 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Passionate founders with personal experience foster a family-like atmosphere, encouraging client connections.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="elementor-element elementor-element-9c056b0 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7089d1c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Treatment Guidance Website Tour</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2b5d73e elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>After reading this current page, click on the next page we recommend here, or at the bottom of this page.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f687db5 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <GuidedTour />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b4ccde6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-040eba2 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-02936f7 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">How Can We Help You?</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ea29df8 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">At Connections, our team is here to provide you with the support and guidance you need on your path to mental health recovery. If you have questions about our programs, want to know what your treatment options are, or simply need someone to talk to, we are here to assist you.</div>
                  </div>
                  <div className="elementor-element elementor-element-460849a elementor-position-inline-start elementor-widget__width-initial elementor-mobile-position-inline-start elementor-widget-mobile__width-inherit elementor-view-default elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <svg fill="none" width={60} xmlns="http://www.w3.org/2000/svg" height={60} viewBox="0 0 60 60">
                              <rect rx="30" fill="#74AFB2" width={60} height={60}></rect>
                              <path d="M24.6141 28.7763C26.0541 31.6063 28.3741 33.9163 31.2041 35.3663L33.4041 33.1663C33.6741 32.8963 34.0741 32.8063 34.4241 32.9263C35.5441 33.2963 36.7541 33.4963 37.9941 33.4963C38.5441 33.4963 38.9941 33.9463 38.9941 34.4963V37.9863C38.9941 38.5363 38.5441 38.9863 37.9941 38.9863C28.6041 38.9863 20.9941 31.3763 20.9941 21.9863C20.9941 21.4363 21.4441 20.9863 21.9941 20.9863H25.4941C26.0441 20.9863 26.4941 21.4363 26.4941 21.9863C26.4941 23.2363 26.6941 24.4363 27.0641 25.5563C27.1741 25.9063 27.0941 26.2963 26.8141 26.5763L24.6141 28.7763Z" fill="white"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <p className="elementor-icon-box-description">
                            {" Call Us Now!"}
                            <br />
                            {" 888-255-2112 "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-33fe0ac elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">talk to someone on our team, or request more information by email in the form below.</div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f11496c e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-9d4a2a0 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Get In Touch</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9913bc2 elementor-widget elementor-widget-template" data-widget_type="template.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-template">
                        <div className="elementor elementor-4461">
                          <div className="elementor-element elementor-element-62a7c0d4 e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-a065aa4 elementor-widget elementor-widget-html" data-widget_type="html.default">
                              <div className="elementor-widget-container">
                                <iframe loading="lazy" id="250221462439047_1789160192355" src="https://form.jotform.com/250221462439047?parentURL=https%3A%2F%2Fconnectionsoc.com%2Fcontact%2F&amp;jsForm=true" name="250221462439047" allow="geolocation; microphone; camera; fullscreen; payment" title="Contact Us - Connections" style={{minWidth: "100%", maxWidth: "100%", border: "none", height: "700px"}}></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-743f3e1 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-9c9901a elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Continue Your Journey</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1e7cb10 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <ContinueJourney />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-fcd96cb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b4a1025">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-bf25e3e elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">You’re Not Alone</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-480c868 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Get treatment from a team of expert staff who is passionate about helping you experience peace.</p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e8ef7e3 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
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
