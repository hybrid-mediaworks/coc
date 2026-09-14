(function ($) {
    'use strict';

    var JG = {
        data: window.JG_DATA || {},
        visited: {},
        COOKIE_KEY: 'jg_visited',

        init: function () {
            if (!this.data.pages || !this.data.pages.length) return;
            this.loadVisited();
            this.markCurrentVisited();
            this.renderPanel();
            this.bindEvents();
        },

        /* ── Cookie helpers ── */

        loadVisited: function () {
            var raw = this.getCookie(this.COOKIE_KEY);
            if (raw) {
                try { this.visited = JSON.parse(decodeURIComponent(raw)); } catch (e) { this.visited = {}; }
            }
        },

        saveVisited: function () {
            var days = parseInt(this.data.cookie_days, 10) || 10;
            var expires = new Date();
            expires.setDate(expires.getDate() + days);
            document.cookie = this.COOKIE_KEY + '=' +
                encodeURIComponent(JSON.stringify(this.visited)) +
                '; expires=' + expires.toUTCString() +
                '; path=/; SameSite=Lax';
        },

        getCookie: function (name) {
            var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
            return match ? match[1] : null;
        },

        /* ── Mark current page visited ── */

        markCurrentVisited: function () {
            var currentId = parseInt(this.data.current_id, 10);
            if (!currentId) return;
            var inList = this.data.pages.some(function (p) {
                return parseInt(p.id, 10) === currentId;
            });
            if (inList) {
                this.visited[currentId] = true;
                this.saveVisited();
            }
        },

        /* ── Render ── */

        renderPanel: function () {
            $('#jg-panel-title').text(this.data.panel_title || 'Your Journey Guide');
            this.renderList();
            this.updateProgress();
        },

        renderList: function () {
            var $list = $('#jg-page-list').empty();
            var pages = this.data.pages;
            var visited = this.visited;
            var currentId = parseInt(this.data.current_id, 10);

            // First unvisited = recommended
            var recommendedIndex = -1;
            pages.forEach(function (p, i) {
                if (recommendedIndex === -1 && !visited[p.id]) recommendedIndex = i;
            });

            pages.forEach(function (page, i) {
                var pid = parseInt(page.id, 10);
                var isVisited     = !!visited[pid];
                var isCurrent     = pid === currentId;
                var isRecommended = i === recommendedIndex && !isVisited;

                var $li = $('<li>')
                    .attr('data-url', page.url);

                if (isCurrent)     $li.addClass('jg-current');
                if (isRecommended) $li.addClass('jg-recommended');

                // Bubble
                var $bubble = $('<span class="jg-step-bubble">');
                if (isVisited) {
                    $bubble.addClass('jg-visited');
                } else {
                    $bubble.addClass('jg-unvisited').text(i + 1);
                }

                // Text
                var $text  = $('<span class="jg-step-text">');
                var $label = $('<span class="jg-step-label">').text(page.label);
                $text.append($label);

                if (isVisited) {
                    $text.append(
                        $('<span class="jg-step-meta">').append(
                            $('<span class="jg-visited-tag">').text('✓ Visited')
                        )
                    );
                } else if (isRecommended) {
                    $text.append(
                        $('<span class="jg-step-meta jg-recommended-text">').text('+ Recommended next step')
                    );
                }

                $li.append($bubble).append($text);
                $list.append($li);
            });
        },

        updateProgress: function () {
            var pages   = this.data.pages;
            var total   = pages.length;
            var visited = this.visited;
            var count   = 0;

            pages.forEach(function (p) { if (visited[p.id]) count++; });

            var pct = total ? Math.round((count / total) * 100) : 0;

            // Panel horizontal bar
            $('#jg-progress-bar').css('width', pct + '%');
            $('#jg-progress-label').text(count + ' of ' + total + ' visited');

            // Sidebar vertical mini-bar (fills from bottom)
            $('#jg-sidebar-progress-bar').css('height', pct + '%');
        },

        /* ── Events ── */

        bindEvents: function () {
            var self = this;

            // Toggle button (arrow) opens/closes drawer
            $('#jg-toggle-btn').on('click', function () {
                self.togglePanel();
            });

            // X button closes drawer only — sidebar stays
            $('#jg-panel-close').on('click', function () {
                self.togglePanel(false);
            });

            // Navigate on row click
            $(document).on('click', '#jg-page-list li', function () {
                var url = $(this).data('url');
                if (url) window.location.href = url;
            });
        },

        togglePanel: function (forceOpen) {
            var $wrapper = $('#jg-wrapper');
            var isOpen   = $wrapper.hasClass('jg-open');
            var open     = (forceOpen !== undefined) ? forceOpen : !isOpen;

            if (open) {
                $wrapper.addClass('jg-open');
                $('#jg-panel').attr('aria-hidden', 'false');
            } else {
                $wrapper.removeClass('jg-open');
                $('#jg-panel').attr('aria-hidden', 'true');
            }
        }
    };

    $(document).ready(function () {
        JG.init();
    });

})(jQuery);
