integration.meta = {
	"sectionID" : "125315",
	"siteName" : "Abendzeitung München ",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706748',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1060,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		
		$(".site, .main-nav-wrapper").css({
			"max-width" : "1060px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("body").css({
				"margin-left" : "0px"
			});
		}
	}
});
