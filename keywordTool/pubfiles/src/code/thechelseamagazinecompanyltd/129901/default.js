integration.meta = {
    'sectionID' : '129901',
    'siteName' : 'Racecar Engineering - Tablet - (UK) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1095000',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1164,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      $(".td-scroll-up").css({
          "z-index" : "4",
          "right" : integration.custom.FrameSideRight
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#td-outer-wrap").css({
              "margin-left" : "0px"
            });
        }
    }
});
