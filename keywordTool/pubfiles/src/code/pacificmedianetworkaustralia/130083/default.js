integration.meta = {
    'sectionID' : '130083',
    'siteName' : 'Marie Claire - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102598',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.Navbar').height();
        $('.PageWrap').css({'max-width':'1272px', 'margin':'0 auto'});
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
          });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
           $('.PageWrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});
