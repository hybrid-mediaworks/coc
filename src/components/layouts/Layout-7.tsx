import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function Layout7({ children }: Props) {
  return (
    <>
    <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade" aria-label="Menu">
      <ul id="menu-1-4fb4e0f0" className="elementor-nav-menu">
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-37">
          <a href="/about-us/" id="sm-17891628867155942-1" className="elementor-item has-submenu" aria-controls="sm-17891628867155942-2" aria-expanded="false" aria-haspopup="true">
            {"About Us"}
            <span className="sub-arrow">
              <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </span>
          </a>
          <ul id="sm-17891628867155942-2" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-1">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6427">
              <a href="/staff/" className="elementor-sub-item">Staff</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57006">
              <a href="/our-facilities/" className="elementor-sub-item">Our Facilities</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1563">
              <a href="/mental-health/faq/" className="elementor-sub-item">FAQ</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1884">
              <a href="/mental-health/blog/" className="elementor-sub-item">Blog</a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6836">
          <a href="/mental-health/" id="sm-17891628867155942-3" className="elementor-item has-submenu" aria-controls="sm-17891628867155942-4" aria-expanded="false" aria-haspopup="true">
            {"Mental Health Disorders"}
            <span className="sub-arrow">
              <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </span>
          </a>
          <ul id="sm-17891628867155942-4" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-3">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6832">
              <a href="/mental-health/mood-disorders/" id="sm-17891628867155942-5" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-6" aria-expanded="false" aria-haspopup="true">
                {"Mood Disorders"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-6" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-5">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794">
                  <a href="/mental-health/mood-disorders/depression/" className="elementor-sub-item">Depression Treatment (MentalHealth National)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1240">
                  <a href="/bipolar-disorder/" id="sm-17891628867155942-7" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-8" aria-expanded="false" aria-haspopup="true">
                    {"Bipolar Disorder"}
                    <span className="sub-arrow">
                      <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul id="sm-17891628867155942-8" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-7">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1792">
                      <a href="/mental-health/mood-disorders/bipolar/hypomania/" className="elementor-sub-item">Hypomania</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738">
                      <a href="/mental-health/mood-disorders/bipolar/cyclothymia/" className="elementor-sub-item">Cyclothymia</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6831">
                  <a href="/mental-health/mood-disorders/premenstrual-dysphoric-disorder/" className="elementor-sub-item">Premenstrual Dysphoric Disorder (PMDD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6830">
                  <a href="/mental-health/mood-disorders/disruptive-mood-dysregulation-disorder/" className="elementor-sub-item">Disruptive Mood Dysregulation Disorder (DMDD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1793">
                  <a href="/mental-health/mood-disorders/depression/major-depressive-disorder/" className="elementor-sub-item">Major Depressive Disorder (MDD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6829">
                  <a href="/mental-health/mood-disorders/persistent-depressive-disorder/" className="elementor-sub-item">Persistent Depressive Disorder (PDD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3660">
                  <a href="/mental-health/mood-disorders/seasonal-affective-disorder/" className="elementor-sub-item">Seasonal Affective Disorder</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1241">
              <a href="/trauma/" id="sm-17891628867155942-9" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-10" aria-expanded="false" aria-haspopup="true">
                {"Trauma Disorders"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-10" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-9">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6828">
                  <a href="/mental-health/trauma-disorder/ptsd/" className="elementor-sub-item">Post Traumatic Stress Disorder (PTSD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3543">
                  <a href="/adjustment-disorder/" className="elementor-sub-item">Adjustment Disorder</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6834">
              <a href="/mental-health/personality-disorders/" id="sm-17891628867155942-11" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-12" aria-expanded="false" aria-haspopup="true">
                {"Personality Disorders"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-12" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-11">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6827">
                  <a href="/mental-health/personality-disorders/borderline-personality-disorder/" className="elementor-sub-item">Borderline Personality Disorder (BPD)</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3548">
                  <a href="/mental-health/personality-disorders/antisocial-personality-disorder-2/" className="elementor-sub-item">Antisocial Personality Disorder</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3549">
                  <a href="/mental-health/personality-disorders/dissociative-identity-disorder-2/" className="elementor-sub-item">Dissociative Identity Disorder</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3550">
                  <a href="/mental-health/personality-disorders/histrionic-personality-disorder/histronic-personality-disorder/" className="elementor-sub-item">Histrionic Personality Disorder</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3544">
                  <a href="/mental-health/personality-disorders/paranoid-personality-disorder/" className="elementor-sub-item">Paranoid Personality Disorder</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6833">
              <a href="/mental-health/psychotic-disorders/" id="sm-17891628867155942-13" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-14" aria-expanded="false" aria-haspopup="true">
                {"Psychotic Disorders"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-14" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-13">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6826">
                  <a href="/mental-health/psychotic-disorders/schizophrenia/" className="elementor-sub-item">Schizophrenia</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6825">
                  <a href="/mental-health/psychotic-disorders/schizoaffective-disorder/" className="elementor-sub-item">Schizoaffective Disorder</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6839">
              <a href="/mental-health/neurodevelopment-disorder/" id="sm-17891628867155942-15" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-16" aria-expanded="false" aria-haspopup="true">
                {"Neurodevelopment Disorder Treatment (MentalHealth National)"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-16" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-15">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6823">
                  <a href="/mental-health/neurodevelopment-disorder/adhd/" className="elementor-sub-item">ADHD</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-56714">
          <a href="/archived-page-designs/home-v3/#" id="sm-17891628867155942-17" className="elementor-item elementor-item-anchor has-submenu" aria-controls="sm-17891628867155942-18" aria-expanded="false" aria-haspopup="true">
            {"Mental Health Treatment"}
            <span className="sub-arrow">
              <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </span>
          </a>
          <ul id="sm-17891628867155942-18" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-17">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56718">
              <a href="/mental-health/therapy/california/" id="sm-17891628867155942-19" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-20" aria-expanded="false" aria-haspopup="true">
                {"California"}
                <span className="sub-arrow">
                  <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                  </svg>
                </span>
              </a>
              <ul id="sm-17891628867155942-20" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-19">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6225">
                  <a href="/mental-health/therapy/orange-county-ca/" id="sm-17891628867155942-21" className="elementor-sub-item has-submenu" aria-controls="sm-17891628867155942-22" aria-expanded="false" aria-haspopup="true">
                    {"Orange County, CA"}
                    <span className="sub-arrow">
                      <svg className="e-font-icon-svg e-fas-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true">
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul id="sm-17891628867155942-22" role="group" className="sub-menu elementor-nav-menu--dropdown" aria-hidden="true" aria-expanded="false" aria-labelledby="sm-17891628867155942-21">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56715">
                      <a href="/mental-health/therapy/tustin-ca/" className="elementor-sub-item">Tustin</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56716">
                      <a href="/mental-health/therapy/villa-park-ca/" className="elementor-sub-item">Villa Park</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-821">
              <a href="/mental-health/therapy/cognitive-behavioral-therapy-cbt/" className="elementor-sub-item">Cognitive Behavioral Therapy Therapy (MentalHealth National)</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1239">
              <a href="/mental-health/therapy/dbt/" className="elementor-sub-item">DBT Therapy (MentalHealth National)</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2519">
              <a href="/mental-health/therapy/seeking-safety/" className="elementor-sub-item">Seeking Safety</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1272">
              <a href="/mental-health/therapy/motivational-interviewing/" className="elementor-sub-item">Motivational Interviewing</a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1273">
              <a href="/mental-health/therapy/medication-management/" className="elementor-sub-item">Medication Management</a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33">
          <a href="/contact/" className="elementor-item">Contact</a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6835">
          <a href="/mental-health/anxiety-disorders/generalized-anxiety-disorder/" className="elementor-item">Generalized Anxiety Disorder</a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3659">
          <a href="/mental-health/anxiety-disorders/panic-disorder/panic-attack/" className="elementor-item">Panic Disorder</a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6822">
          <a href="/mental-health/anxiety-disorders/obsessive-compulsive-disorder/" className="elementor-item">Obsessive Compulsive Disorder (OCD)</a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6837">
          <a href="/mental-health/anxiety-disorders/social-anxiety-disorder/" className="elementor-item">Social Anxiety Disorder</a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6838">
          <a href="/mental-health/anxiety-disorders/agoraphobia/" className="elementor-item">Agoraphobia</a>
        </li>
      </ul>
    </nav>
      {children}
    </>
  );
}
