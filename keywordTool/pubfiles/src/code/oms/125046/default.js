integration.meta = {
	"sectionID" : "125046",
	"siteName" : "Stuttgarter-zeitung",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707208',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1002,
	"plr_GetContentHeightVersion" : 2,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {		
		$('#wrapper').css({
			"margin" : "0 auto",
			"margin-top" : "10px",
			"padding" : "0"
		});
		$('header').css({
			"max-width" : "1002px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#wrapper").css({
				"margin-left" : "0px"
			});
			$("header").css({
				"margin-left" : "20px",
				"left" : "0"
			});
		}
	}
});
