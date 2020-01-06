integration.meta = {
	'sectionID' : '125619',
	'siteName' : 'Mac World (International)',
	
	'platform' : 'tablet',
	'restrictions' : 'iOS 7+ only (responsive)'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707311',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_Responsive" : true,
	"plr_Fluid" : false,
	"plr_PageWidthAdjustment" : 76,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true,
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$("body").css({
		"padding-top" : "68px"
	});
	$("#topLeaderBoardHolder").css({
		"margin-top" : "0px",
		"padding-top" : "10px"
	});
	$("#siteFooter").css({
		"width" : "1100px"
	})
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Your PageSkin Tablet Edge Specific code here */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#wrapper, .marketPlace, .idgArticlesContainer").css({
				"margin-left" : "0px"
			})
		} else {
			/* Not edge */
			$("#siteFooter").css({
				"margin" : "0 auto"
			});
		}
	}
}); 