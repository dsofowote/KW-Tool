integration.meta = {
	'sectionID' : '127578',
	'siteName' : 'CLEO - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '752182',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wWidth = $(window).width();
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {padding-right: 0 !important;}';// Needed to prevent interstitial to break the layout.
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded #back-top{right: " + integration.custom.FrameSideRight + "px;}</style>");
	window.dispatchEvent(new Event('resize'));
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	window.dispatchEvent(new Event('resize'));
	$('.slick-next').trigger("click");
});
