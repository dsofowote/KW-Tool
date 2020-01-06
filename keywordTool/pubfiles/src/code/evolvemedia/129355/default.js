integration.meta = {
    'sectionID' : '129355',
    'siteName' : ' Reality Tea - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1073931',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1030)/2 + 15;
      var footerHeight = $(".footer").height();
      integration.base.setCfg({
        'plr_PageHeightAdjustment' : footerHeight
      });
      $(".main-header").css({
        "max-width" : "1030px",
        "margin" : "0 auto"
      });
      $('.scrollup').css({
        "z-index" : "3",
        "right" : sideWidth
      });
    }
});
