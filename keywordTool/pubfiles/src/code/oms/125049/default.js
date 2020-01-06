integration.meta = {
	"sectionID" : "125049",
	"siteName" : "Frankfurter Rundschau",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707363',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_GetContentHeightVersion" : 2,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"min-width" : "980px",
			"max-width" : "980px"
		});
		$("#main-header, #main-nav, #nav-wrapper, #footer-wrapper").css({
			"min-width" : "1000px",
			"max-width" : "1000px",
			"padding" : "0"
		});
		$("#content-wrapper").css({
			"width" : "980px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("body").css({
				"min-width" : "990px",
				"max-width" : "990px"
			});
		}
	}
});
