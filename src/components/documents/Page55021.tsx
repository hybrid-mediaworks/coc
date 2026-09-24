import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RelatedPages from '@/components/RelatedPages';
import { formatLongDate } from '@/lib/date';


export default function Page55021(props: Record<string, string>) {
  const __presentIds = (props.__present ?? "").split(",").filter(Boolean);
  const __present = (id: string) => __presentIds.length === 0 || __presentIds.includes(id);
  const blog_content = props["blog-content"] ?? "<p data-pm-slice=\"1 1 []\"><span data-color=\"transparent\">There are some key distinctions between being treated at a residential inpatient facility and an inpatient hospital. The choice between these treatment methods can impact recovery outcomes, treatment duration, and overall therapeutic success. Each approach offers unique advantages tailored to specific clinical needs and circumstances.</span></p>\r\n<span data-color=\"transparent\">This page examines the fundamental differences between residential inpatient facilities and inpatient hospitals for mental health conditions to help you make more informed decisions about the most appropriate level of care [1].</span>\r\n\r\n[acf field=cta1]\r\n<h2 data-pm-slice=\"1 1 []\"><span data-color=\"transparent\">What is Residential Inpatient Treatment?</span></h2>\r\n<strong><span data-color=\"transparent\">Residential inpatient treatment provides comprehensive mental healthcare within a structured, homelike environment</span></strong><span data-color=\"transparent\">, where individuals stay at a treatment facility and receive intensive therapeutic services. This form of therapy is ideal for those who require intensive support without acute medical supervision.</span>\r\n\r\n<span data-color=\"transparent\">Unlike traditional medical settings at an inpatient mental hospital, residential inpatient programs focus on creating normalcy within the treatment environment. Participants engage in daily activities that mirror real-world experiences while receiving specialized mental health services [2]. This approach allows individuals to practice coping strategies [3] and life skills in a supportive yet realistic setting.</span>\r\n<h4><span data-color=\"transparent\">Characteristics of residential inpatient treatment</span></h4>\r\n<span data-color=\"transparent\">Residential inpatient treatment typically ranges from </span><strong><span data-color=\"transparent\">30 days to several months,</span></strong><span data-color=\"transparent\"> depending on individual progress and treatment goals. This extended timeframe allows for rigorous assessment, skill development, and gradual transition planning. </span>\r\n\r\n<span data-color=\"transparent\">Environmental design </span><strong><span data-color=\"transparent\">prioritizes comfort and therapeutic engagement over clinical sterility</span></strong><span data-color=\"transparent\">. Common areas resemble living rooms rather than hospital waiting areas, and private or shared bedrooms provide personal space for rest and reflection. Meal preparation, recreational activities, and household responsibilities are integrated into daily routines to maintain connection with everyday activities.</span>\r\n\r\n<span data-color=\"transparent\">Treatment intensity varies but generally includes individual therapy sessions multiple times per week, participation in group therapy, family therapy components, and specialized interventions tailored to specific conditions. Educational components often address topics such as medication management, relapse prevention, and community resource utilization.</span>\r\n\r\n<span data-color=\"transparent\">Community integration is a cornerstone of residential inpatient programming. Participants live alongside others facing similar challenges, creating opportunities for peer support, shared learning experiences, and social skill development. This communal aspect can reduce isolation and stigma while building lasting support networks.</span>\r\n<h2><span data-color=\"transparent\">What Is Inpatient Hospital Treatment?</span></h2>\r\n<strong><span data-color=\"transparent\">Inpatient hospital treatment occurs within hospital or medical facility settings</span></strong><span data-color=\"transparent\">, providing the highest levels of mental health intervention available. This form of mental health treatment offers acute psychiatric care for individuals experiencing severe mental health crises that require immediate stabilization and intensive medical supervision. </span>\r\n\r\n<span data-color=\"transparent\">This treatment modality operates under the principles of the medical model, with 24-hour monitoring and care provided by psychiatrists, nurses, and other mental health professionals. Hospital-based inpatient treatment addresses severe symptoms that pose immediate risks to patient safety or the safety of others, including suicidal ideation, psychotic episodes, severe depression, or acute complications triggered by withdrawal from addictive substances.</span>\r\n\r\n<span data-color=\"transparent\">Inpatient facilities</span><strong><span data-color=\"transparent\"> prioritize safety and rapid symptom stabilization over long-term therapeutic engagement.</span></strong><span data-color=\"transparent\"> While therapy sessions occur daily, the primary focus is on crisis intervention [4] and medication management to achieve clinical stability.</span>\r\n<h4><span data-color=\"transparent\">Characteristics of inpatient treatment</span></h4>\r\n<h3>Inpatient Care: Focused on Acute Intervention and Stabilization</h3>\r\nInpatient care is designed for individuals requiring intensive, short-term treatment to manage acute mental health crises. The goal is to stabilize the patient quickly and prepare them for a transition to less restrictive care. This care typically lasts between 3 and 10 days, depending on the severity of symptoms, treatment response, and availability of step-down options.\r\n\r\n<strong>Key Aspects of Inpatient Care:</strong>\r\n<ul>\r\n \t<li><strong>Duration of Stay: </strong>Typically lasts 3 to 10 days, based on symptom severity and treatment response. Focused on achieving stabilization before transitioning to less intensive care.</li>\r\n \t<li><strong>Medical Supervision: </strong>Round-the-clock monitoring by registered nurses and regular assessments by psychiatrists to adjust treatment plans. Immediate access to emergency medical interventions if needed.</li>\r\n \t<li><strong>Treatment Approach: </strong>Rapid assessment and medication adjustments. Crisis de-escalation techniques to manage acute psychiatric episodes. Individual therapy sessions are crisis-focused and brief. Group therapy emphasizes immediate coping strategies and psychoeducation.</li>\r\n \t<li><strong>Structured Environment: </strong>High levels of security and supervision to ensure safety. Restricted patient movement and limited personal belongings. Strict daily schedules designed to enhance therapeutic benefits while maintaining safety.</li>\r\n</ul>\r\nThis structured environment helps manage patients effectively during periods of crisis while providing the necessary support for stabilization and recovery.\r\n<h2><span data-color=\"transparent\">Hospital vs. Residential Inpatient Care: Key Differences</span></h2>\r\n<span data-color=\"transparent\">The core differences between hospital and residential inpatient treatment lie in the level of supervision required and the treatment goals being pursued. Becoming aware of the differences between residential and inpatient hospital treatment helps individuals and families choose the right level of care.</span>\r\n\r\n<span data-color=\"transparent\">Residential inpatient care addresses acute psychiatric emergencies that warrant immediate intervention, while residential treatment serves those who need intensive support but are medically stable. This distinction influences all aspects of treatment planning and implementation.</span>\r\n\r\n<span data-color=\"transparent\">The characteristics of these approaches vary dramatically. Hospital-based inpatient facilities operate as medical environments with hospital-style accommodations, medical equipment, and clinical staff ratios designed for acute care. Residential inpatient settings offer more comfortable accommodations and staff trained in long-term therapeutic engagement.</span>\r\n\r\n<span data-color=\"transparent\">Differences in duration of residential treatment vs. hospital inpatient care reflect the different goals of each modality.  Residential treatment involves longer stays focused on skill building and gradual reintegration, while inpatient care aims for swift stabilization and transition planning.</span>\r\n\r\n<span data-color=\"transparent\">Therapeutic approach differs in intensity and focus. Hospital inpatient treatment concentrates on symptom management and crisis resolution, while residential programming focuses on life skill development, trauma processing, and preparation for community reintegration.</span>\r\n<h2><span style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px;\">[acf field=cta2]</span></h2>\r\n<h2 data-pm-slice=\"1 1 []\"><span data-color=\"transparent\">Benefits of Residential Inpatient Treatment</span></h2>\r\n<span data-color=\"transparent\">Treatment at a residential inpatient facility offers many advantages for individuals who need intensive support without requiring acute medical supervision. Benefits include: </span>\r\n<ol>\r\n \t<li><strong><span data-color=\"transparent\">Extended timeline</span></strong><span data-color=\"transparent\"> – Residential inpatient treatment lasts 30 days or more, enabling comprehensive therapeutic engagement that addresses underlying issues that contribute to mental health challenges rather than simply managing acute symptoms.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Peer support</span></strong><span data-color=\"transparent\"> ­– Residents often form lasting connections that continue supporting recovery long after the program ends. This social aspect can be especially beneficial for those who have experienced isolation due to mental health challenges.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Skill development opportunities</span></strong><span data-color=\"transparent\"> – Participants practice daily living skills, financial management, meal preparation, and social interaction in realistic environments. These practical experiences build the confidence and competence central to successful community reintegration.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Gradual transition to independent living</span></strong><span data-color=\"transparent\"> – Rather than moving directly from intensive care to independent living, residential inpatient programs can facilitate step-down approaches, helping people build independence gradually while maintaining therapeutic support.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Family involvement</span></strong><span data-color=\"transparent\"> – When comparing residential inpatient vs. hospital inpatient mental health treatment, residential inpatient programs offer more extensive family therapy sessions, helping heal damaged relationships and build stronger support systems for ongoing recovery.</span></li>\r\n</ol>\r\n<h2><span data-color=\"transparent\">Benefits of Residential Inpatient Treatment</span></h2>\r\n<span data-color=\"transparent\">Residential inpatient care provides essential services for individuals confronting acute mental health crises that cannot be safely managed in less intensive settings. Benefits of residential inpatient care include: </span>\r\n<ol>\r\n \t<li><strong><span data-color=\"transparent\">Rapid stabilization and crisis management</span></strong><span data-color=\"transparent\"> – Individuals can be promptly assessed, and severe symptoms treated on the spot at an inpatient facility. Medication adjustments can be closely monitored, side effects managed immediately, and treatment plans tweaked based on patient response. This intensive approach often shortens the duration of acute episodes.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Safety measures</span></strong><span data-color=\"transparent\"> – Residential inpatient facilities provide secure environments for individuals who may pose risks to themselves or others. Professional staff trained in crisis intervention, de-escalation techniques, and emergency procedures ensure appropriate responses to dangerous situations.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">Assessment opportunities</span></strong><span data-color=\"transparent\"> – Multiple specialists can quickly evaluate complex cases. This multidisciplinary approach often reveals previously undiagnosed conditions or identifies treatment-resistant factors that require specialized intervention.</span></li>\r\n \t<li><strong><span data-color=\"transparent\">24-hour medical supervision</span></strong><span data-color=\"transparent\"> – Those experiencing mental health crises who engage in residential inpatient care benefit from continuous medical supervision throughout treatment, even during long-term residential inpatient mental health treatment.</span></li>\r\n</ol>\r\n<h2><span data-color=\"transparent\">Residential Inpatient Facility Vs. Inpatient Hospital | FAQs</span></h2>\r\n<h3><span data-color=\"transparent\">What is the difference between hospital-based inpatient and residential inpatient facilities?</span></h3>\r\n<span data-color=\"transparent\">When comparing residential inpatient treatment vs. hospital inpatient facilities,</span><strong><span data-color=\"transparent\"> inpatient mental health treatment occurs in medical facilities with 24-hour medical supervision for acute psychiatric crises. </span></strong><span data-color=\"transparent\">Residential inpatient treatment, by contrast, provides intensive therapy at a treatment center for individuals who are medically stable but need comprehensive mental health support.</span>\r\n<h3><span data-color=\"transparent\">Is a residential inpatient facility considered an inpatient facility?</span></h3>\r\n<span data-color=\"transparent\">No, residential treatment centers are different from inpatient facilities. </span><strong><span data-color=\"transparent\">Residential inpatient programs offer intensive services in standalone, live-in facilities, whereas hospital inpatient care is provided in medical facilities, such as hospitals, under constant medical supervision.</span></strong><span data-color=\"transparent\"> Both forms of treatment involve remaining at the facility for a specified period.</span>\r\n<h3><span data-color=\"transparent\"> What is a residential inpatient program best for?</span></h3>\r\n<span data-color=\"transparent\">Residential mental health programs are often indicated for individuals who are stable and at no risk of harming themselves or others but require immersive treatment to address severe mental health issues without acute crises.</span>\r\n<h3><span data-color=\"transparent\">What is one reason for hospital inpatient treatment for individuals with mental illness?</span></h3>\r\n<span data-color=\"transparent\">Hospital inpatient treatment is necessary when an individual poses an immediate risk to themselves or others due to severe psychiatric symptoms that cannot be safely managed in less intensive settings.</span>\r\n<h3><span data-color=\"transparent\">How long is inpatient treatment for mental health?</span></h3>\r\n<span data-color=\"transparent\">Residential and hospital inpatient mental health stays range from 3 to 10 days, depending on symptom severity and treatment response, to achieve stability for transition to less intensive levels of care.</span>\r\n\r\n[acf field=cta3]\r\n<h3 data-pm-slice=\"1 1 []\"><span data-color=\"transparent\">When should someone consider residential treatment vs. hospital treatment?</span></h3>\r\n<span data-color=\"transparent\">The choice between residential vs. hospital inpatient mental health treatment depends on symptom severity, safety risks, and long-term recovery goals, with care addressing acute crises and residential treatment focusing on comprehensive rehabilitation over a more extended period. </span>\r\n<h2><span data-color=\"transparent\">Get Compassionate Residential Inpatient Mental Health Treatment at Connections</span></h2>\r\n<span data-color=\"transparent\">If you feel that residential inpatient mental health treatment would help you get back on track, reach out to Connections in Southern California.</span>\r\n\r\n<span data-color=\"transparent\">We treat all mental health issues with immersive residential inpatient programs at our</span><strong><span data-color=\"transparent\"> luxury coastal facility. </span></strong><span data-color=\"transparent\">Small group sizes of </span><strong><span data-color=\"transparent\">no more than 6 people </span></strong><span data-color=\"transparent\">ensure you get the ideal blend of personalized attention and support from peers tackling similar issues.</span>\r\n\r\n<span data-color=\"transparent\">All treatment plans at Connections are tailored to individual needs and symptom severity, combining evidence-based interventions like medication management, behavioral therapy, and counseling with holistic therapies to promote whole-body healing.</span>\r\n\r\n<strong><span data-color=\"transparent\">For effective mental health treatment covered by health insurance, call admissions at </span></strong><a href=\"tel:844-759-0999\"><strong><span data-color=\"transparent\"><u>844-759-0999</u></span></strong></a><strong><span data-color=\"transparent\">.</span></strong>\r\n\r\n<span data-color=\"transparent\"> </span>\r\n\r\n<span data-color=\"transparent\">Sources</span>\r\n\r\n<span data-color=\"transparent\">[1] </span>https://www.asam.org/asam-criteria/about-the-asam-criteria\r\n\r\n[2] https://pmc.ncbi.nlm.nih.gov/articles/PMC4395546/\r\n\r\n[3] https://positivepsychology.com/coping/\r\n\r\n[4] https://www.ncbi.nlm.nih.gov/books/NBK559081/\r\n\r\n[5] https://www.sciencedirect.com/science/article/pii/S2590250423000066";
  const h1 = props.h1 ?? "Residential vs. Inpatient Mental Health Treatment";
  const address_county = props.address_county ?? "Orange County";
  const year = props.year ?? "2025";
  const created_date = formatLongDate(props.__createdAt);
  const near_in = props.near_in ?? "near";
  return (
    <>
    <div className="wp-singular page-template-default page page-id-9665 page-child parent-pageid-5662 wp-embed-responsive wp-theme-hello-elementor facilit-gallery--empty hello-elementor-default elementor-default elementor-kit-6 elementor-page-55021">
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
  <a className="skip-link screen-reader-text" href="#content" style={{"fontSize":"16px"}}>
    Skip to content
  </a>
  <div className="elementor elementor-55021 elementor-location-single post-9665 page type-page status-publish hentry category-pgtemplate-acf-blog page_template_type-blog page_template_type-cro1-blog">
    <div className="elementor-element elementor-element-d13ae39 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-56f16f6 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h1 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              {h1}
            </h1>
          </div>
        </div>
        <div className="elementor-element elementor-element-6cecda4 elementor-widget elementor-widget-image" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <Image src="/images/e65b31aae2d363a3d08846acca4670ca.webp" alt="" width={1250} height={646} className="attachment-full size-full wp-image-57114 entered error" />
          </div>
        </div>
        <div className="elementor-element elementor-element-0522aa8 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-element elementor-element-4de90c1 elementor-author-box--align-left elementor-author-box--image-valign-middle author-box-sty elementor-widget-tablet__width-initial elementor-widget elementor-widget-author-box" data-widget_type="author-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-author-box">
                <div className="elementor-author-box__avatar">
                  <Image src="/images/f85771f302c1dd037770156cc1d2d363.webp" alt="Picture of Written By:" width={64} height={64} className="entered error" />
                </div>
                <div className="elementor-author-box__text">
                  <div>
                    <h6 className="elementor-author-box__name" style={{"fontSize":"16px"}}>
                      Written By:
                    </h6>
                  </div>
                  <div className="elementor-author-box__bio">
                    <p style={{"fontSize":"16px"}}>
                      Matthew D'Ursov
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-7594de5 author-spacers elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-widget_type="spacer.default">
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1fbc5bb elementor-author-box--align-left elementor-author-box--image-valign-middle elementor-widget-mobile__width-initial author-box-sty elementor-widget-tablet__width-initial elementor-widget elementor-widget-author-box" data-widget_type="author-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-author-box">
                <div className="elementor-author-box__avatar">
                  <Image src="/images/dc984c7e7ba3124d7a6306bb29d6cc72.webp" alt="Picture of Content Manager:" width={64} height={64} className="entered error" />
                </div>
                <div className="elementor-author-box__text">
                  <div>
                    <h6 className="elementor-author-box__name" style={{"fontSize":"16px"}}>
                      Content Manager:
                    </h6>
                  </div>
                  <div className="elementor-author-box__bio">
                    <p style={{"fontSize":"16px"}}>
                      Amy Leifeste
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-e28a476 author-spacers elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-widget_type="spacer.default">
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-c53b21f elementor-author-box--align-left elementor-author-box--image-valign-middle author-box-sty elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-author-box" data-widget_type="author-box.default">
            <div className="elementor-widget-container">
              <div className="elementor-author-box">
                <div className="elementor-author-box__avatar">
                  <Image src="/images/e1e03ab41ed66f6f59f84d4004a0902b.webp" alt="Picture of Editor:" width={64} height={64} className="entered error" />
                </div>
                <div className="elementor-author-box__text">
                  <div>
                    <h6 className="elementor-author-box__name" style={{"fontSize":"16px"}}>
                      Editor:
                    </h6>
                  </div>
                  <div className="elementor-author-box__bio">
                    <p style={{"fontSize":"16px"}}>
                      Karena Mathis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-347daa6 author-spacers elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-widget_type="spacer.default">
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-7239ead e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-4cdce10 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default" style={{"fontSize":"16px"}}>
                  Posted On
                </h6>
              </div>
            </div>
            <div className="elementor-element elementor-element-7932493 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                {created_date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-4f01aad e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3a4969c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"39px"}}>
              Treatment Guidance Website Tour
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-2592691 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            After reading this current page, click on the next page we recommend here, or at the bottom of this page.
          </div>
        </div>
        <div className="elementor-element elementor-element-67d0306 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
          <div className="elementor-widget-container">
            <div className="elementor-shortcode">
              <div className="jg-sc-guided-wrap" id="jg-guided-tour">
                <div className="jg-sc-guided jg-guided-multi" id="jg-guided-multi" style={{"display":"none"}}>
                  <div className="jg-guided-col jg-guided-left">
                    <h3 className="jg-guided-heading" style={{"fontSize":"32px"}}>
                      Last Page Visited
                    </h3>
                    <h3 className="jg-guided-heading jg-icon-list" style={{"fontSize":"16px"}}>
                      <Image src="/images/31cfb037858751399a6f0b354f9d2c67.svg" alt="check-icon" width={24} height={24} className="jg-guided-heading-icon" />
                      Last Page Visited:
                    </h3>
                    <div className="jg-guided-visited-list">
                      <ul className="jg-guided-visited-items"></ul>
                    </div>
                  </div>
                  <div className="jg-guided-col jg-guided-center">
                    <div className="jg-guided-img-wrap">
                      <Image src="/images/a0a6c9cd21c84889b34601bb3c2fbc3b.webp" alt="" width={382} height={398} className="jg-guided-img jg-guided-current-img" />
                      <div className="jg-guided-img-label">
                        <h3 className="jg-guided-heading jg-icon-list" style={{"fontSize":"16px"}}>
                          <Image src="/images/31cfb037858751399a6f0b354f9d2c67.svg" alt="check-icon" width={24} height={24} className="jg-guided-heading-icon" />
                          Current Guided Tour Page:
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="jg-guided-col jg-guided-right">
                    <h3 className="jg-guided-heading jg-guided-next-heading" style={{"fontSize":"32px"}}>
                      Next Page in tour
                    </h3>
                    <ul className="jg-guided-next-list">
                      <li className="jg-guided-next-item" style={{"fontSize":"20px"}}>
                        <a href="#" className="jg-guided-next-link jg-guided-next-primary" style={{"fontSize":"20px"}}></a>
                      </li>
                      <li className="jg-guided-complete-item" style={{"display":"none","fontSize":"20px"}}>
                        <span className="jg-guided-next-link jg-guided-complete-msg" style={{"fontSize":"20px"}}>
                          You have completed the guided site tour.
                        </span>
                      </li>
                      <li className="jg-guided-divider" style={{"fontSize":"20px"}}></li>
                      <li style={{"fontSize":"20px"}}>
                        <span style={{"cursor":"pointer","fontSize":"20px"}} className="jg-guided-next-link jg-guided-view-full">
                          <Image src="/images/d9d39b93d1be9517fe04969b782997a6.svg" alt="" width={28} height={28} className="jg-guided-view-full-icon" />
                          View Full Guided Site Tour
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="jg-sc-guided jg-guided-single" id="jg-guided-single">
                  <div className="jg-guided-col jg-guided-left">
                    <h3 className="jg-guided-heading" style={{"fontSize":"32px"}}>
                      Guided Website Tour
                    </h3>
                    <div className="jg-guided-visited-progress">
                      <span className="jg-gv-check" style={{"fontSize":"16px"}}>
                        ✓
                      </span>
                      <span className="jg-gv-label" style={{"fontSize":"16px"}}>
                        Last Pages Visited
                      </span>
                      <div className="jg-gv-bar">
                        <div className="jg-gv-bar-fill" style={{"width":"9%"}}></div>
                      </div>
                    </div>
                    <ul className="jg-guided-visited-items">
                      <li>
                        <Link className="jg-gvi-link" href="/mental-health/residential-vs-inpatient-mental-health-treatment/" title="Go back to Residential Inpatient vs Hospital Inpatient">
                          <span className="jg-gvi-num">
                            11
                          </span>
                          <span className="jg-gvi-label">
                            Residential Inpatient vs Hospital Inpatient
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <hr className="jg-guided-hr" />
                    <p className="jg-guided-count-label" style={{"fontSize":"16px"}}>
                      11 Page Guided Tour
                    </p>
                  </div>
                  <div className="jg-guided-col jg-guided-center">
                    <div className="jg-guided-img-wrap">
                      <Image src="/images/Staff.webp" alt="" width={382} height={398} className="jg-guided-img jg-guided-current-img entered error" />
                      <div className="jg-guided-img-label">
                        <h3 className="jg-guided-heading jg-icon-list" style={{"fontSize":"16px"}}>
                          <Image src="/images/Fram54e.svg" alt="check-icon" width={24} height={24} className="jg-guided-heading-icon entered error" />
                          Current Guided Tour Page:
                        </h3>
                        <strong className="jg-guided-current-label">
                          Residential Inpatient vs Hospital Inpatient
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="jg-guided-col jg-guided-right">
                    <h3 className="jg-guided-heading jg-guided-next-heading" style={{"fontSize":"32px"}}>
                      Next Page In Tour
                    </h3>
                    <ul className="jg-guided-next-list">
                      <li className="jg-guided-next-item" style={{"fontSize":"20px"}}>
                        <Link href="/protect-your-job-while-in-treatment/" className="jg-guided-next-link jg-guided-next-primary" style={{"fontSize":"20px"}}>
                          <span className="jg-gvi-num">
                            1
                          </span>
                          <span>
                            Protect your job while you come to treatment
                          </span>
                        </Link>
                      </li>
                      <li className="jg-guided-complete-item" style={{"display":"none","fontSize":"20px"}}>
                        <span className="jg-guided-next-link jg-guided-complete-msg" style={{"fontSize":"20px"}}>
                          You have completed the guided site tour.
                        </span>
                      </li>
                      <li className="jg-guided-divider" style={{"fontSize":"20px"}}></li>
                      <li style={{"fontSize":"20px"}}>
                        <span style={{"cursor":"pointer","fontSize":"20px"}} className="jg-guided-next-link jg-guided-view-full" href="/protect-your-job-while-in-treatment/">
                          <Image src="/images/Frame45te4t.svg" alt="" width={28} height={28} className="jg-guided-view-full-icon entered error" />
                          View Full Guided Site Tour
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-dc50cae e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner" style={{"position":"relative"}}>
        <div className="elementor-element elementor-element-eb81e19 e-con-full e-flex e-con e-child">
          {__present("5adcc19") ? (
<div className="elementor-element elementor-element-5adcc19 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              <div dangerouslySetInnerHTML={{ __html: blog_content }} />
            </div>
          </div>
) : null}
          <div className="elementor-element elementor-element-977a438 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-e6c7e54 posts-nav-prev-next elementor-widget elementor-widget-post-navigation" data-widget_type="post-navigation.default">
              <div className="elementor-widget-container">
                <div className="elementor-post-navigation" role="navigation" aria-label="Post Navigation">
                  <div className="elementor-post-navigation__prev elementor-post-navigation__link">
                    <Link href="/mental-health/can-i-check-myself-into-a-mental-hospital/" rel="prev" style={{"fontSize":"16px"}}>
                      <span className="post-navigation__arrow-wrapper post-navigation__arrow-prev" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-left" viewBox="0 0 448 512">
                          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                        </svg>
                        <span className="elementor-screen-only" style={{"fontSize":"16px"}}>
                          Prev
                        </span>
                      </span>
                      <span className="elementor-post-navigation__link__prev" style={{"fontSize":"16px"}}>
                        <span className="post-navigation__prev--label" style={{"fontSize":"16px"}}>
                          Previous Post
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="elementor-post-navigation__next elementor-post-navigation__link">
                    <Link href="/mental-health/what-to-expect-during-inpatient-mental-health-stay/" rel="next" style={{"fontSize":"16px"}}>
                      <span className="elementor-post-navigation__link__next" style={{"fontSize":"16px"}}>
                        <span className="post-navigation__next--label" style={{"fontSize":"16px"}}>
                          Next Post
                        </span>
                      </span>
                      <span className="post-navigation__arrow-wrapper post-navigation__arrow-next" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512">
                          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                        <span className="elementor-screen-only" style={{"fontSize":"16px"}}>
                          Next
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-6385bf8 e-con-full e-flex e-con e-child elementor-sticky" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;],&quot;sticky_offset&quot;:90,&quot;sticky_parent&quot;:&quot;yes&quot;,&quot;sticky_effects_offset&quot;:0,&quot;sticky_anchor_link_offset&quot;:0}">
          <div className="elementor-element elementor-element-fe89770 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h3 className="elementor-heading-title elementor-size-default" style={{"fontSize":"20px"}}>
                Related Articles
              </h3>
            </div>
          </div>
          <div className="elementor-element elementor-element-5a7380c elementor-grid-1 elementor-grid-tablet-1 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid" data-settings="{&quot;template_id&quot;:&quot;55029&quot;,&quot;columns&quot;:1,&quot;columns_tablet&quot;:1,&quot;_skin&quot;:&quot;post&quot;,&quot;columns_mobile&quot;:&quot;1&quot;,&quot;edit_handle_selector&quot;:&quot;[data-elementor-type=\\&quot;loop-item\\&quot;]&quot;,&quot;row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;row_gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;row_gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="loop-grid.post">
            <div className="elementor-widget-container">
              <div className="elementor-loop-container elementor-grid" role="list">
                <div className="elementor elementor-55029 e-loop-item e-loop-item-54868 post-54868 page type-page status-publish has-post-thumbnail hentry category-pgtemplate-acf-blog page_template_type-blog page_template_type-cro1-blog">
                  <div className="elementor-element elementor-element-5e81ed2 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-d508956 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"></div>
                      <div className="elementor-element elementor-element-11d0160 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-47e6ec4 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            January 16, 2026
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-8b0c12f elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-widget_type="theme-post-title.default">
                          <div className="elementor-widget-container">
                            <h4 className="elementor-heading-title elementor-size-default" style={{"fontSize":"26px"}}>
                              <Link href="/mental-health/therapy/does-insurance-cover-residential-mental-health-treatment/" style={{"fontSize":"26px"}}>
                                Does Insurance Cover Residential Mental Health Treatment?
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor elementor-55029 e-loop-item e-loop-item-6666 post-6666 page type-page status-publish hentry category-pgtemplate-acf-blog page_template_type-blog page_template_type-cro1-blog">
                  <div className="elementor-element elementor-element-5e81ed2 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-d508956 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"></div>
                      <div className="elementor-element elementor-element-11d0160 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-47e6ec4 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            October 7, {year}
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-8b0c12f elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-widget_type="theme-post-title.default">
                          <div className="elementor-widget-container">
                            <h4 className="elementor-heading-title elementor-size-default" style={{"fontSize":"26px"}}>
                              <Link href="/mental-health/personality-disorders/paranoid-personality-disorder/why-do-i-feel-like-everyone-hates-me/" style={{"fontSize":"26px"}}>
                                Why Do I Feel Like Everyone Hates Me?
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor elementor-55029 e-loop-item e-loop-item-9669 post-9669 page type-page status-publish hentry category-pgtemplate-acf-blog page_template_type-blog page_template_type-cro1-blog">
                  <div className="elementor-element elementor-element-5e81ed2 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                    <div className="e-con-inner">
                      <div className="elementor-element elementor-element-d508956 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"></div>
                      <div className="elementor-element elementor-element-11d0160 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-47e6ec4 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            September 18, {year}
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-8b0c12f elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-widget_type="theme-post-title.default">
                          <div className="elementor-widget-container">
                            <h4 className="elementor-heading-title elementor-size-default" style={{"fontSize":"26px"}}>
                              <Link href="/mental-health/overstimulated-meaning/" style={{"fontSize":"26px"}}>
                                Overstimulated Meaning
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-bbcf6a9 e-con-full e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-element elementor-element-2fa779c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default" style={{"fontSize":"16px"}}>
                  Share This Article
                </h6>
              </div>
            </div>
            <div className="elementor-element elementor-element-6e40266 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item" style={{"fontSize":"16px"}}>
                    <span className="elementor-icon-list-icon" style={{"fontSize":"16px"}}>
                      <svg width={46} height={46} viewBox="0 0 46 46" fill="none">
                        <circle cx="23" cy="23" r="23" fill="#74AFB2"></circle>
                        <path d="M25.5558 24.9166H28.7502L30.028 19.8055H25.5558V17.2499C25.5558 15.9338 25.5558 14.6944 28.1113 14.6944H30.028V10.4011C29.6114 10.3461 28.0385 10.2222 26.3774 10.2222C22.9082 10.2222 20.4447 12.3394 20.4447 16.2277V19.8055H16.6113V24.9166H20.4447V35.7777H25.5558V24.9166Z" fill="white"></path>
                      </svg>
                    </span>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item" style={{"fontSize":"16px"}}>
                    <span className="elementor-icon-list-icon" style={{"fontSize":"16px"}}>
                      <svg width={46} height={46} viewBox="0 0 46 46" fill="none">
                        <circle cx="23" cy="23" r="23" fill="#74AFB2"></circle>
                        <path d="M22.9998 19.1666C21.9831 19.1666 21.0081 19.5705 20.2892 20.2894C19.5703 21.0083 19.1664 21.9833 19.1664 22.9999C19.1664 24.0166 19.5703 24.9916 20.2892 25.7105C21.0081 26.4294 21.9831 26.8333 22.9998 26.8333C24.0164 26.8333 24.9914 26.4294 25.7103 25.7105C26.4292 24.9916 26.8331 24.0166 26.8331 22.9999C26.8331 21.9833 26.4292 21.0083 25.7103 20.2894C24.9914 19.5705 24.0164 19.1666 22.9998 19.1666ZM22.9998 16.6111C24.6942 16.6111 26.3192 17.2842 27.5174 18.4823C28.7155 19.6805 29.3886 21.3055 29.3886 22.9999C29.3886 24.6944 28.7155 26.3194 27.5174 27.5176C26.3192 28.7157 24.6942 29.3888 22.9998 29.3888C21.3053 29.3888 19.6803 28.7157 18.4821 27.5176C17.284 26.3194 16.6109 24.6944 16.6109 22.9999C16.6109 21.3055 17.284 19.6805 18.4821 18.4823C19.6803 17.2842 21.3053 16.6111 22.9998 16.6111ZM31.3053 16.2916C31.3053 16.7152 31.137 17.1215 30.8375 17.421C30.538 17.7206 30.1317 17.8888 29.7081 17.8888C29.2845 17.8888 28.8782 17.7206 28.5787 17.421C28.2791 17.1215 28.1109 16.7152 28.1109 16.2916C28.1109 15.868 28.2791 15.4617 28.5787 15.1622C28.8782 14.8627 29.2845 14.6944 29.7081 14.6944C30.1317 14.6944 30.538 14.8627 30.8375 15.1622C31.137 15.4617 31.3053 15.868 31.3053 16.2916ZM22.9998 12.7777C19.8385 12.7777 19.3223 12.7867 17.8516 12.8518C16.8498 12.8991 16.1777 13.0333 15.5541 13.2761C15.0323 13.4676 14.5606 13.7747 14.1741 14.1743C13.7742 14.5607 13.4667 15.0325 13.2746 15.5543C13.0318 16.1804 12.8976 16.8513 12.8516 17.8518C12.7852 19.2624 12.7763 19.7557 12.7763 22.9999C12.7763 26.1624 12.7852 26.6774 12.8504 28.1481C12.8976 29.1486 13.0318 29.822 13.2733 30.4443C13.4905 31.0001 13.7461 31.4001 14.1703 31.8243C14.6009 32.2536 15.0009 32.5104 15.5503 32.7226C16.1815 32.9666 16.8536 33.1021 17.8503 33.1481C19.261 33.2145 19.7542 33.2222 22.9985 33.2222C26.161 33.2222 26.6759 33.2132 28.1466 33.1481C29.1459 33.1008 29.818 32.9666 30.4428 32.7251C30.9642 32.5326 31.4357 32.2256 31.8228 31.8268C32.2534 31.3975 32.5103 30.9976 32.7224 30.4468C32.9651 29.8182 33.1006 29.1461 33.1466 28.1468C33.213 26.7374 33.2207 26.2429 33.2207 22.9999C33.2207 19.8387 33.2118 19.3225 33.1466 17.8518C33.0993 16.8526 32.9639 16.1779 32.7224 15.5543C32.5298 15.033 32.2228 14.5615 31.8241 14.1743C31.4379 13.7742 30.9661 13.4667 30.4441 13.2748C29.818 13.032 29.1459 12.8978 28.1466 12.8518C26.7373 12.7854 26.244 12.7777 22.9985 12.7777M22.9985 10.2222C26.4702 10.2222 26.9034 10.2349 28.2668 10.2988C29.6263 10.3627 30.554 10.5761 31.3679 10.893C32.2113 11.2176 32.9217 11.6571 33.6321 12.3663C34.2819 13.005 34.7846 13.7777 35.1054 14.6305C35.421 15.4444 35.6357 16.3721 35.6996 17.7329C35.7596 19.0951 35.7763 19.5282 35.7763 22.9999C35.7763 26.4717 35.7635 26.9048 35.6996 28.2669C35.6357 29.6278 35.421 30.5542 35.1054 31.3694C34.7855 32.2226 34.2827 32.9955 33.6321 33.6336C32.9932 34.2831 32.2206 34.7859 31.3679 35.1069C30.554 35.4225 29.6263 35.6372 28.2668 35.7011C26.9034 35.7611 26.4702 35.7777 22.9985 35.7777C19.5268 35.7777 19.0936 35.7649 17.7302 35.7011C16.3706 35.6372 15.4443 35.4225 14.629 35.1069C13.7759 34.7868 13.0031 34.2839 12.3648 33.6336C11.715 32.9949 11.2122 32.2222 10.8915 31.3694C10.5746 30.5554 10.3613 29.6278 10.2974 28.2669C10.236 26.9048 10.2207 26.4717 10.2207 22.9999C10.2207 19.5282 10.2335 19.0951 10.2974 17.7329C10.3613 16.3721 10.5746 15.4457 10.8915 14.6305C11.2113 13.7772 11.7142 13.0043 12.3648 12.3663C13.0033 11.7162 13.776 11.2134 14.629 10.893C15.443 10.5761 16.3694 10.3627 17.7302 10.2988C19.0949 10.2388 19.528 10.2222 22.9998 10.2222" fill="white"></path>
                      </svg>
                    </span>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item" style={{"fontSize":"16px"}}>
                    <span className="elementor-icon-list-icon" style={{"fontSize":"16px"}}>
                      <svg width={46} height={46} viewBox="0 0 46 46" fill="none">
                        <circle cx="23" cy="23" r="23" fill="#74AFB2"></circle>
                        <path d="M16.533 14.0555C16.5326 14.7333 16.2631 15.3831 15.7836 15.8622C15.3041 16.3412 14.6539 16.6101 13.9762 16.6098C13.2984 16.6094 12.6485 16.3399 12.1695 15.8604C11.6905 15.3809 11.4215 14.7307 11.4219 14.0529C11.4222 13.3752 11.6918 12.7253 12.1713 12.2463C12.6508 11.7672 13.3009 11.4983 13.9787 11.4987C14.6565 11.499 15.3064 11.7686 15.7854 12.2481C16.2644 12.7276 16.5333 13.3777 16.533 14.0555ZM16.6097 18.5022H11.4985V34.4999H16.6097V18.5022ZM24.6852 18.5022H19.5997V34.4999H24.6341V26.1049C24.6341 21.4283 30.7291 20.9938 30.7291 26.1049V34.4999H35.7763V24.3672C35.7763 16.4833 26.7552 16.7772 24.6341 20.6488L24.6852 18.5022Z" fill="white"></path>
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-76a1269 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-7e8d716 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
              Related Blogs
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-d414c5a elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            <p style={{"fontSize":"16px"}}>
              Check out our addiction recovery blog to learn more about substance use disorders and how to get effective treatment.
            </p>
          </div>
        </div>
        <div className="elementor-element elementor-element-caa25fe elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
          <div className="elementor-widget-container">
            <div className="elementor-shortcode">
              <RelatedPages path={props.__path} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-4ce8c53 e-flex e-con-boxed e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-318854c e-con-full animated-slow e-flex e-con e-child" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
          <div className="elementor-element elementor-element-4b720e3 elementor-widget elementor-widget-heading animated fadeIn" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"32px"}}>
                Rehabs {near_in} {address_county} FAQs
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-0a37f9d faqs-accordion elementor-widget elementor-widget-n-accordion" data-settings="{&quot;default_state&quot;:&quot;expanded&quot;,&quot;max_items_expended&quot;:&quot;one&quot;,&quot;n_accordion_animation_duration&quot;:{&quot;unit&quot;:&quot;ms&quot;,&quot;size&quot;:400,&quot;sizes&quot;:[]}}" data-widget_type="nested-accordion.default">
            <div className="elementor-widget-container">
              <div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
                <details id="e-n-accordion-item-1070" className="e-n-accordion-item" open>
                  <summary className="e-n-accordion-item-title" tabIndex={0} aria-expanded="true" aria-controls="e-n-accordion-item-1070">
                    <div className="e-n-accordion-item-title-text">
                      What types of mental health programs are available in {address_county}?
                    </div>
                    <span className="e-n-accordion-item-title-icon" style={{"fontSize":"16px"}}>
                      <span className="e-opened" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512">
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="e-closed" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div role="region" aria-labelledby="e-n-accordion-item-1070" className="elementor-element elementor-element-e6e1b36 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-f90733c elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p style={{"fontSize":"16px"}}>
                          Mental health programs {near_in} {address_county} offer a full continuum of care, including inpatient treatment, partial hospitalization (PHP), intensive outpatient (IOP), and standard outpatient (OP) services. Whether you’re looking for structured care or flexible support, mental health treatment programs are designed to meet a range of needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
                <details id="e-n-accordion-item-1071" className="e-n-accordion-item">
                  <summary className="e-n-accordion-item-title" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-1071">
                    <div className="e-n-accordion-item-title-text">
                      How do I know if I need mental health treatment {near_in} {address_county}?
                    </div>
                    <span className="e-n-accordion-item-title-icon" style={{"fontSize":"16px"}}>
                      <span className="e-opened" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512">
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="e-closed" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div role="region" aria-labelledby="e-n-accordion-item-1071" className="elementor-element elementor-element-2ee7e7b e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-eaf6805 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p style={{"fontSize":"16px"}}>
                          If you’re experiencing persistent feelings of anxiety, depression, stress, mood changes, difficulty coping with daily responsibilities, or emotional challenges that are affecting your work, relationships, or overall well-being, it may be time to seek professional support. A mental health assessment can help determine the level of care that’s right for you and connect you with the appropriate treatment options.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
                <details id="e-n-accordion-item-1072" className="e-n-accordion-item">
                  <summary className="e-n-accordion-item-title" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-1072">
                    <div className="e-n-accordion-item-title-text">
                      What mental health conditions are treated at {address_county} mental health centers?
                    </div>
                    <span className="e-n-accordion-item-title-icon" style={{"fontSize":"16px"}}>
                      <span className="e-opened" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512">
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="e-closed" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div role="region" aria-labelledby="e-n-accordion-item-1072" className="elementor-element elementor-element-04c95e4 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-958da71 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p style={{"fontSize":"16px"}}>
                          Mental health treatment centers in {address_county} commonly provide care for conditions such as anxiety disorders, depression, bipolar disorder, PTSD, trauma-related disorders, OCD, mood disorders, and other emotional or behavioral health concerns. Treatment plans are personalized to each individual’s unique needs, goals, and clinical recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
                <details id="e-n-accordion-item-1073" className="e-n-accordion-item">
                  <summary className="e-n-accordion-item-title" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-1073">
                    <div className="e-n-accordion-item-title-text">
                      Will my insurance cover mental health treatment in {address_county}?
                    </div>
                    <span className="e-n-accordion-item-title-icon" style={{"fontSize":"16px"}}>
                      <span className="e-opened" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512">
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="e-closed" style={{"fontSize":"16px"}}>
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div role="region" aria-labelledby="e-n-accordion-item-1073" className="elementor-element elementor-element-448ed66 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-41448ce elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p style={{"fontSize":"16px"}}>
                          Many major insurance providers offer coverage for mental health services, including partial hospitalization (PHP), intensive outpatient (IOP), and outpatient treatment programs. Coverage varies by plan, so verifying your benefits with the treatment center can help you understand your available options and any potential out-of-pocket costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-e04fd7d e-con-full animated-slow e-flex e-con e-child" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;none&quot;}">
          <div className="elementor-element elementor-element-a5acc95 elementor-widget__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Image src="/images/b4f16b1d77bd43661f9f192cb106ea37.webp" alt="" width={657} height={634} className="attachment-full size-full wp-image-54944" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-0b2fdf6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-e0165e3 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default" style={{"fontSize":"39px"}}>
              Continue Your Journey
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-e3c0fc8 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
          <div className="elementor-widget-container">
            <div className="elementor-shortcode">
              <div className="jg-sc-continue" id="jg-continue-grid">
                <Link href="/protect-your-job-while-in-treatment/" className="jg-sc-card jg-sc-recommended" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    1
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Protect your job while you come to treatment
                    </span>
                    <span className="jg-sc-card-meta" style={{"fontSize":"12px"}}>
                      + Recommended next step
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/mental-health/therapy/does-insurance-cover-residential-mental-health-treatment/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    2
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Can Insurance cover rehab treatment?
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/why-traveling-or-staying-close-to-home/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    3
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Why Traveling or Staying Close to home can both be great options.
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/our-facilities/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    4
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Locations & Galleries
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/staff/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    5
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Staff page
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/reviews/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    6
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Reviews
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/what-to-bring-to-rehab/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    7
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      What to bring to treatment
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/treatment-therapies-we-provide/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    8
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Treatment & Therapies we provide
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/rehab-admissions/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    9
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Admissions Process
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/contact/" className="jg-sc-card" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-unvisited" style={{"fontSize":"13px"}}>
                    10
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Contact Us
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
                <Link href="/mental-health/residential-vs-inpatient-mental-health-treatment/" className="jg-sc-card jg-sc-visited" style={{"fontSize":"16px"}}>
                  <span className="jg-sc-bubble jg-sc-visited-bubble" style={{"fontSize":"13px"}}>
                    <Image src="/wp-content/uploads/2026/06/Frame-2147227796.svg" alt="Visited" width={32} height={36} className="jg-sc-bubble-icon" />
                  </span>
                  <span className="jg-sc-card-text" style={{"fontSize":"14px"}}>
                    <span className="jg-sc-card-label" style={{"fontSize":"14px"}}>
                      Residential Inpatient vs Hospital Inpatient
                    </span>
                    <span className="jg-sc-card-meta" style={{"fontSize":"12px"}}>
                      ✓ Visited
                    </span>
                  </span>
                  <span className="jg-sc-next-badge" style={{"display":"none","fontSize":"10px"}}>
                    NEXT
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-0e46853 e-con-full e-flex e-con e-parent e-lazyloaded">
      <div className="elementor-element elementor-element-c7583f5 elementor-widget elementor-widget-template" data-widget_type="template.default">
        <div className="elementor-widget-container">
          <div className="elementor-template">
            <div className="elementor elementor-54613 elementor-location-single">
              <div className="elementor-element elementor-element-d80816a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-357b19f e-con-full blog-last-sec e-flex e-con e-child">
                    <div className="elementor-element elementor-element-e4e2d01 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default" style={{"fontSize":"35px"}}>
                          You’re Not Alone.
                        </h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d9e5ca1 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial cta-para elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        <p style={{"fontSize":"17px"}}>
                          Get treatment from a team of expert staff who is passionate about helping you experience peace.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7862528 elementor-align-left elementor-mobile-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link className="elementor-button elementor-button-link elementor-size-sm" href="tel:844-759-0999" style={{"fontSize":"16px"}}>
                            <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                              <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                                Call Now
                              </span>
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
        <div id="jg-sidebar-progress-bar" style={{"height":"9%"}}></div>
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
        <div id="jg-progress-bar" style={{"width":"9%"}}></div>
      </div>
      <div id="jg-progress-label">
        1 of 11 visited
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
        <li className="jg-current">
          <span className="jg-step-text">
            <span className="jg-step-label">
              Residential Inpatient vs Hospital Inpatient
            </span>
            <span className="jg-step-meta">
              <span className="jg-visited-tag">
                ✓ Visited
              </span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="eael-ext-scroll-to-top-wrap scroll-to-top-hide" style={{"display":"block"}}>
    <span className="eael-ext-scroll-to-top-button" style={{"fontSize":"16px"}}>
      <svg className="e-font-icon-svg e-fas-chevron-up" viewBox="0 0 448 512">
        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
      </svg>
    </span>
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
