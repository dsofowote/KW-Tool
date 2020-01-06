integration.meta = {
	'sectionID' : '128138',
	'siteName' : 'Unilad - Smartphone - ( INT exc. UK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '980781',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_PageScanExclude" : "script, .OUTBRAIN, #sidebar"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .prl-span-12, #m-section, #sidebar{max-width:100%;}';
		stylesCSS += '.inskinLoaded{overflow: visible !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	integration.custom.constrain();
	$(window).on("resize", function() {
		integration.custom.constrain();
	});
});

integration.custom.constrain = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = ".fb_iframe_widget iframe{max-width:" + (contentWidth - 30) + "px !important;min-width:" + (contentWidth - 30) + "px !important;}";
	$("#inskinStyles").html(newValue);
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});
