integration.meta = {
	'sectionID' : '128795',
	'siteName' : 'Business Insider SG - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1510]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1035408',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1250,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append("<style>#td-outer-wrap{max-width: 1230px !important; margin: 0 auto;} .td-header-menu-wrap-full{left: 0; right: 0;}</style>");
		$(".head-adv").css({"display": "none"});
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
	if (width < 1660 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".td-scroll-up").css({
			"right" : sideWidth - 100
		});
	} else {
		$(".td-scroll-up").css({
			"right" : "5px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};