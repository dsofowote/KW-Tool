integration.meta = {
	'sectionID' : '128485',
	'siteName' : 'aujourdhui.com - Smartphone - ( FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1017627',
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

		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;

		var stylesCSS = '<style type="text/css">';

		stylesCSS += '.inskinLoaded .main_button_control{max-width: ' + (cwidth - 30) + 'px;}';
		stylesCSS += '.inskinLoaded .navbar-toggle{margin-left: 2px; margin-right: 2px;}';

		var logoWidth = cwidth - 80;

		stylesCSS += '.inskinLoaded .navbar-brand.aj-navbar-brand > img{max-width: ' + logoWidth + 'px; margin-top: 2%;}';
		stylesCSS += '.inskinLoaded .navbar-toggle2{right: 0 !important;}';
		stylesCSS += '.inskinLoaded .img-responsive > img{max-width: 99%;}';
		stylesCSS += '.inskinLoaded .rightcol2 h3{padding: 15px 0;}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
