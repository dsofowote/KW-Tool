integration.meta = {
	'sectionID' : '129008',
	'siteName' : 'Bride &amp;amp; Groom - Smartphone - ( AU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045583',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var totalWidth = wWidth - integration.custom.FrameSideRight;
		var headerHeight = $(".header").outerHeight();
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_StartScrollOnAnchor' : true
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body, .inskinLoaded .wrapper {overflow: visible !important;}';
		stylesCSS += '.inskinLoaded header.header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .article-body-contents{width: 100% !important;}';
		stylesCSS += '.inskinLoaded .footer__logo a > img{max-width: 100% !important;}';
		stylesCSS += '.inskinLoaded .wrapper{width: ' + totalWidth + 'px !important;}';
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

