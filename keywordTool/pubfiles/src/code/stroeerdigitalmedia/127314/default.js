integration.meta = {
	'sectionID' : '127314',
	'siteName' : 'GoFeminin - Smartphone - (AT CH DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707977',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
  "plr_FastInit": true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #content{overflow-x: hidden;}';
		stylesCSS += '.inskinLoaded {overflow: visible;}';
		stylesCSS += '.inskinLoaded #af-scrollspy{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; z-index: 9999;}';
		var cWidth = $(window).width() - integration.custom.FrameSideRight;
		stylesCSS += '.inskinLoaded .af_colCentre{width: ' + cWidth + 'px !important;}';
		stylesCSS += '.inskinLoaded .spacer{height: 0 !important;}';
		stylesCSS += '.inskinLoaded .af_colCentre .lm_next, .inskinLoaded .af_colCentre .lm_prev{display: none;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('header').height();
	$(".ism-frame").parent().css({
		"margin-top" : headerHeight,
		"z-index" : "99999"
	});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headerHeight
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
