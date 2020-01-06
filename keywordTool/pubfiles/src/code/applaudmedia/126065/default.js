integration.meta = {
	"sectionID" : "124415",
	"siteName" : "Babynames.co.uk",
	"publisher" : "theinternetworks",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	
	
	'mf_siteId' : '707262',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1025,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#container").css({
			"marginTop" : "10px",
			"marginBottom" : "10px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#WrapperMain, #container").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			})
		}
	}
});
