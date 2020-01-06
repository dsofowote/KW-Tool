integration.meta = {
	'sectionID' : '126285',
	'siteName' : 'Finanzen.net - (DE campaigns only) - Tablet - (AT CH DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707751',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$("#bs_abstand").hide();
		$(".mainNaviIpadPlaceholder").css({
			"height" : "0"
		});
		$(".wrapper").css({
			"max-width" : "1060px",
			"margin" : "0px"
		});
		$("head").append("<style>.wrapper .bs-wrapper{display: none !important;}</style>");
		$("head").append("<style>#fnb-popup-integration{left: " + integration.custom.FrameSide + "px !important;}</style>");
		$("head").append("<style>#bodyCenter{margin: 0 !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideLeft = e.data.plr_FrameSide;
	$("#mainNaviIpad").css({
		"margin-left" : -integration.custom.FrameSideLeft
	});
});
