import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout11 from '../layouts/Layout-11';
import WidgetScript from '@/components/WidgetScript';


export default function LocationsServed(props: Record<string, string>) {
  const near_in = props.near_in ?? "near";
  return (
    <Layout11>
      <div id="content" className="site-main post-60348 page type-page status-publish hentry">
        <div className="page-content">
          <div className="elementor elementor-60348">
            <div className="elementor-element elementor-element-b031ee0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-452a5a6 elementor-widget-mobile__width-auto elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/735d7f4a434910a2b14b0530fca8d6c2.webp" width={365} height={537} alt="" className="attachment-full size-full wp-image-54516 entered error" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-93be99a e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-82ff629 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Locations We Serves</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6774df3 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Every Gratitude Lodge location page, organized by treatment topic, then state and county. Use the search or open a topic to find care {near_in} you.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-50c8d1b elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <Image src="/images/7bf0b19e7905ce1d68945364479ddf7f.webp" width={364} height={537} alt="" className="attachment-full size-full wp-image-54517 entered error" />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-7db514f e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-49640c6 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div id="hmga-1895" className="hmga">
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Outpatient Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/outpatient/california/" className="hmga-primary">California Outpatient Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/los-angeles-ca/" className="hmga-child">Los Angeles County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/orange-county-ca/" className="hmga-child">Orange County Outpatient Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p2" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Outpatient Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p2" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Outpatient Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/outpatient/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/anaheim-ca/" className="hmga-city">Anaheim Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/outpatient/brea-ca/" className="hmga-city">Brea Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/buena-park-ca/" className="hmga-city">Buena Park Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/outpatient/costa-mesa-ca/" className="hmga-city">Costa Mesa Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/cypress-ca/" className="hmga-city">Cypress Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/outpatient/dana-point-ca/" className="hmga-city">Dana Point Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/outpatient/fountain-valley-ca/" className="hmga-city">Fountain Valley Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/fullerton-ca/" className="hmga-city">Fullerton Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/outpatient/garden-grove-ca/" className="hmga-city">Garden Grove Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/outpatient/huntington-beach-ca/" className="hmga-city">Huntington Beach Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/outpatient/irvine-ca/" className="hmga-city">Irvine Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/outpatient/la-habra-ca/" className="hmga-city">La Habra Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/la-palma-ca/" className="hmga-city">La Palma Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/laguna-beach-ca/" className="hmga-city">Laguna Beach Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/laguna-hills-ca/" className="hmga-city">Laguna Hills Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/laguna-woods-ca/" className="hmga-city">Laguna Woods Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/lake-forest-ca/" className="hmga-city">Lake Forest Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/los-alamitos-ca/" className="hmga-city">Los Alamitos Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/outpatient/mission-viejo-ca/" className="hmga-city">Mission Viejo Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/outpatient/newport-beach-ca/" className="hmga-city">Newport Beach Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/outpatient/orange-ca/" className="hmga-city">Orange Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/outpatient/placentia-ca/" className="hmga-city">Placentia Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/outpatient/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/outpatient/san-clemente-ca/" className="hmga-city">San Clemente Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/santa-ana-ca/" className="hmga-city">Santa Ana Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/seal-beach-ca/" className="hmga-city">Seal Beach Outpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/outpatient/stanton-ca/" className="hmga-city">Stanton Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/outpatient/tustin-ca/" className="hmga-city">Tustin Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/outpatient/villa-park-ca/" className="hmga-city">Villa Park Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/outpatient/westminster-ca/" className="hmga-city">Westminster Outpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/outpatient/yorba-linda-ca/" className="hmga-city">Yorba Linda Outpatient Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/riverside-ca/" className="hmga-child">Riverside County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/san-bernardino-ca/" className="hmga-child">San Bernardino County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/san-diego-ca/" className="hmga-child">San Diego County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/santa-barbara-ca/" className="hmga-child">Santa Barbara County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/outpatient/ventura-ca/" className="hmga-child">Ventura County Outpatient Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">IOP Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/iop/california/" className="hmga-primary">California IOP Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/los-angeles-ca/" className="hmga-child">Los Angeles County IOP Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/orange-county-ca/" className="hmga-child">Orange County IOP Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p9" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County IOP Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p9" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">IOP Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/iop/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/anaheim-ca/" className="hmga-city">Anaheim IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/iop/california/brea-ca/" className="hmga-city">Brea IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/buena-park-ca/" className="hmga-city">Buena Park IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/iop/california/costa-mesa-ca/" className="hmga-city">Costa Mesa IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/cypress-ca/" className="hmga-city">Cypress IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/iop/california/dana-point-ca/" className="hmga-city">Dana Point IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/iop/california/fountain-valley-ca/" className="hmga-city">Fountain Valley IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/fullerton-ca/" className="hmga-city">Fullerton IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/iop/california/garden-grove-ca/" className="hmga-city">Garden Grove IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/iop/california/huntington-beach-ca/" className="hmga-city">Huntington Beach IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/iop/california/irvine-ca/" className="hmga-city">Irvine IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/iop/california/la-habra-ca/" className="hmga-city">La Habra IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/la-palma-ca/" className="hmga-city">La Palma IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/laguna-beach-ca/" className="hmga-city">Laguna Beach IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/laguna-hills-ca/" className="hmga-city">Laguna Hills IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/laguna-woods-ca/" className="hmga-city">Laguna Woods IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/lake-forest-ca/" className="hmga-city">Lake Forest IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/los-alamitos-ca/" className="hmga-city">Los Alamitos IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/iop/california/mission-viejo-ca/" className="hmga-city">Mission Viejo IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/iop/california/newport-beach-ca/" className="hmga-city">Newport Beach IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/iop/california/orange-ca/" className="hmga-city">Orange IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/iop/california/placentia-ca/" className="hmga-city">Placentia IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/iop/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/iop/california/san-clemente-ca/" className="hmga-city">San Clemente IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/santa-ana-ca/" className="hmga-city">Santa Ana IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/seal-beach-ca/" className="hmga-city">Seal Beach IOP Rehab</Link>
                                          <Link href="/mental-health/therapy/iop/california/stanton-ca/" className="hmga-city">Stanton IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/iop/california/tustin-ca/" className="hmga-city">Tustin IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/iop/california/villa-park-ca/" className="hmga-city">Villa Park IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/iop/california/westminster-ca/" className="hmga-city">Westminster IOP Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/iop/california/yorba-linda-ca/" className="hmga-city">Yorba Linda IOP Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/riverside-ca/" className="hmga-child">Riverside County IOP Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/san-bernardino-ca/" className="hmga-child">San Bernardino County IOP Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/san-diego-ca/" className="hmga-child">San Diego County IOP Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County IOP Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/iop/california/ventura-ca/" className="hmga-child">Ventura County IOP Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">DBT Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/dbt/california/" className="hmga-primary">California DBT Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/los-angeles-ca/" className="hmga-child">Los Angeles County DBT Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/orange-county-ca/" className="hmga-child">Orange County DBT Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p16" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County DBT Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p16" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">DBT Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/dbt/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/anaheim-ca/" className="hmga-city">Anaheim DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/dbt/california/brea-ca/" className="hmga-city">Brea DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/buena-park-ca/" className="hmga-city">Buena Park DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/dbt/california/costa-mesa-ca/" className="hmga-city">Costa Mesa DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/cypress-ca/" className="hmga-city">Cypress DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/dbt/california/dana-point-ca/" className="hmga-city">Dana Point DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/dbt/california/fountain-valley-ca/" className="hmga-city">Fountain Valley DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/fullerton-ca/" className="hmga-city">Fullerton DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/dbt/california/garden-grove-ca/" className="hmga-city">Garden Grove DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/dbt/california/huntington-beach-ca/" className="hmga-city">Huntington Beach DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/dbt/california/irvine-ca/" className="hmga-city">Irvine DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/dbt/california/la-habra-ca/" className="hmga-city">La Habra DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/la-palma-ca/" className="hmga-city">La Palma DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/laguna-beach-ca/" className="hmga-city">Laguna Beach DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/laguna-hills-ca/" className="hmga-city">Laguna Hills DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/laguna-woods-ca/" className="hmga-city">Laguna Woods DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/lake-forest-ca/" className="hmga-city">Lake Forest DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/los-alamitos-ca/" className="hmga-city">Los Alamitos DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/dbt/california/mission-viejo-ca/" className="hmga-city">Mission Viejo DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/dbt/california/newport-beach-ca/" className="hmga-city">Newport Beach DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/dbt/california/orange-ca/" className="hmga-city">Orange DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/dbt/california/placentia-ca/" className="hmga-city">Placentia DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/dbt/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/dbt/california/san-clemente-ca/" className="hmga-city">San Clemente DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/santa-ana-ca/" className="hmga-city">Santa Ana DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/seal-beach-ca/" className="hmga-city">Seal Beach DBT Rehab</Link>
                                          <Link href="/mental-health/therapy/dbt/california/stanton-ca/" className="hmga-city">Stanton DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/dbt/california/tustin-ca/" className="hmga-city">Tustin DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/dbt/california/villa-park-ca/" className="hmga-city">Villa Park DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/dbt/california/westminster-ca/" className="hmga-city">Westminster DBT Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/dbt/california/yorba-linda-ca/" className="hmga-city">Yorba Linda DBT Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/riverside-ca/" className="hmga-child">Riverside County DBT Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/san-bernardino-ca/" className="hmga-child">San Bernardino County DBT Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/san-diego-ca/" className="hmga-child">San Diego County DBT Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County DBT Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/dbt/california/ventura-ca/" className="hmga-child">Ventura County DBT Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">EMDR Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/emdr/california/" className="hmga-primary">California EMDR Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/los-angeles-ca/" className="hmga-child">Los Angeles County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/orange-county-ca/" className="hmga-child">Orange County EMDR Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p23" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County EMDR Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p23" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">EMDR Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/emdr/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/anaheim-ca/" className="hmga-city">Anaheim EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/emdr/california/brea-ca/" className="hmga-city">Brea EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/buena-park-ca/" className="hmga-city">Buena Park EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/emdr/california/costa-mesa-ca/" className="hmga-city">Costa Mesa EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/cypress-ca/" className="hmga-city">Cypress EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/emdr/california/dana-point-ca/" className="hmga-city">Dana Point EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/emdr/california/fountain-valley-ca/" className="hmga-city">Fountain Valley EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/fullerton-ca/" className="hmga-city">Fullerton EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/emdr/california/garden-grove-ca/" className="hmga-city">Garden Grove EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/emdr/california/huntington-beach-ca/" className="hmga-city">Huntington Beach EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/emdr/california/irvine-ca/" className="hmga-city">Irvine EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/emdr/california/la-habra-ca/" className="hmga-city">La Habra EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/la-palma-ca/" className="hmga-city">La Palma EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/laguna-beach-ca/" className="hmga-city">Laguna Beach EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/laguna-hills-ca/" className="hmga-city">Laguna Hills EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/laguna-woods-ca/" className="hmga-city">Laguna Woods EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/lake-forest-ca/" className="hmga-city">Lake Forest EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/los-alamitos-ca/" className="hmga-city">Los Alamitos EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/emdr/california/mission-viejo-ca/" className="hmga-city">Mission Viejo EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/emdr/california/newport-beach-ca/" className="hmga-city">Newport Beach EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/emdr/california/orange-ca/" className="hmga-city">Orange EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/emdr/california/placentia-ca/" className="hmga-city">Placentia EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/emdr/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/emdr/california/san-clemente-ca/" className="hmga-city">San Clemente EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/santa-ana-ca/" className="hmga-city">Santa Ana EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/seal-beach-ca/" className="hmga-city">Seal Beach EMDR Rehab</Link>
                                          <Link href="/mental-health/therapy/emdr/california/stanton-ca/" className="hmga-city">Stanton EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/emdr/california/tustin-ca/" className="hmga-city">Tustin EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/emdr/california/villa-park-ca/" className="hmga-city">Villa Park EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/emdr/california/westminster-ca/" className="hmga-city">Westminster EMDR Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/emdr/california/yorba-linda-ca/" className="hmga-city">Yorba Linda EMDR Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/riverside-ca/" className="hmga-child">Riverside County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/san-bernardino-ca/" className="hmga-child">San Bernardino County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/san-diego-ca/" className="hmga-child">San Diego County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/emdr/california/ventura-ca/" className="hmga-child">Ventura County EMDR Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Addiction Therapists Counselors Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/addiction-therapists-counselors/california/" className="hmga-primary">California Addiction Therapists Counselors Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/los-angeles-ca/" className="hmga-child">Los Angeles County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/orange-county-ca/" className="hmga-child">Orange County Addiction Therapists Counselors Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p30" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Addiction Therapists Counselors Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p30" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Addiction Therapists Counselors Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/anaheim-ca/" className="hmga-city">Anaheim Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/brea-ca/" className="hmga-city">Brea Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/buena-park-ca/" className="hmga-city">Buena Park Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/cypress-ca/" className="hmga-city">Cypress Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/dana-point-ca/" className="hmga-city">Dana Point Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/fullerton-ca/" className="hmga-city">Fullerton Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/garden-grove-ca/" className="hmga-city">Garden Grove Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/irvine-ca/" className="hmga-city">Irvine Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/la-habra-ca/" className="hmga-city">La Habra Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/la-palma-ca/" className="hmga-city">La Palma Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/lake-forest-ca/" className="hmga-city">Lake Forest Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/newport-beach-ca/" className="hmga-city">Newport Beach Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/orange-ca/" className="hmga-city">Orange Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/placentia-ca/" className="hmga-city">Placentia Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/san-clemente-ca/" className="hmga-city">San Clemente Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/santa-ana-ca/" className="hmga-city">Santa Ana Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/seal-beach-ca/" className="hmga-city">Seal Beach Addiction Therapists Counselors Rehab</Link>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/stanton-ca/" className="hmga-city">Stanton Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/tustin-ca/" className="hmga-city">Tustin Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/villa-park-ca/" className="hmga-city">Villa Park Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/westminster-ca/" className="hmga-city">Westminster Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/addiction-therapists-counselors/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Addiction Therapists Counselors Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/riverside-ca/" className="hmga-child">Riverside County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/san-diego-ca/" className="hmga-child">San Diego County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/addiction-therapists-counselors/california/ventura-ca/" className="hmga-child">Ventura County Addiction Therapists Counselors Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Anger Management Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/anger-management/california/" className="hmga-primary">California Anger Management Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/los-angeles-ca/" className="hmga-child">Los Angeles County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/orange-county-ca/" className="hmga-child">Orange County Anger Management Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p37" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Anger Management Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p37" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Anger Management Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/anger-management/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/anaheim-ca/" className="hmga-city">Anaheim Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/anger-management/california/brea-ca/" className="hmga-city">Brea Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/buena-park-ca/" className="hmga-city">Buena Park Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/anger-management/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/cypress-ca/" className="hmga-city">Cypress Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/anger-management/california/dana-point-ca/" className="hmga-city">Dana Point Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/anger-management/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/fullerton-ca/" className="hmga-city">Fullerton Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/anger-management/california/garden-grove-ca/" className="hmga-city">Garden Grove Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/anger-management/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/anger-management/california/irvine-ca/" className="hmga-city">Irvine Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/anger-management/california/la-habra-ca/" className="hmga-city">La Habra Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/la-palma-ca/" className="hmga-city">La Palma Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/lake-forest-ca/" className="hmga-city">Lake Forest Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/anger-management/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/anger-management/california/newport-beach-ca/" className="hmga-city">Newport Beach Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/anger-management/california/orange-ca/" className="hmga-city">Orange Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/anger-management/california/placentia-ca/" className="hmga-city">Placentia Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/anger-management/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/anger-management/california/san-clemente-ca/" className="hmga-city">San Clemente Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/santa-ana-ca/" className="hmga-city">Santa Ana Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/seal-beach-ca/" className="hmga-city">Seal Beach Anger Management Rehab</Link>
                                          <Link href="/mental-health/therapy/anger-management/california/stanton-ca/" className="hmga-city">Stanton Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/anger-management/california/tustin-ca/" className="hmga-city">Tustin Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/anger-management/california/villa-park-ca/" className="hmga-city">Villa Park Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/anger-management/california/westminster-ca/" className="hmga-city">Westminster Anger Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/anger-management/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Anger Management Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/riverside-ca/" className="hmga-child">Riverside County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/san-diego-ca/" className="hmga-child">San Diego County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/anger-management/california/ventura-ca/" className="hmga-child">Ventura County Anger Management Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Anxiety Disorders Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/anxiety-disorders/california/" className="hmga-primary">California Anxiety Disorders Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/los-angeles-ca/" className="hmga-child">Los Angeles County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/orange-county-ca/" className="hmga-child">Orange County Anxiety Disorders Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p44" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Anxiety Disorders Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p44" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Anxiety Disorders Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/anxiety-disorders/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/anaheim-ca/" className="hmga-city">Anaheim Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/anxiety-disorders/brea-ca/" className="hmga-city">Brea Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/buena-park-ca/" className="hmga-city">Buena Park Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/anxiety-disorders/costa-mesa-ca/" className="hmga-city">Costa Mesa Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/cypress-ca/" className="hmga-city">Cypress Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/anxiety-disorders/dana-point-ca/" className="hmga-city">Dana Point Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/anxiety-disorders/fountain-valley-ca/" className="hmga-city">Fountain Valley Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/fullerton-ca/" className="hmga-city">Fullerton Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/anxiety-disorders/garden-grove-ca/" className="hmga-city">Garden Grove Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/anxiety-disorders/huntington-beach-ca/" className="hmga-city">Huntington Beach Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/anxiety-disorders/irvine-ca/" className="hmga-city">Irvine Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/anxiety-disorders/la-habra-ca/" className="hmga-city">La Habra Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/la-palma-ca/" className="hmga-city">La Palma Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/laguna-beach-ca/" className="hmga-city">Laguna Beach Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/laguna-hills-ca/" className="hmga-city">Laguna Hills Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/laguna-woods-ca/" className="hmga-city">Laguna Woods Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/lake-forest-ca/" className="hmga-city">Lake Forest Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/los-alamitos-ca/" className="hmga-city">Los Alamitos Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/anxiety-disorders/mission-viejo-ca/" className="hmga-city">Mission Viejo Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/anxiety-disorders/newport-beach-ca/" className="hmga-city">Newport Beach Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/anxiety-disorders/orange-ca/" className="hmga-city">Orange Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/anxiety-disorders/placentia-ca/" className="hmga-city">Placentia Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/anxiety-disorders/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/anxiety-disorders/san-clemente-ca/" className="hmga-city">San Clemente Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/santa-ana-ca/" className="hmga-city">Santa Ana Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/seal-beach-ca/" className="hmga-city">Seal Beach Anxiety Disorders Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/stanton-ca/" className="hmga-city">Stanton Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/anxiety-disorders/tustin-ca/" className="hmga-city">Tustin Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/anxiety-disorders/villa-park-ca/" className="hmga-city">Villa Park Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/anxiety-disorders/westminster-ca/" className="hmga-city">Westminster Anxiety Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/anxiety-disorders/yorba-linda-ca/" className="hmga-city">Yorba Linda Anxiety Disorders Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/riverside-ca/" className="hmga-child">Riverside County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/san-bernardino-ca/" className="hmga-child">San Bernardino County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/san-diego-ca/" className="hmga-child">San Diego County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/santa-barbara-ca/" className="hmga-child">Santa Barbara County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/ventura-ca/" className="hmga-child">Ventura County Anxiety Disorders Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Bipolar Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/mood-disorders/bipolar/california/" className="hmga-primary">California Bipolar Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/los-angeles-ca/" className="hmga-child">Los Angeles County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/orange-county-ca/" className="hmga-child">Orange County Bipolar Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p51" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Bipolar Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p51" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Bipolar Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/anaheim-ca/" className="hmga-city">Anaheim Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/brea-ca/" className="hmga-city">Brea Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/buena-park-ca/" className="hmga-city">Buena Park Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/costa-mesa-ca/" className="hmga-city">Costa Mesa Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/cypress-ca/" className="hmga-city">Cypress Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/dana-point-ca/" className="hmga-city">Dana Point Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/fountain-valley-ca/" className="hmga-city">Fountain Valley Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/fullerton-ca/" className="hmga-city">Fullerton Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/garden-grove-ca/" className="hmga-city">Garden Grove Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/huntington-beach-ca/" className="hmga-city">Huntington Beach Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/irvine-ca/" className="hmga-city">Irvine Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/la-habra-ca/" className="hmga-city">La Habra Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/la-palma-ca/" className="hmga-city">La Palma Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/laguna-beach-ca/" className="hmga-city">Laguna Beach Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/laguna-hills-ca/" className="hmga-city">Laguna Hills Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/laguna-woods-ca/" className="hmga-city">Laguna Woods Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/lake-forest-ca/" className="hmga-city">Lake Forest Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/los-alamitos-ca/" className="hmga-city">Los Alamitos Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/mission-viejo-ca/" className="hmga-city">Mission Viejo Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/newport-beach-ca/" className="hmga-city">Newport Beach Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/orange-ca/" className="hmga-city">Orange Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/placentia-ca/" className="hmga-city">Placentia Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/san-clemente-ca/" className="hmga-city">San Clemente Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/santa-ana-ca/" className="hmga-city">Santa Ana Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/seal-beach-ca/" className="hmga-city">Seal Beach Bipolar Disorder Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/bipolar/stanton-ca/" className="hmga-city">Stanton Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/tustin-ca/" className="hmga-city">Tustin Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/villa-park-ca/" className="hmga-city">Villa Park Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/westminster-ca/" className="hmga-city">Westminster Bipolar Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/mood-disorders/bipolar/yorba-linda-ca/" className="hmga-city">Yorba Linda Bipolar Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/riverside-ca/" className="hmga-child">Riverside County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/san-bernardino-ca/" className="hmga-child">San Bernardino County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/san-diego-ca/" className="hmga-child">San Diego County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/santa-barbara-ca/" className="hmga-child">Santa Barbara County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/bipolar/ventura-ca/" className="hmga-child">Ventura County Bipolar Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Cognitive Behavioral Therapy Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/" className="hmga-primary">California Cognitive Behavioral Therapy Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/los-angeles-ca/" className="hmga-child">Los Angeles County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/orange-county-ca/" className="hmga-child">Orange County Cognitive Behavioral Therapy Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p58" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Cognitive Behavioral Therapy Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p58" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Cognitive Behavioral Therapy Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/anaheim-ca/" className="hmga-city">Anaheim Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/brea-ca/" className="hmga-city">Brea Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/buena-park-ca/" className="hmga-city">Buena Park Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/cypress-ca/" className="hmga-city">Cypress Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/dana-point-ca/" className="hmga-city">Dana Point Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/fullerton-ca/" className="hmga-city">Fullerton Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/garden-grove-ca/" className="hmga-city">Garden Grove Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/irvine-ca/" className="hmga-city">Irvine Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/la-habra-ca/" className="hmga-city">La Habra Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/la-palma-ca/" className="hmga-city">La Palma Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/lake-forest-ca/" className="hmga-city">Lake Forest Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/newport-beach-ca/" className="hmga-city">Newport Beach Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/orange-ca/" className="hmga-city">Orange Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/placentia-ca/" className="hmga-city">Placentia Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/san-clemente-ca/" className="hmga-city">San Clemente Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/santa-ana-ca/" className="hmga-city">Santa Ana Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/seal-beach-ca/" className="hmga-city">Seal Beach Cognitive Behavioral Therapy Rehab</Link>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/stanton-ca/" className="hmga-city">Stanton Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/tustin-ca/" className="hmga-city">Tustin Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/villa-park-ca/" className="hmga-city">Villa Park Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/westminster-ca/" className="hmga-city">Westminster Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Cognitive Behavioral Therapy Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/riverside-ca/" className="hmga-child">Riverside County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/san-diego-ca/" className="hmga-child">San Diego County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/california/ventura-ca/" className="hmga-child">Ventura County Cognitive Behavioral Therapy Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Depression Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/mood-disorders/depression/california/" className="hmga-primary">California Depression Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/los-angeles-ca/" className="hmga-child">Los Angeles County Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/orange-county-ca/" className="hmga-child">Orange County Depression Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p65" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Depression Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p65" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Depression Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/mood-disorders/depression/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/anaheim-ca/" className="hmga-city">Anaheim Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/mood-disorders/depression/brea-ca/" className="hmga-city">Brea Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/buena-park-ca/" className="hmga-city">Buena Park Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/mood-disorders/depression/costa-mesa-ca/" className="hmga-city">Costa Mesa Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/cypress-ca/" className="hmga-city">Cypress Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/mood-disorders/depression/dana-point-ca/" className="hmga-city">Dana Point Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/mood-disorders/depression/fountain-valley-ca/" className="hmga-city">Fountain Valley Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/fullerton-ca/" className="hmga-city">Fullerton Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/mood-disorders/depression/garden-grove-ca/" className="hmga-city">Garden Grove Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/mood-disorders/depression/huntington-beach-ca/" className="hmga-city">Huntington Beach Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/mood-disorders/depression/irvine-ca/" className="hmga-city">Irvine Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/mood-disorders/depression/la-habra-ca/" className="hmga-city">La Habra Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/la-palma-ca/" className="hmga-city">La Palma Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/laguna-beach-ca/" className="hmga-city">Laguna Beach Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/laguna-hills-ca/" className="hmga-city">Laguna Hills Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/laguna-woods-ca/" className="hmga-city">Laguna Woods Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/lake-forest-ca/" className="hmga-city">Lake Forest Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/los-alamitos-ca/" className="hmga-city">Los Alamitos Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/mood-disorders/depression/mission-viejo-ca/" className="hmga-city">Mission Viejo Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/mood-disorders/depression/newport-beach-ca/" className="hmga-city">Newport Beach Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/mood-disorders/depression/orange-ca/" className="hmga-city">Orange Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/mood-disorders/depression/placentia-ca/" className="hmga-city">Placentia Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/mood-disorders/depression/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/mood-disorders/depression/san-clemente-ca/" className="hmga-city">San Clemente Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/santa-ana-ca/" className="hmga-city">Santa Ana Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/seal-beach-ca/" className="hmga-city">Seal Beach Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/depression/stanton-ca/" className="hmga-city">Stanton Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/mood-disorders/depression/tustin-ca/" className="hmga-city">Tustin Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/mood-disorders/depression/villa-park-ca/" className="hmga-city">Villa Park Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/mood-disorders/depression/westminster-ca/" className="hmga-city">Westminster Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/mood-disorders/depression/yorba-linda-ca/" className="hmga-city">Yorba Linda Depression Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/riverside-ca/" className="hmga-child">Riverside County Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/san-bernardino-ca/" className="hmga-child">San Bernardino County Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/san-diego-ca/" className="hmga-child">San Diego County Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/santa-barbara-ca/" className="hmga-child">Santa Barbara County Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/depression/ventura-ca/" className="hmga-child">Ventura County Depression Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Eating Disorders Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/eating-disorders/california/" className="hmga-primary">California Eating Disorders Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/los-angeles-ca/" className="hmga-child">Los Angeles County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/orange-county-ca/" className="hmga-child">Orange County Eating Disorders Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p72" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Eating Disorders Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p72" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Eating Disorders Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/eating-disorders/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/anaheim-ca/" className="hmga-city">Anaheim Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/eating-disorders/california/brea-ca/" className="hmga-city">Brea Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/buena-park-ca/" className="hmga-city">Buena Park Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/eating-disorders/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/cypress-ca/" className="hmga-city">Cypress Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/eating-disorders/california/dana-point-ca/" className="hmga-city">Dana Point Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/eating-disorders/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/fullerton-ca/" className="hmga-city">Fullerton Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/eating-disorders/california/garden-grove-ca/" className="hmga-city">Garden Grove Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/eating-disorders/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/eating-disorders/california/irvine-ca/" className="hmga-city">Irvine Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/eating-disorders/california/la-habra-ca/" className="hmga-city">La Habra Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/la-palma-ca/" className="hmga-city">La Palma Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/lake-forest-ca/" className="hmga-city">Lake Forest Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/eating-disorders/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/eating-disorders/california/newport-beach-ca/" className="hmga-city">Newport Beach Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/eating-disorders/california/orange-ca/" className="hmga-city">Orange Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/eating-disorders/california/placentia-ca/" className="hmga-city">Placentia Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/eating-disorders/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/eating-disorders/california/san-clemente-ca/" className="hmga-city">San Clemente Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/santa-ana-ca/" className="hmga-city">Santa Ana Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/seal-beach-ca/" className="hmga-city">Seal Beach Eating Disorders Rehab</Link>
                                          <Link href="/mental-health/eating-disorders/california/stanton-ca/" className="hmga-city">Stanton Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/eating-disorders/california/tustin-ca/" className="hmga-city">Tustin Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/eating-disorders/california/villa-park-ca/" className="hmga-city">Villa Park Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/eating-disorders/california/westminster-ca/" className="hmga-city">Westminster Eating Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/eating-disorders/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Eating Disorders Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/riverside-ca/" className="hmga-child">Riverside County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/san-diego-ca/" className="hmga-child">San Diego County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/eating-disorders/california/ventura-ca/" className="hmga-child">Ventura County Eating Disorders Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Inpatient Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/inpatient/california/" className="hmga-primary">California Inpatient Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/los-angeles-ca/" className="hmga-child">Los Angeles County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/orange-county-ca/" className="hmga-child">Orange County Inpatient Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p79" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Inpatient Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p79" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Inpatient Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/inpatient/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/anaheim-ca/" className="hmga-city">Anaheim Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/inpatient/california/brea-ca/" className="hmga-city">Brea Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/buena-park-ca/" className="hmga-city">Buena Park Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/inpatient/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/cypress-ca/" className="hmga-city">Cypress Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/inpatient/california/dana-point-ca/" className="hmga-city">Dana Point Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/inpatient/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/fullerton-ca/" className="hmga-city">Fullerton Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/inpatient/california/garden-grove-ca/" className="hmga-city">Garden Grove Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/inpatient/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/inpatient/california/irvine-ca/" className="hmga-city">Irvine Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/inpatient/california/la-habra-ca/" className="hmga-city">La Habra Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/la-palma-ca/" className="hmga-city">La Palma Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/lake-forest-ca/" className="hmga-city">Lake Forest Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/inpatient/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/inpatient/california/newport-beach-ca/" className="hmga-city">Newport Beach Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/inpatient/california/orange-ca/" className="hmga-city">Orange Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/inpatient/california/placentia-ca/" className="hmga-city">Placentia Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/inpatient/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/inpatient/california/san-clemente-ca/" className="hmga-city">San Clemente Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/santa-ana-ca/" className="hmga-city">Santa Ana Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/seal-beach-ca/" className="hmga-city">Seal Beach Inpatient Rehab</Link>
                                          <Link href="/mental-health/therapy/inpatient/california/stanton-ca/" className="hmga-city">Stanton Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/inpatient/california/tustin-ca/" className="hmga-city">Tustin Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/inpatient/california/villa-park-ca/" className="hmga-city">Villa Park Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/inpatient/california/westminster-ca/" className="hmga-city">Westminster Inpatient Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/inpatient/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Inpatient Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/riverside-ca/" className="hmga-child">Riverside County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/san-diego-ca/" className="hmga-child">San Diego County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/inpatient/california/ventura-ca/" className="hmga-child">Ventura County Inpatient Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Inpatient Obsessive Compulsive Disorde Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/" className="hmga-primary">California Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/los-angeles-ca/" className="hmga-child">Los Angeles County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/orange-county-ca/" className="hmga-child">Orange County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p86" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Inpatient Obsessive Compulsive Disorde Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p86" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Inpatient Obsessive Compulsive Disorde Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/anaheim-ca/" className="hmga-city">Anaheim Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/brea-ca/" className="hmga-city">Brea Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/buena-park-ca/" className="hmga-city">Buena Park Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/cypress-ca/" className="hmga-city">Cypress Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/dana-point-ca/" className="hmga-city">Dana Point Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/fullerton-ca/" className="hmga-city">Fullerton Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/garden-grove-ca/" className="hmga-city">Garden Grove Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/irvine-ca/" className="hmga-city">Irvine Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/la-habra-ca/" className="hmga-city">La Habra Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/la-palma-ca/" className="hmga-city">La Palma Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/lake-forest-ca/" className="hmga-city">Lake Forest Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/newport-beach-ca/" className="hmga-city">Newport Beach Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/orange-ca/" className="hmga-city">Orange Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/placentia-ca/" className="hmga-city">Placentia Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/san-clemente-ca/" className="hmga-city">San Clemente Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/santa-ana-ca/" className="hmga-city">Santa Ana Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/seal-beach-ca/" className="hmga-city">Seal Beach Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/stanton-ca/" className="hmga-city">Stanton Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/tustin-ca/" className="hmga-city">Tustin Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/villa-park-ca/" className="hmga-city">Villa Park Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/westminster-ca/" className="hmga-city">Westminster Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/riverside-ca/" className="hmga-child">Riverside County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/san-diego-ca/" className="hmga-child">San Diego County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-obsessive-compulsive-disorde/california/ventura-ca/" className="hmga-child">Ventura County Inpatient Obsessive Compulsive Disorde Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Inpatient PTSD Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/" className="hmga-primary">California Inpatient PTSD Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/los-angeles-ca/" className="hmga-child">Los Angeles County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/orange-county-ca/" className="hmga-child">Orange County Inpatient PTSD Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p93" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Inpatient PTSD Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p93" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Inpatient PTSD Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/anaheim-ca/" className="hmga-city">Anaheim Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/brea-ca/" className="hmga-city">Brea Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/buena-park-ca/" className="hmga-city">Buena Park Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/cypress-ca/" className="hmga-city">Cypress Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/dana-point-ca/" className="hmga-city">Dana Point Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/fullerton-ca/" className="hmga-city">Fullerton Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/garden-grove-ca/" className="hmga-city">Garden Grove Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/irvine-ca/" className="hmga-city">Irvine Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/la-habra-ca/" className="hmga-city">La Habra Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/la-palma-ca/" className="hmga-city">La Palma Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/lake-forest-ca/" className="hmga-city">Lake Forest Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/newport-beach-ca/" className="hmga-city">Newport Beach Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/orange-ca/" className="hmga-city">Orange Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/placentia-ca/" className="hmga-city">Placentia Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/san-clemente-ca/" className="hmga-city">San Clemente Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/santa-ana-ca/" className="hmga-city">Santa Ana Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/seal-beach-ca/" className="hmga-city">Seal Beach Inpatient PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/stanton-ca/" className="hmga-city">Stanton Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/tustin-ca/" className="hmga-city">Tustin Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/villa-park-ca/" className="hmga-city">Villa Park Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/westminster-ca/" className="hmga-city">Westminster Inpatient PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Inpatient PTSD Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/riverside-ca/" className="hmga-child">Riverside County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/san-diego-ca/" className="hmga-child">San Diego County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient-ptsd/california/ventura-ca/" className="hmga-child">Ventura County Inpatient PTSD Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Inpatient Trauma Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/trauma-disorder/inpatient/california/" className="hmga-primary">California Inpatient Trauma Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/los-angeles-ca/" className="hmga-child">Los Angeles County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/orange-county-ca/" className="hmga-child">Orange County Inpatient Trauma Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p100" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Inpatient Trauma Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p100" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Inpatient Trauma Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/anaheim-ca/" className="hmga-city">Anaheim Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/brea-ca/" className="hmga-city">Brea Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/buena-park-ca/" className="hmga-city">Buena Park Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/cypress-ca/" className="hmga-city">Cypress Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/dana-point-ca/" className="hmga-city">Dana Point Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/fullerton-ca/" className="hmga-city">Fullerton Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/garden-grove-ca/" className="hmga-city">Garden Grove Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/irvine-ca/" className="hmga-city">Irvine Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/la-habra-ca/" className="hmga-city">La Habra Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/la-palma-ca/" className="hmga-city">La Palma Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/lake-forest-ca/" className="hmga-city">Lake Forest Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/newport-beach-ca/" className="hmga-city">Newport Beach Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/orange-ca/" className="hmga-city">Orange Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/placentia-ca/" className="hmga-city">Placentia Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/san-clemente-ca/" className="hmga-city">San Clemente Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/santa-ana-ca/" className="hmga-city">Santa Ana Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/seal-beach-ca/" className="hmga-city">Seal Beach Inpatient Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/stanton-ca/" className="hmga-city">Stanton Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/tustin-ca/" className="hmga-city">Tustin Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/villa-park-ca/" className="hmga-city">Villa Park Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/westminster-ca/" className="hmga-city">Westminster Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/trauma-disorder/inpatient/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Inpatient Trauma Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/riverside-ca/" className="hmga-child">Riverside County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/san-diego-ca/" className="hmga-child">San Diego County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/inpatient/california/ventura-ca/" className="hmga-child">Ventura County Inpatient Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Mental Health Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/california/" className="hmga-primary">California Mental Health Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/los-angeles-ca/" className="hmga-child">Los Angeles County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/orange-county-ca/" className="hmga-child">Orange County Mental Health Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p107" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Mental Health Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p107" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Mental Health Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/anaheim-ca/" className="hmga-city">Anaheim Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/brea-ca/" className="hmga-city">Brea Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/buena-park-ca/" className="hmga-city">Buena Park Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/costa-mesa-ca/" className="hmga-city">Costa Mesa Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/cypress-ca/" className="hmga-city">Cypress Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/dana-point-ca/" className="hmga-city">Dana Point Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/fountain-valley-ca/" className="hmga-city">Fountain Valley Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/fullerton-ca/" className="hmga-city">Fullerton Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/garden-grove-ca/" className="hmga-city">Garden Grove Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/huntington-beach-ca/" className="hmga-city">Huntington Beach Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/irvine-ca/" className="hmga-city">Irvine Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/la-habra-ca/" className="hmga-city">La Habra Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/la-palma-ca/" className="hmga-city">La Palma Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/laguna-beach-ca/" className="hmga-city">Laguna Beach Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/laguna-hills-ca/" className="hmga-city">Laguna Hills Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/laguna-woods-ca/" className="hmga-city">Laguna Woods Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/lake-forest-ca/" className="hmga-city">Lake Forest Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/los-alamitos-ca/" className="hmga-city">Los Alamitos Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/mission-viejo-ca/" className="hmga-city">Mission Viejo Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/newport-beach-ca/" className="hmga-city">Newport Beach Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/orange-ca/" className="hmga-city">Orange Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/placentia-ca/" className="hmga-city">Placentia Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/san-clemente-ca/" className="hmga-city">San Clemente Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/santa-ana-ca/" className="hmga-city">Santa Ana Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/seal-beach-ca/" className="hmga-city">Seal Beach Mental Health Rehab</Link>
                                          <Link href="/mental-health/therapy/stanton-ca/" className="hmga-city">Stanton Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/tustin-ca/" className="hmga-city">Tustin Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/villa-park-ca/" className="hmga-city">Villa Park Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/westminster-ca/" className="hmga-city">Westminster Mental Health Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/yorba-linda-ca/" className="hmga-city">Yorba Linda Mental Health Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/riverside-ca/" className="hmga-child">Riverside County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/san-bernardino-ca/" className="hmga-child">San Bernardino County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/san-diego-ca/" className="hmga-child">San Diego County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/santa-barbara-ca/" className="hmga-child">Santa Barbara County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/ventura-ca/" className="hmga-child">Ventura County Mental Health Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Neurodevelopment Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/neurodevelopment-disorder/california/" className="hmga-primary">California Neurodevelopment Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/los-angeles-ca/" className="hmga-child">Los Angeles County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/orange-county-ca/" className="hmga-child">Orange County Neurodevelopment Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p114" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Neurodevelopment Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p114" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Neurodevelopment Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/anaheim-ca/" className="hmga-city">Anaheim Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/brea-ca/" className="hmga-city">Brea Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/buena-park-ca/" className="hmga-city">Buena Park Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/cypress-ca/" className="hmga-city">Cypress Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/dana-point-ca/" className="hmga-city">Dana Point Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/fullerton-ca/" className="hmga-city">Fullerton Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/garden-grove-ca/" className="hmga-city">Garden Grove Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/irvine-ca/" className="hmga-city">Irvine Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/la-habra-ca/" className="hmga-city">La Habra Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/la-palma-ca/" className="hmga-city">La Palma Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/lake-forest-ca/" className="hmga-city">Lake Forest Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/newport-beach-ca/" className="hmga-city">Newport Beach Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/orange-ca/" className="hmga-city">Orange Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/placentia-ca/" className="hmga-city">Placentia Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/san-clemente-ca/" className="hmga-city">San Clemente Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/santa-ana-ca/" className="hmga-city">Santa Ana Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/seal-beach-ca/" className="hmga-city">Seal Beach Neurodevelopment Disorder Rehab</Link>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/stanton-ca/" className="hmga-city">Stanton Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/tustin-ca/" className="hmga-city">Tustin Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/villa-park-ca/" className="hmga-city">Villa Park Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/westminster-ca/" className="hmga-city">Westminster Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/neurodevelopment-disorder/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Neurodevelopment Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/riverside-ca/" className="hmga-child">Riverside County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/san-diego-ca/" className="hmga-child">San Diego County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/neurodevelopment-disorder/california/ventura-ca/" className="hmga-child">Ventura County Neurodevelopment Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Obsessive Compulsive Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/california/" className="hmga-primary">California Obsessive Compulsive Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/los-angeles-ca/" className="hmga-child">Los Angeles County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/orange-county-ca/" className="hmga-child">Orange County Obsessive Compulsive Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p121" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Obsessive Compulsive Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p121" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Obsessive Compulsive Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/anaheim-ca/" className="hmga-city">Anaheim Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/brea-ca/" className="hmga-city">Brea Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/buena-park-ca/" className="hmga-city">Buena Park Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/costa-mesa-ca/" className="hmga-city">Costa Mesa Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/cypress-ca/" className="hmga-city">Cypress Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/dana-point-ca/" className="hmga-city">Dana Point Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/fountain-valley-ca/" className="hmga-city">Fountain Valley Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/fullerton-ca/" className="hmga-city">Fullerton Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/garden-grove-ca/" className="hmga-city">Garden Grove Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/huntington-beach-ca/" className="hmga-city">Huntington Beach Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/irvine-ca/" className="hmga-city">Irvine Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/la-habra-ca/" className="hmga-city">La Habra Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/la-palma-ca/" className="hmga-city">La Palma Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/laguna-beach-ca/" className="hmga-city">Laguna Beach Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/laguna-hills-ca/" className="hmga-city">Laguna Hills Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/laguna-woods-ca/" className="hmga-city">Laguna Woods Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/newport-beach-ca/" className="hmga-city">Lake Forest Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/orange-ca/" className="hmga-city">Los Alamitos Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/placentia-ca/" className="hmga-city">Mission Viejo Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/rancho-santa-margarita-ca/" className="hmga-city">Newport Beach Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/san-clemente-ca/" className="hmga-city">Orange Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/san-juan-capistrano-ca/" className="hmga-city">Placentia Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/santa-ana-ca/" className="hmga-city">Rancho Santa Margarita Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/seal-beach-ca/" className="hmga-city">San Clemente Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/stanton-ca/" className="hmga-city">San Juan Capistrano Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/tustin-ca/" className="hmga-city">Santa Ana Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/villa-park-ca/" className="hmga-city">Seal Beach Obsessive Compulsive Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/westminster-ca/" className="hmga-city">Stanton Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/yorba-linda-ca/" className="hmga-city">Tustin Obsessive Compulsive Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/riverside-ca/" className="hmga-child">Riverside County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/san-bernardino-ca/" className="hmga-child">San Bernardino County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/san-diego-ca/" className="hmga-child">San Diego County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/santa-barbara-ca/" className="hmga-child">Santa Barbara County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/ventura-ca/" className="hmga-child">Ventura County Obsessive Compulsive Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Personality Disorders Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/personality-disorders/california/" className="hmga-primary">California Personality Disorders Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/los-angeles-ca/" className="hmga-child">Los Angeles County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/orange-county-ca/" className="hmga-child">Orange County Personality Disorders Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p128" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Personality Disorders Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p128" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Personality Disorders Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/personality-disorders/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/anaheim-ca/" className="hmga-city">Anaheim Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/personality-disorders/california/brea-ca/" className="hmga-city">Brea Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/buena-park-ca/" className="hmga-city">Buena Park Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/personality-disorders/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/cypress-ca/" className="hmga-city">Cypress Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/personality-disorders/california/dana-point-ca/" className="hmga-city">Dana Point Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/personality-disorders/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/fullerton-ca/" className="hmga-city">Fullerton Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/personality-disorders/california/garden-grove-ca/" className="hmga-city">Garden Grove Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/personality-disorders/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/personality-disorders/california/irvine-ca/" className="hmga-city">Irvine Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/personality-disorders/california/la-habra-ca/" className="hmga-city">La Habra Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/la-palma-ca/" className="hmga-city">La Palma Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/lake-forest-ca/" className="hmga-city">Lake Forest Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/personality-disorders/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/personality-disorders/california/newport-beach-ca/" className="hmga-city">Newport Beach Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/personality-disorders/california/orange-ca/" className="hmga-city">Orange Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/personality-disorders/california/placentia-ca/" className="hmga-city">Placentia Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/personality-disorders/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/personality-disorders/california/san-clemente-ca/" className="hmga-city">San Clemente Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/santa-ana-ca/" className="hmga-city">Santa Ana Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/seal-beach-ca/" className="hmga-city">Seal Beach Personality Disorders Rehab</Link>
                                          <Link href="/mental-health/personality-disorders/california/stanton-ca/" className="hmga-city">Stanton Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/personality-disorders/california/tustin-ca/" className="hmga-city">Tustin Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/personality-disorders/california/villa-park-ca/" className="hmga-city">Villa Park Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/personality-disorders/california/westminster-ca/" className="hmga-city">Westminster Personality Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/personality-disorders/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Personality Disorders Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/riverside-ca/" className="hmga-child">Riverside County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/san-diego-ca/" className="hmga-child">San Diego County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/personality-disorders/california/ventura-ca/" className="hmga-child">Ventura County Personality Disorders Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Psychotic Disorders Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/psychotic-disorders/california/" className="hmga-primary">California Psychotic Disorders Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/los-angeles-ca/" className="hmga-child">Los Angeles County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/orange-county-ca/" className="hmga-child">Orange County Psychotic Disorders Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p135" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Psychotic Disorders Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p135" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Psychotic Disorders Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/psychotic-disorders/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/anaheim-ca/" className="hmga-city">Anaheim Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/psychotic-disorders/california/brea-ca/" className="hmga-city">Brea Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/buena-park-ca/" className="hmga-city">Buena Park Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/psychotic-disorders/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/cypress-ca/" className="hmga-city">Cypress Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/psychotic-disorders/california/dana-point-ca/" className="hmga-city">Dana Point Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/psychotic-disorders/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/fullerton-ca/" className="hmga-city">Fullerton Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/psychotic-disorders/california/garden-grove-ca/" className="hmga-city">Garden Grove Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/psychotic-disorders/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/psychotic-disorders/california/irvine-ca/" className="hmga-city">Irvine Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/psychotic-disorders/california/la-habra-ca/" className="hmga-city">La Habra Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/la-palma-ca/" className="hmga-city">La Palma Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/lake-forest-ca/" className="hmga-city">Lake Forest Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/psychotic-disorders/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/psychotic-disorders/california/newport-beach-ca/" className="hmga-city">Newport Beach Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/psychotic-disorders/california/orange-ca/" className="hmga-city">Orange Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/psychotic-disorders/california/placentia-ca/" className="hmga-city">Placentia Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/psychotic-disorders/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/psychotic-disorders/california/san-clemente-ca/" className="hmga-city">San Clemente Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/santa-ana-ca/" className="hmga-city">Santa Ana Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/seal-beach-ca/" className="hmga-city">Seal Beach Psychotic Disorders Rehab</Link>
                                          <Link href="/mental-health/psychotic-disorders/california/stanton-ca/" className="hmga-city">Stanton Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/psychotic-disorders/california/tustin-ca/" className="hmga-city">Tustin Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/psychotic-disorders/california/villa-park-ca/" className="hmga-city">Villa Park Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/psychotic-disorders/california/westminster-ca/" className="hmga-city">Westminster Psychotic Disorders Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/psychotic-disorders/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Psychotic Disorders Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/riverside-ca/" className="hmga-child">Riverside County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/san-diego-ca/" className="hmga-child">San Diego County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/psychotic-disorders/california/ventura-ca/" className="hmga-child">Ventura County Psychotic Disorders Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">PTSD Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/trauma-disorder/ptsd/california/" className="hmga-primary">California PTSD Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/los-angeles-ca/" className="hmga-child">Los Angeles County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/orange-county-ca/" className="hmga-child">Orange County PTSD Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p142" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County PTSD Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p142" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">PTSD Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/aliso-viejo-ca/" className="hmga-city">Aliso Viejo PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/anaheim-ca/" className="hmga-city">Anaheim PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/brea-ca/" className="hmga-city">Brea PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/buena-park-ca/" className="hmga-city">Buena Park PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/costa-mesa-ca/" className="hmga-city">Costa Mesa PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/cypress-ca/" className="hmga-city">Cypress PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/dana-point-ca/" className="hmga-city">Dana Point PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/fountain-valley-ca/" className="hmga-city">Fountain Valley PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/fullerton-ca/" className="hmga-city">Fullerton PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/garden-grove-ca/" className="hmga-city">Garden Grove PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/huntington-beach-ca/" className="hmga-city">Huntington Beach PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/irvine-ca/" className="hmga-city">Irvine PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/la-habra-ca/" className="hmga-city">La Habra PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/la-palma-ca/" className="hmga-city">La Palma PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/laguna-beach-ca/" className="hmga-city">Laguna Beach PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/laguna-hills-ca/" className="hmga-city">Laguna Hills PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/laguna-niguel-ca/" className="hmga-city">Laguna Niguel PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/laguna-woods-ca/" className="hmga-city">Laguna Woods PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/lake-forest-ca/" className="hmga-city">Lake Forest PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/los-alamitos-ca/" className="hmga-city">Los Alamitos PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/mission-viejo-ca/" className="hmga-city">Mission Viejo PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/newport-beach-ca/" className="hmga-city">Newport Beach PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/orange-ca/" className="hmga-city">Orange PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/placentia-ca/" className="hmga-city">Placentia PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/san-clemente-ca/" className="hmga-city">San Clemente PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/santa-ana-ca/" className="hmga-city">Santa Ana PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/seal-beach-ca/" className="hmga-city">Seal Beach PTSD Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/ptsd/stanton-ca/" className="hmga-city">Stanton PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/tustin-ca/" className="hmga-city">Tustin PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/villa-park-ca/" className="hmga-city">Villa Park PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/westminster-ca/" className="hmga-city">Westminster PTSD Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/trauma-disorder/ptsd/yorba-linda-ca/" className="hmga-city">Yorba Linda PTSD Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/riverside-ca/" className="hmga-child">Riverside County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/san-bernardino-ca/" className="hmga-child">San Bernardino County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/san-diego-ca/" className="hmga-child">San Diego County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/santa-barbara-ca/" className="hmga-child">Santa Barbara County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/ptsd/ventura-ca/" className="hmga-child">Ventura County PTSD Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Residential Inpatient Anxiety Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/california/" className="hmga-primary">California Residential Inpatient Anxiety Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/los-angeles-ca/" className="hmga-child">Los Angeles County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/orange-county-ca/" className="hmga-child">Orange County Residential Inpatient Anxiety Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p149" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Residential Inpatient Anxiety Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p149" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Residential Inpatient Anxiety Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/anaheim-ca/" className="hmga-city">Anaheim Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/brea-ca/" className="hmga-city">Brea Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/buena-park-ca/" className="hmga-city">Buena Park Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/costa-mesa-ca/" className="hmga-city">Costa Mesa Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/cypress-ca/" className="hmga-city">Cypress Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/dana-point-ca/" className="hmga-city">Dana Point Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/fountain-valley-ca/" className="hmga-city">Fountain Valley Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/fullerton-ca/" className="hmga-city">Fullerton Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/garden-grove-ca/" className="hmga-city">Garden Grove Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/huntington-beach-ca/" className="hmga-city">Huntington Beach Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/irvine-ca/" className="hmga-city">Irvine Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/la-habra-ca/" className="hmga-city">La Habra Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/la-palma-ca/" className="hmga-city">La Palma Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/laguna-beach-ca/" className="hmga-city">Laguna Beach Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/laguna-hills-ca/" className="hmga-city">Laguna Hills Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/laguna-woods-ca/" className="hmga-city">Laguna Woods Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/lake-forest-ca/" className="hmga-city">Lake Forest Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/los-alamitos-ca/" className="hmga-city">Los Alamitos Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/mission-viejo-ca/" className="hmga-city">Mission Viejo Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/newport-beach-ca/" className="hmga-city">Newport Beach Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/orange-ca/" className="hmga-city">Orange Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/placentia-ca/" className="hmga-city">Placentia Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/san-clemente-ca/" className="hmga-city">San Clemente Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/santa-ana-ca/" className="hmga-city">Santa Ana Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/seal-beach-ca/" className="hmga-city">Seal Beach Residential Inpatient Anxiety Disorder Rehab</Link>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/stanton-ca/" className="hmga-city">Stanton Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/tustin-ca/" className="hmga-city">Tustin Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/villa-park-ca/" className="hmga-city">Villa Park Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/westminster-ca/" className="hmga-city">Westminster Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/yorba-linda-ca/" className="hmga-city">Yorba Linda Residential Inpatient Anxiety Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/riverside-ca/" className="hmga-child">Riverside County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/san-bernardino-ca/" className="hmga-child">San Bernardino County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/san-diego-ca/" className="hmga-child">San Diego County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/santa-barbara-ca/" className="hmga-child">Santa Barbara County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/anxiety-disorders/inpatient-anxiety-treatment/ventura-ca/" className="hmga-child">Ventura County Residential Inpatient Anxiety Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Residential Inpatient Depression Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/california/" className="hmga-primary">California Residential Inpatient Depression Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/los-angeles-ca/" className="hmga-child">Los Angeles County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/orange-county-ca/" className="hmga-child">Orange County Residential Inpatient Depression Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p156" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Residential Inpatient Depression Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p156" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Residential Inpatient Depression Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/anaheim-ca/" className="hmga-city">Anaheim Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/brea-ca/" className="hmga-city">Brea Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/buena-park-ca/" className="hmga-city">Buena Park Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/costa-mesa-ca/" className="hmga-city">Costa Mesa Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/cypress-ca/" className="hmga-city">Cypress Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/dana-point-ca/" className="hmga-city">Dana Point Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/fountain-valley-ca/" className="hmga-city">Fountain Valley Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/fullerton-ca/" className="hmga-city">Fullerton Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/garden-grove-ca/" className="hmga-city">Garden Grove Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/huntington-beach-ca/" className="hmga-city">Huntington Beach Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/irvine-ca/" className="hmga-city">Irvine Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/la-habra-ca/" className="hmga-city">La Habra Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/la-palma-ca/" className="hmga-city">La Palma Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/laguna-beach-ca/" className="hmga-city">Laguna Beach Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/laguna-hills-ca/" className="hmga-city">Laguna Hills Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/laguna-woods-ca/" className="hmga-city">Laguna Woods Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/lake-forest-ca/" className="hmga-city">Lake Forest Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/los-alamitos-ca/" className="hmga-city">Los Alamitos Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/mission-viejo-ca/" className="hmga-city">Mission Viejo Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/newport-beach-ca/" className="hmga-city">Newport Beach Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/orange-ca/" className="hmga-city">Orange Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/placentia-ca/" className="hmga-city">Placentia Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/san-clemente-ca/" className="hmga-city">San Clemente Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/santa-ana-ca/" className="hmga-city">Santa Ana Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/seal-beach-ca/" className="hmga-city">Seal Beach Residential Inpatient Depression Rehab</Link>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/stanton-ca/" className="hmga-city">Stanton Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/tustin-ca/" className="hmga-city">Tustin Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/villa-park-ca/" className="hmga-city">Villa Park Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/westminster-ca/" className="hmga-city">Westminster Residential Inpatient Depression Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/yorba-linda-ca/" className="hmga-city">Yorba Linda Residential Inpatient Depression Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/riverside-ca/" className="hmga-child">Riverside County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/san-bernardino-ca/" className="hmga-child">San Bernardino County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/san-diego-ca/" className="hmga-child">San Diego County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/santa-barbara-ca/" className="hmga-child">Santa Barbara County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/mood-disorders/inpatient-depression-treatment/ventura-ca/" className="hmga-child">Ventura County Residential Inpatient Depression Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Stress Management Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/stress-management/california/" className="hmga-primary">California Stress Management Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/los-angeles-ca/" className="hmga-child">Los Angeles County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/orange-county-ca/" className="hmga-child">Orange County Stress Management Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p163" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Stress Management Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p163" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Stress Management Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/stress-management/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/anaheim-ca/" className="hmga-city">Anaheim Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/stress-management/california/brea-ca/" className="hmga-city">Brea Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/buena-park-ca/" className="hmga-city">Buena Park Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/stress-management/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/cypress-ca/" className="hmga-city">Cypress Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/stress-management/california/dana-point-ca/" className="hmga-city">Dana Point Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/stress-management/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/fullerton-ca/" className="hmga-city">Fullerton Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/stress-management/california/garden-grove-ca/" className="hmga-city">Garden Grove Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/stress-management/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/stress-management/california/irvine-ca/" className="hmga-city">Irvine Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/stress-management/california/la-habra-ca/" className="hmga-city">La Habra Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/la-palma-ca/" className="hmga-city">La Palma Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/lake-forest-ca/" className="hmga-city">Lake Forest Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/stress-management/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/stress-management/california/newport-beach-ca/" className="hmga-city">Newport Beach Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/stress-management/california/orange-ca/" className="hmga-city">Orange Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/stress-management/california/placentia-ca/" className="hmga-city">Placentia Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/stress-management/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/stress-management/california/san-clemente-ca/" className="hmga-city">San Clemente Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/santa-ana-ca/" className="hmga-city">Santa Ana Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/seal-beach-ca/" className="hmga-city">Seal Beach Stress Management Rehab</Link>
                                          <Link href="/mental-health/therapy/stress-management/california/stanton-ca/" className="hmga-city">Stanton Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/stress-management/california/tustin-ca/" className="hmga-city">Tustin Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/stress-management/california/villa-park-ca/" className="hmga-city">Villa Park Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/stress-management/california/westminster-ca/" className="hmga-city">Westminster Stress Management Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/stress-management/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Stress Management Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/riverside-ca/" className="hmga-child">Riverside County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/san-diego-ca/" className="hmga-child">San Diego County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/stress-management/california/ventura-ca/" className="hmga-child">Ventura County Stress Management Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Talk Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/therapy/talk/california/" className="hmga-primary">California Talk Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/los-angeles-ca/" className="hmga-child">Los Angeles County Talk Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/orange-county-ca/" className="hmga-child">Orange County Talk Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p170" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Talk Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p170" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Talk Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/therapy/talk/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/anaheim-ca/" className="hmga-city">Anaheim Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/therapy/talk/california/brea-ca/" className="hmga-city">Brea Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/buena-park-ca/" className="hmga-city">Buena Park Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/therapy/talk/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/cypress-ca/" className="hmga-city">Cypress Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/therapy/talk/california/dana-point-ca/" className="hmga-city">Dana Point Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/therapy/talk/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/fullerton-ca/" className="hmga-city">Fullerton Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/therapy/talk/california/garden-grove-ca/" className="hmga-city">Garden Grove Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/therapy/talk/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/therapy/talk/california/irvine-ca/" className="hmga-city">Irvine Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/therapy/talk/california/la-habra-ca/" className="hmga-city">La Habra Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/la-palma-ca/" className="hmga-city">La Palma Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/lake-forest-ca/" className="hmga-city">Lake Forest Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/therapy/talk/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/therapy/talk/california/newport-beach-ca/" className="hmga-city">Newport Beach Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/therapy/talk/california/orange-ca/" className="hmga-city">Orange Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/therapy/talk/california/placentia-ca/" className="hmga-city">Placentia Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/therapy/talk/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/therapy/talk/california/san-clemente-ca/" className="hmga-city">San Clemente Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/santa-ana-ca/" className="hmga-city">Santa Ana Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/seal-beach-ca/" className="hmga-city">Seal Beach Talk Rehab</Link>
                                          <Link href="/mental-health/therapy/talk/california/stanton-ca/" className="hmga-city">Stanton Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/therapy/talk/california/tustin-ca/" className="hmga-city">Tustin Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/therapy/talk/california/villa-park-ca/" className="hmga-city">Villa Park Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/therapy/talk/california/westminster-ca/" className="hmga-city">Westminster Talk Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/therapy/talk/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Talk Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/riverside-ca/" className="hmga-child">Riverside County Talk Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Talk Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/san-diego-ca/" className="hmga-child">San Diego County Talk Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Talk Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/therapy/talk/california/ventura-ca/" className="hmga-child">Ventura County Talk Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                        <details name="hmga-1895" className="hmga-item">
                          <summary className="hmga-head">
                            <h3 className="hmga-label">Trauma Disorder Rehab</h3>
                          </summary>
                          <div className="hmga-panel">
                            <ul className="hmga-grid">
                              <li className="hmga-cell">
                                <Link href="/mental-health/trauma-disorder/california/" className="hmga-primary">California Trauma Disorder Rehab</Link>
                                <ul className="hmga-sub">
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/los-angeles-ca/" className="hmga-child">Los Angeles County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/orange-county-ca/" className="hmga-child">Orange County Trauma Disorder Rehab</Link>
                                      <button type="button" className="hmga-expand" aria-controls="hmga-1895-p177" aria-expanded="false">
                                        <span className="screen-reader-text">Show cities in Orange County Trauma Disorder Rehab</span>
                                      </button>
                                    </div>
                                    <div id="hmga-1895-p177" className="hmga-cities" hidden>
                                      <p className="hmga-cities__eyebrow">Trauma Disorder Rehab Services Across Orange County Cities and Neighborhoods</p>
                                      <ul className="hmga-city-list hmga-city-list--indexed">
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">A</span>
                                          <Link href="/mental-health/trauma-disorder/california/aliso-viejo-ca/" className="hmga-city">Aliso Viejo Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/anaheim-ca/" className="hmga-city">Anaheim Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">B</span>
                                          <Link href="/mental-health/trauma-disorder/california/brea-ca/" className="hmga-city">Brea Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/buena-park-ca/" className="hmga-city">Buena Park Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">C</span>
                                          <Link href="/mental-health/trauma-disorder/california/costa-mesa-ca/" className="hmga-city">Costa Mesa Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/cypress-ca/" className="hmga-city">Cypress Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">D</span>
                                          <Link href="/mental-health/trauma-disorder/california/dana-point-ca/" className="hmga-city">Dana Point Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">F</span>
                                          <Link href="/mental-health/trauma-disorder/california/fountain-valley-ca/" className="hmga-city">Fountain Valley Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/fullerton-ca/" className="hmga-city">Fullerton Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">G</span>
                                          <Link href="/mental-health/trauma-disorder/california/garden-grove-ca/" className="hmga-city">Garden Grove Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">H</span>
                                          <Link href="/mental-health/trauma-disorder/california/huntington-beach-ca/" className="hmga-city">Huntington Beach Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">I</span>
                                          <Link href="/mental-health/trauma-disorder/california/irvine-ca/" className="hmga-city">Irvine Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">L</span>
                                          <Link href="/mental-health/trauma-disorder/california/la-habra-ca/" className="hmga-city">La Habra Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/la-palma-ca/" className="hmga-city">La Palma Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/laguna-beach-ca/" className="hmga-city">Laguna Beach Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/laguna-hills-ca/" className="hmga-city">Laguna Hills Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/laguna-niguel-ca/" className="hmga-city">Laguna Niguel Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/laguna-woods-ca/" className="hmga-city">Laguna Woods Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/lake-forest-ca/" className="hmga-city">Lake Forest Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/los-alamitos-ca/" className="hmga-city">Los Alamitos Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">M</span>
                                          <Link href="/mental-health/trauma-disorder/california/mission-viejo-ca/" className="hmga-city">Mission Viejo Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">N</span>
                                          <Link href="/mental-health/trauma-disorder/california/newport-beach-ca/" className="hmga-city">Newport Beach Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">O</span>
                                          <Link href="/mental-health/trauma-disorder/california/orange-ca/" className="hmga-city">Orange Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">P</span>
                                          <Link href="/mental-health/trauma-disorder/california/placentia-ca/" className="hmga-city">Placentia Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">R</span>
                                          <Link href="/mental-health/trauma-disorder/california/rancho-santa-margarita-ca/" className="hmga-city">Rancho Santa Margarita Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">S</span>
                                          <Link href="/mental-health/trauma-disorder/california/san-clemente-ca/" className="hmga-city">San Clemente Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/san-juan-capistrano-ca/" className="hmga-city">San Juan Capistrano Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/santa-ana-ca/" className="hmga-city">Santa Ana Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/seal-beach-ca/" className="hmga-city">Seal Beach Trauma Disorder Rehab</Link>
                                          <Link href="/mental-health/trauma-disorder/california/stanton-ca/" className="hmga-city">Stanton Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">T</span>
                                          <Link href="/mental-health/trauma-disorder/california/tustin-ca/" className="hmga-city">Tustin Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">V</span>
                                          <Link href="/mental-health/trauma-disorder/california/villa-park-ca/" className="hmga-city">Villa Park Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">W</span>
                                          <Link href="/mental-health/trauma-disorder/california/westminster-ca/" className="hmga-city">Westminster Trauma Disorder Rehab</Link>
                                        </li>
                                        <li className="hmga-city-index__group">
                                          <span className="hmga-city-index__heading">Y</span>
                                          <Link href="/mental-health/trauma-disorder/california/yorba-linda-ca/" className="hmga-city">Yorba Linda Trauma Disorder Rehab</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/riverside-ca/" className="hmga-child">Riverside County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/san-bernardino-ca/" className="hmga-child">San Bernardino County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/san-diego-ca/" className="hmga-child">San Diego County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/santa-barbara-ca/" className="hmga-child">Santa Barbara County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                  <li className="hmga-sub__item">
                                    <div className="hmga-sub__row">
                                      <Link href="/mental-health/trauma-disorder/california/ventura-ca/" className="hmga-child">Ventura County Trauma Disorder Rehab</Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-be874c0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-3a0f557 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-7e8b8c3 elementor-widget-tablet__width-auto elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Begin your journey toward better mental health.</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-839c725 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">Get evidence-based treatment in a peaceful location, with a team of dedicated, expert staff.</div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f3fdd9e e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                  <div className="elementor-element elementor-element-62f5798 elementor-widget-tablet__width-auto elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">Check My Insurance Coverage</h4>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-78ebaa4 elementor-widget__width-inherit elementor-widget elementor-widget-template" data-widget_type="template.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-template">
                        <div className="elementor elementor-5363">
                          <div className="elementor-element elementor-element-62a7c0d4 e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-dbef85a elementor-widget elementor-widget-html" data-widget_type="html.default">
                              <div className="elementor-widget-container">
                                <WidgetScript src="https://form.jotform.com/jsform/252953883636471" />
                                <iframe loading="lazy" id="252953883636471" src="https://form.jotform.com/252953883636471?parentURL=https%3A%2F%2Fconnectionsoc.com%2Flocations-served%2F&amp;jsForm=true" name="252953883636471" allow="geolocation; microphone; camera; fullscreen; payment" title="COC New Design Insurance Form" style={{minWidth: "100%", maxWidth: "100%", border: "none", height: "700px"}}></iframe>
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
          </div>
        </div>
      </div>
    </Layout11>
  );
}
