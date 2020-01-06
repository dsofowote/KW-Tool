integration.meta = {
	'sectionID' : '128803',
	'siteName' : 'Business Insider SG - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035568',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#td-outer-wrap, .td-container{width: 1000px !important; margin: 0 auto;} .td-header-menu-wrap-full{left: 0; right: 0;}</style>");
		$(".head-adv").css({"display": "none"});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#td-outer-wrap, .td-container{margin: 0 0 0 5px !important;} .td-header-menu-wrap-full{left: 0 !important; right: auto;} .td-menu-background{display: none !important;}</style>");
		}
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$(".td-scroll-up").css({
			"right" : sideWidth - 100
		});
	}
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};