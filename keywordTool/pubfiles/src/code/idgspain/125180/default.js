integration.meta = {
	"sectionID" : "125180",
	"siteName" : "GameProTV",
	"publisher" : "idg",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706456',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("body").css({
				"max-width" : "920px"
			});
			$("#divCabecera, #divCuerpo, #divPie").css({
				"margin-left" : "30px"
			});
		}
	}
});
