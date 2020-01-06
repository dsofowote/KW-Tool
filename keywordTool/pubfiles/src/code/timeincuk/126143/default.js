integration.meta = {
   'sectionID' : '126143',
   'siteName' : 'Woman Magazine - Tablet - NON UK',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706986',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$("body").css({
			"background-image" : "none"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#container, #subscribebar").css({
				"margin-left" : "0px"
			});

			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#wrapper").css({
				"margin-left" : "0"
			});
		}
	}
});