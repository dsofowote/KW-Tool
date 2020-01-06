integration.meta = {
	"sectionID" : "124862",
	"siteName" : "Huffington Post",
	"publisher" : "mpublicite",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706601',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_ScrollAdjustment" : 60,
	'plr_FastInit' : true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Tablet Edge */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#wrapper").css({
				"margin-left" : "0px"
			});
			$("#hp_cconsent").css({
				"margin-left" : "0px",
				"max-width" : "1000px"
			});
		} else {
			$("#hp_cconsent,.master-container").css({
				"margin" : "0 auto",
				"max-width" : "1000px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>#float_tracker{ display: none !important}</style>");
});
