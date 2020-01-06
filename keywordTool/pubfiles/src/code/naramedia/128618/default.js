integration.meta = {
	'sectionID' : '128618',
	'siteName' : 'Beautiful Nara - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026738',
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
		stylesCSS += '.inskinLoaded img.aligncenter{width: 100% !important;} .inskinLoaded blockquote{margin: 0 !important;}';
		stylesCSS += '.inskinLoaded .mobile-ads{margin-left: -15px !important;}';
		stylesCSS += '.inskinLoaded div#page.container{padding-left: 10px !important; padding-right: 10px !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded div#page.container{padding-left: 0 !important; padding-right: 0 !important;}}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

