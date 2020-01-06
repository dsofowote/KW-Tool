integration.meta = {
	'sectionID' : '128911',
	'siteName' : 'SirapLimau - (Creative Approval) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1041632',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".ism-frame").parent().addClass("inskinanchor");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append("<style>#site, #site-wrap{overflow-y: auto !important; float: none !important;}</style>");
		$("head").append("<style>#site, #body-main-wrap{width: 970px !important; margin: 0 auto;}</style>");
		$("head").append("<style>#foot-bot-wrap, #foot-top-wrap{width: 99% !important; padding: 0 1%;} .fly-to-top{z-index: 999 !important;}</style>");
		$("head").append("<style>.ismClicked{visibility: hidden !important;}</style>");
		$("head").append("<style>#main-nav-wrap{position: fixed !important; left: 0; right: 0; top: 0 !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	$(".fly-but-wrap").click(function() {
		if ($(this).hasClass("fly-open")) {
			$(".ism-frame").parent().addClass("ismClicked");
		} else {
			$(".ism-frame").parent().removeClass("ismClicked");
		}
	});
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
	$("head").append("<style>.inskinanchor{margin-top: 50px !important;}</style>");
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1400 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".fly-to-top").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".fly-to-top").css({
			"right" : "15px"
		});
	}
}; 