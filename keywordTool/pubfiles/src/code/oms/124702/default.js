integration.meta = {
  "sectionID": "124702",
  "siteName": "Schaumburger Nachrichten",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707282',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 980,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
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