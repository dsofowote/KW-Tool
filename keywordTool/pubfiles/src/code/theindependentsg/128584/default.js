integration.meta = {
	'sectionID' : '128584',
	'siteName' : 'The Independent SG - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024299',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .td-menu-background:before, .inskinLoaded .td-search-background:before{top: -' + integration.custom.FrameTop + 'px !important;}';
		stylesCSS += '.inskinLoaded #td-outer-wrap{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .td-menu-mob-open-menu #td-mobile-nav, .inskinLoaded .td-search-opened .td-search-wrap-mob{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});
