integration.meta = {
	"sectionID" : "125241",
	"siteName" : "El Comercio",
	"publisher" : "vocento",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707829',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1050,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$(".wrapper").css({
				"margin-left" : "5px"
			});
			$("#navbar").css({
				"max-width" : "1050px",
				"margin-left" : "20px"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	$("head").append("<style>#navbar {max-width : 1050px;}}</style>");
	$(".ism-frame").parent().css({
		"z-index" : "1005"
	});
});

