integration.meta = {
  "sectionID": "124988",
  "siteName": "Ming Watch",
  "publisher": "mingpao",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706761',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 980,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      /* Your PageSkin Tablet Edge Specific code here */
      $("#outer_wrapper").css({
      	"margin-left" : "5px"
      	});
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }
  }
});
