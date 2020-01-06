integration.meta = {
  "sectionID": "125013",
  "siteName": "Gazeta",
  "publisher": "sup",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 980,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $(".main_frame, #adv_720x90").css({
      	"margin-left" : "0px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }
  }
});
