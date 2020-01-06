integration.meta = {
	'sectionID' : '127589',
	'siteName' : 'BT Sport - Smartphone - UK ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '761197',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.navHeight = $(".mobile-only.main-mobile-menu").outerHeight();
		if ($(".mobile-only.main-mobile-menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mobile-only.main-mobile-menu");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -integration.custom.navHeight
			});
		}
		$("head").append("<style>body{overflow : visible !important;}</style>");
		$(".leaderboard").css({
			"display" : "none"
		});
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.ismFrameTop = e.data.plr_FrameTop
	$(".global-nav-wrap").css({
		"height" : integration.custom.ismFrameTop
	});
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : integration.custom.navHeight
	});
	$(".mobile-only.main-mobile-menu").css({
		"z-index" : "20"
	});
});
