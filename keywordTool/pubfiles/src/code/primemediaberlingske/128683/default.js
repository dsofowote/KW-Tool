integration.meta = {
	'sectionID' : '128683',
	'siteName' : 'Weekendavisen - Tablet - (DK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029517',
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
		if ($(".main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".main-content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>footer, .paywall-wrapper-outer, .container-fluid.main-content{margin: 0 !important;} body{overflow: visible !important;}</style>");
		}
		$("head").append("<style>body{overflow: visible !important;} .container-fluid.main-content{overflow-x: hidden !important;} .sticky-top--top{z-index: 10 !important;}</style>");

		integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
		integration.base.setCfg({
			plr_PageHeightAdjustment : -integration.custom.PageSkinBottomPanel
		});

		$(".container-fluid.main-content").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$("footer, .paywall-wrapper-outer").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$(".container-fluid.main-content").css({
			"padding" : "0px"
		});
	}
});
