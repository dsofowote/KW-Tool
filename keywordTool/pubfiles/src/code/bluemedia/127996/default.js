integration.meta = {
	'sectionID' : '127996',
	'siteName' : 'Gonzoo - Smartphone - (ES)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965314',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
  'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".header-logo").outerHeight();
		if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
								plr_ScrollAdjustment : -15
            });
        }
			$("#inskinanchor").css({
					"top" : headHeight,
					"position" : "relative"
				});
		$('body').addClass('inskinLoaded');
		integration._addPixel();
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .wrapper{min-width: 245px; max-width: 100%; margin-bottom: 7px !important;} .inskinLoaded section{width: 97% !important;} .inskinLoaded{padding: 0 74px 0 0; overflow-x: hidden !important;} html{overflow-x: hidden; padding: 0 !important;} }';
		stylesCSS += '.inskinLoaded footer h2, .inskinLoaded footer .links{margin: 10px 0 10px 5px; width: 100%;}';
		stylesCSS += '.inskinLoaded #mundial-teams .grupo li{width: 19%!important;}';

		/* iPhone 5 */
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .articulo .der{padding: 0 !important;} .inskinLoaded .bot-redes-sociales li{width: 33px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.frameTop = e.data.plr_FrameTop;
	$("head").append('<style>#sidr{top: ' + integration.custom.frameTop + 'px !important;}</style>');
	$('#mobile-button-link').click(function() {
		$('#content-wrapper').css({
			"position" : "relative",
			"min-width" : "100%",
			"z-index" : "99"
		});
	});
})

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});
