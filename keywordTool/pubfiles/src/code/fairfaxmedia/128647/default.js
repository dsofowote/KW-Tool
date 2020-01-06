integration.meta = {
    'sectionID' : '128647',
    'siteName' : 'Good Food - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028299',
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
        $(".outer-wrap, .header-wrap, .parsys.parsys-wide, .navigation, #footer").css({
          "max-width" : "1000px",
          "margin" : "0 auto"
        });

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            integration.base.setCfg({
              'plr_PageAlignment' : 'left'
            });
            $("head").append("<style>.outer-wrap, .header-wrap, .ad-wrap--leaderboard{width: 1000px !important; margin-left: 0px !important;}</style>");
        }
    }
});
