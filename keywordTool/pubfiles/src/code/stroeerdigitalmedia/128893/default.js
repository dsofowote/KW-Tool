integration.meta = {
    'sectionID' : '128893',
    'siteName' : 'Selbst.de - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040958',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.outerWrapper, .pageFooter').css({
            'margin' : '0 auto'
          });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.outerWrapper, .pageFooter').css({
              'margin-left' : '0px'
            });
        }
        $('body').css({
          'margin' : '0px',
          'width' : 'initial'
        });
    }
});
