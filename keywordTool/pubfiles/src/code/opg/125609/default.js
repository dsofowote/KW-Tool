integration.meta = {
	'sectionID' : '125609',
	'siteName' : 'Oriental Daily',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707229',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		if ($(".navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navbar");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -45
			});
		}
		$("#inskinanchor").css({
			"margin-top" : "45px"
		});
		$("#sb-site").css({
			"padding-top" : "0px"
		});
		$("#swipe").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow" : "visible"
		});
		$("#slide").css({
			"z-index" : "100"
		});
		$("head").append("<style>.navbar{width:100% !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#swipe").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
		}
	}
});
