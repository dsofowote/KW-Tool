integration.meta = {
	'sectionID' : '128505',
	'siteName' : 'What Hifi - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1019024',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>.slot-leaderboard{display: none !important;}</style>');

		var navHeight = $('.primary-nav').height();
		if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight,
			});
		};

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#main").css({
				"margin" : "0px",
				"padding-top" : "0px !important"
			});
			$("head").append("<style>.sticky-masterhead.active{margin-left:140px!important;} #document-footer, .primary-nav{width: 960px !important; margin: 0 !important;}</style>");
		}
		$("#sliding-popup, .header-wrapper, #header, #footer-links, #footer-wrapper, .grey, #trending, #document-footer").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_WhatHiFi/Inskin\", [728, 90]).display();\n<\\script>";
};
