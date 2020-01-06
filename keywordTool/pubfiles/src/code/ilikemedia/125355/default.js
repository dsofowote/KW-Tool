integration.meta = {
  "sectionID": "125355",
  "siteName": "Active Beat",
  "publisher": "ilikemedia",
  "platform": "desktop"
};

integration.telemetry.setup({ 
  'url': true
});

integration.testParams = {
  "desktop_resolution": [1240]
};

integration.params = {
  'mf_siteId': '681696',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 980,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=div-gpt-ad-] , video-frame"
};

integration.on("layoutChange", function(e) {
  var top = e.data.plr_FrameTop;
  var backgroundTopOffset = top - 15; /*background position throughout site is -15px at top*/
  $("body").css({
    "background-position": "50% " + backgroundTopOffset + "px",
    "background-size": "980px 354px",
    "background-repeat": "no-repeat"
  });

});

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin == true) {
    var skinHeight = 85;
    if (e.data.productType == "PageSkin2Plus" || e.data.format == "Pageskin Plus") {
      skinHeight = 235;
    }
    $("body").css({
      "background-position": "50% " + skinHeight + "px",
      "background-size": "980px 354px",
      "background-repeat": "no-repeat"
    });
    $("#wrapper-footer , #basement, #full-header-container").css({
      "max-width": "980px",
      "margin": "0 auto"
    });
  }
});
