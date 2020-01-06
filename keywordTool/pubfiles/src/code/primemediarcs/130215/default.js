integration.meta = {
    'sectionID' : '130215',
    'siteName' : 'Huffington Post - Tablet - (ES)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1110981',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1260,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".header_skin_life .top-nav-sticky").height();
        integration.base.setCfg({
          'plr_ScrollAdjustment' : headHeight
        });
        $('footer').css({
          'width' : '1260px',
          'margin' : '0 auto'
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.body-splash, .header, .master-container, footer, .hp_cconsent').css({
              'width' : '1260px',
              'margin-left' : '0px'
            });
        }
    }
});
