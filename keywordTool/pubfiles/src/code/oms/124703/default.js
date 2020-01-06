integration.meta = {
  "sectionID": "124703",
  "siteName": "Peiner Allgemeine",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707529',
  "plr_UseCreativeSettings": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": "",
  'plr_ContentW': 978,
  'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function (e) {
  if (e.data.hasSkin) {
    var panelWidth = e.data.plr_FrameSideRight;
    var width = $(window).width();
    var headHeight = $(".pdb-navbar").outerHeight();
    $('.pdb-navbar').css({
      "left": "0px",
      "right": "0px",
    });
    $("#seite.page").css({
      "margin": "0px",
      "float" : "none",
      "margin-top" : headHeight
    });
    $(".pdb-footer").css({
      "float" : "none"
    });
    if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide || width > 1400) {
      var sideWidth = width - 978 - panelWidth - 20;
      $("#twslidead").css({
          "right" : sideWidth + 20
      });
    } else {
        $("#twslidead").css({
            "right" : "10px"
        });
    }
  }
});

integration.on('adServed', function (e) {
  var headHeight = $(".pdb-navbar").outerHeight();
  $(".ism-frame").parent().css({
    "top": headHeight,
    "position": "relative"
  });
});
