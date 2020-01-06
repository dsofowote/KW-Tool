integration.meta = {
	'sectionID' : '124326',
	'siteName' : 'TalkSport - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681805',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#main-content, #main-articles, footer, .sun-header-bg.scrolling, .sun-header--nav.sun-header__mini{max-width: 980px !important; margin: 0; margin-left: 20px !important; left: 0 !important; right: auto !important;}</style>");
			$("head").append("<style>body{margin-left: 0 !important;}</style>");
		}
		var headerHeight = $('.sun-header-bg').height() + $('.sun-header--nav').height() + $('.sub-nav__container').height();
		if ($("#main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-content > div:first-child");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor',
				'plr_PageHeightAdjustment' : -headerHeight

			});
			$('html').css({
				"height" : "100%"
			});
			$('body').css({
				"max-height" : "100%"
			});
		}
		$("head").append("<style>#main-articles, footer, .sun-header-bg.scrolling, .sun-header--nav.sun-header__mini{max-width: 980px !important; margin: 0 auto; left: 0; right: 0;}</style>");
	}
});
