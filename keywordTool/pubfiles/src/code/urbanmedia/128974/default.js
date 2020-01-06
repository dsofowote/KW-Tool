integration.meta = {
    'sectionID' : '128974',
    'siteName' : 'Freitag - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044215',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var leftPanel = e.data.plr_FrameSide;
      $('.cc-grower').css({
        'margin-left' : leftPanel
      });
      $('#nav-menu, #top-search, #footer-nav-menu, #urban-billboard').css({
        'width' : '1200px',
        'margin' : '0 auto',
        'left' : '0',
        'right' : '0'
      });

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.row, #footer-nav-menu, #urban-billboard, #nav-menu').css({
              'margin-left' : '0'
            });
        }
    }
});
