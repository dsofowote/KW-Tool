integration.meta = {
	'sectionID' : '128804',
	'siteName' : 'The Business Times - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035569',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#onesignal-bell-launcher, #backtotop").css({
			"right" : sideWidth - 100
		});
		$("#block-dfp-lb1").css({"display": "none"});
		$("head").append("<style>.group-image img, .foot-nav, .footer, .main-container, #navbar{width: 1200px !important; margin: 0 auto !important; box-shadow: none;}</style>");
		$("head").append("<style>.master-header .top-first, .new-nav-bar, #searchbox, .new-nav-bar.lifestyle #menu, .new-nav-bar.lifestyle, .breadcrumb, .new-footer-wrapper .top-wrap, .social-icons-footer, .footer .copyright-text, .new-nav-bar #menu{box-shadow: none;}</style>");
		$("head").append("<style> html {overflow-y: visible !important;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.group-image img, .foot-nav, .footer, .main-container, #navbar{margin: 0 !important; box-shadow: none;}</style>");
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};