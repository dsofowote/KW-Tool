integration.meta = {
  "sectionID": "124688",
  "siteName": "Daily Motion",
  "publisher": "dailymotion",
  "platform": "tablet"
};

integration.telemetry.setup({ 
	'custom': false
});

/* Disable WebTrekk for invalid calls and limit empty calls to 5% */
integration.wtBlacklist = true;
integration.wtLimitEmptyAdCalls = 0.05;




/* Disable WebTrekk */
integration.wtBlacklist = true;

integration.testParams = {};

integration.params = {
	
	'mf_siteId' : '706576',
  "srv_SectionID": "124688",
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
    $(".sd_footer").css({
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
       "max-width" : "960px",
       "margin" : "0 auto",
       "display" : "block"
    });
    $("#player_container").css({
       "max-height" : "361px"
    });
    $("#topwrapper").css({
       "margin-top" : "50px"
    });
    
	$('#topwrapper > div.back-to-top').css({
		'right' : '150px'
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
      $(".sd_footer").css({
          "width": "970px",
          "left": "50%",
          "margin-left": "-625px",
          "z-index": "1"
        });
      $("#close_super_header").css({
         "margin-right" : "10px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
      
	  $('#topwrapper > div.back-to-top').css({
	  	'right' : '320px'
	  });
    }
  }
});

integration.on("adServed", function(e) {
  $("head").append("<style>.ism-frame  { z-index: 13 !important;}</style>");
  $(".ism-frame").parent().css({
     "top" : "45px"
  });
});

window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"http://www.dailymotion.com/masscast/RealMedia/ads/adstream_jx.ads/dailymotion.com/passback_Skin_ISM-UDT@x28\"><\\script>";
};

integration.enableTelemetryTest = false;
