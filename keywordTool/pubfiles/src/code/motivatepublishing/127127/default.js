integration.meta = {
	'sectionID' : '127127',
	'siteName' : 'Gulf Business - Smartphone - (UAE) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708031',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		if ($("#page > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -113,
			});
		}

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page{overflow-x:visible;box-shadow:none}';
		stylesCSS += '.inskinLoaded .navigation-wrap{padding-bottom:20px}';
		stylesCSS += '.inskinLoaded .mobad_top{display:none !important}';
		stylesCSS += '.inskinLoaded .catfish #close{margin-right:' + integration.custom.PageSkinRightPanel + 'px;display:none;}';
		stylesCSS += '.inskinLoaded #page > header{width:calc(100% + ' + integration.custom.PageSkinRightPanel + 'px);padding-top:0px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
}); 