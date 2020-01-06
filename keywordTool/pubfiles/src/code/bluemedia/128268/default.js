integration.meta = {
	'sectionID' : '128268',
	'siteName' : '20 Minutos Listas - Tablet - ( ES )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '996181',
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
		$(".numero-elemento").css({
			"left" : "0px"
		});
		$("#listas").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$(".listas_banner").hide();

		var headHeight = $("#ui-header-down").height();
		if ($("#header-20m").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-20m");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_ScrollAdjustment : headHeight - 8,
				plr_PageHeightAdjustment : -headHeight
			});
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#listas").css({
				"margin" : "0"
			});
		}
	}
});
