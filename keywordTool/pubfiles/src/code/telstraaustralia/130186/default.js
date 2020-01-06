integration.meta = {
    'sectionID' : '130186',
    'siteName' : 'Telstra - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105493',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('header, .globalFooter, .main-content-wrapper').css({'max-width':'1140px','margin':'0 auto'});
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $(".scrollup").css({ "right" : "90px"  });

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.main-content-wrapper').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});