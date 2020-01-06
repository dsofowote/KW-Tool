integration.meta = {
	'sectionID' : '126481',
	'siteName' : 'Prima - Tablet - ( FR )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1005848',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_Responsive' : true,
	//'plr_FluidAnchor' : true,
	//'plr_Fluid' : true,
	//'plr_ScaleElement' : '#inskinDiv'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/*
		//To wrap content within div
		var bodyContent = $("body > *");
		$(bodyContent).wrapAll("<div id='inskinDiv' class='ism'></div>");
		
		if ($("#inskinDiv").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#inskinDiv");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
			*/
			
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
