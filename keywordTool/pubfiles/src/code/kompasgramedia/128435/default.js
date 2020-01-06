integration.meta = {
	'sectionID' : '128435',
	'siteName' : 'BolaSport - Smartphone - ( ID )',
	'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013326',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("#body > header").height();
		if ($("#body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative",
			"z-index" : "10"
		});

		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameBottom = e.data.plr_FrameBottom;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #sticky-mobile-r, .inskinLoaded #js-banner-sticky{display: none;}';
		stylesCSS += '.inskinLoaded #body > header{z-index: 15;}';
		stylesCSS += '.inskinLoaded #buttonToTop{right: ' + (integration.custom.FrameSideRight + 5) + 'px;}';
		stylesCSS += '.inskinLoaded .instagram-media.instagram-media-rendered{max-width: ' + cwidth + 'px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});
