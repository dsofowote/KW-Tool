integration.meta = {
	'sectionID' : '128938',
	'siteName' : 'Goal.com AU - Smartphone - ( AU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1043001',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 99 !important;}';
		stylesCSS += '.header-opened .ism-frame:nth-of-type(1){top: 50px !important;}';
		stylesCSS += '.header-closed .ism-frame:nth-of-type(1){top: 0px !important;}';
		stylesCSS += '.inskinLoaded #/67970281/DISPLAY_OWNED_GBL/goalcom_responsive/news_articles/topbanner {display: none;}';

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

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
