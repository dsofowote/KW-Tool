integration.meta = {
   'sectionID' : '125752',
   'siteName' : 'Sky Sports - (CREATIVE APPROVAL) - Desktop - (INT ex UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707831',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1010,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : 1,
	"plr_HideElementsByID" : "banner",
	"plr_HideElementsByClass" : "mpu, advert, advert__container",
  'plr_FastInit' : true,
  'plr_PageScanExclude' : ' .site-header, .site-footer, .site-layout-secondary__col2, .ob-widget-section, .OUTBRAIN '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("advert--site-takeover");
		if ($('.site-header__body').length == 1) {
			/* Responsive pages only */
			integration.base.setCfg({
				'plr_ContentW' : 1010
			});
			$('head').append('<style>#InSkinBrowser0 { z-index: 10100000 !important; }</style>');
			/* Hide leaderboard placement at publishers request */
			$('.advert--banner-wrap').hide();
			$("body").css({
				"overflow" : "visible"
			});
		}
	}
});

integration.on("adServed", function(e) {
	/* Publisher is not serving Leaderboards at same time as PageSkin, hide placement */
	$('.top-nav, .site-nav, #skycomGlobalNav').css({
		'max-width' : '1010px',
		'margin' : '0 auto'
	});

	$('#new-site-message').css({
		'width' : '1010px',
		'left' : '50%',
		'margin-left' : '-501px'
	});
	$('#close-cookie-warning').css({
		'margin-right' : '10px'
	});
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	if ($('.site-header__body').length == 1) {
		/* Responsive pages only */
		$('.site-header, .advert--banner-wrap, .site-footer, #cookie-warning').css({
			'max-width' : '1010px',
			'margin' : '0 auto'
		});
	} else {
		/* Non-Responsive pages only */
		$("#cookie-warning").css({
			'width' : '1010px',
			'padding-left' : '0px',
			'padding-right' : '0px',
			'margin' : '0 auto'
		});
	}
});

integration.custom.InSkinBottomNav = function() {
	var scrollPos = $(document).height() - ($(document).scrollTop() + $(window).height() );
	if (scrollPos <= 90) {
		var toAdd = (90 - scrollPos);
		if (toAdd < 0) {
			toAdd = 0;
		}
		$('#new-site-message').css({
			'marginBottom' : toAdd + 'px'
		});
	} else {
		$('#new-site-message').css({
			'marginBottom' : '0px'
		});
	}
};

window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skysports\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
};
