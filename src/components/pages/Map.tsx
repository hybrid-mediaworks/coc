import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout4 from '../layouts/Layout-4';
import Script from 'next/script';

export default function Untitled() {
  return (
    <Layout4>
      <div id="content" className="site-main post-9029 page type-page status-publish hentry">
        <div className="page-header">
          <h1 className="entry-title">Map</h1>
        </div>
        <div className="page-content">
          <div className="elementor elementor-9029">
            <div className="elementor-element elementor-element-00bcdcf e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-2f25b07 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div id="city-data-map-6aa473954bdcc" className="city-data-map">
                        <div>
                          <div className="gm-err-container">
                            <div className="gm-err-content">
                              <div className="gm-err-icon">
                                <link rel="preload" as="image" href="/images/0545d377d794f126a7354d6e87e7431a.webp" fetchPriority="high" /><img fetchPriority="high" src="/images/0545d377d794f126a7354d6e87e7431a.webp" alt="" />
                              </div>
                              <div className="gm-err-title">Oops! Something went wrong.</div>
                              <div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div>
                            </div>
                          </div>
                        </div>
                        <div className="city-data-loader">
                          <div className="loader-content">
                            <div className="spinner"></div>
                            <p>Loading map data...</p>
                          </div>
                        </div>
                      </div>
                      <Script id="inline-script-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `jQuery(document).ready(function($) { initializeCityDataMap('city-data-map-6aa473954bdcc'); });` }} />
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
