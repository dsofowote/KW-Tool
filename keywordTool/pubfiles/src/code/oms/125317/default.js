integration.meta = {
	"sectionID" : "125317",
	"siteName" : "Tonight",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706537',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("body > .container").css({
				"margin-left" : "0px"
			});
			$(" body > header, body > footer").css({
				"width" : "980px",
				"margin-left" : "0px"
			});
		}
		$("#sky").css({
			"width" : "auto"
		});
	}
});
