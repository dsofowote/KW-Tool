integration.meta = {
	'sectionID' : '128832',
	'siteName' : 'CharlieIntel - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1037181',
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
		var wWidth = $(window).width();
		$("head").append("<style>.td-header-ad-wrap{display: none !important;}</style>");
		var headerHeight = $('.td-header-menu-wrap').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded ._3zEEtS_0KXn3fBbZiqO5nS{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded.td-search-opened .td-search-wrap-mob, .inskinLoaded #td-mobile-nav{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important; top: 0;}';
		stylesCSS += '.inskinLoaded.td-menu-mob-open-menu .td-menu-background, .inskinLoaded.td-search-opened .td-search-background{width: ' + wWidth + 'px !important; top: 0 !important;}';
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
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});



