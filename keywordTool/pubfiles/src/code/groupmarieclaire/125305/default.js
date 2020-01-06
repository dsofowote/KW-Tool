integration.meta = {
	"sectionID" : "125305",
	"siteName" : "Marie Claire Maison",
	"publisher" : "groupemarieclaire",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707785',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("#header, #page, #footer").css({
				"max-width" : "1020px",
				"margin-left" : "0px"
			});
		} else {
			$("#header, #page, #footer").css({
				"max-width" : "1020px",
				"margin" : "0 auto"
			});
		}
	}
});
