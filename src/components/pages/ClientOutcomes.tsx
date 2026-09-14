import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout4 from '../layouts/Layout-4';
import Script from 'next/script';

const gridData0 = [
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-10.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-03.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-03.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-10.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  },
  {
    "image": "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    "image1": "https://lh3.googleusercontent.com/a/ACg8ocJ2SBwpgJvRPBBPFtsL0rGW7lvGL9O5sk9VgooKbISndswY1g=w64-h64-c-rp-mo-br100",
    "image2": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image3": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image4": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image5": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg",
    "image6": "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
  }
] as const;

const gridData1 = [
  {
    "title": "Decrease in Depression"
  },
  {
    "title": "Decrease in Anxiety"
  },
  {
    "title": "Decrease in Cravings"
  },
  {
    "title": "Decrease in Stress"
  }
] as const;

const gridData2 = [
  {
    "title": "Decrease in Depression"
  },
  {
    "title": "Decrease in Anxiety"
  },
  {
    "title": "Decrease in Cravings"
  },
  {
    "title": "Decrease in Stress"
  }
] as const;

const gridData3 = [
  {
    "title": "Decrease in Stress"
  },
  {
    "title": "Decrease in Anxiety"
  },
  {
    "title": "Decrease in Cravings"
  },
  {
    "title": "Decrease in Stress"
  }
] as const;

const gridData4 = [
  {
    "title": "Improvement in Employment"
  },
  {
    "title": "Improvement in Family"
  },
  {
    "title": "Improvement in Friends"
  },
  {
    "title": "Improvement in Mental Health"
  },
  {
    "title": "Improvement in Physical Health"
  },
  {
    "title": "Improvement in Recreation"
  }
] as const;

const gridData5 = [
  {
    "title": "Symptom Reduction"
  },
  {
    "title": "DECREASED DEPRESSION SEVERITY"
  },
  {
    "title": "Instrument Description"
  },
  {
    "title": "The Patient Health Questionnaire (PHQ9) is a multipurpose instrument used for screening, diagnosing, monitoring, and measuring the severity of depression. Patients rate their experience with various symptoms of depression from 0 (not at all) to 3 (nearly every day) when asked how often those symptoms have been bothersome over the previous 2 weeks. Results can range from “minimal depression” to “severe depression”. Generally, a score in the “moderate depression” range (10-14) or above warrants fu"
  }
] as const;

const gridData6 = [
  {
    "title": "Symptom Reduction"
  },
  {
    "title": "DECREASED ANXIETY SEVERITY"
  },
  {
    "title": "Instrument Description"
  },
  {
    "title": "The Generalized Anxiety Disorder scale (GAD-7) is a brief measure for the severity of symptoms of anxiety. Patients are asked to rate their experience with various symptoms of anxiety from 0 (not at all) to 3 (nearly every day) when asked how often these symptoms have been bothersome over the prior 2 weeks. Results can range from “minimal anxiety” to “severe anxiety” and generally a score of 10 or higher, which indicates “moderate” or “severe” anxiety warrants further evaluation."
  }
] as const;

const gridData7 = [
  {
    "title": "Symptom Reduction"
  },
  {
    "title": "DECREASED CRAVING SEVERITY"
  },
  {
    "title": "Instrument Description"
  },
  {
    "title": "The Brief Substance Craving Scale is a 16-item measure that assesses various substance cravings over a 24-hour period. Intensity and frequency of cravings are recorded on a 5-point scale ranging from 0 (not at all) to 4 (extreme/constant/very long). This measure can be used at intake, during treatment to track progress, and upon follow-up after treatment has been completed to monitor risk."
  }
] as const;

const gridData8 = [
  {
    "title": "Symptom Reduction"
  },
  {
    "title": "DECREASED STRESS SEVERITY"
  },
  {
    "title": "Instrument Description"
  },
  {
    "title": "The Perceived Stress Scale (PSS) is a 10-item instrument that helps measure individual levels of stress, including how different situations impact how we feel and how we perceive that stress personally. Patients consider the prior month and rate their experiences with various stressful events on a scale from “=0 (never) to 4 (very often). Results can range from low stress to high perceived stress and scores in the moderate range (14-26) or higher are indicative of the need for further evaluation"
  }
] as const;

const gridData9 = [
  {
    "image": "/images/153a600aa32a17859a99118a213cc2aa.webp"
  },
  {
    "image": "/images/c48283b83d7671b0260549387a4d487b.webp"
  },
  {
    "image": "/images/dc6532b819e66db352f86f30dc60c81e.webp"
  },
  {
    "image": "/images/763ab0d65a059aeb884bc1e4911655d3.webp"
  },
  {
    "image": "/images/44ba57ab5b6c15907c37724a2de6ae7c.webp"
  },
  {
    "image": "/images/1c199dd655be427b2dc4f2b4bd998d00.webp"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20540%20541'%3E%3C/svg%3E"
  }
] as const;

export default function Untitled() {
  return (
    <Layout4>
      <div id="content" className="site-main post-55713 page type-page status-publish hentry">
        <div className="page-content">
          <div className="elementor elementor-55713">
            <div className="elementor-element elementor-element-d0d4e8e e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7bcf6f4 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/7e31fcad05069d4383e2fe34b460360f.webp" width={365} height={537} alt="" className="attachment-full size-full wp-image-55720 entered error" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-7a3b07c elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/6fbc6e6c97520e5ccaa35a4709447b96.webp" width={364} height={537} alt="" className="attachment-full size-full wp-image-55719 entered error" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-100330c e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-06d28fa elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Client Outcomes Study</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-61c2cdb elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">Recovery That Makes a Real Difference</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-400ff2a elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Our outcomes report reflects the real progress made by the individuals we serve — not just in numbers, but in their lives. Through evidence-based care and compassionate support, Liberty House helps people rebuild with strength and purpose.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-7115d06 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-42d6b44 elementor-widget elementor-widget-image" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/84312d20e863af8db9cc89b972695502.webp" width={667} height={395} alt="" className="attachment-full size-full wp-image-55733 entered error" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-1915b38 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link href="/client-outcomes/#" className="elementor-button elementor-button-link elementor-size-sm">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Download the Full Report</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a42a9b2 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-5c163bf e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-ae7df59 elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">What Our Clients Say</h2>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4741304 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-5e3441d e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-e9099d5 elementor-widget elementor-widget-html" data-widget_type="html.default">
                      <div className="elementor-widget-container">
                        <div className=" ti-widget " data-pid="6ecfc633203a046afa9643ff554">
                          <div className="ti-widget-container ti-col-4">
                            <div className="ti-reviews-container">
                              <div className="ti-controls">
                                <div role="button" className="ti-next" tabIndex={0} aria-label="Next review"></div>
                                <div role="button" className="ti-prev" tabIndex={0} aria-label="Previous review"></div>
                              </div>
                              <div className="ti-reviews-container-wrapper">
                                {gridData0.map((item, i) => (
                                  <div key={i} className="ti-review-item source-Google ti-image-layout-thumbnail">
                                    <div className="ti-inner">
                                      <div className="ti-review-header">
                                        <Image src={item.image} width={20} height={20} alt="Google" className="ti-platform-icon" />
                                        <div className="ti-profile-img">
                                          <img fetchPriority="high" src={item.image1} alt="Nichole Reinhart profile picture" />
                                        </div>
                                        <div className="ti-profile-details">
                                          <div className="ti-name">Nichole R</div>
                                          <div className="ti-date">10 September 2026</div>
                                        </div>
                                      </div>
                                      <span className="ti-stars">
                                        <Image src={item.image2} width={17} height={17} alt="Google star 1" className="ti-star f" />
                                        <Image src={item.image3} width={17} height={17} alt="Google star 2" className="ti-star f" />
                                        <Image src={item.image4} width={17} height={17} alt="Google star 3" className="ti-star f" />
                                        <Image src={item.image5} width={17} height={17} alt="Google star 4" className="ti-star f" />
                                        <Image src={item.image6} width={17} height={17} alt="Google star 5" className="ti-star f" />
                                        <span className="ti-verified-review ti-verified-platform ti-color-blue">
                                          <span className="ti-verified-tooltip">Trustindex verifies that the original source of the review is Google.</span>
                                        </span>
                                      </span>
                                      <div className="ti-review-text-container ti-review-content">best place i’ve ever been to changed my life i love and appreciate all the staff and my case manager aj and my therapist v love you guys thank you for everything you’ve done for me🩷</div>
                                      <span className="ti-read-more">
                                        <span role="button" className="ti-read-more-active" aria-label="Read more">Read more</span>
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="ti-controls-line">
                                <div className="dot"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4718537 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/client-outcomes/#" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Read More Reviews</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1a517bf e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-71eb88f e-grid e-con-full e-con e-child">
                  <div className="elementor-element elementor-element-b2b00e6 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-562ac9a elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-counter">
                          <div className="elementor-counter-title">
                            <span>Treatment Program Using GRO</span>
                          </div>
                          <div className="elementor-counter-number-wrapper">
                            <span className="elementor-counter-number-prefix"></span>
                            <span className="elementor-counter-number">6,000</span>
                            <span className="elementor-counter-number-suffix">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9cde4fe e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-2f43aa8 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-counter">
                          <div className="elementor-counter-title">
                            <span>Engagement Rate</span>
                          </div>
                          <div className="elementor-counter-number-wrapper">
                            <span className="elementor-counter-number-prefix"></span>
                            <span className="elementor-counter-number">95</span>
                            <span className="elementor-counter-number-suffix">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-1026def e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-6950333 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-counter">
                          <div className="elementor-counter-title">
                            <span>Total Assessments Administered</span>
                          </div>
                          <div className="elementor-counter-number-wrapper">
                            <span className="elementor-counter-number-prefix"></span>
                            <span className="elementor-counter-number">2,176</span>
                            <span className="elementor-counter-number-suffix"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c2289f6 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-46e6b4c e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-a60a19c color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Patient Satisfaction Overview</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-cd46953 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-bdc8b32 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>All Patient Data</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-05fd69e e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-bb1eff2 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Patient Engagement</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-809a538 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-98c5a45 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Patient Outcomes</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-227de21 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-d711716 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Holistic Hexagon</div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c737639 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-d9ccb54 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Symptom Reduction</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c0cad75 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-f71ecdd color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Symptom Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ef32eeb e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-f60f27f color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Why LibertyHouse</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a8c8b65 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-840a7e2 color-change-keyword elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Meet The Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c2bb909 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-3204656 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-ab25a65 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Patient Satisfaction Overview</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6a43c5a elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>The patient satisfaction survey is rated on a 1-5 scale (1-Extremely Dissatisfied, 5- Extremely Satisfied). The categories measured are: Cleanliness of Facility, Treatment Groups, Treatment Counselors, Staff Kindness and Overall Experience.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-1ff3cf4 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Organizational Average = 4.7/5</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e9c7414 elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                    <div className="elementor-widget-container">
                      <div className="e-rating" itemProp="reviewRating" itemType="https://schema.org/Rating" itemScope>
                        <div role="img" className="e-rating-wrapper" content="5" itemProp="ratingValue" aria-label="Rated 5 out of 5">
                          <div className="e-icon">
                            <div className="e-icon-wrapper e-icon-marked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                            <div className="e-icon-wrapper e-icon-unmarked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="e-icon">
                            <div className="e-icon-wrapper e-icon-marked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                            <div className="e-icon-wrapper e-icon-unmarked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="e-icon">
                            <div className="e-icon-wrapper e-icon-marked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                            <div className="e-icon-wrapper e-icon-unmarked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="e-icon">
                            <div className="e-icon-wrapper e-icon-marked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                            <div className="e-icon-wrapper e-icon-unmarked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="e-icon">
                            <div className="e-icon-wrapper e-icon-marked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                            <div className="e-icon-wrapper e-icon-unmarked">
                              <svg fill="none" width={35} xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 35 33">
                                <path d="M17.1139 27.395L25.4139 32.415C26.9339 33.335 28.7939 31.975 28.3939 30.255L26.1939 20.815L33.5339 14.455C34.8739 13.295 34.1539 11.095 32.3939 10.955L22.7339 10.135L18.9539 1.215C18.2739 -0.405 15.9539 -0.405 15.2739 1.215L11.4939 10.115L1.83391 10.935C0.073915 11.075 -0.646085 13.275 0.693915 14.435L8.03391 20.795L5.83392 30.235C5.43392 31.955 7.29391 33.315 8.81391 32.395L17.1139 27.395Z" fill="#FFBB00"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a1ca356 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Number of satisfaction surveys = 191</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4353b87 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Number of patients = 85</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-af42718 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Females = 40</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4790943 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Males = 45</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cbda36a e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-526dd48 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/9249b2296bfe4ba43602052c53329d4e.webp" width={600} height={374} alt="" className="attachment-full size-full wp-image-55803 entered error" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-eb055bc elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Graph shows patients who scored 4 or 5 in each Satisfaction Survey category.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-37222f5 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a13b625 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-239a498 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/ed20892d9c61a373e573df7101e72688.webp" width={649} height={357} alt="" className="attachment-full size-full wp-image-55832 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-0ff97b1 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-168a223 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1d3c5ff elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>The findings suggest that Liberty House environment, clinical services and staff professionalism offer a patient experience that is conducive to long-term recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-7e2baeb e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-5dfa976 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
                  <div className="elementor-element elementor-element-866848c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">We're Available For You 24/7</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3dcd812 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Call us any time, any day, to speak with an addiction specialist and learn about our drug and alcohol addiction treatment centers in Orange County, Southern California.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-b93a8f2 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-4caca47 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">888-255-2112</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-62f0895 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/#verify" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Verify Insurance</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-7132c65 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-528091f e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-87d8287 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">All Patient Data</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3fb0902 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>With 112 unique Liberty House patients added to ERPHealth’s GRO platform between Jan 2024 and Dec 2024, 54% identify as male and 46% identify as female.</p>
                        <p>Patient age ranges from 20-62 with 39% falling in the 25-40 age group, 35% in the 41-56 age group, 12% in the 18-24 age group and 13% over 57 years old. Overall, the average length of stay for this group was 20 days.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a76dd27 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-07e6f3a elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20600%20448'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-55845 entered exited" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8835b74 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-c1b2809 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-5b39325 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/552675cd8fc2bc2c3fdb248fb984902e.webp" width={600} height={384} alt="" className="attachment-full size-full wp-image-55849 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d952e9c e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c2873b1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Patient Engagement</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-34daa85 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Patient engagement is defined as the percentage of assessments that are completed of the total assigned. ERPHealth’s standard for successful engagement is 70% and Liberty House achieved an overall engagement rate of 95% with the administration of 2,176 measures this past year. The engagement rate ranged from 81%, which was achieved in Feb 2024 to 100%, which was achieved in Jan 2024.</p>
                        <p>Liberty House remained above ERPHealth’s standard for successful engagement in all the months in the last year. The core 4 assessments administered routinely include the gold standard measures: PHQ9, the GAD7, the Perceived Stress Scale, and the Substance Craving Scale.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c4f3214 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7f7e88f e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-7fd70e6 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Duration Analysis</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-06e427f elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Liberty House patients are completing vital behavioral health assessments in minutes, providing clinicians with the data needed to drive treatment intervention and planning. Because patients complete assessments via ERPHealth’s GRO platform prior to and in preparation for the clinical encounter, valuable face-to-face time is protected and the patient experience is improved through targeted, data-driven discussion. Treatment is made both more efficient and more effective as providers are able to </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b89838c e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-ccfdbd6 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/83c2bf13264b992f0aebd305633114e0.webp" width={600} height={387} alt="" className="attachment-full size-full wp-image-55856 entered error" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6670bd9 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-0380f0a elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Patient Outcomes</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b9ff71f elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>
                      {"Through routine behavioral health screening and use of that data in clinical intervention for measurement-informed care, Liberty House is moving the needle on overall outcomes. Clinical outcomes for these past 12 months reveal the positive impact treatment programs are having for patients."}
                      <br />
                      {"Considering the patient population as a whole, notable outcomes include a 72% decrease in cravings and 59% decrease in the depression."}
                      <br />
                      {"Both male and female patients have reported significant improvement in cravings and depression. While male patients reported 70% decrease in cravings and 57% decrease in depression, female patients reported 73% decrease in cravings and 61% decrease in depression."}
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-872ccb9 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-4df62f0 e-con-full bars-hover-color e-flex e-con e-child">
                    <div className="elementor-element elementor-element-48d6030 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-7d60590 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">Male KPIs</h3>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-75a6878 e-con-full e-grid e-con e-child">
                      {gridData1.map((item, i) => (
                        <div key={i} className="elementor-element elementor-element-06826c1 e-con-full e-flex e-con e-child animated fadeIn" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;&#125;">
                          <div className="elementor-element elementor-element-657b266 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-counter">
                                <p className="elementor-counter-title">{item.title}</p>
                                <div className="elementor-counter-number-wrapper">
                                  <span className="elementor-counter-number-prefix"></span>
                                  <span className="elementor-counter-number">61</span>
                                  <span className="elementor-counter-number-suffix">%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-513011a elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="icon.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-wrapper">
                                <div className="elementor-icon">
                                  <svg fill="none" width={18} xmlns="http://www.w3.org/2000/svg" height={21} viewBox="0 0 18 21">
                                    <path d="M9 19.6665L17 11.6665M9 19.6665L1 11.6665M9 19.6665V0.999838" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-5fa3df4 e-con-full bars-hover-color is-default e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-144dc71 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-a53a15d elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">Female KPIs</h3>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3fdb161 e-con-full e-grid e-con e-child">
                      {gridData2.map((item, i) => (
                        <div key={i} className="elementor-element elementor-element-7ee1dd3 e-con-full e-flex e-con e-child animated fadeIn" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;&#125;">
                          <div className="elementor-element elementor-element-85f2897 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-counter">
                                <p className="elementor-counter-title">{item.title}</p>
                                <div className="elementor-counter-number-wrapper">
                                  <span className="elementor-counter-number-prefix"></span>
                                  <span className="elementor-counter-number">57</span>
                                  <span className="elementor-counter-number-suffix">%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-d2b727a elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="icon.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-wrapper">
                                <div className="elementor-icon">
                                  <svg fill="none" width={18} xmlns="http://www.w3.org/2000/svg" height={21} viewBox="0 0 18 21">
                                    <path d="M9 19.6665L17 11.6665M9 19.6665L1 11.6665M9 19.6665V0.999838" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-be1a7a5 e-con-full bars-hover-color e-flex e-con e-child">
                    <div className="elementor-element elementor-element-81fa83b e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-e17af7c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">Total Patients</h3>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-367b73d e-con-full e-grid e-con e-child">
                      {gridData3.map((item, i) => (
                        <div key={i} className="elementor-element elementor-element-405fe55 e-con-full e-flex e-con e-child animated fadeIn" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;&#125;">
                          <div className="elementor-element elementor-element-1ab4bb4 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-counter">
                                <p className="elementor-counter-title">{item.title}</p>
                                <div className="elementor-counter-number-wrapper">
                                  <span className="elementor-counter-number-prefix"></span>
                                  <span className="elementor-counter-number">29</span>
                                  <span className="elementor-counter-number-suffix">%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-025cbdd elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="icon.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-wrapper">
                                <div className="elementor-icon">
                                  <svg fill="none" width={18} xmlns="http://www.w3.org/2000/svg" height={21} viewBox="0 0 18 21">
                                    <path d="M9 19.6665L17 11.6665M9 19.6665L1 11.6665M9 19.6665V0.999838" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c3e564e elementor-widget elementor-widget-html" data-widget_type="html.default">
                  <div className="elementor-widget-container">
                    <Script id="inline-script-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `const bars = document.querySelectorAll('.bars-hover-color');

if (bars.length >= 3) {
  const center = bars[1]; // middle one
  center.classList.add('is-default');

  bars.forEach((bar, index) => {
    bar.addEventListener('mouseenter', () => {
      center.classList.remove('is-default');

      bars.forEach(b => b.classList.remove('is-hovered'));
      bar.classList.add('is-hovered');
    });

    bar.addEventListener('mouseleave', () => {
      bars.forEach(b => b.classList.remove('is-hovered'));
      center.classList.add('is-default');
    });
  });
}` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-eaac606 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-0a049c4 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-85fb88b elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Holistic Hexagon</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-51af7a4 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>
                          {"The Holistic Hexagon is a brief measure of quality of life (QoL) that encompasses six key domains: employment, recreation, physical health, mental health, friends, and family. These domains represent all major areas of an individual’s life and are rated on a scale from 1 (very dissatisfied) to 10 (very satisfied)."}
                          <br />
                          {" "}
                        </p>
                        <ul role="list">
                          <li>When considering first and last patient self-report of patient quality of life, Liberty House patients improved, on average, across all the domains.</li>
                          <li>Total patient average ratings in QoL reveal notable improvement in satisfaction with Recreation (90%) followed by Mental Health (67%), Employment (53%), Physical Health (48%), Friends (19%), and Family (16%).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4df8450 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-64d4322 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/849a02b4d2d0d604add48e007e2459b8.webp" width={600} height={286} alt="" className="attachment-full size-full wp-image-55933 entered error" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e276530 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-835b1fb elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Change from Avg. First Score to Avg. Last Score (N = 114)</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-94e2a82 e-grid e-con-full e-con e-child">
                  {gridData4.map((item, i) => (
                    <div key={i} className="elementor-element elementor-element-17e6c63 e-con-full e-flex elementor-invisible e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;&#125;">
                      <div className="elementor-element elementor-element-30b1f2a elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-counter">
                            <p className="elementor-counter-title">{item.title}</p>
                            <div className="elementor-counter-number-wrapper">
                              <span className="elementor-counter-number-prefix"></span>
                              <span className="elementor-counter-number">0</span>
                              <span className="elementor-counter-number-suffix">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6737ea5 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="icon.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg fill="none" width={24} xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24">
                                <path d="M12 5L18 11M12 5L6 11M12 5V19" stroke="#36CA00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-3e1f956 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-0348857 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
                  <div className="elementor-element elementor-element-18c3956 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">We're Available For You 24/7</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c8edea7 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Call us any time, any day, to speak with an addiction specialist and learn about our drug and alcohol addiction treatment centers in Orange County, Southern California.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ced816b e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-ac5f4ee elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="tel:888-255-2112" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">888-255-2112</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7447350 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/#verify" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Verify Insurance</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-03a7384 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-39ef1a3 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    {gridData5.map((item, i) => (
                      <div key={i} className="elementor-element elementor-element-7c8b329 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{item.title}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="elementor-element elementor-element-bb2b007 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-9eedacf elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg fill="none" width={169} xmlns="http://www.w3.org/2000/svg" height={116} viewBox="0 0 169 116">
                            <rect rx="4" fill="url(#paint0_linear_4859_4361)" width={22} height={109}></rect>
                            <rect x="43" y="28" rx="4" fill="url(#paint1_linear_4859_4361)" width={22} height={81} fillOpacity="0.5"></rect>
                            <rect x="86" y="55" rx="4" fill="url(#paint2_linear_4859_4361)" width={22} height={54} fillOpacity="0.5"></rect>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint3_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint4_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                              <linearGradient id="paint0_linear_4859_4361" x1="0" x2="22.7041" y1="0" y2="0.146867" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_4859_4361" x1="43" x2="65.7034" y1="28" y2="28.1976" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_4859_4361" x1="86" x2="108.701" y1="55" y2="55.2964" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint3_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#E1545A"></stop>
                                <stop offset="1" stopColor="#DF7755"></stop>
                              </linearGradient>
                              <linearGradient id="paint4_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e01b918 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <h4 className="elementor-counter-title">
                          <span>Avg. Decrease in Craving Symptoms across both genders.</span>
                        </h4>
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">35</span>
                          <span className="elementor-counter-number-suffix">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1c19dfc e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-75c2c02 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-955e619 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/3d86aa91cbe5c9539bcb95a83bbedbfb.webp" width={600} height={372} alt="" className="attachment-full size-full wp-image-55963 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8005374 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-b0363a7 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b1fff0f elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Overall, PHQ-9 scores show a decrease in severity of depression and fell from moderate to mild range over a 4-week course of treatment. Separating out female and male patients, female patient depression scores spiked a bit in week 2, reducing by 6% overall. Male patient depression scores decreased by 63%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8f7f234 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-c7db199 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    {gridData6.map((item, i) => (
                      <div key={i} className="elementor-element elementor-element-08b3235 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{item.title}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="elementor-element elementor-element-7e3bf44 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-f4f5c47 elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg fill="none" width={169} xmlns="http://www.w3.org/2000/svg" height={116} viewBox="0 0 169 116">
                            <rect rx="4" fill="url(#paint0_linear_4859_4361)" width={22} height={109}></rect>
                            <rect x="43" y="28" rx="4" fill="url(#paint1_linear_4859_4361)" width={22} height={81} fillOpacity="0.5"></rect>
                            <rect x="86" y="55" rx="4" fill="url(#paint2_linear_4859_4361)" width={22} height={54} fillOpacity="0.5"></rect>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint3_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint4_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                              <linearGradient id="paint0_linear_4859_4361" x1="0" x2="22.7041" y1="0" y2="0.146867" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_4859_4361" x1="43" x2="65.7034" y1="28" y2="28.1976" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_4859_4361" x1="86" x2="108.701" y1="55" y2="55.2964" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint3_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#E1545A"></stop>
                                <stop offset="1" stopColor="#DF7755"></stop>
                              </linearGradient>
                              <linearGradient id="paint4_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-2c7ac6c elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <h4 className="elementor-counter-title">
                          <span>Avg. Decrease in Craving Symptoms across both genders.</span>
                        </h4>
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">39</span>
                          <span className="elementor-counter-number-suffix">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-61685c6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-9844531 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-f57e897 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/a5dcbecaf93010bd07a1c14d63268254.webp" width={600} height={373} alt="" className="attachment-full size-full wp-image-55970 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8ecf797 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-70fd9e9 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0899823 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Overall, GAD-7 scores show a decrease in severity of anxiety and fell from moderate to mild range over a 4-week course of treatment. While both female and male patients scores spiked a bit in week 2, female patient anxiety scores decreased by 17% and male patient anxiety scores decreased by 60%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fcedbeb e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-6f0bc3b e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    {gridData7.map((item, i) => (
                      <div key={i} className="elementor-element elementor-element-f26f1ef elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{item.title}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="elementor-element elementor-element-3c97b59 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-6278a26 elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg fill="none" width={169} xmlns="http://www.w3.org/2000/svg" height={116} viewBox="0 0 169 116">
                            <rect rx="4" fill="url(#paint0_linear_4859_4361)" width={22} height={109}></rect>
                            <rect x="43" y="28" rx="4" fill="url(#paint1_linear_4859_4361)" width={22} height={81} fillOpacity="0.5"></rect>
                            <rect x="86" y="55" rx="4" fill="url(#paint2_linear_4859_4361)" width={22} height={54} fillOpacity="0.5"></rect>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint3_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint4_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                              <linearGradient id="paint0_linear_4859_4361" x1="0" x2="22.7041" y1="0" y2="0.146867" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_4859_4361" x1="43" x2="65.7034" y1="28" y2="28.1976" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_4859_4361" x1="86" x2="108.701" y1="55" y2="55.2964" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint3_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#E1545A"></stop>
                                <stop offset="1" stopColor="#DF7755"></stop>
                              </linearGradient>
                              <linearGradient id="paint4_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d971012 elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <h4 className="elementor-counter-title">
                          <span>Avg. Decrease in Craving Symptoms across both genders.</span>
                        </h4>
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">87</span>
                          <span className="elementor-counter-number-suffix">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c686079 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-3ba995d e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-8fd679b elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/b99cef10550d46d3f87b7c5ae50962be.webp" width={600} height={405} alt="" className="attachment-full size-full wp-image-55974 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9496237 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-88a8ed0 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-c9ed9e7 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Substance cravings have decreased during the course of treatment in concert with stress, depression, and anxiety.</p>
                        <p>For female patients craving score reduced by 88% and for male patients craving score reduced by 86% moving from extreme to slight craving range over a 4-week course of treatment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-db329f9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-9ccd19d e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    {gridData8.map((item, i) => (
                      <div key={i} className="elementor-element elementor-element-43d7110 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">{item.title}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="elementor-element elementor-element-70ed3f8 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-d3cf2f7 elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg fill="none" width={169} xmlns="http://www.w3.org/2000/svg" height={116} viewBox="0 0 169 116">
                            <rect rx="4" fill="url(#paint0_linear_4859_4361)" width={22} height={109}></rect>
                            <rect x="43" y="28" rx="4" fill="url(#paint1_linear_4859_4361)" width={22} height={81} fillOpacity="0.5"></rect>
                            <rect x="86" y="55" rx="4" fill="url(#paint2_linear_4859_4361)" width={22} height={54} fillOpacity="0.5"></rect>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint3_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M137 102.667L153 86.667M137 102.667L121 86.667M137 102.667V65.3337" stroke="url(#paint4_linear_4859_4361)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                              <linearGradient id="paint0_linear_4859_4361" x1="0" x2="22.7041" y1="0" y2="0.146867" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint1_linear_4859_4361" x1="43" x2="65.7034" y1="28" y2="28.1976" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint2_linear_4859_4361" x1="86" x2="108.701" y1="55" y2="55.2964" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                              <linearGradient id="paint3_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#E1545A"></stop>
                                <stop offset="1" stopColor="#DF7755"></stop>
                              </linearGradient>
                              <linearGradient id="paint4_linear_4859_4361" x1="121" x2="154.001" y1="102.667" y2="101.76" gradientUnits="userSpaceOnUse">
                                <stop offset="0.07" stopColor="#74AFB2"></stop>
                                <stop offset="1" stopColor="#479FA3"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-51891de elementor-widget elementor-widget-counter" data-widget_type="counter.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <h4 className="elementor-counter-title">
                          <span>Avg. Decrease in Craving Symptoms across both genders.</span>
                        </h4>
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">17</span>
                          <span className="elementor-counter-number-suffix">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-bc528bc e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a9dfeba e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-13171d4 elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/c1d69959a10162cea93a7e9cd3ce5230.webp" width={600} height={372} alt="" className="attachment-full size-full wp-image-55978 entered error" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8bffe47 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-b9a7022 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-037c104 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Patient perceived stress scores remained in the moderate range during treatment.</p>
                        <p>While female patient score increased slightly in week 2, it fell by 10% over 4-week course of treatment. Male patient scores reduced by 23% indicating improvement in stress symptoms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-5a1d108 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-72e1a27 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-c0b41d9 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Symptom Reduction</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d5689d2 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">LIBERTY HOUSE GROUP WITH SUICIDAL IDEATION</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-2e7eea2 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Using ERPHealth’s technology for routine screening, 42 patients, or 38% of the Liberty House patient population, have triggered the Suicide Alert using the ERPHealth platform. 6 patients have triggered the Suicide Alert more than once. Surfacing suicide risk in real time results in saved lives.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c1e54dc e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-10bc2ef elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Key Findings</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3965ea9 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Suicidal ideation is more prevalent the first 2-3 times a patient completes the PHQ9 and, on average, during the first 34 days of treatment.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2dbccaf elementor-widget elementor-widget-image" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/aa2bdbc174d520ea57cec2c813fc1ae9.webp" width={600} height={425} alt="" className="attachment-full size-full wp-image-55982 entered error" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d419773 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-20a01ff e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-549ea5e e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-746bbc8 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            {"Connect On "}
                            <br />
                            {" Our Socials"}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-c7a2b12 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-0c04396 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Check out our socials to learn more about our programs, stay up to date on events and outings, get motivational content, &amp; more.</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-5a75069 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="/#verify-insurance-home" className="elementor-button elementor-button-link elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">See Comments</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ddf052c elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="&#123;&quot;carousel_items&quot;:[&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;2e33073&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;a43fed1&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;eb76969&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;342f146&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;cacda3a&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;e51a0e9&quot;&#125;,&#123;&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;194047a&quot;&#125;],&quot;slides_to_show&quot;:&quot;4&quot;,&quot;offset_sides&quot;:&quot;right&quot;,&quot;image_spacing_custom&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:24,&quot;sizes&quot;:[]&#125;,&quot;offset_width&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:120,&quot;sizes&quot;:[]&#125;,&quot;offset_width_mobile&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]&#125;,&quot;slides_to_show_tablet&quot;:&quot;3&quot;,&quot;image_spacing_custom_mobile&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]&#125;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_width_tablet&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]&#125;,&quot;image_spacing_custom_tablet&quot;:&#123;&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]&#125;&#125;" data-widget_type="nested-carousel.default">
                  <div className="elementor-widget-container">
                    <div dir="ltr" role="region" className="e-n-carousel swiper offset-right swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Carousel" aria-roledescription="carousel">
                      <div id="swiper-wrapper-23cba3f7fcb4d10410" className="swiper-wrapper" aria-live="off">
                        {gridData9.map((item, i) => (
                          <div key={i} role="group" className="swiper-slide swiper-slide-prev" aria-label="1 / 7" aria-roledescription="slide">
                            <div className="elementor-element elementor-element-79c44bb e-flex e-con-boxed e-con e-child">
                              <div className="e-con-inner">
                                <div className="elementor-element elementor-element-aaa8a1d elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                                  <div className="elementor-widget-container">
                                    <Image src={item.image} width={441} height={441} alt="" className="attachment-full size-full wp-image-55999 entered error" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
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
