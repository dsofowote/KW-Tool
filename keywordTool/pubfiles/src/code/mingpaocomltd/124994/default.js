integration.meta = {
  "sectionID": "124994",
  "siteName": "Partyline",
  "publisher": "mingpao",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707499',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 996,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").css({
      "background-image": "none",
      "height": "auto"
    });
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      integration.base.setCfg({
        plr_PageAlignment: 'left'
      });
      $("#bkg_wrapper").css({
        "width": "996px",
        "margin-left": "0"
      });
    }
  }
});
