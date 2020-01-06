integration.meta = {
	'sectionID' : '128533',
	'siteName' : 'The Roar - (CREATIVE APPROVAL) - Tablet  - (AU)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1020907',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"width" : "1010px",
				"margin" : "0"
			});
		}
		if ($("#fixedheaders").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#fixedheaders");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -117,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 44
			});
		}
		$("#topbanner").css({
			"display" : "none"
		});
		$("head").append("<style>.ia-player-outer-container.stickified{right: " + (integration.custom.FrameSideRight + 10) + "px !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	$("#newlivescores, #main").css({
		"margin-top" : "0px"
	});
});
