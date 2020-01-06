integration.meta = {
  "sectionID": "125175",
  "siteName": "HD Blog",
  "publisher": "piemme",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1016,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {

    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

      $("#main_container, .container_gray > .bordes_container").css({
      	"margin-left" : "0px"
      });
      $("footer").css({
      	"width" : "1016px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }
  }
});
