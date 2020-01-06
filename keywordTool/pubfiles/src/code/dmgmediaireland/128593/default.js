integration.meta = {
	'sectionID' : '128593',
	'siteName' : 'Extra - Smartphone - (IE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1025134',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var windowWidth = $(window).width();

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .td-scroll-up.td-scroll-up-visible, .inskinLoaded .arrowRight, .inskinLoaded #image-count-box{right:' + integration.custom.FrameSideRight + 'px}';
		stylesCSS += '.inskinLoaded #td-mobile-nav{background:linear-gradient(to bottom,#000000 0%,#414142 100%);width:' + windowWidth + 'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
