integration.meta = {
    'sectionID' : '128468',
    'siteName' : 'Unwire HK - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1016493',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1105,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1105)/2;
      var headHeight = $("#navigation").height();
      integration.base.setCfg({
          plr_ScrollAdjustment : headHeight
      });
      $("#header, #footer").css({
        "min-width" : "1105px",
        "margin" : "0 auto",
        "width" : "1105px",
        "float" : "none"
      });
    }
});

integration.on("adServed", function(e) {
    var width = $(window).width();
    var sideWidth = (width - 1105)/2;
    $(".spnf_ticker.spnf_right").css({
        "right" : sideWidth
    });
    $(".spnf_ticker, #navigation").css({
      "z-index" : "96"
    });
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "97"
    });
});
