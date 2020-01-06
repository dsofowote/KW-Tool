integration.meta = {
    'sectionID' : '129264',
    'siteName' : 'Talk Talk - Desktop - (UK)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1069481',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.ttb_rotator, .promo-banner__e2e_wrapper, .full-width-background-page-block, .footer').css({'max-width':'1000px', 'margin':'0 auto'});
        window.unloadPageskin = function() {
          try {
              integration.destroy();
          } catch (e) {
          }
      };
    }
});

integration.on("adServed", function(e) {
    var headerHeight = $(".header").outerHeight();
        $(".ism-frame").parent().css({"top" :headerHeight });
        integration.base.setCfg({
              plr_ScrollAdjustment : -headerHeight,
              plr_PageHeightAdjustment : -headerHeight
          })
});
