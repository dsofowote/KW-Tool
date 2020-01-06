integration.meta = {
    'sectionID' : '128682',
    'siteName' : 'Weekendavisen - Desktop - (DK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029516',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
      integration.base.setCfg({
        plr_PageHeightAdjustment : -integration.custom.PageSkinBottomPanel
      });
      $(".container-fluid").css({
        "max-width" : "1320px",
        "margin" : "0 auto"
      });
      $("footer, .paywall-wrapper-outer").css({
        "max-width" : "1280px",
        "margin" : "0 auto"
      });
      $(".container-fluid.main-content").css({
        "padding" : "0px"
      });
      $("body").css({
        "overflow-y" : "hidden"
      });
    }
});
