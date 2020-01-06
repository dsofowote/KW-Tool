integration.meta = {
    'sectionID' : '128761',
    'siteName' : 'HONEST JOHN VANS - TABLET - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1034840',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1002,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('body').css({
        'background-color' : 'white',
        'background-image' : 'none'
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('#header_bar_inner, #page_template').css({
              'margin' : '0'
            });
        }
    }
});
