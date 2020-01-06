integration.meta = {
    'sectionID' : '129484',
    'siteName' : 'Wallstreet Online - Desktop - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080236',
    'plr_PageAlignment' : 'custom',
    'plr_FramePositionCSS' : 'left: -75px; margin: 0 auto;',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
        integration.custom.isSuper = true;
        var width = $(window).width();
        var sideWidth = (width - 1020)/2 - 75;
        $(".newsFlagSlider").css({
            "z-index" : "10001",
            "margin-left" : sideWidth
        });
      }
    }
});

integration.on("adServed", function(e) {
    if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
      integration.custom.isSuper = true;
      $(".ism-frame").parent().css({
          "z-index" : "10002"
      });
    }
});
