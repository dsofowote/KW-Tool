integration.meta = {
	'sectionID' : '128684',
	'siteName' : 'Weekendavisen - Smartphone - (DK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029518',
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
		var headerHeight = $('header').height();
		integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".main-content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow-x: visible !important;}';
		stylesCSS += '.inskinLoaded{padding: 0px 74px 0px 0px !important;}';
		stylesCSS += '.inskinLoaded .paywall-wrapper-outer{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;!important;}';
		stylesCSS += '.inskinLoaded .container-fluid.main-content{overflow-x: hidden !important;} .inskinLoaded .sticky-top--top{z-index: 99 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

