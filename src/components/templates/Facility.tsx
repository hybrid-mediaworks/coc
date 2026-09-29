import React from 'react';
import '@/app/shared/facility.css';
import Image from 'next/image';
import ElementorGallery, { type GalleryImage } from '@/components/ElementorGallery';

// Facility pages (WordPress "facility" posts, /facility/<slug>/), rebuilt from the live
// Elementor single-post template 56813. The facility's name, address and its three photo
// galleries come from the builder API; the rest is fixed template content.

// Gallery fields arrive as arrays of images (or, from older plugin versions, a JSON string).
function galleryOf(value: unknown): GalleryImage[] {
  let list: unknown = value;
  if (typeof value === 'string') {
    try {
      list = JSON.parse(value);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(list)) return [];
  return list.flatMap((item): GalleryImage[] => {
    if (!item || typeof item !== 'object') return [];
    const i = item as Record<string, unknown>;
    if (typeof i.url !== 'string' || !i.url) return [];
    return [{
      id: Number(i.id ?? i.ID) || 0,
      url: i.url,
      alt: typeof i.alt === 'string' ? i.alt : '',
      title: typeof i.title === 'string' ? i.title : '',
      width: Number(i.width) || 0,
      height: Number(i.height) || 0,
    }];
  });
}

const TABS = [
  { key: 'facility_interiors_gallery', title: 'Facility Interior', panel: '55ed25a0', widget: '7873a0d3' },
  { key: 'facility_exteriors_gallery', title: 'Facility Exterior', panel: '197b1abd', widget: '595ab8b2' },
  { key: 'location_highlights_gallery', title: 'Location Highlights', panel: '20752b35', widget: '1b127508' },
] as const;

// "Connect On Our Socials" carousel slides (fixed template content).
const SOCIAL_SLIDES = [
  { con: 'ea11212', img: 'da0cdf3', w: 441, h: 441, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/image-6.png', wp: 55999 },
  { con: '29e8847', img: '5f5be02', w: 441, h: 441, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/image-7.png', wp: 56000 },
  { con: '3a72367', img: '71cbebe', w: 441, h: 441, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/image-8.png', wp: 56001 },
  { con: '9b83f32', img: '416dc63', w: 441, h: 441, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/image-9.png', wp: 56002 },
  { con: '26507d0', img: '189d435', w: 441, h: 441, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/image-10.png', wp: 56003 },
  { con: 'df86e48', img: 'efab821', w: 720, h: 721, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/rectangle-265-1-68b94a4859218.webp', wp: 55991 },
  { con: '08105de', img: '0587684', w: 540, h: 541, src: 'https://connectionsoc.com/wp-content/uploads/2026/02/rectangle-267-1-1-68b94a4bc6022.webp', wp: 55993 },
];

const CAROUSEL_SETTINGS = JSON.stringify({
  carousel_items: SOCIAL_SLIDES.map((_, i) => ({ slide_title: 'Slide #1', _id: ['2e33073', 'a43fed1', 'eb76969', '342f146', 'cacda3a', 'e51a0e9', '194047a'][i] })),
  slides_to_show: '4',
  offset_sides: 'right',
  image_spacing_custom: { unit: 'px', size: 24, sizes: [] },
  offset_width: { unit: 'px', size: 120, sizes: [] },
  offset_width_mobile: { unit: 'px', size: 50, sizes: [] },
  slides_to_show_tablet: '3',
  image_spacing_custom_mobile: { unit: 'px', size: 10, sizes: [] },
  slides_to_show_mobile: '1',
  autoplay: 'yes',
  autoplay_speed: 5000,
  pause_on_hover: 'yes',
  pause_on_interaction: 'yes',
  infinite: 'yes',
  speed: 500,
  offset_width_tablet: { unit: 'px', size: '', sizes: [] },
  image_spacing_custom_tablet: { unit: 'px', size: '', sizes: [] },
});

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g clipPath="url(#clip0_7874_5482)">
        <path d="M18.7193 8.15994C18.7193 12.3071 11.9993 19.0799 11.9993 19.0799C11.9993 19.0799 5.2793 12.3071 5.2793 8.15994C5.2793 3.90714 8.75162 1.43994 11.9993 1.43994C15.247 1.43994 18.7193 3.90714 18.7193 8.15994Z" stroke="#4A4A4A" strokeWidth="1.44" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"></path>
        <path d="M12.0001 10.08C13.0605 10.08 13.9201 9.22038 13.9201 8.15999C13.9201 7.0996 13.0605 6.23999 12.0001 6.23999C10.9397 6.23999 10.0801 7.0996 10.0801 8.15999C10.0801 9.22038 10.9397 10.08 12.0001 10.08Z" stroke="#4A4A4A" strokeWidth="1.44" strokeMiterlimit="10" strokeLinecap="square"></path>
        <path d="M17.7595 17.2656C20.6491 17.7792 22.5595 18.6691 22.5595 19.68C22.5595 21.2707 17.8315 22.56 11.9995 22.56C6.16745 22.56 1.43945 21.2707 1.43945 19.68C1.43945 18.6691 3.34985 17.7792 6.23945 17.2656" stroke="#4A4A4A" strokeWidth="1.44" strokeMiterlimit="10"></path>
      </g>
      <defs>
        <clipPath id="clip0_7874_5482">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Facility(props: Record<string, string>) {
  const facilityName = props.facility_name ?? '';
  const facilityLocation = props.facility_location ?? '';
  const tabs = TABS.map((tab) => ({ ...tab, images: galleryOf((props as Record<string, unknown>)[tab.key]) })).filter((tab) => tab.images.length > 0);

  return (
    <div data-elementor-type="single-post" data-elementor-id="56813" className="elementor elementor-56813 elementor-location-single facility type-facility status-publish hentry">
      <div className="elementor-element elementor-element-ad00475 e-con-full e-flex e-con e-parent" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-element elementor-element-df20647 elementor-widget-mobile__width-auto elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <Image src="/images/735d7f4a434910a2b14b0530fca8d6c2.webp" alt="" width={365} height={537} priority className="attachment-full size-full wp-image-54951" />
          </div>
        </div>
        <div className="elementor-element elementor-element-a2444f4 elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <Image src="/images/7bf0b19e7905ce1d68945364479ddf7f.webp" alt="" width={364} height={537} className="attachment-full size-full wp-image-54950" />
          </div>
        </div>
        <div className="elementor-element elementor-element-4ed8a82 elementor-widget__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h1 className="elementor-heading-title elementor-size-default">Our Gallery</h1>
          </div>
        </div>
      </div>

      <div className="elementor-element elementor-element-57493c65 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          {facilityName ? (
            <div className="elementor-element elementor-element-65c19cb0 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{facilityName}</h2>
              </div>
            </div>
          ) : null}
          {facilityLocation ? (
            <div className="elementor-element elementor-element-4e34391d elementor-position-inline-start elementor-view-default elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <LocationIcon />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title">
                      <span>{facilityLocation}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {tabs.length ? (
        <div className="elementor-element elementor-element-643aac77 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-47fad3b0 e-n-tabs-mobile elementor-widget elementor-widget-n-tabs" data-settings="{&quot;horizontal_scroll_mobile&quot;:&quot;disable&quot;,&quot;horizontal_scroll&quot;:&quot;disable&quot;}" data-widget_type="nested-tabs.default">
              <div className="elementor-widget-container">
                <div className="e-n-tabs" aria-label="Tabs. Open items with Enter or Space, close with Escape and navigate using the Arrow keys.">
                  <div className="e-n-tabs-heading" role="tablist">
                    {tabs.map((tab, i) => (
                      <button
                        key={tab.key}
                        id={`e-n-tab-title-${tab.panel}`}
                        data-tab-title-id={`e-n-tab-title-${tab.panel}`}
                        className="e-n-tab-title"
                        aria-selected={i === 0 ? 'true' : 'false'}
                        data-tab-index={i + 1}
                        role="tab"
                        tabIndex={i === 0 ? 0 : -1}
                        aria-controls={`e-n-tab-content-${tab.panel}`}
                        style={{ '--n-tabs-title-order': i + 1 } as React.CSSProperties}
                      >
                        <span className="e-n-tab-title-text">{tab.title}</span>
                      </button>
                    ))}
                  </div>
                  <div className="e-n-tabs-content">
                    {tabs.map((tab, i) => (
                      <div
                        key={tab.key}
                        id={`e-n-tab-content-${tab.panel}`}
                        role="tabpanel"
                        aria-labelledby={`e-n-tab-title-${tab.panel}`}
                        data-tab-index={i + 1}
                        style={{ '--n-tabs-title-order': i + 1 } as React.CSSProperties}
                        className={`${i === 0 ? 'e-active ' : ''}elementor-element elementor-element-${tab.panel} e-con-full e-flex e-con e-child`}
                      >
                        <div className={`elementor-element elementor-element-${tab.widget} elementor-widget elementor-widget-gallery`} data-widget_type="gallery.default">
                          <div className="elementor-widget-container">
                            <ElementorGallery id={tab.widget} images={tab.images} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="elementor-element elementor-element-789d231 e-flex e-con-boxed e-con e-parent" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-9ede9b6 e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-c030e94 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-a28a98f elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Connect On <br />Our Socials</h2>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-3ebe56b e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-2fc0b6d elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Check out our socials to learn more about our programs, stay up to date on events and outings, get motivational content, &amp; more.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5409b87 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-sm" href="/#verify-insurance-home">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">See Comments</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-a30af10 elementor-widget elementor-widget-n-carousel" data-settings={CAROUSEL_SETTINGS} data-widget_type="nested-carousel.default">
            <div className="elementor-widget-container">
              {/* offset-right: Elementor's JS adds it from offset_sides; the template CSS sizes the slides by it. */}
              <div className="e-n-carousel swiper offset-right" role="region" aria-roledescription="carousel" aria-label="Carousel" dir="ltr">
                <div className="swiper-wrapper" aria-live="off">
                  {SOCIAL_SLIDES.map((slide, i) => (
                    <div key={slide.con} className="swiper-slide" data-slide={i + 1} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${SOCIAL_SLIDES.length}`}>
                      <div className={`elementor-element elementor-element-${slide.con} e-flex e-con-boxed e-con e-child`}>
                        <div className="e-con-inner">
                          <div className={`elementor-element elementor-element-${slide.img} elementor-widget__width-inherit elementor-widget elementor-widget-image`} data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img width={slide.w} height={slide.h} src={slide.src} loading="lazy" decoding="async" className={`attachment-full size-full wp-image-${slide.wp}`} alt="" sizes={`(max-width: ${slide.w}px) 100vw, ${slide.w}px`} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-97401a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
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
                    <a href="tel:844-759-0999" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Call Now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
