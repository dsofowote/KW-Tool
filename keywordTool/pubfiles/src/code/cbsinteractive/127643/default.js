integration.meta = {
	'sectionID' : '127643',
	'siteName' : 'Download.com - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '771614',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_StartScrollOnAnchor' : true,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#page-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -60
			});
		}
		$("#rbFooter").css({
			"width" : "980px",
			"margin" : "0 auto"
		});
		$("html.desktop .page-header").css({
			"width" : "100%"
		});
		$("#wrapper").css({
			"overflow-x" : "hidden"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#page-header").css({
				"margin-left" : "-20px"
			});
			$(".grid-container, #rbFooter").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var extraWidth = integration.custom.FrameSideRight + integration.custom.FrameSide;
	var headerWidth = $(".grid-container").outerWidth();
	$("#page-header").css({
		"min-width" : extraWidth + headerWidth
	});
	$("#download-fd-leaderboard-ad-top, #download-leaderboard-ad-bottom").css({
		"max-width" : "calc(100% - " + (integration.custom.FrameSide + integration.custom.FrameSideRight) + "px)",
		"margin" : "auto"
	});
	if (integration.custom.isEdge == true) {
		$("head").append("<style>#download-fd-leaderboard-ad-top, #download-leaderboard-ad-bottom{margin-left: " + integration.custom.FrameSide + "px !important;}</style>");
	}
});

integration.on('adServed', function(e) {
	$("#wrapper").css({
		"overflow-x" : "visible"
	});
});