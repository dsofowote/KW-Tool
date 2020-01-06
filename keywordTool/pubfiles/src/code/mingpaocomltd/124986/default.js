integration.meta = {
  "sectionID": "124986",
  "siteName": "Hihoku",
  "publisher": "mingpao",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
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
    $("div").find('img[src$="/templets/new_v01/images/wx.png"]').hide();
    $(".index_bg").css({
      "max-width": "980px",
      "margin": "0 auto"
    });
    $(".footer").css({
      "margin-bottom": "0"
    });
    $("body").css({
      "background-image": "none"
    });

  }
});

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      /* Your PageSkin Tablet Edge Specific code here */
      $('.index_bg').css('margin-left', '0px');
      integration.base.setCfg({
        plr_PageAlignment: 'left'
      });
    }
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css("z-index", "12");
});
