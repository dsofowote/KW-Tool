integration.meta = {
    'sectionID' : '130180',
    'siteName' : 'Harper\'s Bazaar - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105537',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('header').css({'max-width':'1024px', 'margin':'0 auto', 'left':'0px', 'right':'0px'})
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#app ').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            if($(header).hasClass('.header--hidden')){
                $('.header ').css({'left' : -(integration.custom.FrameSideRight)/2});
            }

        }
    }
});