integration.meta = {
	'sectionID' : '125756',
	'siteName' : 'Delicious Magazine - Desktop - (IE UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681803',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_URLKeywords" : 2,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var scroll = $(window).scrollTop();
		integration.custom.FrameTop = e.data.plr_FrameTop;
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
		$('body').addClass('ad-inskin-active');
		$("head").append("<style>.top-banner-ad-desktop{display: none !important;}</style>");
		$("head").append("<style>#header-content{width: 1300px !important;}</style>");
		$("head").append("<style>.main-content{margin-top: 142px !important;}</style>");
		$("head").append("<style>.content-wrapper, .fixed header {max-width: 1300px !important;}</style>");
		$("head").append("<style>.sticky-header{max-width: 1300px !important; margin: 0 auto; right: 0; padding: 0 !important;}</style>");
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
				"top" : integration.custom.FrameTop
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/delicious-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/delicious-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};
