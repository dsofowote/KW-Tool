integration.meta = {
  "sectionID": "125297",
  "siteName": "Mirror Get Surrey",
  "publisher": "mirror",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706307',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 970,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#page").css({
    	"margin-top" : "0px"
    });
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $("#page").css({
      	"margin-left" : "0px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }
  }
});
