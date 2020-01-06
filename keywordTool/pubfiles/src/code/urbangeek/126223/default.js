integration.meta = {
  "sectionID": "126223",
  "siteName": "Daily Motion Aus",
  "publisher": "dailymotion",
  "platform": "tablet"
};

integration.telemetry.setup({ 
	'custom': false
});

/* Disable WebTrekk for invalid calls and limit empty calls to 5% */
integration.wtBlacklist = true;
integration.wtLimitEmptyAdCalls = 0.05;




integration.testParams = {};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 970,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".sd_header").css({
      "position": "absolute",
      "top": "0px",
      "width": "100%"
    });
    $("#footer").css({
      "width": "970px",
      "left": "50%",
      "margin-left": "-485px",
      "z-index": "1"
    });
    $("#footer").css("marginTop", "-205px");

    $(".sd_metaheader").css({
      "width": "970px",
      "margin": "0 auto",
      "position": "relative",
      "top": "60px"
    });

    /* support extra wide pages */
    $("#wrapper").css({
       "max-width" : "960px"
    });
    $("#player_container").css({
       "max-height" : "361px"
    });
    $("#topwrapper").css({
       "margin-top" : "50px"
    });

    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $("#wrapper").css({
        "width": "960px",
        "margin-left": "10px"
      });
      $(".sd_header").css({
        "margin-left": "-20px"
      });
      $("#footer").css({
        "left": "0px",
        "margin-left": "10px"
      });

      $("#close_super_header").css({
         "margin-right" : "10px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }
  }
});

integration.on("adServed", function(e) {
  $("head").append("<style>.ism-frame  { z-index: 13 !important;}</style>");
  $(".ism-frame").parent().css({
     "top" : "60px"
  });
});

window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"http://www.dailymotion.com/masscast/RealMedia/ads/adstream_jx.ads/dailymotion.com/passback_Skin_ISM-UDT@x28\"><\\script>";
};