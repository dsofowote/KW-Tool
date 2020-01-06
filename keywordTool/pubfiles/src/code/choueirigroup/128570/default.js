integration.meta = {
	'sectionID' : '128570',
	'siteName' : 'Annahar - Smartphone - (MENA)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1023812',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".main").outerHeight();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top:' + headHeight + 'px;}';
		stylesCSS += '.inskinLoaded header{position:fixed;top:0px;right:0px;z-index:1000}';
		stylesCSS += '.inskinLoaded section.page{padding-top:0px;}';
		stylesCSS += '.inskinLoaded .toTop{right:' + integration.custom.FrameSideRight + 'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

