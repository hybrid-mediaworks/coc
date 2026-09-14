import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout2 from '../layouts/Layout-2';

export default function Untitled() {
  return (
    <Layout2>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-97401a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-630fdb2">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f3897c2 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">You’re Not Alone</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-c4ecf1e elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Get treatment from a team of expert staff who is passionate about helping you experience peace.</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-3e25253 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
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
    </Layout2>
  );
}
