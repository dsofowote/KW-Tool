integration.meta = {
	'sectionID' : '126664',
	'siteName' : 'Kicker - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707898',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	"plr_FastInit": true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.headHeight = $("header").outerHeight();
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		//stylesCSS += '.inskinLoaded #ad-int{display:none;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({
		"top" : integration.custom.headHeight
	})

	integration.base.setCfg({
		plr_PageHeightAdjustment : -integration.custom.headHeight
	});
});

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
	$('#inskinanchor').remove();
});

