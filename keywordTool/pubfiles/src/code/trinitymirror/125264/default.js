integration.meta = {
	"sectionID" : "125264",
	"siteName" : "Mirror Liverpool Echo",
	"publisher" : "mirror",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706391',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#div-gpt-ad-oop").css({
			"width" : "970px",
			"margin" : "0 auto"
		});
		$("#page").css({
			"margin-top" : "0px"
		});
		$(".takeover").css({
			"width" : "auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#page").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
	}
});
