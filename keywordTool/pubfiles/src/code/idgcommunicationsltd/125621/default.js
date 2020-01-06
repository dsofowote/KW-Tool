integration.meta = {
	'sectionID' : '125621',
	'siteName' : 'PC Advisor (International)',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706529',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1100,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true,
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#wrapper").css({
			"padding-top" : "0px"
		});
		$("#topNav, #subHeader").css({
			"position" : "relative",
			"top" : "0px"
		});
		$("#topNav, #subHeader").css({
			"max-width" : "1100px",
			"left" : "0",
			"right" : "0",
			"margin-right" : "auto",
			"margin-left" : "auto"
		});
		$("#siteFooter").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#wrapper").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			})
		}
	}
}); 