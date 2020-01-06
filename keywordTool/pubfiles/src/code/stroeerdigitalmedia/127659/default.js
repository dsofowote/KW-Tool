integration.meta = {
	'sectionID' : '127659',
	'siteName' : 'Erdbeerlounge - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '778087',
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
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('html').addClass('inskinLoaded');
		var headerHeight = $('.header').outerHeight();
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .overflow-content{overflow: visible;} .inskinLoaded div span, .inskinLoaded .title-hd{word-break: break-all;}';
		stylesCSS += '.ebl-ctx-type-post{margin-top: ' + headerHeight + 'px;}';
		stylesCSS += '.inskinLoaded body{overflow-x: visible;} .header{box-shadow: none;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .canvas, .inskinLoaded .socials-block{max-width: ' + contentWidth + 'px;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
}

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});
