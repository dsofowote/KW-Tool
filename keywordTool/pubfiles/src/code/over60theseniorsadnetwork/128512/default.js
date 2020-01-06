integration.meta = {
	'sectionID' : '128512',
	'siteName' : 'Over60 - Smartphone - (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '1019875',
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
		integration.custom.headHeight = $("header.fixed-top").outerHeight();

		if ($("header.fixed-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.fixed-top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .mobi-nav-bar{z-index: 50;}';
		stylesCSS += '.inskinLoaded .pre-footer{padding-right: 5px; padding-left: 5px;}';
		stylesCSS += '.inskinLoaded #main-content-wrap{min-width: 280px;}';
		stylesCSS += '.inskinLoaded .page-heading{min-height:0px}';
		stylesCSS += '.inskinLoaded #st-1 .st-btn > svg{width:15px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		$(".page-heading-wrap .super-hero").css({
			"display" : "none"
		});
	}
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({
		"top" : integration.custom.headHeight,
		"position" : "relative"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	$(".page-heading-wrap .super-hero").css({
		"display" : "block"
	});
});
