integration.meta = {
	'sectionID' : '128874',
	'siteName' : 'Savoir Flair - Smartphone- MENA',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1039779',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0,
	'plr_ScrollAdjustment' : 85
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskin");
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .c-article__top-category{top: 20px !important;}';
		stylesCSS += '.inskinLoaded .has-open-nav{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .has-open-nav .o-wrapper{overflow-x: visible !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .o-container{padding-left: 5% !important; padding-right: 5% !important;}';
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
	$('html').removeClass('inskinLoaded');
});
