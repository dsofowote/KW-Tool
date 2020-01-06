integration.meta = {
	'sectionID' : '127909',
	'siteName' : 'Irish Examiner - IE - Smartphone - (IE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '920751',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_FastInit" : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		var navHeight = $("body > header").height();
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + navHeight + 'px;}';
		stylesCSS += '.inskinLoaded .secondary{margin-top: 0;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
	integration.telemetry.recordCustom("Ad Closed / User Agent: " + navigator.userAgent + "");
});
