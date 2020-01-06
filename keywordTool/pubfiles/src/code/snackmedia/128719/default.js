integration.meta = {
	'sectionID' : '128719',
	'siteName' : 'Transfer Tavern - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1032757',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('#body-main-wrap, body').css({
			"margin" : "0 auto",
			"width" : "980px"
		});
		$("head").append("<style>.foot-copy{padding-left: 10px;} .foot-menu{padding-right: 10px;}</style>");
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
	if (width < 1700 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#mc_scoreboard").css({
			"left" : sideWidth + 2
		});
		$(".fly-to-top").css({
			"right" : sideWidth + 2
		});
	} else {
		$("#mc_scoreboard").css({
			"left" : "0px"
		});
		$(".fly-to-top").css({
			"right" : "15px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/InSkin-970x250', [[970, 250], [970, 90], [728, 90]]).display();\n<\\script>";
};
