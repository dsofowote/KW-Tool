integration.meta = {
    'sectionID' : '129889',
    'siteName' : 'Britain Magazine - Tablet - ( UK )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094972',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1130,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#td-outer-wrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            $('.td-menu-background').css({'display':'none'});

        }
    }
});
