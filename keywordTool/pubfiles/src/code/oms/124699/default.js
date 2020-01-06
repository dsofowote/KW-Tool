integration.meta = {
  "sectionID": "124699",
  "siteName": "M�rkische Allgemeine",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
  'mf_siteId': '707312',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": "",
  //"plr_GetContentHeightVersion": 2,
  //"plr_EnableActiveResize" : false
};

integration.on('adCallResult', function (e) {
  if (e.data.hasSkin) {
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
    })
  }
});

integration.on('adServed', function (e) {
  var headHeight = $(".pdb-navbar").outerHeight();
  $(".ism-frame").parent().css({
    "top": headHeight,
    "position": "relative"
  });
});