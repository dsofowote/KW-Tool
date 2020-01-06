integration.meta = {
	'sectionID' : '125623',
	'siteName' : 'ESPN - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {

	'mf_siteId' : '1004032',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''

};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.height = $("#header-wrapper").height();
		$(".ad-slot-banner").hide();
		if ($("body > #global-viewport > #header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > #global-viewport > #header-wrapper");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				'plr_PageHeightAdjustment' : -integration.custom.height
			});
		}
		$("#inskinanchor").css({
			"top" : integration.custom.height,
			"position" : "relative"
		});
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("head").append("<style>#global-viewport #pane-main{width: 1280px !important;}</style>");
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000055"
	});
});

