integration.meta = {
  "sectionID": "125151",
  "siteName": "Corriere",
  "publisher": "rcs",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1024,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "ads_widepushbar, ads_halfpage"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
      $("body > *").css({
        "max-width": "1024",
        "margin-left": "0px"
      });
      $("#multibar").css({
      	"max-width" : "1024px"
      });
      /*this.custom.PageSkinEdgeEnabled = 1;*/
    }
  }
});

integration.on("layoutChange", function(e) {
 /* this.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
  var marginLeftPageSkinLeftPanel = 0 - PageSkinLeftPanel;
  if (this.custom.PageSkinEdgeEnabled == 1) {
    $("#multibar").css({
    	"margin-left" : marginLeftPageSkinLeftPanel
    });
  }*/
  $(".ism-frame").parent().css({
  	"z-index" : "10000"
  })
});
