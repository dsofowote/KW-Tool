integration.meta = {
	"sectionID" : "124404",
	"siteName" : "UKTV Good Food",
	"publisher" : "uktv",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
  'mf_siteId': '681707',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#site-footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"position" : "fixed"
		});
		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Your PageSkin Tablet Edge Specific code here */
			$("head").append("<style>#nav-bar.sticky{margin-left:20px;}</style>");
			$("body .full-wrapper").css({
				"margin-left" : "0"
			});
			$("#site-footer").css({
				"margin-left" : "20px"
			});
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		} 
	}
});

integration.on("layoutChange", function(e){
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
