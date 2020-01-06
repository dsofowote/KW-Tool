integration.meta = {
	'sectionID' : '128880',
	'siteName' : 'The Independent SG - (Pagelead) - Smartphone - ( MY SG US )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1040607',
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
		integration.custom.FrameTop = e.data.plr_FrameTop;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .td-header-wrap{z-index: 98 !important;}';
		stylesCSS += '.inskinLoaded.td-search-opened .td-search-background, .inskinLoaded.td-menu-mob-open-menu .td-menu-background{top: ' + (-integration.custom.FrameTop) + 'px !important;}';
		stylesCSS += '.inskinLoaded.td-search-opened .td-search-background, .inskinLoaded.td-menu-mob-open-menu .td-menu-background{height: calc(100% + ' + integration.custom.FrameTop + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

