integration.meta = {
	'sectionID' : '128716',
	'siteName' : 'Football League World - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1032754',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 100,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#mvp-leader-wrap{display: none !important;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("body").append("<style>html{overflow-x: visible;} #mvp-site{max-width: 1000px; margin: 0 auto; float: none !important;} #mvp-main-nav-top, #mvp-main-nav-bot{left: 0; right: 0;}</style>");
		$('#mvp-site-main').css({
			"float" : "none",
			"display" : "inline-block"
		});
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
	if (width < 1400 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".mvp-fly-top").css({
			"right" : sideWidth
		});
	} else {
		$(".mvp-fly-top").css({
			"right" : "0px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/InSkin-970x250', [[970, 250], [970, 90], [728, 90]]).display();\n<\\script>";
};
