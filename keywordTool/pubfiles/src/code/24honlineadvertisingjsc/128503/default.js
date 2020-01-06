integration.meta = {
	'sectionID' : '128503',
	'siteName' : 'Eva - Smartphone - ( US VN )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1018535',
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
		var header = $("header.hdr");
		var nav = $("nav.menutp");
		$(header).prepend(nav);
		integration.custom.FSR = e.data.plr_FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded header.hdr{position:relative;}';
		stylesCSS += '.inskinLoaded nav.menutp{}';
		stylesCSS += '.inskinLoaded #arPgeUp{right:' + integration.custom.FSR + 'px;}';
		stylesCSS += '.inskinLoaded .bn-top-header-fixed{position:relative;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

