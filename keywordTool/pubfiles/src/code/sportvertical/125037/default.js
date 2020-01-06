integration.meta = {
	"sectionID" : "125037",
	"siteName" : "Fussballtransfer",
	"publisher" : "sportvertical",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1002,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("body").css({
				"max-width" : "1002px"
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
		}
	}
});
