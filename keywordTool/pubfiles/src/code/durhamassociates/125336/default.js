integration.meta = {
	"sectionID" : "125336",
	"siteName" : "Sports Network",
	"publisher" : "durham",
	"platform" : "tablet"
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {};

integration.params = {


  'mf_siteId': '681731',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 1,
	"plr_HideElementsByID" : "",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				$("#header, #container, #footer, #footer-top").css({
					"margin-left" : "0px"
				});
				integration.base.setCfg({
					plr_PageAlignment : "left"
				})
			}
	}
});
