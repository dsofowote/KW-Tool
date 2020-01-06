integration.meta = {
	'sectionID' : '125757',
	'siteName' : 'Delicious Magazine - Tablet - (IE UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681773',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_URLKeywords" : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var scroll = $(window).scrollTop();
		$('body').addClass('ad-inskin-active');
		$("head").append("<style>.top-banner-ad-desktop{display: none !important;}</style>");
		integration.custom.FrameTop = e.data.plr_FrameTop;
		integration.custom.FrameSide = e.data.plr_FrameSide;
		var contentWidth = $(window).width();
		if (scroll == 0 || scroll < integration.custom.FrameTop) {
			$('.sticky-header').css({
				"top" : integration.custom.FrameTop
			});
		} else {
			$('.sticky-header').css({
				"top" : 0
			});
		}
		$("head").append("<style>.top-banner-ad-desktop{display: none !important;}</style>");
		$("head").append("<style>.related-recipe-slide-up .content-wrapper{max-width: 1000px !important;}</style>");
		$("head").append("<style>footer.content-wrapper, #header-content, .main-content{width: 1000px !important; margin: 0 auto;}</style>");
		$("head").append("<style>.sticky-header{max-width: 1000px !important; margin: 0 auto; right: 0; padding: 0 !important;}</style>");
		$('body').addClass('ad-inskin-active');
		$(".advert-banner-placeholder-1").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{padding: 0;} .sticky-header{margin-left: 0 !important; left: 20px;} footer.content-wrapper, .main-content{margin: 0;}</style>");

		}
	}
});

integration.on("layoutChange", function(e) {
	var frtop = e.data.plr_FrameTop;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > frtop) {
			$('.sticky-header').css({
				"position" : "fixed",
				"top" : 0
			});
		} else {
			$('.sticky-header').css({
				"position" : "absolute",
				"top" : integration.custom.FrameTop,
				"left" : "0"
			});
		}
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/delicious-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/delicious-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};
