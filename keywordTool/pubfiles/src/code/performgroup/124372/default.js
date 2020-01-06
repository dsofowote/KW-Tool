integration.meta = {
	'sectionID' : '124372',
	'siteName' : 'Goal - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '706103',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".widget-header").length == 1) {
								$("<div id='inskinanchor'></div>").insertAfter("header");
								integration.base.setCfg({
										plr_AnchorParent : "#inskinanchor",
										plr_PageHeightAdjustment : -80,
										plr_ForceFrameBottom: 0,
										plr_ScrollAdjustment : 80,
								});
						}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("footer, .ad-leaderboard").css({
				"max-width" : "980px",
				"margin-left" : "0px"
			});
			$(".page-container").css({
				"margin-left" : "0px"
			});
		}
	}
});
