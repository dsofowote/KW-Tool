integration.meta = {
    'sectionID' : '129558',
    'siteName' : 'Computerworld - Tablet - ( HK SG )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085460',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1090,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.lo-top_promo').height() + $('.lo-header').height() -15;
        integration.base.setCfg({
            plr_ScrollAdjustment: -headHeight
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#skin, .lo-footer_content').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});
