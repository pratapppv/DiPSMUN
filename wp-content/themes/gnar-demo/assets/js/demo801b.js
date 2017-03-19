jQuery(document).ready(function($){

	var $body = $('body'),
        $panel = $('.tb-demo-panel');

    function themeblvd_hex_to_rgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

	$panel.find('.demo-panel-toggle').on('click', function(){

		if ( $panel.hasClass('on') ) {
			$panel.removeClass('on');
		} else {
			$panel.addClass('on');
		}

		return false;
	});

    $panel.find('#preset').on('change', function(){

        var val = $(this).val();

        if ( val == 'default' ) {
            window.location.replace( tb_demo_panel.site_url );
        } else {
            window.location.replace( tb_demo_panel.site_url + "/home/home-" + val);
        }

    });

	$panel.find('#layout-style').on('change', function(){

		if ( $(this).val() == 'boxed' ) {
			$body.addClass('gnar-boxed');
		} else {
			$body.removeClass('gnar-boxed');
		}

		$('.tb-isotope').each(function(){
			$(this).find('.post-wrap > .row').isotope();
		});

	});

	$panel.find('#logo-placement').on('change', function(){
		$('body').removeClass('logo-left logo-right').addClass( 'logo-' + $(this).val() );
	});

    $panel.find('#header-style').on('change', function(){

        var val = $(this).val();

        $('.site-menu-toggle, .site-header, .site-menu-panel').removeClass('edgy bold modern').addClass( val );

        if ( val == 'modern' ) {

            $body.addClass('demo-has-modern');

            var $logo = $('.site-header > .wrap .header-logo .tb-image-logo img');

            $logo.data({
                'original': $logo.attr('src'),
                'original_srcset': $logo.attr('srcset')
            }).attr('src', tb_demo_panel.stylesheet_uri + '/assets/img/logo-modern.png').attr('srcset', '');

        } else {

            $body.removeClass('demo-has-modern');

            var $logo = $('.site-header > .wrap .header-logo .tb-image-logo img');

            $logo.attr( 'src', $logo.data('original') ).attr( 'srcset', $logo.data('original_srcset') );

        }
    });

    $panel.find('#menu').on('change', function(){

        if ( $(this).val() == 'visible' ) {
            $body.addClass('menu-visible');
        } else {
            $body.removeClass('menu-visible');
        }

    });

	$panel.find('#header-trans').on('change', function(){

		if ( $(this).val() == 'trans' ) {
			$body.addClass('tb-suck-up').removeClass('demo-standard-header');
		} else {
			$body.removeClass('tb-suck-up').addClass('demo-standard-header');
		}

	});

	$panel.find('#header-bg-color').ColorPicker({
		color: $panel.find('#header-bg-color').data('default'),
		onChange: function(hsb, hex, rgb) {

			var rgba = themeblvd_hex_to_rgb('#'+hex),
                rgba = 'rgba('+rgba.r+', '+rgba.g+', '+rgba.b+', .95)',
				css  = '<style id="header-bg-color-styles"> \
                        .header-bg, \
                        .tb-primary-menu.sf-menu ul.non-mega-sub-menu, \
                        .tb-primary-menu.sf-menu .sf-mega { \
                        background-color: #'+hex+'; \
                        } \
                        .has-fs-menu .site-menu-panel { \
                        background-color: '+rgba+'; \
                        } \
                        .header-nav .tb-primary-menu > li.active > a:after, \
                        .header-nav .tb-primary-menu > li.sfHover:not(.highlight) > a:after { \
                        border-top-color: #'+hex+'; \
                        } \
                        .site-menu-toggle.edgy .hamburger span, \
                        .site-menu-toggle.bold .hamburger span { \
                        background-color: #'+hex+'; \
                        } \
                        .site-menu-toggle.edgy .hamburger span:after, \
                        .site-menu-toggle.bold .hamburger span:after { \
                        border-color: #'+hex+'; \
                        } \
                        </style>';

			$('#header-bg-color-styles').remove();
            $('head').append(css);

            $panel.find('#header-bg-color').val('#'+hex);

		}
	});

    $panel.find('#header-highlight').ColorPicker({
        color: $panel.find('#header-highlight').data('default'),
        onChange: function (hsb, hex, rgb) {

            var css  = '<style id="header-highlight-styles"> \
                        .site-header.edgy > .wrap .header-logo, \
                        .site-header.bold > .wrap .header-logo { \
                        background-color: #'+hex+'; \
                        } \
                        .site-menu-toggle.edgy, \
                        .site-menu-toggle.bold { \
                        background-color: #'+hex+'; \
                        } \
                        .site-menu-toggle.edgy:after, \
                        .site-menu-toggle.bold:after { \
                        border-color: #'+hex+' transparent transparent; \
                        } \
                        </style>';

            $('#header-highlight-styles').remove();
            $('head').append(css);

            $panel.find('#header-highlight').val('#'+hex);

        }
    });

	$panel.find('#header-text').on('change', function(){
		$('.site-header, .header-nav').removeClass('light dark').addClass( $(this).val() );
	});

	$panel.find('#highlight').ColorPicker({
		color: $panel.find('#highlight').data('default'),
		onChange: function (hsb, hex, rgb) {

			var rgba = themeblvd_hex_to_rgb('#'+hex),
                rgba = 'rgba('+rgba.r+', '+rgba.g+', '+rgba.b+', .95)',
                css  = '<style id="highlight-styles"> \
                        .home-play .bg-diag-shade polygon { \
                        fill: '+rgba+'; \
                        } \
                        \
                        .home-about .divider, \
                        .tb-featured-post .featured-content > .wrap, \
                        .tb-featured-post .featured-label, \
                        \
						.highlight, \
                        .gnar-lang-selector a:hover, \
                        .gnar-lang-selector a:focus, \
                        .woocommerce-tabs .tabs > li > a:hover, \
                        .woocommerce-tabs .tabs > li > a:focus, \
                        .woocommerce-tabs .tabs > li.active > a, \
                        .tb-mobile-menu .sub-menu a.menu-btn:hover, \
                        .tb-mobile-menu .sub-menu a.menu-btn:focus, \
                        .fancy-title:before, \
                        .fancy-title:after, \
                        .tb-tags a:hover, \
                        .tb-tags a:focus, \
                        .btn-share:hover, \
                        .btn-share:focus, \
                        .featured-quote > a:hover, \
                        .featured-quote > a:focus, \
                        .tb-thumb-link:after, \
                        .post_showcase .showcase-item.has-title .featured-item.showcase .tb-thumb-link:after, \
                        .post_showcase .showcase-item.has-title .featured-item.showcase.tb-thumb-link:after, \
                        .tb-filter-nav > ul > li > a:hover, \
                        .tb-filter-nav > ul > li > a:focus, \
                        .text-light .tb-filter-nav > ul > li > a:hover, \
                        .text-light .tb-filter-nav > ul > li > a:focus, \
                        .tb-tag-cloud .tagcloud a:hover, \
                        .btn-default:hover, \
                        .btn-default:focus, \
                        .btn-default:active, \
                        .btn-default.active:hover, \
                        input[type=\"submit\"]:hover, \
                        input[type=\"submit\"]:focus, \
                        input[type=\"submit\"]:active, \
                        input[type=\"reset\"]:hover, \
                        input[type=\"reset\"]:focus, \
                        input[type=\"reset\"]:active, \
                        input[type=\"button\"]:hover, \
                        input[type=\"button\"]:focus, \
                        input[type=\"button\"]:active, \
                        .button:hover, \
                        .button:focus, \
                        .button:active, \
                        button:hover, \
                        button:focus, \
                        button:active, \
                        .pagination .btn-group .btn:hover, \
                        .primary:hover, \
                        .primary:focus, \
                        a.bg-primary:hover, \
                        .btn-primary:hover, \
                        .btn-primary:focus, \
                        .btn-primary:active, \
                        .btn-primary.active, \
                        a.alt:hover, \
                        a.alt:focus, \
                        button.alt:hover, \
                        button.alt:focus, \
                        input.alt:hover, \
                        input.alt:focus, \
                        .home-quick-facts > .element-content:before, \
                        .home-quick-facts .element-columns .element-content:before, \
                        .home-quick-facts .element-columns:before, \
                        .tb-team-member .member-image:before { \
                        background-color: #'+hex+' !important; \
                        } \
                        .tooltip-inner { \
                        background-color: #'+hex+'; \
                        } \
                        \
                        .has-notch-highlight:before, \
                        .tb-testimonial.standard .testimonial-text, \
                        .tooltip.top .tooltip-arrow { \
                        border-top-color: #'+hex+'; \
                        } \
                        \
						.tb-floating-search.full .tb-search, \
                        .tooltip.bottom .tooltip-arrow { \
                        border-bottom-color: #'+hex+'; \
                        } \
						\
                        .home-quick-facts .element-columns .col:first-child { \
                        border-color: #'+hex+'; \
                        } \
                        \
						.home-services .tb-icon-box.icon-side > .icon { \
						color: #'+hex+' !important; \
						} \
						\
						@media (min-width: 768px) { \
                        .tb-image-box:hover { \
                        background-color: #'+hex+'; \
                        } \
						.site-menu-toggle:after { \
						border-color: #'+hex+' transparent transparent; \
						} \
						} \
                        </style>';

            $('#highlight-styles').remove();
            $('head').append(css);

            $panel.find('#highlight').val('#'+hex);

		}
	});

	$panel.find('#search-bg-color').ColorPicker({
		color: '#ffffff',
		onChange: function (hsb, hex, rgb) {
			$('.tb-floating-search').css('background-color', '#'+hex);
            $panel.find('#search-bg-color').val('#'+hex);
		}
	});

	$panel.find('#search-text').on('change', function(){
		$('.tb-floating-search').removeClass('light dark').addClass( $(this).val() );
	});

	$panel.find('#footer-bg-color').ColorPicker({
		color: $panel.find('#footer-bg-color').data('default'),
		onChange: function (hsb, hex, rgb) {
			$('.site-footer').css('background-color', '#'+hex);
            $panel.find('#footer-bg-color').val('#'+hex);
		}
	});

	$panel.find('#footer-text').on('change', function(){
		$('.site-footer').removeClass('light dark').addClass( $(this).val() );
	});

	$panel.find('#copyright-bg-color').ColorPicker({
		color: $panel.find('#copyright-bg-color').data('default'),
		onChange: function (hsb, hex, rgb) {
			$('.footer-sub-content').css('background-color', '#'+hex);
            $panel.find('#copyright-bg-color').val('#'+hex);
		}
	});

	$panel.find('#copyright-text').on('change', function(){

		var val = $(this).val();

		$('.footer-sub-content').removeClass('light dark').addClass( val );

		if ( val == 'light' ) {
            $('.footer-sub-content .tb-social-icons').removeClass('light grey').addClass('grey');
        } else {
            $('.footer-sub-content .tb-social-icons').removeClass('light grey').addClass('light');
        }
	});


});
