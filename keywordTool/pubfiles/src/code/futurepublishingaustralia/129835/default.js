integration.meta = {
    'sectionID' : '129835',
    'siteName' : 'Top Ten Reviews - Tablet - (NZ)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089527',
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
      $('.primary-nav, #document-footer').css({
        "max-width" : "970px",
        "margin" : "0 auto",
        "left" : 0,
        "right" : 0
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.primary-nav, #main, #document-footer, .slot-leaderboard').css({
              "margin" : "0"
            });
        }
    }
});
