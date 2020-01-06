integration.meta = {
   'sectionID' : '126284',
   'siteName' : 'Computerbild (DE campaigns only) - Tablet - (INT)',
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706790',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
  "plr_FastInit": true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css("padding-right", "0px");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#page_margins").css({
				"margin-left" : "0px"
			});
		}
	}
});
