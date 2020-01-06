integration.meta = {
	'sectionID' : '125759',
	'siteName' : 'Olive Magazine - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681684',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -15,
	'plr_FastInit' : true,
	//'plr_ScrollAdjustment' : 195
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		
		$("head").append("<style>.ad-banner-container {height: 0 !important; display: none;}</style>");
		$(".site-header__inner").css({
			"margin-top" : "0"
		});

		$(".site-header__inner.is-light").css({
			"max-width" : "initial"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#container").css({
				"margin-left" : "0"
			});
			$(".js-sticky").css({
				"margin-left" : "20px"
			});

			$("head").append("<style>.ad-banner-wrapper {display: none !important; height: 0 !important;}</style>");

			$(".fluid-container, footer").css({
				"max-width" : "960px"
			});

			$(".site-header, .site-header--left, .site-header__inner.is-light").css({
				"max-width" : "initial"
			});

			$('div.nav__primary').attr('id', 'ism-frame-added');
			$("head").append("<style>#ism-frame-added {left: 20px !important; max-width: 960px !important; width: 100% !important; margin-left: 0 !important}</style>");
		}
	}
});

integration.on('adServed', function(e) {
	integration.custom.headHeight = $(".site-header").outerHeight();
	$("body").css({
		"padding-top" : integration.custom.headHeight
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/olivemagazine-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/olivemagazine-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};
