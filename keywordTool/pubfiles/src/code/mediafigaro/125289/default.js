integration.meta = {
	"sectionID" : "125289",
	"siteName" : "Sante et Medecine ",
	"publisher" : "ccmbenchmark",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707784',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("header, #section, .foot").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#oasLayout, header, #section, .foot").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1002"
	});
});
