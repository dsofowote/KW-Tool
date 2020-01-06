integration.meta = {
    'sectionID' : '128577',
    'siteName' : 'Sportbuzzer - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1690]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023894',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1370,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#d3-main-navigation").height();
      integration.base.setCfg({
          plr_PageHeightAdjustment : -headHeight
      });
      $(".dcm-main, .dcm-wrapper, .dcm-photo-teaser, .rsContainer, .rsOverflow, .dcm-footer-new, .dcm-section-wrapper--dark-gray, .dcm-back-to-top, .dcm-matchlist--carousel, .dcm-site-header").css({
          "width" : "1370px",
          "margin" : "0 auto"
      });
      $(".dcm-main .container").css({
          "width" : "100%"
      });
      $(".dcm-main").css({
          "margin-top" : "114px"
      });
      $("#d3-main-navigation").css({
          "z-index" : "1001",
          "position" : "fixed",
          "right" : "0",
          "left" : "0",
          "top" : "0"
      });
      $("head").append("<style>body{overflow-x: visible !important; background: #f6f6f6!important;}</style>");
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#d3-main-navigation").height();
    $(".ism-frame").parent().css({
        "top" : "114px",
        "z-index" : "1000"
    });
});
