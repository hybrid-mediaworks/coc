import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout4 from '../layouts/Layout-4';
import { TrustIndexWidget } from '@/components/TrustIndexWidget';
import GuidedTour from '@/components/GuidedTour';
import ContinueJourney from '@/components/ContinueJourney';


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
                      <GuidedTour />
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
                      <TrustIndexWidget widgetId="8eaa7f977e02684714667b2799b" />
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
                      <ContinueJourney />
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
