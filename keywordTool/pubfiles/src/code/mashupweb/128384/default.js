integration.meta = {
	'sectionID' : '128384',
	'siteName' : 'Football Addict - Smartphone - (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1007626',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .col-xs-12{padding-left: 5px !important; padding-right: 5px !important;}}';
		stylesCSS += '.inskinLoaded .container{padding-left: 0 !important; padding-right: 0 !important;}';
		stylesCSS += '.inskinLoaded .footer{bottom: -3em !important;}';
		stylesCSS += '.inskinLoaded #return-to-top{right: '+ integration.custom.FrameSideRight +'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

