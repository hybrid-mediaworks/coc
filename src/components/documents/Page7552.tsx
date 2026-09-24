import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RelatedPages from '@/components/RelatedPages';

// Facility photo slider, in the live site's order (image-carousel 8d14275).
const gridData0 = [
  { image: "/images/60bc95f8efac45d8aa5da28669841e60.webp", width: 7016, height: 4342 },
  { image: "/images/6f3b750517b36440e3b203bcfec3a49d.webp", width: 2500, height: 1667 },
  { image: "/images/7af5e4605616ebe006c2e0ed0e8710a0.webp", width: 2500, height: 1667 },
  { image: "/images/6058a84c69aae0f2d4daeb785137886d.webp", width: 2500, height: 1667 },
  { image: "/images/aeea494f1fae3cae5cf888c7020314f8.webp", width: 2500, height: 1667 },
  { image: "/images/002f54c7be89f77c7caaa1b06f93e2b1.webp", width: 2500, height: 1667 },
  { image: "/images/a39dc71f286f9ce19bb01d2049cf700c.webp", width: 2500, height: 1667 },
  { image: "/images/65ee0c1f9380c91185f2d86360ad5d61.webp", width: 2500, height: 1667 },
  { image: "/images/04172189ce839057528456106b3c283e.webp", width: 2500, height: 1667 },
  { image: "/images/c0a55bb1312b126ec8f8527ce3452bf4.webp", width: 2500, height: 1667 },
  { image: "/images/fdd15bf7c402e0f2ce78b9181f217060.webp", width: 980, height: 627 },
  { image: "/images/e53af798514d2ecbf8362f73f9b17506.webp", width: 993, height: 583 },
  { image: "/images/81f8fd8e6c3a55c2e7abceb35f6eef66.webp", width: 985, height: 640 },
  { image: "/images/2fd66655268de70bf9c4f16b11e0205c.webp", width: 988, height: 586 },
  { image: "/images/c75472e08a3ccee309ea7ee2afefa2ab.webp", width: 1006, height: 529 },
  { image: "/images/cc6deb6863efa64f0d80975b7f024ca9.webp", width: 985, height: 616 },
  { image: "/images/4e140d279187f3c421180e82381df93f.webp", width: 967, height: 632 },
  { image: "/images/8e6d0a158b0ecfe9ffd4cd70aff0f736.webp", width: 993, height: 652 },
] as const;


// Builder API field values used when WordPress is unreachable: the template's standard copy.
// Gaps where the API stripped the town name are filled in by withGeo, like live data.
const DEFAULTS: Record<string, string> = {
  "h1": "Inpatient Mental Health Treatment Center Near [acf field=geo]",
  "hero___content": "<p>We provide stabilization and mental health treatment near  in a home-like, structured setting.</p>",
  "intro___heading": "Safe, Evidence-Based Behavioral Health Center Serving [acf field=geo]",
  "intro___content": "<p>Our inpatient mental health treatment center near  provides a quiet, secure environment where individuals facing anxiety, PTSD, or depression can begin their recovery journey.&nbsp;<br />Our six-client facility offers round-the-clock support and personalized therapeutic care shaped by the recovery experiences of our founders.&nbsp;<br />With a strong focus on behavioral health, we create a structured, empathetic space that empowers clients to build coping skills and emotional strength for sustainable, long-term healing and mental health progress.</p>",
  "facility-image-slider___heading": "Secure, Home-Like Mental Health Facilities Near [acf field=geo]",
  "facility-image-slider___content": "<p>Our mental health treatment center near  provides an upscale living space with round-the-clock care from experienced clinicians.</p>",
  "modalities___heading": "Evidence-Based Therapy and Behavioral Health Near [acf field=geo]",
  "modalities___content": "<p>At Connections behavioral health center near , we implement evidence-based approaches to mental health care, drawing from the latest advancements in psychiatric treatment and therapeutic practices.</p>",
  "what-is-treatment-like___heading": "What Is Mental Health Treatment Like Near [acf field=geo]?",
  "what-is-treatment-like___content": "<p>Mental health programs in the  area offer support for those facing challenges like anxiety, depression, PTSD, bipolar disorder, and more. Care may include inpatient or outpatient options with treatment plans tailored to the individual. Therapies often include CBT, DBT, trauma-informed care, and may be supplemented with medication management and holistic services such as mindfulness or yoga. Facilities prioritize warmth, structure, and personalized healing environments. Community resources and peer-support groups help strengthen long-term outcomes.</p>",
  "geo-stats___heading": "Mental Health Statistics in The U.S.",
  "geo-stats___content": "<p>Mental health disorders affect nearly one in five adults in the U.S. annually. Common challenges include depression, anxiety, and substance use. Youth are especially vulnerable, with rising rates of suicide and school-related stress. Hospitalizations for serious mental illnesses like bipolar disorder and schizophrenia have increased nationwide. Barriers to care remain in some communities due to insurance coverage, income disparities, and access to services. Expanding early intervention, integrated care models, and education are key to improving mental health outcomes.</p>",
  "geo-about-and-attractions___heading": "Activities That Support Mental Health & Wellbeing",
  "geo-about-and-attractions___content": "<p>After completing treatment, many clients benefit from engaging in meaningful activities that support their mental wellness. Consider incorporating experiences like:</p>\n<ul>\n<li><strong>Nature walks or hiking:</strong> Access to peaceful, natural spaces can reduce stress, anxiety, and depressive symptoms.</li>\n<li><strong>Mindfulness or yoga sessions:</strong> Practicing meditation or movement-based therapy enhances emotional regulation and promotes calm.</li>\n<li><strong>Art therapy workshops:</strong> Creative expression fosters emotional processing, insight, and healing.</li>\n<li><strong>Community volunteering:</strong> Giving back boosts mood, promotes connection, and supports long-term recovery through purpose-driven engagement.</li>\n</ul>",
  "faqs___heading": "Inpatient Mental Health Treatment FAQs",
  "faqs___content": "<details>\n<summary><strong style=\"cursor: pointer;\"> OP Rehab FAQs</strong></summary>\n<h3><strong>What is inpatient mental health treatment like?</strong></h3>\n<p>Inpatient mental health treatment provides 24/7 care in a structured residential setting for those with severe or persistent mental health conditions.</p>\n<h3><strong>Who can benefit from behavioral health treatment?</strong></h3>\n<p>Behavioral health treatment is ideal for individuals with anxiety, PTSD, depression, or mood disorders needing focused, intensive care.</p>\n<h3><strong>What types of therapy are offered in inpatient programs?</strong></h3>\n<p>Inpatient programs offer CBT, DBT, group therapy, trauma-informed care, and more are typically offered.</p>\n<h3><strong>Does behavioral health care help with anxiety and depression?</strong></h3>\n<p>Yes—evidence-based therapies and psychiatric care are effective in treating both anxiety and depression.</p>\n<h3><strong>Are PTSD therapies available?</strong></h3>\n<p>Many programs include EMDR, trauma-focused CBT, and other modalities tailored for PTSD recovery.</p>\n<h3><strong>How long does inpatient treatment last?</strong></h3>\n<p>Inpatient treatment usually ranges from 2 to 6 weeks, depending on clinical needs.</p>\n<h3><strong>What can I expect during treatment?</strong></h3>\n<p>Expect daily therapy, psychiatric assessments, medication management, and wellness activities like yoga or art.</p>\n<h3><strong>Is treatment covered by insurance?</strong></h3>\n<p>Many mental health treatment centers accept a wide range of plans. It’s best to confirm coverage directly.</p>\n<h3><strong>Can family be involved in the process?</strong></h3>\n<p>Yes—family therapy and support services are often included to strengthen healing and relationships.</p>\n<h3><strong>What conditions are treated?</strong></h3>\n<p>Programs typically address depression, anxiety, PTSD, bipolar disorder, and other serious mental health diagnoses.</p>\n</details>",
  "cta---conculsion___heading": "Healing starts here. Connect with our team to begin your journey toward stabilization and wellness.",
};

// The Builder API strips [acf field=geo] from HTML fields before sending them, leaving a gap
// ("treatment near  in a home-like…", "in the  area", "<summary> OP Rehab FAQs"); live renders
// the town there. Headings still carry the shortcode itself. Once the plugin expands shortcodes
// these rules stop matching.
function withGeo(value: string, props: Record<string, string>): string {
  const geo = props.geo ?? "";
  return value
    .replace(/\[acf field=([\w-]+)\]/g, (_, key: string) => props[key] ?? props[key.replace(/-/g, "_")] ?? "")
    .replace(/\bnear (?=[ ,])/g, `near ${geo}`)
    .replace(/\bthe (?= area\b)/g, `the ${geo}`)
    .replace(/(<summary>(?:<strong[^>]*>)?) (?=OP Rehab FAQs)/, `$1${geo} `);
}

const escapeHtml = (s: string) => s.replace(/&(?![#\w]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default function Page7552(props: Record<string, string>) {
  const __presentIds = (props.__present ?? "").split(",").filter(Boolean);
  const __present = (id: string) => __presentIds.length === 0 || __presentIds.includes(id);
  // A field's value with the town filled in; missing fields fall back to DEFAULTS.
  const text = (key: string) => withGeo(props[key] ?? DEFAULTS[key] ?? "", props);
  // Fields are HTML (wysiwyg) or plain strings; render both as markup, plain ones in a <p>.
  const html = (key: string) => {
    const value = text(key).trim();
    return { __html: /<[a-z][\s\S]*>/i.test(value) ? value : `<p>${escapeHtml(value)}</p>` };
  };
  return (
    <div data-elementor-type="single-page" data-elementor-id="7552" className="elementor elementor-7552 elementor-location-single">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-f49a320 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a1e087a">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-2d6ba2f elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("h1") }} />
                </div>
              </div>
              {__present("16825d3") ? (
<div className="elementor-element elementor-element-16825d3 elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("hero___content")} />
              </div>
) : null}
              <div className="elementor-element elementor-element-aa95672 elementor-align-center elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="tel:657-298-1982" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Call Now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b7c9fe1 elementor-align-left elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/about-us/" className="elementor-button elementor-button-link elementor-size-sm">
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-05db3fa elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-964d01e">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("9c5cda1") ? (
<div className="elementor-element elementor-element-9c5cda1 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("intro___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-dbd1cba elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              {__present("34f160e") ? (
<div className="elementor-element elementor-element-34f160e elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("intro___content")} />
              </div>
) : null}
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-642b811">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-a1a257e elementor-widget elementor-widget-video" data-settings="&#123;&quot;youtube_url&quot;:&quot;https:\/\/www.youtube.com\/watch?v=KQpKuog36P8&quot;,&quot;loop&quot;:&quot;yes&quot;,&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;&#125;" data-widget_type="video.default">
                <div className="elementor-widget-container">
                  <div className="elementor-wrapper elementor-open-inline">
                    <iframe loading="lazy" id="widget2" src="https://www.youtube.com/embed/KQpKuog36P8?controls=1&amp;rel=0&amp;playsinline=0&amp;cc_load_policy=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fconnectionsoc.com&amp;widgetid=1&amp;forigin=https%3A%2F%2Fconnectionsoc.com%2Fmental-health%2Ftherapy%2Flos-angeles-ca%2Fsouth-gate%2F&amp;aoriginsup=1&amp;vf=2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="elementor-video" title="Inside Connections Mental Health: Our Inpatient Residential Treatment Center in Tustin, California" width={640} height={360} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-16720bb elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ff9a950" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f427fc3 eael-flipbox-content-align-center elementor-widget elementor-widget-eael-flip-box" data-widget_type="eael-flip-box.default">
                <div className="elementor-widget-container">
                  <div className="eael-elements-flip-box-container eael-animate-flip eael-animate-left eael-content eael-flip-box-hover eael-flipbox-fixed-height eael-flipbox-dynamic">
                    <div className="eael-elements-flip-box-flip-card">
                      <div className="eael-elements-flip-box-front-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-icon-image">
                                <span className="ea-flipbox-icon eael-flipbox-svg-icon eaa-svg">
                                  <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                    <g>
                                      <path d="m1088.9 448.33c8.2656 0.12109 14.867 6.9336 14.719 15.266v287.64c0 56.441-32.227 95.895-75.293 101.17l-5.332 0.625 79.574 208.62c2.9883 7.6914-0.90625 16.441-8.6016 19.359-7.7852 2.9883-16.465-0.89453-19.453-8.6797l-82.148-215.56-118.25 14.453-76.121 201.11c-2.707 7.9883-11.52 12.16-19.426 9.1719-7.9336-3.0547-11.801-12.012-8.5469-19.801l79.309-209.59c2.0117-5.2148 6.668-8.8945 12.16-9.5859l163.25-19.852c28-3.4648 48.961-25.426 48.961-71.453v-287.63c-0.16016-8.4805 6.7188-15.414 15.199-15.27z"></path>
                                      <path d="m550.67 431.93 14.668 17.348c-28.266 23.199-51.254 50.559-64.387 84.227-7.625-3.0391-16.32-4.1602-25.48-2.5586 11.797-39.148 43.531-77.91 75.199-99.016zm-327.36-35.281c20.625 0 35.148 14.094 46.945 38.828l67.148 140.27c2.9219 6.1211 9.5078 9.5352 16.172 8.332l126.4-23.613c12.84-2.4414 17.492 3.8281 18.879 10.707 1.3867 6.9336 0.35938 14.988-17.426 19.426l-148.89 37.293c-8.1992 1.2383-15.906-2.707-19.453-10.066l-60.215-113.48c-7.8398-14.867-22.414-6.8789-16.387 7.8398l42.922 104.87v81.172c0.066406 7.5078 5.6406 13.812 13.066 14.785l137.43 17.773c13.266 1.7461 24.375 10.773 28.895 23.348l89.238 250.46c4.4414 12.309 2.9883 21.332-1.1211 28.762-4.0938 7.5078-11.52 13.453-20.266 16.586-8.7461 3.1328-18.398 3.1992-26.332 0-7.8398-3.1875-14.719-9.0781-19.094-21.453l-78.812-221.36c-1.9336-5.2812-6.6016-9.1055-12.215-9.8672l-179.93-23.32c-17.773-2.293-30.973-17.16-30.973-35.148l0.003906-306.73c0-10.973 2.9883-19.094 9.0117-24.922 6.0547-5.8359 16.469-10.57 35.016-10.492zm0-30c-23.895 0-42.988 6.5195-55.773 18.945-12.84 12.359-18.188 29.586-18.188 46.453v306.75c0 32.785 24.52 60.641 57.012 64.945l170.83 22.078 75.84 212.79c6.9453 19.359 20.426 32.906 35.988 39.238 15.613 6.2383 32.625 5.8281 47.625 0.48047 15.078-5.3477 28.547-15.84 36.602-30.559 8.0547-14.719 9.9883-33.746 3.1328-53.188l-89.387-250.35c-8.1992-23.199-28.812-39.852-53.188-43.055l-124.44-16.105v-39.609c5.6133 9.8008 19.668 14.172 29.105 11.801l150.2-37.559c29.238-7.293 43.961-32.707 39.586-54.441-0.64062-3.2656-1.8125-6.332-3.1992-9.3203 11.254-38.68 34.785-68.895 69.375-93.602 7.0938-5.1328 8.4141-15.215 2.7188-21.879l-33.281-39.375c-2.9727-3.4648-7.3594-5.3984-11.852-5.2148-2.3594 0-4.5859 0.625-6.6797 1.7461-46.785 25.348-89.852 79.574-102.08 136.65-0.14844 0.90625-0.26562 1.7461-0.26562 2.6523l-83.559 15.559-62.012-129.51c-14.805-30.695-39.473-56.242-74.109-56.324z"></path>
                                      <path d="m973.24 396.65c18.547 0 31.254 4.9453 38.945 11.32 7.6406 6.3867 11.039 14.238 11.039 24.094l0.003906 306.73c0.066407 17.988-12.973 32.852-30.828 35.148l-179.85 23.32c-5.6406 0.76172-10.348 4.5195-12.227 9.8672l-78.879 221.39c-4.375 12.375-11.188 18.281-19.094 21.453-7.9336 3.1992-17.508 3.1328-26.254 0-8.7461-3.1328-16.254-9.0781-20.414-16.586-4.1055-7.4258-5.5586-16.465-1.1211-28.762l89.375-250.4c2.3594-6.6133 2.6523-10.84 8.625-14.238 8.2656 3.4648 21.668 0.33203 27.574-1.5352l170.55-54.453c18.281-5.8281 32.094-21.934 33.398-41.105l10.133-151.11c1.0547-16.172-14.922-20.148-17.707-1.8125l-22.238 149.51c-1.3867 9.1055-6.9336 14.094-12.762 15.988l-170.49 54.359c-6.9453 2.2266-9.2383 3.2656-16.602-0.41406-2.4141-1.1719-5.9062-5.3477-7.6914-10.895-1.6016-5.1328-1.6016-10.922 0.33203-14.238 3.5352-6.1211 8.8125-7.8398 13.066-9.1719l143.61-45.973c9.4414-3.0391 16.32-11.586 17.215-21.453l15.48-169.72c1.5352-16.652 5.8516-26.934 11.133-32.574 5.2656-5.6914 12.215-8.8125 25.613-8.8125zm0-30c-18.973 0-36.055 5.8281-47.641 18.332-11.668 12.574-17.012 29.801-18.945 50.281l-15.293 166.39-140.27 44.867c-15.293 4.3086-26.254 14.309-31.254 25.215-5.3477 11.453-5.9062 27.215-3.1328 35.895 2.7734 8.6914 5.4922 13.906 10.348 17.441-5.2812 5.5469-7.9883 9.5859-11.375 19.027l-89.387 250.49c-6.8789 19.375-4.9219 38.465 3.1328 53.188 8.1211 14.719 21.535 25.215 36.535 30.559 14.988 5.3477 32 5.7617 47.625-0.48047 15.559-6.332 29.172-19.879 36.121-39.238l75.68-212.85 170.99-22.078c32.426-4.2266 56.945-32.16 56.867-64.945l-0.003907-306.73c0-17.922-7.7852-35.293-21.961-47.094-14.223-11.812-34.223-18.266-58.039-18.266z"></path>
                                      <path d="m270.46 153.25c20 7.9062 36.867 23.535 46.172 45 18.398 42.707-1.1055 92.012-43.828 110.49-42.988 18.465-92.281-1.0547-110.76-43.961-18.465-42.773 1.0273-92 44.012-110.55 21.422-9.25 44.406-8.8906 64.406-0.98438zm10.895-27.707c-27.148-10.762-58.398-11.254-87.215 1.1875-57.852 24.922-84.52 92.281-59.586 149.99 24.852 57.707 92.359 84.52 150.13 59.586 57.707-24.867 84.32-92.375 59.453-150.01-12.504-28.805-35.637-49.977-62.785-60.75z" fillRule="evenodd"></path>
                                      <path d="m111.09 448.33c-8.2656 0.12109-14.867 6.9336-14.719 15.266v287.64c0 56.441 32.215 95.895 75.348 101.17l5.2812 0.625-79.539 208.62c-3.0547 7.6914 0.83984 16.441 8.6016 19.426 7.7188 2.9219 16.469-0.94531 19.387-8.7305l82.227-215.56 118.2 14.453 76.105 201.11c2.7734 7.9883 11.586 12.16 19.52 9.1719 7.9062-3.0547 11.734-12.012 8.4648-19.801l-79.301-209.59c-1.9336-5.2148-6.6016-8.8945-12.066-9.5859l-163.27-19.852c-28.055-3.4648-48.961-25.426-48.961-71.453v-287.64c0.13281-8.4805-6.8281-15.414-15.281-15.27z"></path>
                                      <path d="m994.41 153.25c19.934 7.9062 36.867 23.535 46.121 45 18.465 42.707-1.0547 92.012-43.828 110.49-42.922 18.465-92.215-1.0547-110.68-43.961-18.547-42.773 0.96094-92 43.945-110.55 21.375-9.25 44.441-8.8906 64.441-0.98438zm10.961-27.707c-27.148-10.762-58.398-11.254-87.215 1.1875-57.773 24.922-84.586 92.281-59.719 149.99 24.922 57.707 92.426 84.52 150.2 59.586 57.707-24.867 84.309-92.375 59.375-150.01-12.414-28.805-35.402-49.977-62.641-60.75z" fillRule="evenodd"></path>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="eael-elements-flip-box-heading">Individualized Treatment</h3>
                              <div className="eael-elements-flip-box-content"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="eael-elements-flip-box-rear-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-content">
                                <p>Our treatment center only sees up to 6 clients at a time, meaning you or your loved one will receive the highest level of care and attention, customized to the specific needs of each individual.</p>
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
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-902f693" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-2c1bd29 eael-flipbox-content-align-center elementor-widget elementor-widget-eael-flip-box" data-widget_type="eael-flip-box.default">
                <div className="elementor-widget-container">
                  <div className="eael-elements-flip-box-container eael-animate-flip eael-animate-left eael-content eael-flip-box-hover eael-flipbox-fixed-height eael-flipbox-dynamic">
                    <div className="eael-elements-flip-box-flip-card">
                      <div className="eael-elements-flip-box-front-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-icon-image">
                                <span className="ea-flipbox-icon eael-flipbox-svg-icon eaa-svg">
                                  <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                    <g>
                                      <path d="m835.32 182c0-29.965-11.676-58.141-32.855-79.32-21.191-21.191-49.367-32.855-79.32-32.855-29.965 0-58.141 11.676-79.332 32.855l-34.262 34.262-34.27-34.262c-21.191-21.191-49.355-32.855-79.32-32.855-29.965 0-58.129 11.676-79.32 32.855-21.191 21.191-32.855 49.355-32.855 79.32s11.664 58.129 32.855 79.32l190.85 190.85 2.0625-2.0625 2.0625 2.0625 190.85-190.85c21.184-21.18 32.859-49.355 32.859-79.32zm-73.68 38.508-150.02 150.02-2.0625-2.0625-2.0742 2.0742-150.04-150.04c-10.43-10.43-15.949-23.746-15.949-38.508 0-14.762 5.5195-28.066 15.949-38.508 10.441-10.441 23.746-15.949 38.508-15.949s28.066 5.5195 38.508 15.949l75.074 75.074 75.074-75.074c10.441-10.441 23.746-15.949 38.508-15.949s28.066 5.5195 38.508 15.949c10.441 10.43 15.949 23.746 15.949 38.508 0.019532 14.762-5.5039 28.066-15.93 38.508z"></path>
                                      <path d="m893.35 848.46c76.789 0 139.26-62.473 139.26-139.26 0-76.789-62.473-139.26-139.26-139.26-76.789 0-139.26 62.473-139.26 139.26-0.011719 76.789 62.461 139.26 139.26 139.26zm0-220.79c44.953 0 81.539 36.574 81.539 81.539 0 44.953-36.59 81.527-81.539 81.527-44.953 0-81.539-36.574-81.539-81.527 0-44.965 36.574-81.539 81.539-81.539z"></path>
                                      <path d="m306.48 569.94c-76.777 0-139.25 62.473-139.25 139.26s62.473 139.26 139.25 139.26c76.789 0 139.26-62.473 139.26-139.26 0.011718-76.793-62.461-139.26-139.26-139.26zm-81.527 139.27c0-44.965 36.574-81.539 81.527-81.539s81.539 36.574 81.539 81.539c0 44.953-36.59 81.527-81.539 81.527-44.953 0-81.527-36.574-81.527-81.527z"></path>
                                      <path d="m117.05 1082.9c3.8047-79.379 69.371-142.84 149.68-142.84h79.523c1.8828 0 3.7188 0.21484 5.5938 0.28906-28.453 40.055-45.359 88.859-45.359 141.61v38.484c0 0.085937 0.011719 0.17969 0.011719 0.26562 19.332 2.9297 38.711 5.5938 58.129 7.9453-0.12109-2.7461-0.42188-5.4375-0.42188-8.207v-38.484c0-103.45 84.168-187.61 187.61-187.61h96.215c103.44 0 187.61 84.156 187.61 187.61v38.484c0 3.2656-0.32422 6.457-0.49219 9.6836 19.414-2.2305 38.785-4.7773 58.105-7.5859 0.011718-0.70703 0.10938-1.3906 0.10938-2.1016v-38.484c0-52.766-16.906-101.57-45.359-141.61 1.8711-0.070312 3.707-0.28906 5.6055-0.28906h79.512c81.266 0 147.49 64.969 149.83 145.68l57.055-13.176c-8.9531-106.37-98.242-190.23-206.89-190.23h-79.512c-18.613 0-36.562 2.6875-53.734 7.2969-41.82-33.086-94.5-53.004-151.84-53.004h-96.215c-57.336 0-110.02 19.922-151.84 53.004-17.172-4.6094-35.125-7.2969-53.723-7.2969h-79.523c-107.61 0.007812-196.36 82.258-206.73 187.2z"></path>
                                      <path d="m460.66 665.91c0 76.789 62.473 139.26 139.26 139.26 76.777 0 139.25-62.473 139.25-139.26 0-76.789-62.473-139.26-139.25-139.26-76.789-0.007813-139.26 62.477-139.26 139.26zm139.27 81.531c-44.953 0-81.539-36.574-81.539-81.527 0-44.965 36.59-81.539 81.539-81.539 44.953 0 81.527 36.574 81.527 81.539-0.011719 44.949-36.578 81.527-81.527 81.527z"></path>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="eael-elements-flip-box-heading">Family-Like Environment</h3>
                              <div className="eael-elements-flip-box-content"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="eael-elements-flip-box-rear-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-content">
                                <p>Our founders have been through treatment for mental health themselves, and are passionate about creating an atmosphere where our clients can connect with like-minded individuals and feel like they’re part of a family.</p>
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
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a9d5422" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-538f75a eael-flipbox-content-align-center elementor-widget elementor-widget-eael-flip-box" data-widget_type="eael-flip-box.default">
                <div className="elementor-widget-container">
                  <div className="eael-elements-flip-box-container eael-animate-flip eael-animate-left eael-content eael-flip-box-hover eael-flipbox-fixed-height eael-flipbox-dynamic">
                    <div className="eael-elements-flip-box-flip-card">
                      <div className="eael-elements-flip-box-front-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-icon-image">
                                <span className="ea-flipbox-icon eael-flipbox-svg-icon eaa-svg">
                                  <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                    <g>
                                      <path d="m1170 537.6c-1.1992-10.801-7.1992-19.199-15.602-25.199l-219.6-157.2v-162c0-21.602-18-39.602-39.602-39.602-21.602 0-39.602 18-39.602 39.602v104.4l-232.8-168c-13.199-9.6016-32.398-9.6016-45.602 0l-530.4 382.8c-8.3984 6-14.398 15.602-15.602 25.199-1.1992 10.801 1.1992 20.398 7.1992 28.801 12 18 36 21.602 54 9.6016l80.398-58.801v522c0 21.602 18 39.602 39.602 39.602h775.2c21.602 0 39.602-18 39.602-39.602v-522l80.398 58.801c16.801 12 42 8.3984 55.199-8.3984 6.0039-9.6016 8.4023-19.203 7.2031-30zm-220.8 462h-698.4v-538.8l3.6016-3.6016 345.6-248.4 349.2 252z"></path>
                                      <path d="m488.4 481.2c-43.199 6-80.398 33.602-102 73.199-27.602 51.602-16.801 117.6 26.398 159.6l158.4 158.4c7.1992 7.1992 18 12 27.602 12s20.398-3.6016 27.602-12l160.8-160.8c30-30 44.398-74.398 38.398-116.4-6-43.199-33.602-80.398-73.199-102-49.199-26.398-110.4-16.801-153.6 20.398-28.797-25.199-69.598-37.199-110.4-32.398zm61.203 94.801 22.801 22.801c7.1992 7.1992 16.801 12 27.602 12 10.801 0 20.398-3.6016 27.602-12l21.602-21.602c19.199-19.199 46.801-24 68.398-13.199 18 9.6016 28.801 25.199 32.398 44.398 2.3984 18-3.6016 37.199-16.801 50.398l-132 132-132-130.8c-19.199-19.199-24-46.801-13.199-68.398 13.199-24 33.602-30 44.398-32.398 2.3984 0 6-1.1992 8.3984-1.1992 15.602-0.003906 30.004 5.9961 40.805 17.996z"></path>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="eael-elements-flip-box-heading">Comfortable &amp; Safe Accommodations</h3>
                              <div className="eael-elements-flip-box-content"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="eael-elements-flip-box-rear-container">
                        <div className="eael-elements-slider-display-table">
                          <div className="eael-elements-flip-box-vertical-align">
                            <div className="eael-elements-flip-box-padding">
                              <div className="eael-elements-flip-box-content">
                                <p>Recovering from a mental health disorder is not easy, so we take the utmost care in providing a treatment program that is safe and comfortable, with 24/7 supervision and support.</p>
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
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-9f19938 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-59678d9">
            <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
              {__present("ec3c7c3") ? (
<div className="elementor-element elementor-element-ec3c7c3 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("facility-image-slider___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-11e99d7 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              {__present("31aa599") ? (
<div className="elementor-element elementor-element-31aa599 elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("facility-image-slider___content")} />
              </div>
) : null}
              <div className="elementor-element elementor-element-8d14275 elementor-arrows-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;arrows&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                <div className="elementor-widget-container">
                  <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                    <div id="swiper-wrapper-41698e0bc86e54e8" className="elementor-image-carousel swiper-wrapper" aria-live="off">
                      {gridData0.map((item, i) => (
                        <div key={i} role="group" className="swiper-slide" aria-label={`${i + 1} / ${gridData0.length}`} aria-roledescription="slide">
                          <figure className="swiper-slide-inner">
                            <Image src={item.image} width={item.width} height={item.height} alt="An image of a living room at the connections mental health house in villa park, california" className="swiper-slide-image entered error" />
                          </figure>
                        </div>
                      ))}
                    </div>
                    <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-41698e0bc86e54e8">
                      <svg className="e-font-icon-svg e-fas-caret-square-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM259.515 124.485l-123.03 123.03c-4.686 4.686-4.686 12.284 0 16.971l123.029 123.029c7.56 7.56 20.485 2.206 20.485-8.485V132.971c.001-10.691-12.925-16.045-20.484-8.486z"></path>
                      </svg>
                    </div>
                    <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-41698e0bc86e54e8">
                      <svg className="e-font-icon-svg e-fas-caret-square-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm140.485 355.515l123.029-123.029c4.686-4.686 4.686-12.284 0-16.971l-123.029-123.03c-7.56-7.56-20.485-2.206-20.485 8.485v246.059c0 10.691 12.926 16.045 20.485 8.486z"></path>
                      </svg>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-831bbe7 elementor-widget__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Connections’ accommodations provide a comfortable, family-like environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-75495dd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2a847e8">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ee19d76 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image src="/images/9018e729a496d07b9589f19145cbb55f.webp" width={1707} height={2560} alt="an icon of people together at Connections Mental Health" className="attachment-full size-full wp-image-48 entered error" />
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-59305d3">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-78e6219 elementor-hidden-desktop elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img src="/images/656ea55dd5aab95d372affb248b693b2.webp" alt="an image of people who got help at Connections Mental Health" className="attachment-thumbnail size-thumbnail wp-image-47" />
                </div>
              </div>
              {__present("5e86daf") ? (
<div className="elementor-element elementor-element-5e86daf elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("modalities___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-02cda44 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-5dd9fa0 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bdaf9dc">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-d2a9d66 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            {"Our science-backed programs treat a range of "}
                            <Link href="/mental-health-disorders/">mental health conditions</Link>
                            {" including:"}
                          </p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-3b92eea elementor-mobile-align-start elementor-widget-mobile__width-auto elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
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
                                <span className="elementor-icon-list-text">Anxiety Disorders</span>
                              </Link>
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
                                <span className="elementor-icon-list-text">Eating Disorders</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href="/mental-health-disorders/">
                                <span className="elementor-icon-list-icon">
                                  <svg width="1200pt" xmlns="http://www.w3.org/2000/svg" height="1200pt" viewBox="0 0 1200 1200">
                                    <path d="m1108 340.92c-61.637-121-164.43-216.02-289.88-267.99-125.45-51.969-265.32-57.465-394.46-15.5s-239.07 128.64-310.01 244.42c-70.938 115.79-98.23 253.08-76.969 387.2s89.684 256.24 192.95 344.4c103.27 88.168 234.61 136.59 370.4 136.55h570v-570c0.09375-90.051-21.168-178.84-62.039-259.08z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">Suicidal Ideation</span>
                              </Link>
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
              {__present("5239957") ? (
<div className="elementor-element elementor-element-5239957 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("modalities___content")} />
              </div>
) : null}
              <div className="elementor-element elementor-element-bab471a elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="tel:657-298-1982" className="elementor-button elementor-button-link elementor-size-sm">
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-473d812 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ad6eed0">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("33d8edb") ? (
<div className="elementor-element elementor-element-33d8edb elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("what-is-treatment-like___heading") }} />
                </div>
              </div>
) : null}
              {__present("a642b27") ? (
<div className="elementor-element elementor-element-a642b27 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("what-is-treatment-like___content")} />
              </div>
) : null}
              <div className="elementor-element elementor-element-6f2883f elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-hidden-mobile elementor-widget elementor-widget-button" data-widget_type="button.default">
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
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8a27e48">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-2648bb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b515ce3">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-31d7614 elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
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
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7e8f9df">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-975005b elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
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
              <div className="elementor-element elementor-element-0ebda1c elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-widget_type="button.default">
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-f3bf109 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c7900da">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-b80e2d1 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Disorders We Treat</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-295a04a elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-1acf951 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">We treat a wide range of mental health conditions with compassion-based techniques and an expert clinical staff. Conditions we treat include:</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-36c086a elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-6f01a64">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-8f9cd9a elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/mental-health-disorders/depression/" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {"Major Depressive"}
                          <br />
                          {" Disorder"}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-a6cb6e8">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-066f125 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/mental-health-disorders/anxiety-disorders/" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {"Anxiety "}
                          <br />
                          {"Disorders"}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-9799fe6">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-5e00c39 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/mental-health-disorders/ptsd/" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">PTSD</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-fd7f7e6">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-b699de2 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/mental-health-disorders/mood-disorders/" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {"Mood"}
                          <br />
                          {" Disorders"}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-74a30c7" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-d61fbc2 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="/mental-health-disorders/" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">&amp; More</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-bdc38d2 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-375598f">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("4cf43f8") ? (
<div className="elementor-element elementor-element-4cf43f8 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("geo-stats___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-3641909 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              {__present("c6cb157") ? (
<div className="elementor-element elementor-element-c6cb157 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("geo-stats___content")} />
              </div>
) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ebc1064 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e38de0">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("844055e") ? (
<div className="elementor-element elementor-element-844055e elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("geo-about-and-attractions___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-c51655b elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              {__present("9e5d7fb") ? (
<div className="elementor-element elementor-element-9e5d7fb elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("geo-about-and-attractions___content")} />
              </div>
) : null}
            </div>
          </div>
        </div>
      </section>
      {/* Live's schema HTML widget (3ff4f1d) sits here; its script references globals the site never
          defines, so it throws and outputs nothing. Only the empty container is kept, for its spacing. */}
      <div className="elementor-element elementor-element-c9182d2 e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner"></div>
      </div>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-4ecc35e elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-48dcf44">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("24b1d24") ? (
<div className="elementor-element elementor-element-24b1d24 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("faqs___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-e5b6451 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              {__present("0614418") ? (
<div className="elementor-element elementor-element-0614418 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container" dangerouslySetInnerHTML={html("faqs___content")} />
              </div>
) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-3332bfe elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ac741d1">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-b4cf625 elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img src="/images/52b974ece3c12eb1c823d80fbeb1f1d9.webp" alt="an image of people who got help at Connections Mental Health" className="attachment-thumbnail size-thumbnail wp-image-46" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="elementor-element elementor-element-3ae895c e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-c211fdf elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              Related Pages
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-6a49119 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
          <div className="elementor-widget-container">
            <div className="elementor-shortcode">
              <RelatedPages path={props.__path} />
            </div>
          </div>
        </div>
      </div>
    </div>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-adc18a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-498eade">
            <div className="elementor-widget-wrap elementor-element-populated">
              {__present("bbf730b") ? (
<div className="elementor-element elementor-element-bbf730b elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default" dangerouslySetInnerHTML={{ __html: text("cta---conculsion___heading") }} />
                </div>
              </div>
) : null}
              <div className="elementor-element elementor-element-4f6efd7 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">Find safe, effective treatment for overcoming your battle with mental health.</div>
              </div>
              <div className="elementor-element elementor-element-cf9ea55 elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link href="tel:657-530-6117" className="elementor-button elementor-button-link elementor-size-sm">
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
  );
}
