integration.meta = {
	'sectionID' : '126301',
	'siteName' : 'Concrete Playground - Desktop - (AU)',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1025388',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_PageHeightAdjustment': -204,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '.wrapper',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 78

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".wrapper").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow-x" : "visible"
		});
		$(".main-container").css({
			"padding-top" : "20px"
		});
		$(".nav-right").css({
			"right" : "45px"
		});
		$("head").append("<style>.wrapper{padding-top: 196px !important;}</style>");
		$("head").append("<style>.banner_1240x100.ad-banner.banner_1240x100_top{display:  none !important;}</style>");
		$("head").append("<style>.ad-banner-wrapper{display:  none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7836898/CP_1240x250', [[320, 50], [970, 250], [728, 90], [1240, 250], [1240, 100]]).display();\n<\\script>";
};
