integration.meta = {
	'sectionID': '125816',
	'siteName': 'Made for Mums',

	'platform': 'tablet',
	'restrictions': ''
};




integration.testParams = {};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId': '681694',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 992,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	"plr_URLKeywords": 2
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("#containerbody, .site-footer").css({
			"max-width": "992px",
			"margin": "0 auto"
		});

		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -integration.custom.headHeight
			});
		}
		// hiding top banner on publishers request
		$(".top-banner").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment': 'left'
			});
			$("#containerbody, .site-footer").css({
				"margin-left": "0"
			});
		}
	}
});

integration.on('adServed', function () {
	integration.custom.headHeight = $(".site-header__inner--vcenter").outerHeight() + $(".site-header__nav").outerHeight();
	$("#inskinanchor").css({
		"margin-top": integration.custom.headHeight
	});

	integration.base.setCfg({
		plr_PageHeightAdjustment: -integration.custom.headHeight
	});
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<!-- PassBack for InSkin - 'tracking.immediate.co.uk/madeformums-passback' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/176986657/tracking.immediate.co.uk/madeformums-passback', [[970,250],[728,90]])\n                    .setTargeting('pos', ['%%PATTERN:pos%%'])\n                    .setTargeting('thirdparty', ['inskin'])\n                    .display();\n<\\script>\n<!-- End -->";
};