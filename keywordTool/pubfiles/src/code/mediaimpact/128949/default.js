integration.meta = {
    'sectionID' : '128949',
    'siteName' : 'Techbook - (DE campaigns only) - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043087',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $('#header--small').height();
      integration.base.setCfg({
        plr_ScrollAdjustment : headHeight
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".container, .footer").css({
                "margin-left" : "0px"
            });
        }
    }
});
