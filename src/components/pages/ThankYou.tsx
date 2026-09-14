import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout4 from '../layouts/Layout-4';

const gridData0 = [
  {
    "image": "/images/60bc95f8efac45d8aa5da28669841e60.webp"
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
  }
] as const;

const gridData1 = [
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
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%207016%204342'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202500%201667'%3E%3C/svg%3E"
  }
] as const;

const gridData2 = [
  {
    "image": "/images/60bc95f8efac45d8aa5da28669841e60.webp"
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
  }
] as const;

const gridData3 = [
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20684'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201080%20720'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20800'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20683'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201820%201213'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201720%201147'%3E%3C/svg%3E"
  }
] as const;

const gridData4 = [
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20800'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201820%201213'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20683'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201080%20720'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201720%201147'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20684'%3E%3C/svg%3E"
  }
] as const;

const gridData5 = [
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201720%201147'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20665%20441'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20683'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20684'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201080%20720'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20800'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20669'%3E%3C/svg%3E"
  },
  {
    "image": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201820%201213'%3E%3C/svg%3E"
  }
] as const;

const gridData6 = [
  {
    "title": "Accredited Care",
    "description": "National certifications and evidence-based treatment programs."
  },
  {
    "title": "Compassionate Team",
    "description": "A highly trained staff dedicated to personalized recovery."
  },
  {
    "title": "Beautiful Facilities",
    "description": "Comfortable, safe environments designed for healing."
  },
  {
    "title": "Long-Term Support",
    "description": "Aftercare planning, alumni support, and relapse prevention."
  }
] as const;


export default function ThankYou(props: Record<string, string>) {
  const brand = props.brand ?? "Connections Mental Health";
  const drug = props.drug ?? "Drug";
  const near_in = props.near_in ?? "near";
  const state = props.state ?? "CA";
  return (
    <Layout4>
      <div id="content" className="site-main post-7141 page type-page status-publish has-post-thumbnail hentry">
        <div className="page-content">
          <div className="elementor elementor-7141">
            <div className="elementor-element elementor-element-2d5452f2 e-con-full e-flex e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="elementor-element elementor-element-570ff304 elementor-widget-mobile__width-auto elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image src="/images/c53984ddb26116a561811e733249eedd.webp" width={365} height={537} alt="" className="attachment-full size-full wp-image-54951 entered error" />
                </div>
              </div>
              <div className="elementor-element elementor-element-1b230484 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-38da6ec2 elementor-widget__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">
                      {"Thank You "}
                      <br />
                      {" Your Request Has Been Received"}
                    </h1>
                  </div>
                </div>
                <div className="elementor-element elementor-element-76eae305 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>While you wait, explore our facilities, see what your care experience will look like, and learn what happens next.</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-78cc93f elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image src="/images/75099976c3c2ceb6ef012ae23430266c.webp" width={364} height={537} alt="" className="attachment-full size-full wp-image-54950 entered error" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-fa7be4d e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-42f766f8 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-f0b3cdb elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Explore Our California Centers</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-73510819 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Want to learn more about substance abuse and addiction problems? Take a look at some of our newest articles on the Renaissance Recovery blog.</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-437db88d e-grid e-con-full e-con e-child">
                  <div className="elementor-element elementor-element-4bad8dcb e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-5189aa7e e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-38e92e7d elementor-pagination-position-inside full-width-img-carousel centers-img-carousel elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-a48e88d8d9b15a2d" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData0.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-prev" aria-label="1 / 15" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={7016} height={4342} alt="An image of a living room at the connections mental health house in villa park, california" className="swiper-slide-image entered error" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-a48e88d8d9b15a2d">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-a48e88d8d9b15a2d">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 1"></span>
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} aria-label="Go to slide 2" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 11"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 12"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 13"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 14"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 15"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1159fa44 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-59e1a029 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-1882f8ad elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">{brand}-Treatment Center Orange County, {state}</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-600beb68 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>At our behavioral health treatment center in Orange County, we utilize evidence-based treatments and therapy to bring you or your loved one the highest quality of care, rooted in the most recent psychiatric science.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-57cf0857 elementor-align-left elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/mental-health/therapy/california/orange-county/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-66013706 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-2af65265 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-12f451ef elementor-pagination-position-inside full-width-img-carousel centers-img-carousel elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-23ae58876c1f50d7" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData1.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-prev" aria-label="1 / 18" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={2500} height={1667} alt="An image of a kitchen at the connections mental health house in villa park, california" className="swiper-slide-image entered error" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-23ae58876c1f50d7">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-23ae58876c1f50d7">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 1"></span>
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} aria-label="Go to slide 2" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 11"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 12"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 13"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 14"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 15"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 16"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 17"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 18"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-35acc773 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-3a5d0246 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-7d6707a elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Connections OC-Mental Health Treatment Center Tustin, {state}</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-2452d04a elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>At our Tustin behavioral health treatment center, we employ evidence‑based therapy and inpatient mental health treatment, offering the highest quality care grounded in current psychiatric science.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-3f460bd5 elementor-align-left elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/mental-health/therapy/california/orange-county/tustin/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-58ca6e56 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-7cc15bf3 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-72e7750 elementor-pagination-position-inside full-width-img-carousel centers-img-carousel elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-87e10f99fd9d9dd94" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData2.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-prev" aria-label="1 / 15" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={7016} height={4342} alt="An image of a living room at the connections mental health house in villa park, california" className="swiper-slide-image entered error" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-87e10f99fd9d9dd94">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-87e10f99fd9d9dd94">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 1"></span>
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} aria-label="Go to slide 2" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 11"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 12"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 13"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 14"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 15"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-18a2e155 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-24088462 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-f4bb4fc elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">{brand}-Treatment Center Villa Park, {state}</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-6ea1d8d7 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>At our behavioral health treatment center in Orange County, we utilize evidence-based treatments and therapy to bring you or your loved one the highest quality of care, rooted in the most recent psychiatric science.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-4cc6090e elementor-align-left elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-button" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/mental-health/therapy/california/orange-county/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
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
            <div className="elementor-element elementor-element-6c789dd e-con-full e-flex e-con e-parent">
              <div className="elementor-element elementor-element-ffc64a9 elementor-widget elementor-widget-template" data-widget_type="template.default">
                <div className="elementor-widget-container">
                  <div className="elementor-template">
                    <div className="elementor elementor-54606">
                      <div className="elementor-element elementor-element-68843b7c e-flex e-con-boxed e-con e-parent" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-7a9358b8 e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-66a59cc e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-35a02a00 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Paying Out Of Pocket without Insurance</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-1d8a3822 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Range $5,000 to $60,000</h4>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-1b81528 elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <link rel="preload" as="image" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20366%20257'%3E%3C/svg%3E" fetchPriority="high" /><img fetchPriority="high" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20366%20257'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54927" />
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-22a59142 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                            <div className="elementor-element elementor-element-6938cb09 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>If you can’t pay your co-pay amount</p>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-5fd41b5 elementor-align-justify elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">Call us we will work with you</span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-6a8663ef e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-4fa52fa e-con-full e-flex e-con e-child">
                              <div className="elementor-element elementor-element-4afb1032 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Paying Out Of Pocket with Insurance</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-44cd3179 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">Range $0 to $12,000</h4>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-8b84dcf elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>(Depending on insurance plan)</p>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-3eb9612 elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20366%20257'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54929" />
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
            <div className="elementor-element elementor-element-421cca7e e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-61ab7c3b e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-54e84b1a elementor-invisible elementor-widget elementor-widget-heading" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">What Our Clients Say</h2>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-557bf17d e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-6f798b7 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-33b12735 elementor-widget elementor-widget-html" data-widget_type="html.default">
                      <div className="elementor-widget-container">
                        <div></div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-358929f3 elementor-align-center elementor-widget-mobile__width-inherit elementor-mobile-align-justify elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/thank-you/#" className="elementor-button elementor-button-link elementor-size-sm">
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
            <div className="elementor-element elementor-element-5fda6ca7 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7f56519b e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-383cf444 elementor-invisible elementor-widget elementor-widget-heading" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Inside Our Florida Facilities</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-752a7d75 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Want to learn more about substance abuse and addiction problems? Take a look at some of our newest articles on the Renaissance Recovery blog.</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3f673dc5 e-grid e-con-full e-con e-child">
                  <div className="elementor-element elementor-element-1723ab00 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-4a05621d e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-729e4f62 elementor-pagination-position-inside full-width-img-carousel elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-b12c743ef10d47fe9" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData3.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide" aria-label="1 of 11" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={1024} height={684} alt="1-1-190.webp" className="swiper-slide-image" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-b12c743ef10d47fe9">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-b12c743ef10d47fe9">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-2889dc4d e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-5523e08d e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-6808aca elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Facility 1</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3678e06b elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>Find sobriety and comprehensive healing at River Oaks Treatment Center. River Oaks is a substance abuse rehabilitation center located outside of Tampa that helps people heal from addiction and stay sober. At River Oaks, we customize your treatment plan to address the biological, psychological, social, emotional, and spiritual components of addiction. We also offer multiple levels of addiction care to fit your lifestyle and are in-network with various health insurance policies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-621fb6f7 elementor-align-left elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-button" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/thank-you/#" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c06762f e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-7916919d e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-6dc097fe elementor-pagination-position-inside full-width-img-carousel elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-eda537108fa7cc37a" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData4.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide" aria-label="1 of 11" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={1200} height={669} alt="rectangle-251-1-1-68b941b47d396-293.webp" className="swiper-slide-image" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-eda537108fa7cc37a">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-eda537108fa7cc37a">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d950c54 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-29289df7 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-2942f1da elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Facility 2</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-66b52925 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>Find sobriety and comprehensive healing at River Oaks Treatment Center. River Oaks is a substance abuse rehabilitation center located outside of Tampa that helps people heal from addiction and stay sober. At River Oaks, we customize your treatment plan to address the biological, psychological, social, emotional, and spiritual components of addiction. We also offer multiple levels of addiction care to fit your lifestyle and are in-network with various health insurance policies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5e98dfda elementor-align-left elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-button" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/thank-you/#" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
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
            <div className="elementor-element elementor-element-5b4431f e-con-full e-flex e-con e-parent e-lazyloaded">
              <div className="elementor-element elementor-element-09371d0 elementor-widget elementor-widget-template" data-widget_type="template.default">
                <div className="elementor-widget-container">
                  <div className="elementor-template">
                    <div className="elementor elementor-54610">
                      <div className="elementor-element elementor-element-4e8410c e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-2b792a40 elementor-widget-tablet__width-auto elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">We Accept Most Major Insurance</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-44f0cdd5 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>View our wide selection of accepted providers. Don’t see yours? Call our admissions team for help.</p>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3dc1f1f1 e-con-full e-grid e-con e-child">
                            <div className="elementor-element elementor-element-40e02466 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/6a86ea6225c185032688ebc363011ca6.webp" width={964} height={462} alt="" className="attachment-full size-full wp-image-54427 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-3d19f025 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/b9df7a3e649671088ef849f955ec7ecf.webp" width={965} height={462} alt="" className="attachment-full size-full wp-image-54428 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-420e7cc1 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/b4d886afd6aa3d7a03d75c488a9fdb07.webp" width={964} height={462} alt="" className="attachment-full size-full wp-image-54429 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-33f54860 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/eeec61988a0d9c842621c2b4c7900c87.webp" width={965} height={462} alt="" className="attachment-full size-full wp-image-54430 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-3e173f4a elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/837b0ee0c2a1de07e312cc2e12581182.webp" width={964} height={462} alt="" className="attachment-full size-full wp-image-54431 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-64db1be3 elementor-widget__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20580%20319'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54432" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-7ce3f99f elementor-widget__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/5f24672b7ef463da8b4cfe323374408a.webp" width={965} height={462} alt="" className="attachment-full size-full wp-image-54433 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-6f3dbcc1 elementor-widget__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20580%20319'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54434" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-5a09283d elementor-widget__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Image src="/images/388b13f9decfd0094e18335fe44db6d2.webp" width={964} height={462} alt="" className="attachment-full size-full wp-image-54435 entered error" />
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-50cb78bf elementor-widget__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Link href="/check-your-insurance/">
                                  <Image src="/images/6df40e54101dfc4afcc57febe9d833ea.webp" width={242} height={116} alt="" className="attachment-full size-full wp-image-54436 entered error" />
                                </Link>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-6ddc9189 elementor-widget__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-widget_type="image.default">
                              <div className="elementor-widget-container">
                                <Link href="/check-your-insurance/">
                                  <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20580%20319'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54437" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1367a6fe e-con-full e-flex e-con e-child">
                            <div className="elementor-element elementor-element-7477073a elementor-align-justify elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">844-759-0999</span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-57d76186 elementor-align-justify elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <Link href="/check-your-insurance/" className="elementor-button elementor-button-link elementor-size-sm">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-75c4e2c1 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-4cce7613 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-2f3247e3 elementor-invisible elementor-widget elementor-widget-heading" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Inside Our Florida Facilities</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-365acfc6 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Want to learn more about substance abuse and addiction problems? Take a look at some of our newest articles on the Renaissance Recovery blog.</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-217d9aeb e-grid e-con-full e-con e-child">
                  <div className="elementor-element elementor-element-43ef92ff e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-4306f82a e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-7044c550 elementor-pagination-position-inside full-width-img-carousel centers-img-carousel elementor-widget__width-initial elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-bf0f78c0f9ca9937" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                              {gridData5.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide" aria-label="1 of 11" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <Image src={item.image} width={1720} height={1147} alt="IMG_2312-199.webp" className="swiper-slide-image" />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-bf0f78c0f9ca9937">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-bf0f78c0f9ca9937">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-7f518b2 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-31b1a2bd e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-20ec239d elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Facility 1</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1df90db6 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>Find sobriety and comprehensive healing at River Oaks Treatment Center. River Oaks is a substance abuse rehabilitation center located outside of Tampa that helps people heal from addiction and stay sober. At River Oaks, we customize your treatment plan to address the biological, psychological, social, emotional, and spiritual components of addiction. We also offer multiple levels of addiction care to fit your lifestyle and are in-network with various health insurance policies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-56249f2a elementor-align-left elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-button" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/thank-you/#" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Visit Facility</span>
                                </span>
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
            <div className="elementor-element elementor-element-116fbca0 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-6def7d89 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-579acafb elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">A Story of Hope &amp; Recovery</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-422a3eb6 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Watch this short testimonial from a former client who turned their life around through treatment.</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-624c0a42 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-5a1c0e8d e-flex e-con-boxed e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-12f8fac4 elementor-widget elementor-widget-video" data-settings="&#123;&quot;youtube_url&quot;:&quot;https:\/\/youtu.be\/3YIXhadnuqE?feature=shared&quot;,&quot;show_image_overlay&quot;:&quot;yes&quot;,&quot;image_overlay&quot;:&#123;&quot;url&quot;:&quot;https:\/\/connectionsoc.com\/wp-content\/uploads\/2026\/01\/Frame-14.webp&quot;,&quot;id&quot;:54942,&quot;size&quot;:&quot;&quot;&#125;,&quot;lazy_load&quot;:&quot;yes&quot;,&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;&#125;" data-widget_type="video.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-wrapper elementor-open-inline">
                            <div className="elementor-video"></div>
                            <div className="elementor-custom-embed-image-overlay rocket-lazyload entered error exited"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2bc3bad5 e-con-full e-flex e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="elementor-element elementor-element-30f8e856 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-7f200ef9 elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Your Path to Admission</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-16b44118 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Every step is guided by our experienced admissions team. Here’s what the next few hours may look like:</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-6199ea99 e-grid e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-ff1985e e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-103cffb7 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-56f7a0f4 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Phone call from admissions (within minutes)</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3688f0af e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-29f9c53e elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 2</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6a86ed71 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p>Quick insurance verification</p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-49fad74b e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-6e3a3ee3 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 3</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-5d8d11cd elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Clinical pre-assessment</div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-40f7a3c6 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-33464e05 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 4</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1bde7109 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Review of program options</div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-2f3ecf29 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-387e2380 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 5</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e1ebd2e elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Transportation scheduling</div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-25348c98 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-1141f9da elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-icon">
                              <svg className="e-font-icon-svg e-fas-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                              </svg>
                            </span>
                            <span className="elementor-icon-list-text">Step 6</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6729609a elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Same-day or next-day admission available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c8e1fea e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-4368198d e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-6eeebc60 elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Our Treatment Network Locations Across US</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3f4e553f elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>
                        {"Connections Mental Health belongs to a trusted network of addiction & mental health recovery centers across the nation. Visit "}
                        <Link href="/">www.connectionsoc.com</Link>
                        {" to learn more."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6f8626f0 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-3d0219eb e-flex e-con-boxed e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-1686b594 elementor-widget elementor-widget-image" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20629%20342'%3E%3C/svg%3E" alt="" className="attachment-full size-full wp-image-54943 entered exited" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-5b6930e2 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>*Red Pins: Our Locations / Blue Pins: States Patients Have Traveled From</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-5a820855 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-26a6abe6 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-4ebbedee elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Why Thousands Choose Our Treatment Centers</h2>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-766e04ac e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-24dd47d9 e-con-full e-grid e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    {gridData6.map((item, i) => (
                      <div key={i} className="elementor-element elementor-element-51c6701a e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                        <div className="elementor-element elementor-element-655be682 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">{item.title}</h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5780f21c elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-996cce0 e-flex e-con-boxed e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-22ded8ab e-con-full animated-slow e-flex e-con e-child" data-settings="&#123;&quot;animation&quot;:&quot;none&quot;&#125;">
                  <div className="elementor-element elementor-element-1f3520a5 elementor-widget elementor-widget-heading animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Rehabs {near_in} Orange County FAQs</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-17aa25af faqs-accordion elementor-widget elementor-widget-n-accordion" data-settings="&#123;&quot;default_state&quot;:&quot;expanded&quot;,&quot;max_items_expended&quot;:&quot;one&quot;,&quot;n_accordion_animation_duration&quot;:&#123;&quot;unit&quot;:&quot;ms&quot;,&quot;size&quot;:400,&quot;sizes&quot;:[]&#125;&#125;" data-widget_type="nested-accordion.default">
                    <div className="elementor-widget-container">
                      <div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
                        <details id="e-n-accordion-item-3970" open className="e-n-accordion-item">
                          <summary className="e-n-accordion-item-title" tabIndex={0} aria-controls="e-n-accordion-item-3970" aria-expanded="true">
                            <span className="e-n-accordion-item-title-header">
                              <div className="e-n-accordion-item-title-text">What types of programs are available at Orange County drug rehab centers?</div>
                            </span>
                            <span className="e-n-accordion-item-title-icon">
                              <span className="e-opened">
                                <svg className="e-font-icon-svg e-fas-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                              <span className="e-closed">
                                <svg className="e-font-icon-svg e-fas-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                            </span>
                          </summary>
                          <div role="region" className="elementor-element elementor-element-48e1588a e-con-full e-flex e-con e-child" aria-labelledby="e-n-accordion-item-3970">
                            <div className="elementor-element elementor-element-6523769b elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>{drug} rehab programs {near_in} Orange County offer a full continuum of care, including medical detox, inpatient treatment, partial hospitalization (PHP), intensive outpatient (IOP), and standard outpatient (OP) services. Whether you’re looking for structured care or flexible support, drug rehab options are designed to meet a range of needs.</p>
                              </div>
                            </div>
                          </div>
                        </details>
                        <details id="e-n-accordion-item-3971" className="e-n-accordion-item">
                          <summary className="e-n-accordion-item-title" tabIndex={-1} aria-controls="e-n-accordion-item-3971" aria-expanded="false">
                            <span className="e-n-accordion-item-title-header">
                              <div className="e-n-accordion-item-title-text">How do I know if I need treatment for drug and alcohol addiction {near_in} Orange County?</div>
                            </span>
                            <span className="e-n-accordion-item-title-icon">
                              <span className="e-opened">
                                <svg className="e-font-icon-svg e-fas-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                              <span className="e-closed">
                                <svg className="e-font-icon-svg e-fas-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                            </span>
                          </summary>
                          <div role="region" className="elementor-element elementor-element-74d30a44 e-con-full e-flex e-con e-child" aria-labelledby="e-n-accordion-item-3971">
                            <div className="elementor-element elementor-element-1200df1d elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                            </div>
                          </div>
                        </details>
                        <details id="e-n-accordion-item-3972" className="e-n-accordion-item">
                          <summary className="e-n-accordion-item-title" tabIndex={-1} aria-controls="e-n-accordion-item-3972" aria-expanded="false">
                            <span className="e-n-accordion-item-title-header">
                              <div className="e-n-accordion-item-title-text">What makes Orange County? drug and alcohol rehab centers unique?</div>
                            </span>
                            <span className="e-n-accordion-item-title-icon">
                              <span className="e-opened">
                                <svg className="e-font-icon-svg e-fas-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                              <span className="e-closed">
                                <svg className="e-font-icon-svg e-fas-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                            </span>
                          </summary>
                          <div role="region" className="elementor-element elementor-element-f72d3c8 e-con-full e-flex e-con e-child" aria-labelledby="e-n-accordion-item-3972">
                            <div className="elementor-element elementor-element-61eb54b9 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                            </div>
                          </div>
                        </details>
                        <details id="e-n-accordion-item-3973" className="e-n-accordion-item">
                          <summary className="e-n-accordion-item-title" tabIndex={-1} aria-controls="e-n-accordion-item-3973" aria-expanded="false">
                            <span className="e-n-accordion-item-title-header">
                              <div className="e-n-accordion-item-title-text">How can I support a loved one struggling with alcohol addiction {near_in} Orange County?</div>
                            </span>
                            <span className="e-n-accordion-item-title-icon">
                              <span className="e-opened">
                                <svg className="e-font-icon-svg e-fas-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                              <span className="e-closed">
                                <svg className="e-font-icon-svg e-fas-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                            </span>
                          </summary>
                          <div role="region" className="elementor-element elementor-element-cde80f3 e-con-full e-flex e-con e-child" aria-labelledby="e-n-accordion-item-3973">
                            <div className="elementor-element elementor-element-06ee40c elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                            </div>
                          </div>
                        </details>
                        <details id="e-n-accordion-item-3974" className="e-n-accordion-item">
                          <summary className="e-n-accordion-item-title" tabIndex={-1} aria-controls="e-n-accordion-item-3974" aria-expanded="false">
                            <span className="e-n-accordion-item-title-header">
                              <div className="e-n-accordion-item-title-text">How much does rehab {near_in} Orange County? cost, and is insurance accepted?</div>
                            </span>
                            <span className="e-n-accordion-item-title-icon">
                              <span className="e-opened">
                                <svg className="e-font-icon-svg e-fas-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                              <span className="e-closed">
                                <svg className="e-font-icon-svg e-fas-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                              </span>
                            </span>
                          </summary>
                          <div role="region" className="elementor-element elementor-element-c7d19cc e-con-full e-flex e-con e-child" aria-labelledby="e-n-accordion-item-3974">
                            <div className="elementor-element elementor-element-8df6643 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                              <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-323fff4e e-con-full animated-slow e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;&#125;">
                  <div className="elementor-element elementor-element-2101933 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image src="/images/b4f16b1d77bd43661f9f192cb106ea37.webp" width={657} height={634} alt="" className="attachment-full size-full wp-image-54944 entered error" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-23bab66 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a9a5529 e-con-full blog-last-sec e-flex e-con e-child">
                  <div className="elementor-element elementor-element-e327b6d elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">You’re Not Alone.</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ab0c99c elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial cta-para elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Get treatment from a team of expert staff who is passionate about helping you experience peace.</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-7f3e9c6 elementor-align-left elementor-mobile-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-widget_type="button.default">
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
          </div>
        </div>
      </div>
    </Layout4>
  );
}
