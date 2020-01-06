integration.meta = {
	'sectionID' : '128796',
	'siteName' : 'The Business Time - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035409',
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
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append("<style>.group-image img, .foot-nav, .footer, .main-container, #navbar{width: 1200px !important; margin: 0 auto !important; box-shadow: none;}</style>");
		$("head").append("<style>.master-header .top-first, .new-nav-bar, #searchbox, .new-nav-bar.lifestyle #menu, .new-nav-bar.lifestyle, .breadcrumb, .new-footer-wrapper .top-wrap, .social-icons-footer, .footer .copyright-text, .new-nav-bar #menu{box-shadow: none;}</style>");
		$("head").append("<style> html {overflow-y: visible !important;}</style>");
		$("#block-dfp-lb1").css({"display": "none"});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1600 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#onesignal-bell-launcher, #backtotop").css({
			"right" : sideWidth - 100
		});
	} else {
		$("#onesignal-bell-launcher, #backtotop").css({
			"right" : "20px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};