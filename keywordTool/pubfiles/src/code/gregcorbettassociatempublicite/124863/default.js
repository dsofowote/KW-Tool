integration.meta = {
  "sectionID": "124863",
  "siteName": "Le Monde",
  "publisher": "mpublicite",
  "platform": "tablet"
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});


integration.testParams = {};

integration.params = {
	'mf_siteId' : '707608',
	"srv_SectionID" : "124863",
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 100,
	"plr_FrameSide" : 100,
	"plr_FrameBottom" : 100,
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".ol-sticky-top__top-container, #js-sticky-top").css({
        "max-width" : "1000px",
        "left" : "50%",
        "margin-left" : "-500px"
    });
    /*$("#js-sticky-top").css({
        "max-width" : "1000px"
    });*/
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      /* PageSkin Tablet Edge */
      integration.base.setCfg({
        plr_PageAlignment: 'left'

      });

      $('#header, #body-publicite, #bandeau_bas').css('width', '1000px');

      $('.conteneur_alerte, .fixed-header-content').css({
        'margin-left': '20px'
      });
      $('.ombrelle.les-decodeurs, #nav, #ariane_az, .global.meter_global.js_meter_global, #footer, .global.poops, #footer_services, .position_pub.top.banniere').css({
        'margin-left': '0px'
      });
    } else {
      /* Not edge */
      $('.conteneur_alerte').css({
        'margin-left': '100px'
      });
    }
  } else {
    try {
      window.ISM_fallback_status = '1';
      PageSkinFallback();
    } catch (e) {
      window.ISM_fallback_status = '2';
    };
  }
});

integration.on("adServed", function(e) {
  $('#bandeau_bas').css({
    'z-index': '5000'
  });
  $('.ism-frame').parent().css({
    'z-index': '5001'
  });
});
