integration.meta = {
	'sectionID' : '126839',
	'siteName' : 'Channel NewsAsia - Smartphone - (SG TH)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707648',
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
		$('html').addClass('inskinLoaded');
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded.is-open-nav{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	
});

//************************* Standard integration in case the publisher decides to run standard format campaigns *************************//