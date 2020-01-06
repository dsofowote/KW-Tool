integration.meta = {
	"sectionID" : "124526",
	"siteName" : "The Lady",
	"publisher" : "lady",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {


  'mf_siteId': '681732',
	"plr_UseCreativeSettings" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "",
	"plr_ContentW" : 1160,
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#container").css({
				"margin-left" : "0px"
			});
		}
	}
});
