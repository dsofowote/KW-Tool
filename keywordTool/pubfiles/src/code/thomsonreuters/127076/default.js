integration.meta = {
	'sectionID' : '127076',
	'siteName' : 'Reuters-Smartphone-DE ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706982',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -54
			});
		}
		var navHeight = $("body > header").height();
		$("head").append("<style>#inskinanchor.navOpen{margin-top: " + navHeight + "px}</style>");
		$("head").append("<style>.section-nav{padding-top: 0 !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$(".header-pane-main").css({
		"max-width" : "calc(100% - " + integration.custom.FrameSideRight + "px)"
	});
	$("body > header").css({
		"width" : "calc(100% + " + integration.custom.FrameSideRight + "px)"
	});
	integration.custom.navClick();
	$("body > header > *").on("click", function() {
			integration.custom.navClick();
	});
});

integration.custom.navClick = function() {
	if ($(".header-pane-main").hasClass("active")) {
		$("#inskinanchor").addClass("navOpen");
	} else {
		$("#inskinanchor").removeClass("navOpen");
	}
};
