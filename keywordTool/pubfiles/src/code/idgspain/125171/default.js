integration.meta = {
    'sectionID' : '125171',
    'siteName' : 'PC World ES - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706571',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.siteFooter').css({'max-width':'1100px', 'margin':'0 auto'});
    }
});

integration.on("adServed", function(e) {
    var headerHeight = $(".subHeader").height() + $(".topNav").height();
    var topHeight = $(".subHeader").height();
        $(".ism-frame").parent().css({"top" :headerHeight });
        integration.base.setCfg({
              plr_ScrollAdjustment : -topHeight,
              plr_PageHeightAdjustment : -headerHeight
          })
});
