integration.meta = {
	'sectionID' : '128642',
	'siteName' : 'Traveller - Smartphone - (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1028294',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var headerHeight = $('div.navigation').height() + $('header.header-wrap').height();
		if ($(".nav--secondary__wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("div.navigation");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -91,
				'plr_ScrollAdjustment': -40
			});
		} else if ($("header.header-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("div.navigation");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -51
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor{top: 51px !important;}';
		stylesCSS += '.inskinLoaded .social--always-sticky, .inskinLoaded ul.social.social--horizontal.is_fm-stickyElement{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .nav--secondary__wrap{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important; z-index: 99 !important;}';
		stylesCSS += '.inskinLoaded .nav--secondary__wrap.is-visible{width: 100% !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

