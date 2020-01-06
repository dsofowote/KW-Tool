integration.meta = {
	"sectionID" : "125048",
	"siteName" : "RP-Online",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706619',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};
integration.on("adCallResult", function(e) {
	//integration._addPixel();
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#wrapper").css({
				"margin-left" : "10px"
			});
		}
		$("#park-main").css({
			"margin" : "0 auto",
			"max-width" : "950px"
		});
		$(".park-fakebody").css({
			"padding-top" : "0"
		});
		$(".park-section-portal-top__content").css({
			"margin-bottom" : "0"
		});
		$(".park-footer").css({
			"margin" : "0 auto",
			"max-width" : "960px"
		});
		$("#topcontainer").hide();
	}
});
