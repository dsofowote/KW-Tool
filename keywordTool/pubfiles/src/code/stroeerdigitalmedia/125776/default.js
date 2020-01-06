integration.meta = {
	'sectionID' : '125776',
	'siteName' : 'Runnersworld',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707637',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -143,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("#container").css({
			"margin-left" : "0px"
		});

		if ($("#topthemen").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#topthemen");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("#frnAdSky").hide();
		$("#header, #main, #topthemen").css({
			"margin-left" : "20px"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

