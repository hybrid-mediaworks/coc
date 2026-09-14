import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function ArchivedPageDesigns(props: Record<string, string>) {
  const __presentIds = (props.__present ?? "").split(",").filter(Boolean);
  const __present = (id: string) => __presentIds.length === 0 || __presentIds.includes(id);
  const drug = props.drug ?? "Drug";
  return (
    <>
    <div className="wp-singular page-template page-template-elementor_canvas page page-id-5024 page-child parent-pageid-6707 wp-embed-responsive wp-theme-hello-elementor facilit-gallery--empty hello-elementor-default elementor-default elementor-template-canvas elementor-kit-6 elementor-page elementor-page-5024">
  <svg id="asw-filters-svg" aria-hidden="true" style={{"display":"none"}}>
    <defs>
      <filter id="asw-protanopia-filter">
        <feColorMatrix type="matrix"></feColorMatrix>
      </filter>
      <filter id="asw-deuteranopia-filter">
        <feColorMatrix type="matrix"></feColorMatrix>
      </filter>
      <filter id="asw-tritanopia-filter">
        <feColorMatrix type="matrix"></feColorMatrix>
      </filter>
    </defs>
  </svg>
  <div className="elementor elementor-5024">
    {__present("4cbb1d8") ? (
<div className="elementor-element elementor-element-4cbb1d8 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-16730243 elementor-widget__width-initial elementor-widget elementor-widget-image" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <Image src="/images/1c11cd0e08833d50e1be364589ce5557.webp" alt="" width={150} height={53} className="attachment-thumbnail size-thumbnail wp-image-4496" />
          </div>
        </div>
        <div className="elementor-element elementor-element-72dcc70e elementor-nav-menu--stretch elementor-widget-mobile__width-initial elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<svg aria-hidden=\\&quot;true\\&quot; class=\\&quot;e-font-icon-svg e-fas-caret-down\\&quot; viewBox=\\&quot;0 0 320 512\\&quot; xmlns=\\&quot;http:\\/\\/www.w3.org\\/2000\\/svg\\&quot;><path d=\\&quot;M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\\&quot;><\\/path><\\/svg>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
          <div className="elementor-widget-container">
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
              <ul id="menu-1-72dcc70e" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-37" style={{"fontSize":"16px"}}>
                  <Link href="/about-us/" className="elementor-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-1" aria-haspopup="true" aria-controls="sm-17893898916155142-2" aria-expanded="false">
                    About Us
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </Link>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-2" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-1" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6427" style={{"fontSize":"13px"}}>
                      <Link href="/staff/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Staff
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57006" style={{"fontSize":"13px"}}>
                      <Link href="/our-facilities/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Our Facilities
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1563" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/faq/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        FAQ
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1884" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/blog/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6836" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/" className="elementor-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-3" aria-haspopup="true" aria-controls="sm-17893898916155142-4" aria-expanded="false">
                    Mental Health Disorders
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </Link>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-4" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-3" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6832" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/mood-disorders/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-5" aria-haspopup="true" aria-controls="sm-17893898916155142-6" aria-expanded="false">
                        Mood Disorders
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-6" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-5" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/depression/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Depression Treatment (MentalHealth National)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1240" style={{"fontSize":"13px"}}>
                          <Link href="/bipolar-disorder/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-7" aria-haspopup="true" aria-controls="sm-17893898916155142-8" aria-expanded="false">
                            Bipolar Disorder
                            <span className="sub-arrow" style={{"fontSize":"13px"}}>
                              <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          </Link>
                          <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-8" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-7" aria-expanded="false">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1792" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/mood-disorders/bipolar/hypomania/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                                Hypomania
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/mood-disorders/bipolar/cyclothymia/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                                Cyclothymia
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6831" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/premenstrual-dysphoric-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Premenstrual Dysphoric Disorder (PMDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6830" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/disruptive-mood-dysregulation-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Disruptive Mood Dysregulation Disorder (DMDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1793" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/depression/major-depressive-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Major Depressive Disorder (MDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6829" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/persistent-depressive-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Persistent Depressive Disorder (PDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/seasonal-affective-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Seasonal Affective Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1241" style={{"fontSize":"13px"}}>
                      <Link href="/trauma/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-9" aria-haspopup="true" aria-controls="sm-17893898916155142-10" aria-expanded="false">
                        Trauma Disorders
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-10" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-9" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6828" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/trauma-disorder/ptsd/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Post Traumatic Stress Disorder (PTSD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3543" style={{"fontSize":"13px"}}>
                          <Link href="/adjustment-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Adjustment Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6834" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/personality-disorders/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-11" aria-haspopup="true" aria-controls="sm-17893898916155142-12" aria-expanded="false">
                        Personality Disorders
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-12" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-11" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6827" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/borderline-personality-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Borderline Personality Disorder (BPD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3548" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/antisocial-personality-disorder-2/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Antisocial Personality Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3549" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/dissociative-identity-disorder-2/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Dissociative Identity Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3550" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/histrionic-personality-disorder/histronic-personality-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Histrionic Personality Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3544" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/paranoid-personality-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Paranoid Personality Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6833" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/psychotic-disorders/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-13" aria-haspopup="true" aria-controls="sm-17893898916155142-14" aria-expanded="false">
                        Psychotic Disorders
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-14" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-13" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6826" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/psychotic-disorders/schizophrenia/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Schizophrenia
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6825" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/psychotic-disorders/schizoaffective-disorder/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            Schizoaffective Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6839" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/neurodevelopment-disorder/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-15" aria-haspopup="true" aria-controls="sm-17893898916155142-16" aria-expanded="false">
                        Neurodevelopment Disorder Treatment (MentalHealth National)
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-16" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-15" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6823" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/neurodevelopment-disorder/adhd/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                            ADHD
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-56714" style={{"fontSize":"16px"}}>
                  <a href="#" className="elementor-item elementor-item-anchor has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-17" aria-haspopup="true" aria-controls="sm-17893898916155142-18" aria-expanded="false">
                    Mental Health Treatment
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-18" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-17" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56718" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/california/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-19" aria-haspopup="true" aria-controls="sm-17893898916155142-20" aria-expanded="false">
                        California
                        <span className="sub-arrow" style={{"fontSize":"13px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-20" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-19" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6225" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/therapy/orange-county-ca/" className="elementor-sub-item has-submenu" style={{"fontSize":"13px"}} id="sm-17893898916155142-21" aria-haspopup="true" aria-controls="sm-17893898916155142-22" aria-expanded="false">
                            Orange County, CA
                            <span className="sub-arrow" style={{"fontSize":"13px"}}>
                              <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          </Link>
                          <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-17893898916155142-22" role="group" aria-hidden="true" aria-labelledby="sm-17893898916155142-21" aria-expanded="false">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56715" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/therapy/tustin-ca/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                                Tustin
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56716" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/therapy/villa-park-ca/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                                Villa Park
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-821" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Cognitive Behavioral Therapy Therapy (MentalHealth National)
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1239" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/dbt/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        DBT Therapy (MentalHealth National)
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2519" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/seeking-safety/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Seeking Safety
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1272" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/motivational-interviewing/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Motivational Interviewing
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1273" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/medication-management/" className="elementor-sub-item" style={{"fontSize":"13px"}}>
                        Medication Management
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33" style={{"fontSize":"16px"}}>
                  <Link href="/contact/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Contact
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6835" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/anxiety-disorders/generalized-anxiety-disorder/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Generalized Anxiety Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/anxiety-disorders/panic-disorder/panic-attack/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Panic Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6822" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Obsessive Compulsive Disorder (OCD)
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6837" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/anxiety-disorders/social-anxiety-disorder/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Social Anxiety Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6838" style={{"fontSize":"16px"}}>
                  <Link href="/mental-health/anxiety-disorders/agoraphobia/" className="elementor-item" style={{"fontSize":"13px"}}>
                    Agoraphobia
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
              <svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000">
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>
              <svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000">
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>
            </div>
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{"width":"1920px","left":"0px","top":"44px","--menu-height":"0"}}>
              <ul id="menu-2-72dcc70e" className="elementor-nav-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-37" style={{"fontSize":"13px"}}>
                  <Link href="/about-us/" className="elementor-item has-submenu" tabIndex={-1} style={{"fontSize":"13px"}} id="sm-1789389891618365-1" aria-haspopup="true" aria-controls="sm-1789389891618365-2" aria-expanded="false">
                    About Us
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </Link>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-2" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-1" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6427" style={{"fontSize":"13px"}}>
                      <Link href="/staff/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Staff
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57006" style={{"fontSize":"13px"}}>
                      <Link href="/our-facilities/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Our Facilities
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1563" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/faq/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        FAQ
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1884" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/blog/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6836" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/" className="elementor-item has-submenu" tabIndex={-1} style={{"fontSize":"13px"}} id="sm-1789389891618365-3" aria-haspopup="true" aria-controls="sm-1789389891618365-4" aria-expanded="false">
                    Mental Health Disorders
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </Link>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-4" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-3" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6832" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/mood-disorders/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-5" aria-haspopup="true" aria-controls="sm-1789389891618365-6" aria-expanded="false">
                        Mood Disorders
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-6" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-5" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/depression/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Depression Treatment (MentalHealth National)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1240" style={{"fontSize":"13px"}}>
                          <Link href="/bipolar-disorder/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-7" aria-haspopup="true" aria-controls="sm-1789389891618365-8" aria-expanded="false">
                            Bipolar Disorder
                            <span className="sub-arrow" style={{"fontSize":"11px"}}>
                              <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          </Link>
                          <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-8" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-7" aria-expanded="false">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1792" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/mood-disorders/bipolar/hypomania/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                                Hypomania
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/mood-disorders/bipolar/cyclothymia/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                                Cyclothymia
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6831" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/premenstrual-dysphoric-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Premenstrual Dysphoric Disorder (PMDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6830" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/disruptive-mood-dysregulation-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Disruptive Mood Dysregulation Disorder (DMDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1793" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/depression/major-depressive-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Major Depressive Disorder (MDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6829" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/persistent-depressive-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Persistent Depressive Disorder (PDD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/mood-disorders/seasonal-affective-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Seasonal Affective Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1241" style={{"fontSize":"13px"}}>
                      <Link href="/trauma/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-9" aria-haspopup="true" aria-controls="sm-1789389891618365-10" aria-expanded="false">
                        Trauma Disorders
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-10" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-9" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6828" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/trauma-disorder/ptsd/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Post Traumatic Stress Disorder (PTSD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3543" style={{"fontSize":"13px"}}>
                          <Link href="/adjustment-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Adjustment Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6834" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/personality-disorders/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-11" aria-haspopup="true" aria-controls="sm-1789389891618365-12" aria-expanded="false">
                        Personality Disorders
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-12" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-11" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6827" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/borderline-personality-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Borderline Personality Disorder (BPD)
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3548" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/antisocial-personality-disorder-2/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Antisocial Personality Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3549" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/dissociative-identity-disorder-2/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Dissociative Identity Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3550" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/histrionic-personality-disorder/histronic-personality-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Histrionic Personality Disorder
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3544" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/personality-disorders/paranoid-personality-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Paranoid Personality Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6833" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/psychotic-disorders/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-13" aria-haspopup="true" aria-controls="sm-1789389891618365-14" aria-expanded="false">
                        Psychotic Disorders
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-14" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-13" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6826" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/psychotic-disorders/schizophrenia/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Schizophrenia
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6825" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/psychotic-disorders/schizoaffective-disorder/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            Schizoaffective Disorder
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6839" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/neurodevelopment-disorder/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-15" aria-haspopup="true" aria-controls="sm-1789389891618365-16" aria-expanded="false">
                        Neurodevelopment Disorder Treatment (MentalHealth National)
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-16" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-15" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6823" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/neurodevelopment-disorder/adhd/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                            ADHD
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-56714" style={{"fontSize":"13px"}}>
                  <a href="#" className="elementor-item elementor-item-anchor has-submenu" tabIndex={-1} style={{"fontSize":"13px"}} id="sm-1789389891618365-17" aria-haspopup="true" aria-controls="sm-1789389891618365-18" aria-expanded="false">
                    Mental Health Treatment
                    <span className="sub-arrow" style={{"fontSize":"13px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-18" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-17" aria-expanded="false">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56718" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/california/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-19" aria-haspopup="true" aria-controls="sm-1789389891618365-20" aria-expanded="false">
                        California
                        <span className="sub-arrow" style={{"fontSize":"11px"}}>
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                          </svg>
                        </span>
                      </Link>
                      <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-20" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-19" aria-expanded="false">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6225" style={{"fontSize":"13px"}}>
                          <Link href="/mental-health/therapy/orange-county-ca/" className="elementor-sub-item has-submenu" tabIndex={-1} style={{"fontSize":"11px"}} id="sm-1789389891618365-21" aria-haspopup="true" aria-controls="sm-1789389891618365-22" aria-expanded="false">
                            Orange County, CA
                            <span className="sub-arrow" style={{"fontSize":"11px"}}>
                              <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512">
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          </Link>
                          <ul className="sub-menu elementor-nav-menu--dropdown" id="sm-1789389891618365-22" role="group" aria-hidden="true" aria-labelledby="sm-1789389891618365-21" aria-expanded="false">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56715" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/therapy/tustin-ca/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                                Tustin
                              </Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56716" style={{"fontSize":"13px"}}>
                              <Link href="/mental-health/therapy/villa-park-ca/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                                Villa Park
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-821" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Cognitive Behavioral Therapy Therapy (MentalHealth National)
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1239" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/dbt/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        DBT Therapy (MentalHealth National)
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2519" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/seeking-safety/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Seeking Safety
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1272" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/motivational-interviewing/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Motivational Interviewing
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1273" style={{"fontSize":"13px"}}>
                      <Link href="/mental-health/therapy/medication-management/" className="elementor-sub-item" tabIndex={-1} style={{"fontSize":"11px"}}>
                        Medication Management
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33" style={{"fontSize":"13px"}}>
                  <Link href="/contact/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Contact
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6835" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/anxiety-disorders/generalized-anxiety-disorder/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Generalized Anxiety Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/anxiety-disorders/panic-disorder/panic-attack/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Panic Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6822" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Obsessive Compulsive Disorder (OCD)
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6837" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/anxiety-disorders/social-anxiety-disorder/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Social Anxiety Disorder
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6838" style={{"fontSize":"13px"}}>
                  <Link href="/mental-health/anxiety-disorders/agoraphobia/" className="elementor-item" tabIndex={-1} style={{"fontSize":"13px"}}>
                    Agoraphobia
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="elementor-element elementor-element-8e7d561 elementor-hidden-desktop elementor-hidden-tablet elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
          <div className="elementor-widget-container">
            <div className="elementor-icon-wrapper">
              <div className="elementor-icon">
                <svg width={47} height={47} viewBox="0 0 47 47" fill="none">
                  <circle cx="23.5" cy="23.5" r="23.5" fill="white"></circle>
                  <path d="M19.5893 17.1614C19.8848 18.5951 19.2374 19.0273 19.2374 19.0273L17.3515 20.1593C16.5998 20.5845 17.0091 21.4743 17.0091 21.4743C19.9561 27.5824 23.216 29.4203 24.4028 30.2362C25.2615 30.8265 25.7843 30.406 25.7843 30.406L28.2136 28.4713C29.0764 27.6641 29.7338 28.2193 29.7338 28.2193L34.5266 31.6393C35.3421 32.1849 34.976 33.2922 34.3882 34.2472C33.8068 35.1912 31.3829 37.4417 28.371 36.9235C25.3585 36.4061 20.0044 34.3607 16.3446 29.1201C12.6487 23.8283 11.3619 19.1951 11.3619 19.1951C9.79705 14.3792 13.8139 11.8149 13.8139 11.8149C16.9753 9.91188 18.4546 11.9384 18.4546 11.9384C18.4546 11.9384 19.2951 15.7269 19.5894 17.1613L19.5893 17.1614Z" fill="black"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-96f9794 elementor-align-right elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"17px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"17px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"17px"}}>
                    (949) 694-8305
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("455c2241") ? (
<div className="elementor-element elementor-element-455c2241 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-72cf86a7 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-5be66777 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"40px"}}>
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-72eda5a1 elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>
          <div className="elementor-element elementor-element-4319dcdb elementor-widget__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            </div>
          </div>
          <div className="elementor-element elementor-element-264303dc e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-3b315ed4 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                        (000) 000-0000
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6f26d16 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                        Call Now
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-635e55c3 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                        Verify Insurance
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("5f8dc3f0") ? (
<div className="elementor-element elementor-element-5f8dc3f0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-27d65e38 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-55d800b2 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image src="https://connectionsoc.com/wp-content/uploads/2024/10/5-19-1.svg" alt="" width={150} height={30} className="attachment-thumbnail size-thumbnail wp-image-4508" />
            </div>
          </div>
          <div className="elementor-element elementor-element-2c03f905 elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image src="https://connectionsoc.com/wp-content/uploads/2024/10/Google-logo.svg" alt="" width={82} height={40} className="attachment-thumbnail size-thumbnail wp-image-4507" />
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-1d4a0060 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-30c402 elementor-align-right elementor-mobile-align-justify elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      Read Reviews
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-64b327d5 elementor-widget-mobile__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image src="https://connectionsoc.com/wp-content/uploads/2024/10/Google-logo.svg" alt="" width={82} height={40} className="attachment-thumbnail size-thumbnail wp-image-4507" />
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("78c19437") ? (
<div className="elementor-element elementor-element-78c19437 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-597cc66c e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-3212f657 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-7e29f20b elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="elementor-element elementor-element-463c6c75 elementor-widget__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </div>
          </div>
          <div className="elementor-element elementor-element-3d7f5e58 elementor-align-left elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                      Learn More About Us
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-4031e820 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-47735809 elementor-widget elementor-widget-video" data-settings="{&quot;youtube_url&quot;:&quot;https:\\/\\/www.youtube.com\\/watch?v=XHOmBV4js_E&quot;,&quot;show_image_overlay&quot;:&quot;yes&quot;,&quot;image_overlay&quot;:{&quot;url&quot;:&quot;https:\\/\\/connectionsoc.com\\/wp-content\\/uploads\\/2024\\/10\\/Frame-209.png&quot;,&quot;id&quot;:4515,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;}" data-widget_type="video.default">
            <div className="elementor-widget-container">
              <div className="elementor-wrapper elementor-open-inline">
                <div className="elementor-video"></div>
                <div className="elementor-custom-embed-image-overlay" style={{"backgroundImage":"url(/images/f4e230d22d0b7cdb5b7dd8b7c2d9a40d.webp)"}}>
                  <div className="elementor-custom-embed-play" role="button" aria-label="Play Video" tabIndex={0}>
                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-play" viewBox="0 0 1000 1000">
                      <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-679d0487 elementor-align-left elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                      Learn More About Us
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("3f3b51c6") ? (
<div className="elementor-element elementor-element-3f3b51c6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-6b882c4f e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-29cd120d e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-381b319d elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"38px"}}>
                  Where You’ll Be{" "}
                  <span className="gradient" style={{"fontSize":"38px"}}>
                    {" "}Staying
                  </span>
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-489bed0e elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                  Lorem Ipsum Dolor Sit Amet Consectetur
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-1d1afd16 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-21829a52 e-con-full elementor-hidden-mobile e-flex e-con e-child">
            <div className="elementor-element elementor-element-15b7e258 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                        Tour Our Facilities
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-38299972 elementor-align-right elementor-widget__width-auto elementor-tablet-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"18px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"18px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"18px"}}>
                    Tour Our Facilities
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-7aae05ce elementor-arrows-position-outside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="{&quot;slides_to_show&quot;:&quot;3&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:20,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image-carousel.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
              <div className="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off" id="swiper-wrapper-92c51c507a7e124b" style={{"transform":"none","transitionDuration":"0ms"}}>
                <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 4" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <Link data-elementor-open-lightbox="no" href="/wp-content/uploads/2024/09/Frame-107-1.png" style={{"fontSize":"16px"}}>
                    <figure className="swiper-slide-inner">
                      <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20253'%3E%3C/svg%3E" alt="Frame-107.png" width={400} height={253} className="swiper-slide-image" />
                    </figure>
                  </Link>
                </div>
                <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 4" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <Link data-elementor-open-lightbox="no" href="/wp-content/uploads/2024/09/Frame-108-1-1.png" style={{"fontSize":"16px"}}>
                    <figure className="swiper-slide-inner">
                      <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20253'%3E%3C/svg%3E" alt="Frame-108-1.png" width={400} height={253} className="swiper-slide-image" />
                    </figure>
                  </Link>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 4" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <Link data-elementor-open-lightbox="no" href="/wp-content/uploads/2024/09/Frame-109-1.png" style={{"fontSize":"16px"}}>
                    <figure className="swiper-slide-inner">
                      <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20253'%3E%3C/svg%3E" alt="Frame-109.png" width={400} height={253} className="swiper-slide-image" />
                    </figure>
                  </Link>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="4 / 4" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <Link data-elementor-open-lightbox="no" href="/wp-content/uploads/2024/09/Frame-110-1.png" style={{"fontSize":"16px"}}>
                    <figure className="swiper-slide-inner">
                      <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20253'%3E%3C/svg%3E" alt="Frame-110.png" width={400} height={253} className="swiper-slide-image" />
                    </figure>
                  </Link>
                </div>
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-92c51c507a7e124b">
                <svg width={13} height={21} viewBox="0 0 13 21" fill="none">
                  <path id="Right Arrow" d="M12.7796 20.3321C12.6496 20.4388 12.4728 20.4991 12.2881 20.5C12.1028 20.5014 11.925 20.4406 11.7965 20.3321L0.205453 10.9064C0.0740013 10.8009 0 10.6569 0 10.5067C0 10.3565 0.074007 10.2125 0.205453 10.107L11.7965 0.679258C11.9253 0.567288 12.1044 0.502676 12.2929 0.500078C12.4813 0.49754 12.663 0.557266 12.7963 0.665657C12.9296 0.774048 13.0031 0.921802 12.9999 1.07508C12.9968 1.2283 12.9173 1.37397 12.7796 1.47871L1.68013 10.5067L12.7796 19.5326C12.9105 19.6384 12.9841 19.7823 12.9841 19.9324C12.9841 20.0824 12.9105 20.2263 12.7796 20.3321Z" fill="black"></path>
                </svg>
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-92c51c507a7e124b">
                <svg width={13} height={21} viewBox="0 0 13 21" fill="none">
                  <path id="Right Arrow" d="M0.22035 20.3321C0.350443 20.4388 0.527168 20.4991 0.711914 20.5C0.897211 20.5014 1.07499 20.4406 1.20348 20.3321L12.7945 10.9064C12.926 10.8009 13 10.6569 13 10.5067C13 10.3565 12.926 10.2125 12.7945 10.107L1.20348 0.679258C1.07475 0.567288 0.895615 0.502676 0.707121 0.500078C0.518705 0.49754 0.337014 0.557266 0.203719 0.665657C0.0704272 0.774048 -0.00310675 0.921802 0.000100699 1.07508C0.0032209 1.2283 0.0827489 1.37397 0.220362 1.47871L11.3199 10.5067L0.220362 19.5326C0.089471 19.6384 0.0159434 19.7823 0.0159434 19.9324C0.0159434 20.0824 0.0894571 20.2263 0.22035 20.3321Z" fill="black"></path>
                </svg>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("668892a9") ? (
<div className="elementor-element elementor-element-668892a9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-4303b1ec e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-6a0717e3 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-75ab4c0e elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                  Lorem Ipsum Dolor Sit Amet Consectetur
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-2de0669e elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-5ce2e67f e-con-full elementor-hidden-mobile e-flex e-con e-child">
            <div className="elementor-element elementor-element-1f376553 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                        Verify Insurance
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2f37cbaf elementor-align-right elementor-widget__width-auto elementor-tablet-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"18px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"18px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"18px"}}>
                    Verify Insurance
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-19025005 elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;3f2ec17&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;4494de7&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;73e5119&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;c7d59cf&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;2f6b772&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;52a491e&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;ccab963&quot;}],&quot;slides_to_show&quot;:&quot;4&quot;,&quot;slides_to_show_tablet&quot;:&quot;3&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:34,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:15,&quot;sizes&quot;:[]},&quot;offset_sides&quot;:&quot;right&quot;,&quot;offset_width_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_width&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:80,&quot;sizes&quot;:[]},&quot;offset_width_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;pagination&quot;:&quot;bullets&quot;,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">
          <div className="elementor-widget-container">
            <div className="e-n-carousel swiper offset-right swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
              <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-714ea1b1b62a5aeb" style={{"transform":"none","transitionDuration":"0ms"}}>
                <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-2562d43c e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-51e03af0 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3927" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-7590e67c e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-215d33b5 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3928" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-5dc36312 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-404a584c elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3929" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-2d985daf e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-4447bfe5 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3930" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-172b3218 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-446fe6b6 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3931" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="6 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-15c35a54 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-66e8c274 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3932" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="7 / 7" style={{"width":"266.925px","marginRight":"34px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-e471fb4 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-11bad38d elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-3933" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("4d180128") ? (
<div className="elementor-element elementor-element-4d180128 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-118bdab8 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-2afe886a e-con-full elementor-hidden-mobile e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-element elementor-element-78767db8 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-d38b399 elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <rect y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_594)"></rect>
                        <rect x="9" y="9.55396" width={35} height={35} fill="url(#pattern0_31_594)"></rect>
                        <defs>
                          <pattern id="pattern0_31_594" patternContentUnits="objectBoundingBox" width={1} height={1}>
                            <use href="#image0_31_594" transform="scale(0.0078125)"></use>
                          </pattern>
                          <linearGradient id="paint0_linear_31_594" x1="6.27243e-07" y1="52.9032" x2="61.6998" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                          <image id="image0_31_594" width={128} height={128} href="data:image/png;base64,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"></image>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        Upscale Facility
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      Enjoy a comfortable, luxurious stay in a spectacular living environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-5a67fa5a elementor-widget__width-inherit elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%201'%3E%3C/svg%3E" alt="" width={150} height={1} className="attachment-thumbnail size-thumbnail wp-image-4814" />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-37fcc71e e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-61afbc7 elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <g id="activity">
                          <rect x="0.349182" y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_599)"></rect>
                          <g id="Group 626">
                            <g id="Group">
                              <g id="Group_2">
                                <path id="Vector" d="M15.5672 38.6027H33.6537L40.7421 31.9275" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path id="Vector_2" d="M33.6543 38.6023L37.4369 42.3849" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path id="Vector_3" d="M19.3818 38.6023L15.5674 42.3849" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                              <path id="Vector_4" d="M37.1508 35.2966H29.9353" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <g id="Group_3">
                              <g id="Group_4">
                                <path id="Vector_5" d="M26.4887 19.0854V35.2648" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                              <path id="Vector_6" d="M26.5204 11.1392C20.2903 11.1392 14.0919 14.7628 13.7422 21.9784C13.7422 21.9784 14.1555 19.0858 18.0016 19.0858C21.8478 19.0858 22.261 20.389 22.261 21.9784C22.3564 20.0394 24.4543 19.0858 26.5204 19.0858C28.5865 19.0858 30.6845 20.0394 30.7798 21.9784C30.7798 20.389 32.687 19.0858 35.0392 19.0858C38.8854 19.0858 39.2986 21.9784 39.2986 21.9784C38.9807 14.7628 32.7506 11.1392 26.5204 11.1392Z" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_7" d="M26.5207 11.1392C26.5207 11.1392 22.2613 13.3642 22.2613 21.9784" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_8" d="M30.7796 21.9465C30.7796 13.3323 26.5202 11.1073 26.5202 11.1073V10.5669" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_31_599" x1="0.349183" y1="52.9032" x2="62.049" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        Steps From The Beach
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      Located across from world-famous Laguna Beach, you’ll experience effective recovery in a tranquil coastal environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-7c95749 elementor-widget__width-inherit elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%201'%3E%3C/svg%3E" alt="" width={150} height={1} className="attachment-thumbnail size-thumbnail wp-image-4814" />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4e16535a e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-72766030 elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={54} height={53} viewBox="0 0 54 53" fill="none">
                        <rect x="0.698364" y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_655)"></rect>
                        <path d="M42.1807 36.7081C42.1807 38.2809 40.9075 39.5541 39.3347 39.5541H14.5444C12.9716 39.5541 11.6984 38.2809 11.6984 36.7081V18.5086C11.6984 16.9358 12.9716 15.6626 14.5444 15.6626H39.3347C40.9075 15.6626 42.1807 16.9358 42.1807 18.5086V36.7081Z" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M20.0119 15.4489V13.8272C20.0119 13.1157 20.5736 12.554 21.2852 12.554H32.5569C33.2684 12.554 33.8301 13.1157 33.8301 13.8272V15.4489" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinejoin="round"></path>
                        <path d="M29.1862 16.0371C29.1862 16.7486 28.6245 17.3103 27.913 17.3103H26.0031C25.2916 17.3103 24.7299 16.7486 24.7299 16.0371" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinejoin="round"></path>
                        <path d="M31.8075 27.6082H22.1086" stroke="#FFFDFA" strokeWidth="1.7586" strokeLinecap="round"></path>
                        <path d="M26.9395 22.7776V32.4765" stroke="#FFFDFA" strokeWidth="1.7586" strokeLinecap="round"></path>
                        <defs>
                          <linearGradient id="paint0_linear_31_655" x1="0.698365" y1="52.9032" x2="62.3982" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        Confidential treatment
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      Our facilities are 100% confidential, allowing you to fully engage in recovery with confidence that your privacy is protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-161d6865 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-49fc64ad elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <g id="activity">
                          <rect y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_620)"></rect>
                          <g id="Group">
                            <g id="Group_2">
                              <path id="Vector" d="M23.3537 12.2307C32.2021 12.2307 39.4058 19.3321 39.4058 28.1275" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_2" d="M23.2868 16.27C29.9313 16.27 35.3259 21.6124 35.3259 28.1926" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_3" d="M23.2192 20.3127C27.6599 20.3127 31.2453 23.8635 31.2453 28.2611" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <path id="Vector_4" d="M28.2201 32.231C27.6938 31.6121 26.7399 31.5469 26.1149 32.0682C26.0491 32.1007 26.0162 32.1659 25.9504 32.231C25.4241 32.7522 24.8978 33.2734 24.3715 33.7946C24.3058 33.8598 24.2071 33.9249 24.1084 33.9249C24.0426 33.9249 23.9768 33.9249 23.911 33.8598C23.5821 33.6643 23.2203 33.534 22.8913 33.3386C21.3782 32.3613 20.0625 31.156 18.9441 29.7879C18.352 29.1038 17.8915 28.3546 17.5297 27.5402C17.4639 27.4099 17.4968 27.2144 17.5955 27.1167C18.1218 26.5955 18.6481 26.0743 19.1744 25.5857C19.7993 25.0645 19.898 24.1198 19.3717 23.5008C19.3059 23.4357 19.2401 23.3705 19.1744 23.3054C18.7467 22.8819 18.352 22.491 17.9244 22.0675C17.4968 21.644 17.0692 21.2206 16.6415 20.7971C16.3455 20.4713 15.9508 20.3085 15.5232 20.2759C15.0955 20.2759 14.7008 20.4713 14.4048 20.7971C13.8785 21.3183 13.3522 21.8395 12.8259 22.3607C12.3325 22.8168 12.0364 23.4357 12.0035 24.0872C11.9706 25.1622 12.168 26.2372 12.5627 27.2144C13.3522 29.2667 14.5035 31.1886 15.9837 32.85C17.8915 35.1302 20.2927 36.987 22.99 38.29C24.2071 38.909 25.5228 39.2999 26.8715 39.3976C26.9373 39.3976 27.0359 39.3976 27.1017 39.3976C27.9241 39.4302 28.7464 39.1044 29.3056 38.4855C29.7661 37.9969 30.2595 37.5408 30.7529 37.0522C31.3779 36.531 31.4766 35.5863 30.9503 34.9348C30.8845 34.8696 30.8516 34.8045 30.7858 34.7719C29.9306 33.9249 29.1082 33.078 28.253 32.2636L28.2201 32.231Z" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                          </g>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_31_620" x1="6.27243e-07" y1="52.9032" x2="61.6998" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        Same-Day Admission
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      When you’re ready to take the first step, we’re ready to help you. After intake, you can expect to begin receiving treatment within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-697e7bd7 elementor-widget__width-inherit elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%201'%3E%3C/svg%3E" alt="" width={150} height={1} className="attachment-thumbnail size-thumbnail wp-image-4814" />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1c21c964 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-19a0c40a elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <rect x="0.349182" y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_630)"></rect>
                        <rect x="11.7422" y="13.2434" width={30} height={30} fill="url(#pattern0_31_630)"></rect>
                        <defs>
                          <pattern id="pattern0_31_630" patternContentUnits="objectBoundingBox" width={1} height={1}>
                            <use href="#image0_31_630" transform="scale(0.0078125)"></use>
                          </pattern>
                          <linearGradient id="paint0_linear_31_630" x1="0.349183" y1="52.9032" x2="62.049" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                          <image id="image0_31_630" width={128} height={128} href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAXT0lEQVR4nO2debQdVZXGv5MEQhg6QIAQQQIIYRAQFESjCIogYRREURuDUzuxAG1saMRmUGzbiSaobTvhPCECMigNCCjIFEBkUDAggUAkhEBCJpK8vF//seut1N11TlXd++5NXu6731pvrVe3du19qmrXGfbZg9RDDz300MMwRegEU+AVko6StJek8ZIWS5ol6TpJV4cQXmiTnImSjpY0WdKE7OfZkm6RdHkIYVab5Gwq6QhJB0p6qaTRkp6RdHcm5/52yFnrAbwcuIZyPA/8O7DOIORsAXwb6CuRswL4X2DzQchZDzgbWFhxT1cDO7cqpysAvA1YXPGg8rgRGNeCnD2BJ5qQ8xiwRwtytgRua0LOQuCoZuV0BYCjKP8aU7gTWL8JOTsD81qQMxfYoQk5Y4H7WpCzAnhLa09xLQUwAevW81gCfAnYG9gU2Bp4F3BX5KFNqylnFHCPu7Yf+BnwJmxYGA+8Bbg8Iud2YGRNWRdFrr8Z6+UmZPe0L3AhsMzRzQU2G9xTXYsAfMM9gNnA7gnakcBXHX0fsH0NOe911y0H3lZBv9Jd884acnbPFCuP84DohDlThGcd/flVcroCwPrY1z6AfmByxTUjgP9zD+zzNWTd4a751xrXfMZdc1ONa7yCXlzjminumvnAulXXDQWMSp0ADpT0SkkjSq6fKGlM7vgpSfsB+1XI/Yc7Pg6YX0I/UtLeueOVkjYATq+QEyShVcvd1wFnSOovueZod/xcDTmSNE/SwKR2rKQvAbNL6Psl3R1CuKEG744h1a19TNLXV3NbhiveH0L43poSnvq6j1itrRjeWKPPOqUAa8X41SVYo886OQdw+KSkhZHfd8zODWCWpPMG26gI1pF0oVYpbJ+kUyW92AFZZ0raJnd8vqSH28h/vKTPtJFf+wH8zs1qt0jQbeBWAWSTx0606XYn54wOyZnm5FxJYgnYIv9Jjv9V7eLdNtRVgIzW2wHmAvt2oE1TnZwVwHs6IGdnivaDadQ0ItXg33UKsCXwnKNfjm3EHAC8pE1tGglMp4grgbcC2wF1h7QqWV+LyLkXeD+wKzCmmkuSd3cpQEZ/GOV7AY8Ck9rQrpdhPUwK84FD2yBnfYqGpzz6gE+1yLv7FCC75kjghZKH9o02tW23TKFSuKdNcjYBrq1Qgg1a4DukFKDMytcUQghXyKx1lydInm6TnAck7SNpmqTlERJvZWxVzvOSDpV0iqRnIyTPqTOrkNWKlCXwd5LelPtpfAjhmbpMgR0lvVXS7rJlz/2SzgohLBlEW2NytpAZUiZL2lL2os4MITzZZjljJB0seyYTZaboL4YQ7miB1yQ1LiuvDiEc3paGtgutDAE91EPXDgE9rJ3oKcAwR91185HAgo62ZPhgQjXJ6kNdBfh2R1vRwxpDbwgY5ugpwDBH3SHg65IWdbIhwwgbS/rwmm5EKSJ2gLZs6PQgAdv37AA9DBn0FGCYoyMKwCD2yyO8Am30sccCPtvp4dO2e10TaIsCABsBp2EOG0slLQEWYQGgH2n2BQI7YmFXj8p2/JYBc7AwsKZdzjB/hUuAeZKWSloO/A34ChZi3gyvMcDJwC3AYtm9Lgb+CJyytiuEpOYmgcDB2cspwwxgrxpyA3AO5lFUhsuAsTX4bUb5nj7Ai8Anq3hl/CZTHZk8C3hdCY8hNQmMgpoKAByD+ebVwSIqfAWB79TkBeaitVEJr3HYV14XX6lo24GYstTBi8BBCT7doQDADthL9XgaiwL2EcMAT5H4coEPR+j7gYexUO1Yr/DTknv4bYR+KfBn4JHIOYB3JHjF/B7BgkLvohgcSka/ZYRX1yjAzyIP411kEyzMifN9FJWkEDeAuZf7YWQ6sFuOZhzwTUfTD7w6wu/gyAv5Jjnlw6KAvZPpTCKZS4CvO7oXgA8CI7LzI4B3UFSSQngd3aAAwD/R2B2uBN6Q4OXduWfhZuHA2x3NYyS6d+C7jvZrEZqfOJrvJnhthvVYeRzkaNah2JtFM4EAh9AYWv48bgJMlyjAQe78Lyv4+cQOL3PnfUh20t8fSzaRf8j3RWhm5c4vx5I8pfid7GR/1p1/pTt/Y8W9+tD3fdz5IaUArS4D/dhW5Yl7lzv2e+L+OMkv8/ebk/vJK2dw7XsshPBcE23zw51v290lvGL8htT+v0erCuCdO6uWZBu748Wt8sMidPLDQ8O1IQRka/26bfPnq9rm78Wj6l6HFFpVgBnu+GgSUTnYxOvNuZ/6JD1Wwe/YEtlTJOX98f8Wocn/Np7E/CQhy7flEXd8GAljDzBaxXBvz2/og+o5QMAmanl81SsBZjW7xNEVMmIAezma5cCREbqJwOOO9pQI3dmO5mEiFj9s5p6PA+wHtovQ/cnx+zGwnqMZSdGOcW+E15CaA0RBvWXgRyhiOpac6c3Z+Zgh5pCETD956gd+iMX9TcHy/fhl1jPAP0V4bQ4scLQLgP/AZurHABdH2vbzRNveGaF9APhQdq8fJB5K9q4Ir65RgFHADZGbLsOPSmTuSNzYkkI/8PYSfu9vsm3/ALZO8ArEU8+V4Qoim050iwJkdOOwTZA6uBzXbUb4vZ64Vc2jDzipxn2cQTHlWwyzgb0reG1I9b7CAK4n0jNlfLpHATLa0dgGTiqf7hzgRGpuwWJh3peQfnF3A/s3cS8HY911DCuxYabWUg3r9U4jbuaGVXmQy7KvDSkFqBsbuFUIoSzlmYANJR0iiwccJ8umfaekm0IITQdRYpO2KZJ2kKWIeVLSDZLuyZZ6zfAKsoDSN8rW+Utks/vfVt1Xgt9ArOBekjaXNFfSvZKurYp/xJJiPpr7aa2IDez5BLYJQ60H6LmEDXP0FGCYo6cAwxxtSaok2Z64pH0l7SGzhz8ry4VbsIbV5LeBbCK6fdbOf0i6MYTQUgYQbI2/v2xzZrnMRHtTCGFp6YVxXkGWDWUvSZvIsoXcK+muZieoQxLNTAIxZ4h/Ie0r91fgmCZkbwpcgHnveKzEsoLt2gS/PTErY2xZuQj4LxJr9gS/44G/J+7178B7KFnyDrVJYBR1FQDLpnVZ4mF4/A8VufawFGyph5vHYkqsgDl+J1DPj++vOB+FCK91MZtBHfyEhCc03aIAmHn0lzUfyAC+XCJzAo2OHFVYQYmLOJa1zCd8LMMMyh1HmnFYBbgowadrFODdkZt+FDO/TgXOpfhCkwUlgF9E+F0HfAzbYPoOxfIsjxMxL2Mua8842uVYVtMTgJMwc63HtxJt8wUhAJ7ENpemAp8mnrrusAivrlGABx3Nr3B587CAkZsd3dURXpMojtEfjdDtSXGv4EMRun9zNHOwWoae7hRHtwLYKkJ3i6O7DtjY0awHXOXobovwWvsVANjJnX+StLv3tjSWk1uGc/iMvLAfl7Ttnx3tbyI0foMq6WASeWkfdufH0ziURN29M9rNaVTQ/sizG1IK0KodYBd3fHEIIZpDKIQwU9L1uZ/WleQnXJ7fd0pkXyJpWe44tiLI85sn6dISfl6W57eTGp/TlSGEaNLLEMJcSb/O/yRpSBeUbFUB/LJpbgW9TzLpr6/NL4SwTFJe2Rp6HmwJlu9h5oUQymoEta1tNfkNKbSqAHPccdW6fDd37K+vzQ8YLylfl6/ha8wMMfmXMBHbqazbNv91+7a9vIRXHX5DH1TPATalMSZwKZYeNsbrjY7XHJw9ADOu5HEHidrCwPmOthD0QdEP8awErzHAXxztkY5mPRp9HfpIOI9gk9R81vRFOAdShtgcIArqrQKucDQzgQMczaEU07sXKoUCG2Op3vP4LbkZOWaIOYviaqFgCwCOdjR9mNPKOjmarSj6Ic7xLyyj/Z6jexo43NG8AZsM51FwgaOLFGAPigGb/VjU7tWYJ67HfKwLj8k8PUK/FPg9pgwxV7FrErwCcGuEfk7Wtlso2hQgsvTM+PmVzAAeyPjdHzm3hEhFVLpFATK6D0VuPIU+Soo5YHsKVzbBbyYJZcr4bYM5etbFzyi34b+d+pbFfiIewRmf7lGAjHYq1WXjnwUOriF3NPVMrrcTMdhE+G2HhYNXvaxp1Cg3g1VJ90OVxwJKNr/oNgXI6LfKHqI3/c4APgts0qT812OWxXxoeR9mVTyBLCy7Jq9R2G7lbTR+wS9g5ud9qrk08NsM20H0m1aPYRXTC6n1seojBwIfoFiV7HEs5uGjWOXzzZtpT0fQrAK4azfDkkdUxdDV4TUyU67tqHApr8lvDPYFvoQ2VAHDJq/bewXHJqwHY3sPD1HPNT2PmcC3sR5n/cG2s5Ub6zmFtoBMGb5IvdiGupiPhd3V9oFox430FKAJYBPOb1I/X1Ir6McmyYVNrcGgbS5hwxFYNPCZkk5XeQ3gRyTdIekvkv4u259YIIt3GCOrq7S9bN9hsqRCgKpsX+FwSYdgtpSzQwidCT3v9QDVwKx+fy35Yu/EIqK2bYH31tm1N5OePzwGvKYDtyZh+915JNfbGf0I4FhsVv0gZil7APg+MKUF+ZsAn8CcNh7FsovdAXwe2KkFfi/HxubpGa9HsTi/k2nCHzDH770UayaDrTJ+QRu76azt3yeeJW0ZNWIkWxF6Tk7Iw5QbSHajeq39B2CbFA/H7wRgXgmvFZjTaHSvwPEajc3Ey6qazgWOa/HZ5HEzsHtdPs0Cq2nsTdcDuIA2pr8VlhnrROyLS744LHNmWbXQPJ6m4uvFXKvq4jpKUtBimzh/qMmrHzi1xnO5IHLtEiwXQvteQHkbphIPxP0BTdhH2tGQ8cRTxPZhXjOxsesh0ulV3pq4ZilpJbuwpH0XJa5ZQNrlPGmtxHwcPR6hhe4esx9MxOwbm9Ck8mAudN4lD+CCZtvSMihW2F4GfIrM3QvLHXAOxaXRaRFe61J0qnwCOILMYIONhX6voA8o7M8De1NUpmuBnbPzo4DDIzIfJGIgIp5s4h4q5kbZtSMxC9/52MTQZy4Bs3jejSXIPpwaybWxLflYbobKnqwWMC3bj0i3go2t/quM+ukDpzq6QtIkil63zxKJ2ccmm36CWsjxi5Wuz+Nq4tk6JkZeyBsczV4Ue4y7qUhWnb2gc2huQ2oAczFzc1XV9vUpOt2uoCRZdS0Ax7Fq4vSLyPn9nNDrY3wy2hFY15/Hto7my+58cmZL0SE1lohpRu58PyUp4TE39jzOzZ0bQ3Fbe0bZi8G++JOo3jSqg0VYwomyuc4mFLejn2AwpngaEy3345ZKWE7gPM6u4Od3+F7vzv/cnd+zgl8+vWuhsjeNS7SZFbwmO9kX5c79pzu3mFz+4givrTD/hTIsxOwHN2E5lv5CfFjIYzoR34Kc3B0iPL5adt8DSM0aZ+X+f07FZIcr3PHoCjn+vL++Nj+sK8+f99dKlotwAFWbSF7W8kzOJEm+jsDHs/L1sXbtIWm6pFhOwvsknSXpFSGEjUIIu4QQDgghvCmEsGsIYazM1/AMxTOR7i1pOvDamOwQwiOSfHzER6lRoyEKzL/9R5ghppCPB3iV07b7SOyuYfOF2TnaflwXim2H5vGZkrb54eePERpvl0hazCgOP6dnv//U/X4jidk68ArieYMexgxkzc7yDyfuZbSY8mIU3k2vEITTFmDjup/cpBwv/dr5zgjNax3NIiL79Njy6T5H++kI3ecdzf1EPIOBfSlO8HYHdqHRd2AF4GMXBni8NPIswBQr5di6KfAFbGWQcpEbiU0i/WpmHmkH3O3c/fQDr4zRDhrY5MTjx8AB2LboIdjs2+PdEV4Bc9jIYxlwHjYL3wVzpvBOGAuJF2XYhuKLfQjzPt4p43kuRU+m67LrL3S//zDxDEZRnIUvA95b8ex+5WWW0B4baeefSPhHUKxt8JMy/mWCA7bblTo/hmoTsMe1JKxV2LASs6+X4eSS9sUUtAwLMVvDBjTO4PtJf/2fiPCZWuPZ5tPdVlZlx+wh3h/x3ATtRBptL4tpdr8DexlPYRsQBcONE1a3Ls+dlIRfZ/yOIW6li+G/K3gFbB+gDhaROaxSdCn/fYL/5hRtIV+o+XzzrnMLa15zppO1lMTylmK84/vqyMgzyAdWrKDELQkbz75P2mN2GTbW1SqnBuxDsZRLHrOp8ZXl+H2Q8qpmt2Az+AH677nzH0jw/Zyje4Cabma0pgCxYTK61MPsOHlckuKbmtXeIEuqOICXVOXmwTJsvE0WGjVOFkN3l6TLQghPld9egVeQLacOlQWSjpYtTW+Q9JuqZIwRfhtKOkx2T1vJ6gk8IumqEMKtjnaWpIGcwUganwV95mnWlfSUGkPUjgohXFGzPXkZi0IIyepn7rr9Jd2U+2mxpC1DCIsc3UYyp5OBSeg8SVtUxEg2MPBJoId01Yt2AXMWzaNQjiajO9LRFVY2FXKa7gFy1/rEFscn6Pw+QXSrupcmrhGvcse3RqksJW4epTWT2gxvmo+m31ex7VGn0p4CNML74j2UoNvPHV/egbakcJWkfFeeqobi2x71xegpQCNe6o5jO5cjJeUNMU+HEFZbWZhsLpYvY7M18RJ7vpROdMVQ1yv4NmBlTdq1GT4qJ1ZtbIIa9w+azjbusD5WJNujT9IfZPsPfi9mtqRJ2f9B0jaSHnQ0vu1RW0BdBWiqwnYXYVHkN/+1tZS5NIcRMpfwGCZJminpc+53r3SxHsBPLqMKkBoCfFaM4YrYssk/s74ITRWaeb6xl+vT28be4xxJ+ToN0dqJKQU4V7aFOdwRe/i+V2hliXyqpMcraPol/VFSzM/PB9sWlpJZLqUTtaqYxTlNt3K4gWL6mbdEaEbT6Gb+xBpo572unU1FX+fRWwU0YpY73sETZF9WvvDl1tTIVdAuZC87v6afE0J4vlV+PQVoxEx3nIpjyBtZgorVQjuJw7TKxCvZMNEyegrQCF+0et8E3bXuuHY6/DbAyyr1J+ihSdDocNpHxLsW8xnw0TnRJNhtbtvuNO66Lgc2q76yh9rAkkXlEY0bpBh7EPUbaHPbfuNk/rTTMocdKLq8X5mg255ixO6JHWzXVCdrJQkXdcxVbVvakAZn2AEYS6MP3nLA7xEM0H7RvZTlNFHVtIk2vYaip9Q3HM0uWEDKr1nlqfRnKiKYeoiAYmBpIbtpRrchxcihebjwskG25dU0zkvAkkgNBJh+i/JKK0m/yR4SwIJL81hMurL4njSmswNzgysUsmihHcdT/PJfJItzwGIUq1Cop9BDDVB0aS/ESOZoDyWeweMaWgsf3xXryj1WkgvCpTqkDEw5K6ONe3DAPKN9UEahBlCO/gjiGVNXYk62x1Hino0NJ8diq5BYRpMXgXe4a07L+K+kPBi17fOSYQEs9Vsecykx+2JDR1nZu2VYmtsfYsEn0zCP6lspd4efRSIkDEvMuQvFTOV5nNe5p9TFwCZas93DvJ1yN/mxWHROMyXrUugHvguMK5E3mmJEsq+VeHtnntAwAJbj13fJV1GRXBqz2v2c1pJH9gGXUhHXh633L40ozbE0xiuu9h3LrgLx5FVXUiOPL5ZL6aRMacrG6RewvAyfoEZeRuzLj9VaPD87f3Lut0IAbQ9NAIvKiSWdupUmYyaw2IN9gTcDB2FGnugSs4THOOIZ0C4l1zNhgbBN51XsIQKsu7088tDnUKMWQhvb8Ubihp/rKQnm7aENwPIn/iDy8PuxmX1l1rBByJ6ArUpik8vLWBNp5YcjsOHgPOI5DRdgeYXaVvQBC749l6K1cQDT6G36rH5gCTB8geoBLMFSzEyhBSsclh1kCnAxxSXdAJ4jkZqvGayW9KbdiqzL/5Kk45V+losl3SLpNlm41gxJ87O/UbJI6nGStpDFJk6WJYUqK3Z5mSxgpLe8GwrAagb6VDGdwK0MNglkD50DsD+WqSu2MdQqlmHLu0NZTQmpexgkgC0wQ8w1pCdvZViI5Wj4OB2uItbTqA4DmwS+SubLP0kWZzlWNsaPkkUazZdlHHlINld4IIQwHIJxe+ihhx56WHP4fz/3+QjJr1vQAAAAAElFTkSuQmCC"></image>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        Long-Term Options
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      Once you’ve completed inpatient treatment with us, our sister programs offer an easy transition to world-class aftercare treatment for a successful long-term recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-42b84f1f elementor-widget__width-inherit elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%201'%3E%3C/svg%3E" alt="" width={150} height={1} className="attachment-thumbnail size-thumbnail wp-image-4814" />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-325bc125 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-38ccdb4b elementor-view-stacked elementor-widget__width-initial elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"62px"}}>
                      <svg width={54} height={53} viewBox="0 0 54 53" fill="none">
                        <rect x="0.698364" y="0.553955" width={52.3492} height={52.4521} rx="11.4514" fill="url(#paint0_linear_31_635)"></rect>
                        <path d="M26.4464 22.9856V29.2008" stroke="white" strokeWidth="1.67395" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M29.5843 26.0913H23.3083" stroke="white" strokeWidth="1.67395" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M32.7679 14.5553C30.0751 14.5553 27.7366 15.9839 26.3725 18.0938C19.2753 8.24349 -0.481717 20.4337 26.3725 39.0061C31.1146 35.2376 36.2993 31.2966 39.1674 25.861C42.049 21.0273 38.5721 14.4457 32.7679 14.5553Z" stroke="white" strokeWidth="1.11597" strokeLinecap="round" strokeLinejoin="round"></path>
                        <defs>
                          <linearGradient id="paint0_linear_31_635" x1="0.698365" y1="53.0061" x2="62.413" y2="37.2596" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title" style={{"fontSize":"24px"}}>
                      <span style={{"fontSize":"24px"}}>
                        24-7 Medical Staff
                      </span>
                    </h3>
                    <p className="elementor-icon-box-description" style={{"fontSize":"16px"}}>
                      Our expert medical and clinical staff is available 24/7, providing personal attention and assistance at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-1ee831b4 e-con-full elementor-hidden-desktop elementor-hidden-tablet e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-element elementor-element-1a3eea70 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-7c0e1685 elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={35} height={36} viewBox="0 0 35 36" fill="none">
                        <rect y="0.553955" width={35} height={35} fill="url(#pattern0_31_595)"></rect>
                        <defs>
                          <pattern id="pattern0_31_595" patternContentUnits="objectBoundingBox" width={1} height={1}>
                            <use href="#image0_31_595" transform="scale(0.0078125)"></use>
                          </pattern>
                          <image id="image0_31_595" width={128} height={128} href="data:image/png;base64,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"></image>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      Upscale
                      <br />
                      {" "}Facility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-236e778a e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-237c0b52 elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <g id="activity">
                          <rect x="0.349182" y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_599)"></rect>
                          <g id="Group 626">
                            <g id="Group">
                              <g id="Group_2">
                                <path id="Vector" d="M15.5672 38.6027H33.6537L40.7421 31.9275" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path id="Vector_2" d="M33.6543 38.6023L37.4369 42.3849" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path id="Vector_3" d="M19.3818 38.6023L15.5674 42.3849" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                              <path id="Vector_4" d="M37.1508 35.2966H29.9353" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <g id="Group_3">
                              <g id="Group_4">
                                <path id="Vector_5" d="M26.4887 19.0854V35.2648" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                              <path id="Vector_6" d="M26.5204 11.1392C20.2903 11.1392 14.0919 14.7628 13.7422 21.9784C13.7422 21.9784 14.1555 19.0858 18.0016 19.0858C21.8478 19.0858 22.261 20.389 22.261 21.9784C22.3564 20.0394 24.4543 19.0858 26.5204 19.0858C28.5865 19.0858 30.6845 20.0394 30.7798 21.9784C30.7798 20.389 32.687 19.0858 35.0392 19.0858C38.8854 19.0858 39.2986 21.9784 39.2986 21.9784C38.9807 14.7628 32.7506 11.1392 26.5204 11.1392Z" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_7" d="M26.5207 11.1392C26.5207 11.1392 22.2613 13.3642 22.2613 21.9784" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_8" d="M30.7796 21.9465C30.7796 13.3323 26.5202 11.1073 26.5202 11.1073V10.5669" stroke="white" strokeWidth="1.03017" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_31_599" x1="0.349183" y1="52.9032" x2="62.049" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      Steps From
                      <br />
                      {" "}The Beach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-466121d3 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-79777e14 elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={32} height={30} viewBox="0 0 32 30" fill="none">
                        <g id="Group 623">
                          <path id="Vector" d="M31.1807 25.7081C31.1807 27.2809 29.9075 28.5541 28.3347 28.5541H3.54438C1.97158 28.5541 0.698364 27.2809 0.698364 25.7081V7.50861C0.698364 5.93581 1.97158 4.6626 3.54438 4.6626H28.3347C29.9075 4.6626 31.1807 5.93581 31.1807 7.50861V25.7081Z" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path id="Vector_2" d="M9.01193 4.44894V2.82717C9.01193 2.11567 9.57365 1.55396 10.2852 1.55396H21.5569C22.2684 1.55396 22.8301 2.11567 22.8301 2.82717V4.44894" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinejoin="round"></path>
                          <path id="Vector_3" d="M18.1862 5.03711C18.1862 5.74861 17.6245 6.31033 16.913 6.31033H15.0031C14.2916 6.31033 13.7299 5.74861 13.7299 5.03711" stroke="#FFFDFA" strokeWidth="1.1724" strokeLinejoin="round"></path>
                          <path id="Vector_4" d="M20.8075 16.6082H11.1086" stroke="#FFFDFA" strokeWidth="1.7586" strokeLinecap="round"></path>
                          <path id="Vector_5" d="M15.9395 11.7776V21.4765" stroke="#FFFDFA" strokeWidth="1.7586" strokeLinecap="round"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      Confidential{" "}
                      <br />
                      Treatment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4d3c91d5 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-4ef69f0e elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={53} height={53} viewBox="0 0 53 53" fill="none">
                        <g id="activity">
                          <rect y="0.553955" width={52.3492} height={52.3492} rx="11.4514" fill="url(#paint0_linear_31_620)"></rect>
                          <g id="Group">
                            <g id="Group_2">
                              <path id="Vector" d="M23.3537 12.2307C32.2021 12.2307 39.4058 19.3321 39.4058 28.1275" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_2" d="M23.2868 16.27C29.9313 16.27 35.3259 21.6124 35.3259 28.1926" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path id="Vector_3" d="M23.2192 20.3127C27.6599 20.3127 31.2453 23.8635 31.2453 28.2611" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <path id="Vector_4" d="M28.2201 32.231C27.6938 31.6121 26.7399 31.5469 26.1149 32.0682C26.0491 32.1007 26.0162 32.1659 25.9504 32.231C25.4241 32.7522 24.8978 33.2734 24.3715 33.7946C24.3058 33.8598 24.2071 33.9249 24.1084 33.9249C24.0426 33.9249 23.9768 33.9249 23.911 33.8598C23.5821 33.6643 23.2203 33.534 22.8913 33.3386C21.3782 32.3613 20.0625 31.156 18.9441 29.7879C18.352 29.1038 17.8915 28.3546 17.5297 27.5402C17.4639 27.4099 17.4968 27.2144 17.5955 27.1167C18.1218 26.5955 18.6481 26.0743 19.1744 25.5857C19.7993 25.0645 19.898 24.1198 19.3717 23.5008C19.3059 23.4357 19.2401 23.3705 19.1744 23.3054C18.7467 22.8819 18.352 22.491 17.9244 22.0675C17.4968 21.644 17.0692 21.2206 16.6415 20.7971C16.3455 20.4713 15.9508 20.3085 15.5232 20.2759C15.0955 20.2759 14.7008 20.4713 14.4048 20.7971C13.8785 21.3183 13.3522 21.8395 12.8259 22.3607C12.3325 22.8168 12.0364 23.4357 12.0035 24.0872C11.9706 25.1622 12.168 26.2372 12.5627 27.2144C13.3522 29.2667 14.5035 31.1886 15.9837 32.85C17.8915 35.1302 20.2927 36.987 22.99 38.29C24.2071 38.909 25.5228 39.2999 26.8715 39.3976C26.9373 39.3976 27.0359 39.3976 27.1017 39.3976C27.9241 39.4302 28.7464 39.1044 29.3056 38.4855C29.7661 37.9969 30.2595 37.5408 30.7529 37.0522C31.3779 36.531 31.4766 35.5863 30.9503 34.9348C30.8845 34.8696 30.8516 34.8045 30.7858 34.7719C29.9306 33.9249 29.1082 33.078 28.253 32.2636L28.2201 32.231Z" stroke="#FFFDFA" strokeWidth="1.05737" strokeLinecap="round" strokeLinejoin="round"></path>
                          </g>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_31_620" x1="6.27243e-07" y1="52.9032" x2="61.6998" y2="37.1295" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      Same-Day{" "}
                      <br />
                      Admission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-68a4c5c3 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-7f9eda2b elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={37} height={37} viewBox="0 0 37 37" fill="none">
                        <rect x="0.680786" y="0.32959" width={36.0239} height={36.0239} fill="url(#pattern0_14_522)"></rect>
                        <defs>
                          <pattern id="pattern0_14_522" patternContentUnits="objectBoundingBox" width={1} height={1}>
                            <use href="#image0_14_522" transform="scale(0.0078125)"></use>
                          </pattern>
                          <image id="image0_14_522" width={128} height={128} href="data:image/png;base64,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"></image>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      Long-term{" "}
                      <br />
                      options
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-5a1dc8f e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-6252b779 elementor-view-stacked elementor-shape-square linear elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon" style={{"fontSize":"50px"}}>
                      <svg width={54} height={53} viewBox="0 0 54 53" fill="none">
                        <rect x="0.698364" y="0.553955" width={52.3492} height={52.4521} rx="11.4514" fill="url(#paint0_linear_31_635)"></rect>
                        <path d="M26.4464 22.9856V29.2008" stroke="white" strokeWidth="1.67395" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M29.5843 26.0913H23.3083" stroke="white" strokeWidth="1.67395" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M32.7679 14.5553C30.0751 14.5553 27.7366 15.9839 26.3725 18.0938C19.2753 8.24349 -0.481717 20.4337 26.3725 39.0061C31.1146 35.2376 36.2993 31.2966 39.1674 25.861C42.049 21.0273 38.5721 14.4457 32.7679 14.5553Z" stroke="white" strokeWidth="1.11597" strokeLinecap="round" strokeLinejoin="round"></path>
                        <defs>
                          <linearGradient id="paint0_linear_31_635" x1="0.698365" y1="53.0061" x2="62.413" y2="37.2596" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#206C95"></stop>
                            <stop offset="1" stopColor="#55AADC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <p className="elementor-icon-box-description" style={{"fontSize":"18px"}}>
                      24-7{'>'}
                      <br />
                      {" "}Medical Staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("50d97895") ? (
<div className="elementor-element elementor-element-50d97895 e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-444bf49f elementor-arrows-position-inside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;734d009&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;b283137&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;c8ea32b&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;6685b42&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;b76967a&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;9e2592b&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;3e945fb&quot;}],&quot;slides_to_show&quot;:&quot;5&quot;,&quot;slides_to_show_tablet&quot;:&quot;3&quot;,&quot;offset_sides&quot;:&quot;both&quot;,&quot;offset_width_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:15,&quot;sizes&quot;:[]},&quot;offset_width&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_width_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;arrows&quot;:&quot;yes&quot;,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">
          <div className="elementor-widget-container">
            <div className="e-n-carousel swiper offset-both swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
              <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-108a23c514c3f61e5" style={{"transform":"none","transitionDuration":"0ms"}}>
                <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-477f581e e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-6faf8fe7 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-21305612 elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-293858c9 elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-42dfea98 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-746178f7 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-40fac03a e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-72251b93 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-1ecce061 elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-65fbac3e elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-7b822ec2 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6a7cc2b3 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-1bce85bd e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-657f561 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-39a7d800 elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-71a3b68d elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-61e363fe elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-580f725b scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-7ce26dc5 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-74a30968 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-140a6d0e elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6e6c5ece elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-1681b920 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2d6cb68 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-4d990664 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-20188052 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-21904aa7 elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-3cb6511e elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-66f06211 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-60397dc0 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="6 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-3e3cf4d0 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-670e6b6 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-38d80f8f elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-205fbab1 elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-192e5b70 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-391cef19 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="7 / 7" style={{"width":"297.937px","marginRight":"15px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-405eea47 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-3a7df07d e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-element elementor-element-3754b850 elementor-widget elementor-widget-image" data-widget_type="image.default">
                          <div className="elementor-widget-container">
                            <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4443" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2058fbf5 elementor-widget elementor-widget-rating" data-widget_type="rating.default">
                          <div className="elementor-widget-container">
                            <div className="e-rating" itemType="https://schema.org/Rating" itemScope itemProp="reviewRating">
                              <meta itemProp="worstRating" content="0" />
                              <meta itemProp="bestRating" content="5" />
                              <div className="e-rating-wrapper" itemProp="ratingValue" content="5" role="img" aria-label="Rated 5 out of 5">
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="e-icon">
                                  <div className="e-icon-wrapper e-icon-marked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                  <div className="e-icon-wrapper e-icon-unmarked">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" viewBox="0 0 1000 1000">
                                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-57fa6049 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Sandy H
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  7 July 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-49b7ae69 scrollable-container elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <p className="elementor-image-box-description" style={{"fontSize":"15px"}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
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
            <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-108a23c514c3f61e5">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
              </svg>
            </div>
            <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-108a23c514c3f61e5">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6ba30e8a elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"40px"}}>
              What Our Clients Say
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-2ee3131a elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"20px"}}>
              5 Star Google Reviews
            </h2>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("79d56834") ? (
<div className="elementor-element elementor-element-79d56834 e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-2cc32a11 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-5c7982e4 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </div>
        </div>
        <div className="elementor-element elementor-element-e5bfdfc elementor-align-left elementor-widget__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                    Our Treatment Programs
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("50ce2b04") ? (
<div className="elementor-element elementor-element-50ce2b04 e-con-full e-flex e-con e-parent">
      <div className="elementor-element elementor-element-542c229b e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-6a389af6 mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-38edd104 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-28acb466 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-25e27e5a mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2f754469 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-3d912d24 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-7d17969c mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-26ee6a23 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-79f26871 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-1eafaf61 mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-5981d105 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-2773044d e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-130b4c7d mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-450b73b4 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-5508dbc4 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-1bd94716 mob-color elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                  Detox
                </h3>
                <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                  A 3-10 day program that provides a safe, medically supervised environment to get through any painful or dangerous withdrawal symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-63825036 elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Learn More
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("5316f32f") ? (
<div className="elementor-element elementor-element-5316f32f e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-c77ffa e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-7c0f863b e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-66a50393 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                  Lorem Ipsum Dolor Sit Amet Consectetur
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-468876 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-69add5a2 elementor-pagination-type-bullets elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;5bba9e6&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;aa7a2ca&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;889fd66&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;1b043fa&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;682f22a&quot;}],&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:20,&quot;sizes&quot;:[]},&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_sides&quot;:&quot;none&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;pagination&quot;:&quot;bullets&quot;,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">
          <div className="elementor-widget-container">
            <div className="e-n-carousel swiper swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
              <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-e910e7dc972a3e5cd" style={{"transform":"none","transitionDuration":"0ms"}}>
                <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 5" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-4caa5838 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-37deab50 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1fd9947a elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-image-box-wrapper">
                            <div className="elementor-image-box-content">
                              <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                              </h3>
                              <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-40671dc elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                              <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                                <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                                  Learn More
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 5" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-8fd80e3 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-28d2ea5 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-a98459f elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-image-box-wrapper">
                            <div className="elementor-image-box-content">
                              <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                              </h3>
                              <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-19f36dc3 elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                              <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                                <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                                  Learn More
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 5" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-2d3df832 e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-4f2b1b28 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-7a83791c elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-image-box-wrapper">
                            <div className="elementor-image-box-content">
                              <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                              </h3>
                              <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-337dd6b9 elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                              <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                                <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                                  Learn More
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 / 5" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-6c37372b e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-7781bbd6 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6236cfe3 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-image-box-wrapper">
                            <div className="elementor-image-box-content">
                              <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                              </h3>
                              <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-4d3de775 elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                              <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                                <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                                  Learn More
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="5 / 5" style={{"width":"403.333px","marginRight":"20px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-7f07d6ac e-flex e-con-boxed e-con e-child">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-56a511b7 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-60002965 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-image-box-wrapper">
                            <div className="elementor-image-box-content">
                              <h3 className="elementor-image-box-title" style={{"fontSize":"26px"}}>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                              </h3>
                              <p className="elementor-image-box-description" style={{"fontSize":"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-3c918b20 elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"14px"}}>
                              <span className="elementor-button-content-wrapper" style={{"fontSize":"14px"}}>
                                <span className="elementor-button-text" style={{"fontSize":"14px"}}>
                                  Learn More
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-e910e7dc972a3e5cd">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
              </svg>
            </div>
            <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-e910e7dc972a3e5cd">
              <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
              </svg>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("2f8a5cdd") ? (
<div className="elementor-element elementor-element-2f8a5cdd e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-6f08e7aa e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-4228afa1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-10a1855b elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="elementor-element elementor-element-15fe7ce4 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      Our Locations
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-66e295b e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-7b77d9ce elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4591" />
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("3a7c8053") ? (
<div className="elementor-element elementor-element-3a7c8053 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-55657374 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-85a42cd elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                Lorem Ipsum Dolor Sit Amet
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-170f4de elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-f2bd245 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-7bdaa317 elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title" style={{"fontSize":"24px"}}>
                    Alcohol{" "}
                    <br />
                    Addiction
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4262de8b elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title" style={{"fontSize":"24px"}}>
                    {drug}
                    <br />
                    {" "}Addiction
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-d789166 elementor-widget__width-initial elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title" style={{"fontSize":"24px"}}>
                    Co-Occurring Mental Health Disorders
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("bea6bf") ? (
<div className="elementor-element elementor-element-bea6bf e-flex e-con-boxed e-con e-parent" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-42aca1c2 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              Lorem Ipsum Dolor Sit Amet
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-13484a99 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </div>
        </div>
        <div className="elementor-element elementor-element-b13a8ac e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-5b2184c2 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      (000) 000-0000
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-8bfc096 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      Call Now
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-73750503 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      Verify Insurance
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : null}
    {__present("6a8e4bf7") ? (
<div className="elementor-element elementor-element-6a8e4bf7 e-con-full e-flex e-con e-parent e-lazyloaded">
      <div className="elementor-element elementor-element-64022058 e-con-full e-flex e-con e-child">
        <div className="elementor-element elementor-element-56a105f2 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-3a8ba843 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </div>
        </div>
        <div className="elementor-element elementor-element-baf6df5 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#" style={{"fontSize":"16px"}}>
                <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                    Follow Us
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-6f5ff8bb elementor-pagination-type-bullets elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;2e33073&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;a43fed1&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;eb76969&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;342f146&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;cacda3a&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;e51a0e9&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;efd975a&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;6d78a06&quot;}],&quot;slides_to_show&quot;:&quot;8&quot;,&quot;slides_to_show_mobile&quot;:&quot;3&quot;,&quot;offset_sides&quot;:&quot;right&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;offset_width&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;offset_width_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;slides_to_show_tablet&quot;:&quot;5&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_width_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;arrows&quot;:&quot;yes&quot;,&quot;pagination&quot;:&quot;bullets&quot;,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">
        <div className="elementor-widget-container">
          <div className="e-n-carousel swiper offset-right swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
            <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-a497b6688e9f8af6" style={{"transform":"none","transitionDuration":"0ms"}}>
              <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-12e2a58 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-534d28cd elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-78fe351e e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-2f55b570 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-7caad03b e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-6a6eac52 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-b02a739 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-17bc1a95 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-221f6999 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-28be0b16 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="6 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-7c0f1533 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-5475021c elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="7 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-38891a12 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-37738ce7 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="8 / 8" style={{"width":"239.97px","visibility":"visible"}}>
                <div className="elementor-element elementor-element-3bf551f9 e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-25b93489 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image src="/images/08f2347b67f103b3b4081dcd75b98f44.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4629 entered error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-a497b6688e9f8af6">
            <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000">
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
            </svg>
          </div>
          <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-a497b6688e9f8af6">
            <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000">
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
            </svg>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>
      </div>
    </div>
) : null}
    {__present("7be2e89a") ? (
<div className="elementor-element elementor-element-7be2e89a e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-7534729 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"40px"}}>
              Lorem Ipsum Dolor Sit Amet Consectetur Ipsum Dolor Sit Amet Consectetur
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-3dbde382 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"20px"}}>
              RECENT BLOGS
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-dad6cfb elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-n-carousel e-widget-swiper" data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;633b30c&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;4416a5a&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;dfb156b&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;62570bd&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;369cf97&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;4b57c98&quot;}],&quot;slides_to_show&quot;:&quot;4&quot;,&quot;slides_to_show_tablet&quot;:&quot;3&quot;,&quot;offset_sides&quot;:&quot;right&quot;,&quot;offset_width_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:50,&quot;sizes&quot;:[]},&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:25,&quot;sizes&quot;:[]},&quot;offset_width&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_width_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;pagination&quot;:&quot;bullets&quot;,&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="nested-carousel.default">
          <div className="elementor-widget-container">
            <div className="e-n-carousel swiper offset-right swiper-initialized swiper-horizontal swiper-pointer-events" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
              <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-41fd27b48ca104c49" style={{"transform":"none","transitionDuration":"0ms"}}>
                <div className="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-32616dc7 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-57061e65 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-5fe21eaf elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-7e1bac07 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6832d5b7 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/images/ca897a42327eebd2d4fea48bab13f634.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644 entered error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-535f8b7 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-2c5db50e e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-4a9b1f27 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2c108f08 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-2b06f96c elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/images/ca897a42327eebd2d4fea48bab13f634.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644 entered error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-54ac5ac1 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-61fb52a1 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-67382538 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-287cc145 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-79743d1 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/images/ca897a42327eebd2d4fea48bab13f634.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644 entered error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-472ed058 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-6d6eb0c3 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-76d1f3a0 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-7a28366d elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-48697d5d elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/images/ca897a42327eebd2d4fea48bab13f634.webp" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644 entered error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-6d848271 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-47aa17e0 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-56f306c1 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-47a4c65d elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-eede4e3 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="6 / 6" style={{"width":"293.67px","marginRight":"25px","visibility":"visible"}}>
                  <div className="elementor-element elementor-element-41d0489b e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-54446ab7 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-2a27cf99 elementor-widget elementor-widget-image-box" data-widget_type="image-box.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                              <div className="elementor-image-box-content">
                                <h3 className="elementor-image-box-title" style={{"fontSize":"16px"}}>
                                  Lorem Ipsum Dolor Sit Amet Consectetur Dolor Sit Amet
                                </h3>
                                <p className="elementor-image-box-description" style={{"fontSize":"13px"}}>
                                  September 24, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-309dd6af elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                              <div className="elementor-icon">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none">
                                  <rect width={43} height={43} rx="21.5" fill="white"></rect>
                                  <path d="M28.2404 21.5806C28.2271 21.4333 28.1657 21.2363 28.0672 21.126L22.8716 15.2378C22.6449 14.9301 22.1776 14.9311 21.8901 15.1829C21.6026 15.4346 21.5805 15.8816 21.8325 16.1472L26.0214 20.8882H13.6927C13.3101 20.8882 13 21.1982 13 21.5808C13 21.9634 13.3101 22.2735 13.6927 22.2735H26.0214L21.8325 27.0145C21.5576 27.28 21.6348 27.7353 21.9225 27.9869C22.21 28.2386 22.6449 28.2205 22.8716 27.9237L28.0672 22.0355C28.2062 21.8851 28.2327 21.7218 28.2404 21.5809V21.5806Z" fill="black"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-61f5160a elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20150%20150'%3E%3C/svg%3E" alt="" width={150} height={150} className="attachment-thumbnail size-thumbnail wp-image-4644" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
          </div>
        </div>
      </div>
    </div>
) : null}
  </div>
  <div id="jg-wrapper">
    <div id="jg-sidebar">
      <button id="jg-toggle-btn" aria-label="Open Journey Guide">
        <span className="jg-arrow jg-arrow-desktop" style={{"fontSize":"20px"}}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <rect width={24} height={24} rx="12" fill="white" fillOpacity="0.25"></rect>{" "}
            <path d="M16.68 12.528C16.9059 12.336 17 12.064 17 11.792C17 11.536 16.9059 11.264 16.68 11.136L11.1082 6.336C10.8824 6.128 10.6376 6 10.2424 6C9.94118 6 9.69647 6.064 9.47059 6.272C9.22588 6.464 9.07529 6.736 9.07529 6.992C9.07529 7.264 9.15059 7.536 9.37647 7.728L14.1765 11.872L9.30118 16.336C9.07529 16.528 9 16.8 9 17.072C9 17.328 9.15059 17.6 9.37647 17.808C9.62118 17.936 9.94118 18 10.2424 18C10.5624 18 10.8824 17.872 11.1082 17.664L16.68 12.528Z" fill="#EDEDED" fillOpacity="0.9"></path>
          </svg>
        </span>
        <span className="jg-arrow jg-arrow-mobile" style={{"fontSize":"20px"}}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
            <path d="M9 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
            <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </button>
      <div id="jg-sidebar-label">
        <span style={{"fontSize":"9px"}}>
          U
        </span>
        <span style={{"fontSize":"9px"}}>
          S
        </span>
        <span style={{"fontSize":"9px"}}>
          E
        </span>
        <span style={{"fontSize":"9px"}}>
          R
        </span>
        <span style={{"fontSize":"9px"}}>
          J
        </span>
        <span style={{"fontSize":"9px"}}>
          O
        </span>
        <span style={{"fontSize":"9px"}}>
          U
        </span>
        <span style={{"fontSize":"9px"}}>
          R
        </span>
        <span style={{"fontSize":"9px"}}>
          N
        </span>
        <span style={{"fontSize":"9px"}}>
          E
        </span>
        <span style={{"fontSize":"9px"}}>
          Y
        </span>
        <span style={{"fontSize":"9px"}}>
          G
        </span>
        <span style={{"fontSize":"9px"}}>
          U
        </span>
        <span style={{"fontSize":"9px"}}>
          I
        </span>
        <span style={{"fontSize":"9px"}}>
          D
        </span>
        <span style={{"fontSize":"9px"}}>
          E
        </span>
      </div>
      <div id="jg-sidebar-progress-wrap">
        <div id="jg-sidebar-progress-bar" style={{"height":"0%"}}></div>
      </div>
    </div>
    <div id="jg-panel" aria-hidden="true">
      <div id="jg-panel-header">
        <span id="jg-panel-title" style={{"fontSize":"15px"}}>
          Your Journey Guide
        </span>
        <button id="jg-panel-close" aria-label="Close panel">
          ×
        </button>
      </div>
      <div id="jg-progress-bar-wrap">
        <div id="jg-progress-bar" style={{"width":"0%"}}></div>
      </div>
      <div id="jg-progress-label">
        0 of 11 visited
      </div>
      <ul id="jg-page-list">
        <li className="jg-recommended">
          <span className="jg-step-bubble jg-unvisited">
            1
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Protect your job while you come to treatment
            </span>
            <span className="jg-step-meta jg-recommended-text">
              + Recommended next step
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            2
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Can Insurance cover rehab treatment?
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            3
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Why Traveling or Staying Close to home can both be great options.
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            4
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Locations & Galleries
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            5
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Staff page
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            6
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Reviews
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            7
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              What to bring to treatment
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            8
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Treatment & Therapies we provide
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            9
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Admissions Process
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            10
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Contact Us
            </span>
          </span>
        </li>
        <li>
          <span className="jg-step-bubble jg-unvisited">
            11
          </span>
          <span className="jg-step-text">
            <span className="jg-step-label">
              Residential Inpatient vs Hospital Inpatient
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <svg style={{"display":"none"}} className="e-font-icon-svg-symbols"></svg>
  <div className="asw-container">
    <div className="asw-widget">
      <a href="https://accessibility-widget.pages.dev" target="_blank" className="asw-menu-btn" title="Open Accessibility Menu" role="button" aria-expanded="false" aria-label="Open Accessibility Menu" style={{"--asw-bottom":"var(--asw-off-y)","--asw-left":"var(--asw-off-x)","--asw-off-x":"20px","--asw-off-y":"20px"}} rel="noopener noreferrer">
        <svg style={{"fill":"white"}} viewBox="0 0 24 24" width="30px" height="30px">
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </svg>
      </a>
    </div>
  </div>
</div>
    </>
  );
}
