import "@/app/shared/pool-a8ca03f5.css";
// Header/footer chrome and utility classes ship in the route stylesheets; this is the
// one that styled this URL when [slug] served it.
import "../[slug]/page.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchPageData } from "@/lib/wordpress";

// FAQ page, rebuilt from the WordPress page (elementor-1523) so the shared stylesheet
// styles it. The accordion is Essential Addons' advanced accordion; WidgetInteractions
// handles opening/closing it.
const PATH = "/mental-health/faq";
const PHONE = "844-759-0999";

const FAQS: Array<{ id: string; question: string; answer: string }> = [
  {
    id: "is-mental-health-treatment-at-connections-covered-by-insurance",
    question: "Is mental health treatment at Connections covered by insurance?",
    answer: `Yes, your treatment for mental health can be covered by an insurance provider. We work with most PPC insurance through employers. Call our helpful team now at <a href="tel:${PHONE}">${PHONE}</a> to find out what your coverage will be.`,
  },
  {
    id: "does-connections-provide-medication-management",
    question: "Does Connections provide medication management?",
    answer:
      "Yes, we provide professional medication management for those who need it, to ensure that psychiatric medications are being taken as prescribed and are effective.",
  },
  {
    id: "what-does-connections-treat",
    question: "What does Connections treat?",
    answer:
      'We treat a variety of mental health conditions including depression, anxiety disorders, mood disorders, eating disorders, suicidal ideation, and more. <a href="/mental-health-treatment/">Visit our treatments page</a> to learn more.',
  },
  {
    id: "is-there-247-supervision-at-connections",
    question: "Is there 24/7 supervision at Connections?",
    answer:
      "Yes, at Connections we prioritize the safety and well-being of clients in our care, with at least 2 staff members present at all times.",
  },
  {
    id: "what-types-of-therapy-and-treatments-does-connections-use",
    question: "What types of therapy and treatments does Connections use?",
    answer:
      "We utilize science-backed, effective treatments including CBT, DBT, EMDR, motivational interviewing, and medication management. We also take into consideration each of our client’s unique needs and provide one-on-one customized care, tailored to each person.",
  },
];

// Insurance logos. Some only show on desktop/tablet and have a mobile-sized twin.
const LOGOS: Array<{ id: string; src: string; width: number; height: number; visibility?: string; href?: string }> = [
  { id: "03a5cc0", src: "/images/91acaca2a14f17f2c55fae4bfda07e71.webp", width: 964, height: 462 },
  { id: "38d2b99", src: "/images/3cc158dd0c04b34c3364181ec70b986b.webp", width: 965, height: 462 },
  { id: "4ceccbc", src: "/images/0170ef7de7a33f37310543093b8731ae.webp", width: 964, height: 462 },
  { id: "f90d522", src: "/images/a3cb7951c3efbb6a058a8c1c5ec483d1.webp", width: 965, height: 462 },
  { id: "090379b", src: "/images/9ba20730834da2b57e24a5a28b7167a9.webp", width: 964, height: 462 },
  { id: "cd0f767", src: "/images/5c1a988eb3d165645e44248fe29405cc.webp", width: 580, height: 319, visibility: "elementor-hidden-desktop elementor-hidden-tablet" },
  { id: "e489f83", src: "/images/078b1271f83254581eefedd2f0f86a84.webp", width: 965, height: 462, visibility: "elementor-hidden-mobile" },
  { id: "a852b8a", src: "/images/f3958e2d5c85f00b267155f8aa234875.webp", width: 580, height: 319, visibility: "elementor-hidden-desktop elementor-hidden-tablet" },
  { id: "2a42930", src: "/images/0dda9b3a72a51a9cd8d9502e09f6cc98.webp", width: 964, height: 462, visibility: "elementor-hidden-mobile" },
  { id: "659c887", src: "/images/55e44f1680901f91a81fb89018b3758e.webp", width: 242, height: 116, visibility: "elementor-hidden-mobile", href: "/check-your-insurance/" },
  { id: "48b10da", src: "/images/6d4112acc4dce5f4421eef76ecc43231.webp", width: 580, height: 319, visibility: "elementor-hidden-desktop elementor-hidden-tablet", href: "/check-your-insurance/" },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPageData({ path: PATH, slug: "faq" });
  return {
    title: data?.seo.title || "Frequently Asked Questions | Connections Mental Health",
    description: data?.seo.description || undefined,
    alternates: { canonical: data?.seo.canonical || `https://connectionsoc.com${PATH}/` },
  };
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16406 10H15.8307" stroke="#1A5A7C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M10 4.16602V15.8327" stroke="#1A5A7C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16406 10H15.8307" stroke="#1A5A7C" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}

function Button({ id, href, text, extra = "" }: { id: string; href: string; text: string; extra?: string }) {
  return (
    <div className={`elementor-element elementor-element-${id} elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit ${extra} elementor-widget elementor-widget-button`} data-widget_type="button.default">
      <div className="elementor-widget-container">
        <div className="elementor-button-wrapper">
          {href.startsWith("/") ? (
            <Link className="elementor-button elementor-button-link elementor-size-sm" href={href}>
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">{text}</span>
              </span>
            </Link>
          ) : (
            <a className="elementor-button elementor-button-link elementor-size-sm" href={href}>
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">{text}</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.body.className=document.body.className.replace(/(?:^|\\s)(?:page-id|postid|elementor-page)-\\d+/g,\"\")+\" page-id-1523 elementor-page-1523\";" }} />
      <div data-elementor-type="wp-page" data-elementor-id="1523" className="elementor elementor-1523">
        <div className="elementor-element elementor-element-3801f91 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b8b9849 elementor-widget-mobile__width-auto elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="/images/735d7f4a434910a2b14b0530fca8d6c2.webp" alt="" width={365} height={537} className="attachment-full size-full" />
              </div>
            </div>
            <div className="elementor-element elementor-element-05c7ec6 e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-dfc6860 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">
                      You have Questions,
                      <br />
                      We have Answers.
                    </h1>
                  </div>
                </div>
                <div className="elementor-element elementor-element-30cc83c elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Frequently Asked Questions for Rehab</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-be08c9d elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image src="/images/7bf0b19e7905ce1d68945364479ddf7f.webp" alt="" width={364} height={537} className="attachment-full size-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-9313519 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-ea26d60 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-9cc4411 elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image src="/images/622606d55f188be76e96f65ba15baa03.webp" alt="" width={510} height={673} className="attachment-full size-full" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e2bfea5 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-5c6bfaf elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-15ad902 elementor-widget__width-initial elementor-widget elementor-widget-eael-adv-accordion" data-widget_type="eael-adv-accordion.default">
                <div className="elementor-widget-container">
                  <div className="eael-adv-accordion" id="eael-adv-accordion-15ad902" data-accordion-id="15ad902" data-accordion-type="accordion">
                    {FAQS.map((faq, i) => {
                      const first = i === 0;
                      return (
                        <div key={faq.id} className="eael-accordion-list">
                          <div
                            id={faq.id}
                            className={`elementor-tab-title eael-accordion-header${first ? " active-default" : ""}`}
                            tabIndex={0}
                            role="button"
                            aria-expanded={first}
                            aria-controls={`elementor-tab-content-${i + 1}`}
                          >
                            <span className="eael-accordion-tab-title">{faq.question}</span>
                            <span className="fa-accordion-icon fa-accordion-icon-svg eaa-svg eael-advanced-accordion-icon-closed">
                              <PlusIcon />
                            </span>
                            <span className="fa-accordion-icon fa-accordion-icon-svg eaa-svg eael-advanced-accordion-icon-opened">
                              <MinusIcon />
                            </span>
                          </div>
                          <div
                            id={`elementor-tab-content-${i + 1}`}
                            className={`eael-accordion-content clearfix${first ? " active-default" : ""}`}
                            aria-labelledby={faq.id}
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-4033896 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-80b7223 elementor-widget__width-initial elementor-widget-tablet__width-auto elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">We Accept Most Major Insurances</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-f4c9189 elementor-hidden-mobile elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">View our wide selection of accepted providers. Don’t see yours? Call our admissions team for help.</div>
            </div>
            <div className="elementor-element elementor-element-f4fc450 e-con-full e-grid e-con e-child">
              {LOGOS.map((logo) => {
                const img = <Image src={logo.src} alt="" width={logo.width} height={logo.height} className="attachment-full size-full" />;
                return (
                  <div key={logo.id} className={`elementor-element elementor-element-${logo.id} elementor-widget__width-inherit ${logo.visibility ?? ""} elementor-widget elementor-widget-image`} data-widget_type="image.default">
                    <div className="elementor-widget-container">{logo.href ? <Link href={logo.href}>{img}</Link> : img}</div>
                  </div>
                );
              })}
            </div>
            <div className="elementor-element elementor-element-0e31146 e-con-full e-flex e-con e-child">
              <Button id="5198673" href={`tel:${PHONE}`} text={PHONE} extra="elementor-hidden-mobile" />
              <Button id="7893da9" href={`tel:${PHONE}`} text="Call Now" extra="elementor-hidden-desktop elementor-hidden-tablet" />
              <Button id="3fc281e" href="/check-your-insurance/" text="Verify Insurance" />
            </div>
          </div>
        </div>

        <section className="elementor-section elementor-top-section elementor-element elementor-element-d8c46e1 elementor-section-boxed elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2594c53">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-aad090a elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">You’re Not Alone</h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cf8bc48 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">Get treatment from a team of expert staff who is passionate about helping you experience peace.</div>
                </div>
                <div className="elementor-element elementor-element-b693e1a elementor-align-left elementor-mobile-align-center elementor-tablet-align-center elementor-widget elementor-widget-button" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-sm" href={`tel:${PHONE}`}>
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
    </>
  );
}
