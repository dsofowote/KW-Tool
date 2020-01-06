integration.meta = {
	'sectionID' : '127627',
	'siteName' : 'ICON - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '775803',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #container, .inskinLoaded .sidebar{padding-left: 0px; padding-right: 0px;}';
		stylesCSS += 'body.inskinLoaded{padding-right:0px !important}';
		stylesCSS += '.inskinLoaded #burger-menu-wrapper, .inskinLoaded #top-nav-wrapper, .inskinLoaded #burger-menu{max-width:' + (windowWidth - e.data.plr_FrameSideRight) + 'px;}';
		stylesCSS += '.inskinLoaded .btn-btt{right:' + e.data.plr_FrameSideRight + 'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
