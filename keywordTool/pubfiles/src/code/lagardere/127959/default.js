integration.meta = {
	'sectionID' : '127959',
	'siteName' : '	Boursier.com-Smartphone-FR',
	'platform' : 'desktop'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956646',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_ScrollAdjustment" : 57,
	"plr_StartScrollOnAnchor" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#overall > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#overall > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -150
			});
		}
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += ' .inskinLoaded body{overflow:visible;min-width:300px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded #overall > header{width:calc(100% + " + integration.custom.FrameSideRight + "px)}</style>");
});
integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

