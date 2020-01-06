integration.meta = {
	'sectionID' : '127540',
	'siteName' : 'Autosport ME - Smartphone - (MENA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '737746',
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
		if ($(".responsive-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".responsive-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -55,
			});
		}
		$('body').addClass('inskinLoaded');
	}
});

integration.on('adServed', function() {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .content-wrap{padding-left: 1px !important; padding-right: 0px !important;}}';
	stylesCSS += '.inskinLoaded {direction: ltr;} .inskinLoaded>*{direction: rtl;} .inskinLoaded .vc_row.wpb_row{width: 100% !important; padding-right: 0 !important; right: 0 !important;}';
	stylesCSS += '.inskinLoaded .responsive-header.clearfix.light.deferred-block-exclude {width: 100px !important;}';
	stylesCSS += '.inskinLoaded .bs-pinning-block.normal{position:fixed !important;} .inskinLoaded .back-top{right: ' + integration.custom.FrameSideRight + 'px; bottom: ' + integration.custom.FrameBottom + 'px;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
