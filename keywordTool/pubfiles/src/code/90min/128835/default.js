integration.meta = {
	'sectionID' : '128835',
	'siteName' : 'FortniteIntel - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1037184',
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
		integration.custom.FrameTop = e.data.plr_FrameTop;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .td-header-wrap{z-index: 98 !important;}';
		stylesCSS += '.inskinLoaded.td-search-opened .td-search-background, .inskinLoaded.td-menu-mob-open-menu .td-menu-background{top: ' + (-integration.custom.FrameTop) + 'px !important;}';
		stylesCSS += '.inskinLoaded.td-search-opened .td-search-background, .inskinLoaded.td-menu-mob-open-menu .td-menu-background{height: calc(100% + ' + integration.custom.FrameTop + 'px) !important;}';
		stylesCSS += '.inskinLoaded.td-menu-mob-open-menu #td-mobile-nav, .inskinLoaded.td-search-opened .td-search-wrap-mob{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important; top: 0 !important;}';
		stylesCSS += '.inskinLoaded ._3zEEtS_0KXn3fBbZiqO5nS{right: ' + integration.custom.FrameSideRight + 'px !important;}';
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

integration.on("adServed", function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
