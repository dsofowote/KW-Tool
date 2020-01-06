integration.meta = {
	'sectionID' : '128829',
	'siteName' : 'Haus.de - Smartphone - ( AT CH DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1036093',
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
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded{overflow-x: visible !important;}';
		stylesCSS += '.inskinLoaded body{min-width: 300px !important;}';
		stylesCSS += '.inskinLoaded .dialog-off-canvas-main-canvas{margin-top: ' + integration.custom.FrameTop + 'px !important;}';
		stylesCSS += '.inskinLoaded .site__main--content-wide .social-sticky-bar{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto;}';
		stylesCSS += '@media only screen and (max-width: 380px) {.inskinLoaded .site__main--content-wide .social-sticky-bar a{margin-right: .9rem !important;}}';
		stylesCSS += '@media only screen and (max-width: 380px) {.inskinLoaded .site__main--content-wide .social-sticky-bar .social-share-whatsapp{margin-left: 0 !important;}}';
		stylesCSS += '@media only screen and (max-width: 380px) {.inskinLoaded .page-title__title{word-break: break-word;}}';
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

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
