integration.meta = {
    'sectionID' : '128936',
    'siteName' : 'Daily Mail INT Header Bidding - Header bidding - ( INT )',
    'platform' : 'header bidding'
};

integration.params = {
	'mf_siteId' : '1042455',
	'plr_PageAlignment' : 'center',
	'plr_UseFullVersion' : true,
	'plr_HideElementsByID' : 'banner',
	'plr_HideElementsByClass' : '',
	'srv_SectionID' : '128936',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseCreativeSettings' : true,
	//PLEASE DO NOT REMOVE CONTENT WIDTH FROM HERE
	'plr_ContentW' : 990,
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		desktopIntegration = function() {
			integration.base.setCfg({
				'plr_ContentW' : 990,
				'plr_HideElementsByID' : 'banner',
				'plr_HideElementsByClass' : '',
				'plr_URLKeywords' : 2,
				'plr_FastInit' : true,
			});

			$("body").css({
				"background" : "none"
			});
			/*$("#top.page-banner").css({
			 "padding-top" : "0"
			 });
			 $(".banner-adverts").first().hide();*/
			$("#js-sky-right, #js-sky-left").hide();
			/* for billboards */
			//$("head").append("<style>#billBoard{top:0px !important}</style>");
			$("body").css({
				"overflow" : "visible"
			});

			integration.on("adServed", function(e) {
				$(".ism-frame").parent().css({
					"z-index" : "10000"
				});
			});

			integration.on("layoutChange", function(e) {
				integration.custom.floatingButtons();
				$(window).resize(function() {
					integration.custom.floatingButtons();
				});
			});

			integration.custom.floatingButtons = function() {
				var width = $(window).width();
				if (width < 1540) {
					var sideWidth = (width - 984) / 2;
					$(".floating-buttons").css({
						"right" : sideWidth + 20
					});
				} else {
					$(".floating-buttons").css({
						"right" : "10px"
					});
				}
			}
		}

		smartphoneIntegration = function() {
			integration.base.setCfg({
				'plr_FastInit' : true,
				'plr_FluidAnchor' : true,
				'plr_AnchorParent' : ".scrollable-content",
				'plr_ScrollElement' : '.scrollable-content',
				'plr_HideElementsByID' : 'swipeIndicator',
				"plr_URLKeywords" : 2,
				"plr_StartScrollOnAnchor" : false,
				"plr_ScrollAdjustment" : 0,
				"plr_SwipeoutNavOffset" : 46,
				"plr_Responsive" : true,
				"plr_ShowCloseButton" : true,
				"plr_PageScanExclude" : "#next-stories, #p-most-read-news-mobile, #most-watched-videos-wrapper, #p-52,  #p-59,#infinite-list, #comments, #taboola-mobile-below-main-column, script"
			});

			integration.custom.FrameTop = 0;

			integration.custom.heightDetection = function() {
				var totalOuterHeight = 0;

				$(".scrollable-content > *").each(function() {
					if ($(this).prop('nodeName') != 'SCRIPT') {
						totalOuterHeight += $(this).outerHeight(true);
					} //calculates the height of all elements inside scrollable content element except the scripts
				});

				if ($('body').hasClass('isHidden') == false) {
					totalOuterHeight -= $('#mobile-content > header > nav').height();
				}//adjust the height when the sticky nav bar is not hidden

				integration.base.setCfg({
					'plr_ContentH' : totalOuterHeight - integration.custom.FrameTop + 40
				});
			}

			integration.custom.heightDetection();

			$("head").append("<style>html{padding: 0 !important;}</style>");
			$("body").addClass("inskinLoaded");
			var specialCSS = '<style type="text/css"> @media screen and (max-width: 432px) {';
			specialCSS += '.inskinLoaded .scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}';
			specialCSS += '.inskinLoaded #stickyBanner {height : 0px}';
			specialCSS += '.inskinLoaded .social > ul {padding-left : 0}';
			specialCSS += '.inskinLoaded .social .comments-count {margin-right : 0}';
			specialCSS += '.inskinLoaded .social .email {padding-left : 0}';
			specialCSS += '.inskinLoaded #swipeIndicator.show{right: 74px;}';
			specialCSS += '.inskinLoaded {overflow-x:visible;}'
			specialCSS += '.inskinLoaded .social li{margin: 0 2px 0 0;}'
			specialCSS += '</style>';
			$('head').append(specialCSS);

			integration.custom.FrameTop = 0;
			integration.custom.heightDetection();

			integration.on('layoutChange', function(e) {
				integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
				integration.custom.FrameTop = e.data.plr_FrameTop;
				integration.custom.FrameBottom = e.data.plr_FrameBottom;

				$("body").addClass("inskinLoaded");
				var stylesCSS = '<style type="text/css">';
				stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '.inskinLoaded #home > a.hp-swipe{right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '.inskinLoaded .scrollable-content{padding-right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '</style>'
				$('head').append(stylesCSS);

				integration.custom.heightDetection();

				setInterval(function() {
					integration.custom.heightDetection();
				}, 3000);

				$(window).resize(function() {
					integration.custom.heightDetection();
				});
			});

			integration.on("adClose", function(e) {
				$("body").removeClass("inskinLoaded");
				integration.telemetry.recordCustom("Ad Closed " + navigator.userAgent + " ");
			});

		}
		tabletIntegration = function() {
			//integration.channelHome = ['/home/index.html', '/news/index.html', '/ushome/index.html', '/sport/index.html', '/tvshowbiz/index.html', '/auhome/index.html', '/femail/index.html', '/health/index.html', '/sciencetech/index.html', '/money/index.html', '/video/index.html', '/travel/index.html', '/mailonsunday/index.html', '/home/latest/index.html', '/home/you/index.html'];

			integration.base.setCfg({
				//'mf_siteId' : '681676',
				'plr_FastInit' : true,
				'plr_PageScanExclude' : ".beta, #infinite-list, #most-read-news-wrapper, #reader-comments, #taboola-below-main-column, #most-watched-videos-wrapper, #taboola-below-article-thumbnails-2nd, script",
				"plr_UseCreativeSettings" : true,
				"plr_UseFullVersion" : true,
				"plr_ContentType" : "PAGESKINEXPRESS",
				"plr_ContentW" : 1000,
				"plr_PageAlignment" : "center",
				"plr_HideElementsByID" : "",
				"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
				"plr_URLKeywords" : 2,
				"plr_BarneyThresholdClicks" : 1,
				"plr_BarneyThresholdRate" : 1
			});

			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				$('#top').css('margin-left', '20px');
				integration.base.setCfg({
					plr_PageAlignment : 'left'
				});
				/* Required to over-ride important rule added by publisher */
				$('head').append('<style>body{margin-left:20px !important;}</style>');
			}

			$("body").css("overflow", "visible");
			/* CSS Changes requested by the publiser */
			var specialCSS = '<style type="text/css">.adHolder sticky_banner_overrides { height: 0; margin:0; }';
			specialCSS += '#stickyBanner { display:none; }';
			specialCSS += '#superBanner { display:none; }';
			specialCSS += '.banner-adverts { display:none; }';
			specialCSS += '.page-banner { padding-top: 0px !important; }';
			specialCSS += '</style>';
			$('head').append(specialCSS);
			/* End of CSS Changes requested by the publisher */

		}
		if (e.data.device == "Desktop") {
			desktopIntegration();
		} else if (e.data.device == "Smartphone") {
			smartphoneIntegration();
		} else if (e.data.device == "Tablet") {
			tabletIntegration();
		}
	}
});
