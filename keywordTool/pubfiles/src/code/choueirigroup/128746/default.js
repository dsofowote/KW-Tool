integration.meta = {
    'sectionID' : '128746',
    'siteName' : 'Mawdoo 3 - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033768',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 970)/2;
      $("#back-to-top").css({
          "right" : sideWidth
      });
      $(".footer, .footer .block-content").css({
        "max-width" : "970px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0"
      });
      $(".footer .block-content").css({
        "max-width" : "970px"
      });
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#header").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
