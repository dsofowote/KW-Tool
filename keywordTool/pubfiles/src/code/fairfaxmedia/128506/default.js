integration.meta = {
	'sectionID' : '128506',
	'siteName' : 'Over Sixty - Tablet - ( AU )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1019129',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("body > header").height();
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_ScrollAdjustment : -headerHeight
			});
		}

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			var wrapWidth = $(".page-wrap").outerWidth();
			$(".footer-wrap, .page-wrap").css({
				"margin-left" : "20px"
			});
			$(".pre-footer > ul").css({
				"max-width" : wrapWidth
			});
			integration.custom.FrameSide = e.data.plr_FrameSide;
			$("body > header").css({
				"margin-left" : -integration.custom.FrameSide
			});
		}
	}
});
