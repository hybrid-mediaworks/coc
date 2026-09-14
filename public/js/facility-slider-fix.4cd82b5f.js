/**
 * Facility Slider Fix — JS Safety Net
 *
 * Handles cases the server-side CSS cannot:
 *   - Elementor AJAX-loaded templates / popups
 *   - Elementor Loop Grid dynamic injection
 *   - Swiper loop-mode cloned slides (.swiper-slide-duplicate)
 *   - Lazy-loaded images (data-src, data-lazy-src, srcset variants)
 *   - Late Swiper initialisation race conditions
 *
 * Config is passed from PHP via wp_localize_script as window.FSF_Config:
 *   { galleryEmpty: bool, wrapperClass: string, debug: bool }
 *
 * If galleryEmpty is already true (PHP confirmed it), we skip most DOM work
 * and just ensure nothing slipped through. If false, we exit immediately —
 * no MutationObserver, no overhead.
 */

( function () {
    'use strict';

    /* ── 0. Bootstrap from PHP config ──────────────────────────────────────── */

    const cfg = window.FSF_Config || {};
    const WRAPPER = '.' + ( cfg.wrapperClass || 'facility-image-wrapper' );
    const DEBUG   = cfg.debug === true;

    function log( ...args ) {
        if ( DEBUG ) console.log( '[FacilitySliderFix]', ...args );
    }

    // If PHP already confirmed images exist, do nothing.
    // galleryEmpty can be boolean true/false or the string "1"/"" from PHP.
    const phpSaysEmpty = cfg.galleryEmpty === true || cfg.galleryEmpty === '1';
    const phpSaysHasImages = cfg.galleryEmpty === false || cfg.galleryEmpty === '';

    if ( phpSaysHasImages ) {
        log( 'PHP confirmed gallery has images — JS layer exiting.' );
        return;
    }

    /* ── 1. Core detection ─────────────────────────────────────────────────── */

    /**
     * Returns true if the wrapper has NO real images.
     * "Real" means: not a Swiper loop clone, not a lazy placeholder.
     */
    function wrapperIsEmpty( wrapper ) {
        // Real slides only — exclude Swiper loop clones
        const realSlides = wrapper.querySelectorAll(
            '.swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)'
        );

        if ( realSlides.length === 0 ) {
            // No slides at all — check via Swiper JS instance as confirmation
            const swiperEl =
                wrapper.querySelector( '.swiper' ) ||           // Swiper v8+
                wrapper.querySelector( '.swiper-container' );   // Swiper v6-7

            if ( swiperEl && swiperEl.swiper ) {
                const nonClones = Array.from( swiperEl.swiper.slides || [] ).filter(
                    ( s ) => ! s.classList.contains( 'swiper-slide-duplicate' )
                );
                log( 'Swiper instance found. Real slides:', nonClones.length );
                return nonClones.length === 0;
            }

            log( 'No real slides found and no Swiper instance.' );
            return true;
        }

        // Check each real slide for a genuine image src
        for ( const slide of realSlides ) {
            if ( slideHasRealImage( slide ) ) {
                log( 'Real image found in slide — wrapper is NOT empty.' );
                return false;
            }
        }

        log( 'All slides checked — no real images found.' );
        return true;
    }

    /**
     * Returns true if the slide contains an image that is not a placeholder.
     * Checks all lazy-load attribute variants used by Elementor and common plugins.
     */
    function slideHasRealImage( slide ) {
        const imgs = slide.querySelectorAll( 'img' );

        for ( const img of imgs ) {
            const candidates = [
                img.getAttribute( 'src' ),
                img.getAttribute( 'data-src' ),
                img.getAttribute( 'data-lazy-src' ),       // WP lazy
                img.getAttribute( 'data-lazy' ),
                img.getAttribute( 'data-srcset' ),
                img.getAttribute( 'srcset' ),
            ];

            for ( const src of candidates ) {
                if ( ! src || src.trim() === '' ) continue;

                // Reject SVG/GIF placeholder tricks and Elementor placeholders
                if (
                    /^data:image\/svg/.test( src )  ||  // inline SVG
                    /^data:image\/gif/.test( src )  ||  // 1×1 GIF
                    src.includes( 'elementor-placeholder' ) ||
                    src.includes( 'placeholder' )
                ) {
                    continue;
                }

                // Genuine src found
                return true;
            }
        }

        return false;
    }

    /* ── 2. Hide action ────────────────────────────────────────────────────── */

    /**
     * Hides the wrapper and collapses ALL Elementor container spacing.
     * Idempotent — safe to call multiple times.
     */
    function hideWrapper( wrapper ) {
        if ( wrapper.dataset.fsfHidden === '1' ) return;
        wrapper.dataset.fsfHidden = '1';

        log( 'Empty gallery detected. Hiding container:', wrapper );

        // Primary: find the container marked with .facility-slider-section
        // This is the outer container holding BOTH the heading and the slider.
        const namedContainer = wrapper.closest( '.facility-slider-section' );

        if ( namedContainer ) {
            Object.assign( namedContainer.style, {
                display:   'none',
                margin:    '0',
                padding:   '0',
                minHeight: '0',
            } );
            log( 'Hid named container (.facility-slider-section):', namedContainer );
            return;
        }

        // Fallback: walk up to the nearest .e-con or section and hide that.
        // This catches cases where the CSS class wasn't added in Elementor.
        const parentCon = wrapper.closest( '.e-con, .elementor-section' );
        if ( parentCon ) {
            Object.assign( parentCon.style, {
                display:   'none',
                margin:    '0',
                padding:   '0',
                minHeight: '0',
            } );
            log( 'Hid nearest Elementor container (fallback):', parentCon );
            return;
        }

        // Last resort: just hide the wrapper itself
        Object.assign( wrapper.style, {
            display:    'none',
            visibility: 'hidden',
            height:     '0',
            minHeight:  '0',
            overflow:   'hidden',
            margin:     '0',
            padding:    '0',
        } );
    }

    /* ── 3. Main runner ────────────────────────────────────────────────────── */

    function checkAllWrappers() {
        document.querySelectorAll( WRAPPER ).forEach( ( wrapper ) => {
            if ( wrapperIsEmpty( wrapper ) ) {
                hideWrapper( wrapper );
            }
        } );
    }

    /* ── 4. Timing layers ──────────────────────────────────────────────────── */

    // Layer A: DOM ready — first pass before Swiper might have cloned slides.
    if ( document.readyState === 'loading' ) {
        document.addEventListener( 'DOMContentLoaded', checkAllWrappers );
    } else {
        checkAllWrappers();
    }

    // Layer B: Window load — Swiper will have fully initialised by now.
    window.addEventListener( 'load', checkAllWrappers );

    // Layer C: Elementor frontend hook — fires per-widget after Elementor
    // processes each element. Gives a 150ms grace period for Swiper to clone.
    document.addEventListener( 'DOMContentLoaded', function () {
        if ( typeof elementorFrontend === 'undefined' ) return;

        elementorFrontend.hooks.addAction(
            'frontend/element_ready/global',
            function ( $scope ) {
                if ( ! $scope || ! $scope[ 0 ] ) return;
                if ( ! $scope[ 0 ].querySelector( WRAPPER ) ) return;

                // Small delay: Swiper clones slides after widget ready fires
                setTimeout( checkAllWrappers, 150 );
            }
        );
    } );

    // Layer D: MutationObserver — catches dynamically injected content:
    //   • Elementor Popups (DOM injected on trigger)
    //   • Loop Grid AJAX
    //   • Any other async template rendering
    function startObserver() {
        let debounceTimer = null;

        const observer = new MutationObserver( function ( mutations ) {
            let relevant = false;

            for ( const mutation of mutations ) {
                for ( const node of mutation.addedNodes ) {
                    if ( node.nodeType !== 1 ) continue; // Element nodes only
                    if (
                        node.matches( WRAPPER ) ||
                        node.querySelector( WRAPPER )
                    ) {
                        relevant = true;
                        break;
                    }
                }
                if ( relevant ) break;
            }

            if ( ! relevant ) return;

            // Debounce: rapid DOM mutations (Swiper cloning) trigger one check
            clearTimeout( debounceTimer );
            debounceTimer = setTimeout( checkAllWrappers, 200 );
        } );

        observer.observe( document.body, {
            childList: true,
            subtree:   true,
        } );

        // Disconnect after 15s — Elementor is fully booted well before this.
        // Prevents any long-lived performance overhead.
        setTimeout( () => {
            observer.disconnect();
            log( 'MutationObserver disconnected after 15s.' );
        }, 15_000 );

        log( 'MutationObserver started.' );
    }

    if ( document.readyState === 'loading' ) {
        document.addEventListener( 'DOMContentLoaded', startObserver );
    } else {
        startObserver();
    }

    log( 'Facility Slider Fix JS loaded. PHP says empty:', phpSaysEmpty );

} )();
