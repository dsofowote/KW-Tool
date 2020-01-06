integration.meta = {
	"sectionID" : "124733",
	"siteName" : "Huffington Post",
	"publisher" : "mpublicite",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706547',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1170,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "ad_leaderboard_flex, ad_right_rail_flex, ad_leaderboard_bottom",
	"plr_HideElementsByClass" : "ad_wrapper_top, ad_wrapper",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on("adServed", function(e) {
	$('#hp_cconsent, .inner-container > .desktop-only, footer').css({
		'width' : '1170px',
		'margin' : '0 auto'
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.isMenuStuck();
	$(window).on("scroll", function() {
		integration.custom.isMenuStuck();
	});
});

integration.custom.isMenuStuck = function() {
	var hasDownClass = $("body").hasClass("down");
	if (hasDownClass) {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 60
		});
	} else {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 0
		});
	}
}
