integration.meta = {
	'sectionID' : '128523',
	'siteName' : 'Tindle Newspapers Regional - Smartphone - ( UK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1020898',
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
		var hHeight = $('.header').height();
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_ScrollAdjustment' : -hHeight,
				'plr_PageHeightAdjustment' : -hHeight
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{min-width: 1px !important;}';
		stylesCSS += '.inskinLoaded cloudflare-app[app="back-to-top-button"][data-position$="right"]{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded #gdpr-modal-banner{width: calc(90% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto !important;}';
		stylesCSS += '.inskinLoaded .nav-full-menu{top: '+ hHeight +'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

