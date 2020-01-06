integration.meta = {
	'sectionID' : '127709',
	'siteName' : ' Journal des Femmes - Desktop - (BE) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '838819',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("app--ark");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>#sidebar_follower{display:none}</style>");
	$(".page").css({
		"overflow-x" : "hidden"
	});
	$("body").css({
		"background-image" : "none",
		"padding-bottom" : integration.base.getCfg("plr_FrameBottom").plr_FrameBottom + "px"
	});
	$(".ism-frame").css({
		"z-index" : "151"
	});
	$("#ba_x02").css({
		"width" : "1000px",
		"margin" : "0 auto"
	});
	$("header, footer").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1560 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#gotop").css({
			"right" : sideWidth
		});
	} else {
		$("#gotop").css({
			"right" : "60px"
		});
	}
}
