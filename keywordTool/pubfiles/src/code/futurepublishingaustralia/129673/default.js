integration.meta = {
    'sectionID' : '129673',
    'siteName' : 'Gamesradar - Tablet - (NZ) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086281',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.primary-nav, #document-footer').css({'max-width':'970px', 'margin':'0 auto'});
        $('.slot-lightbox1').css({'display':'none'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.primary-nav, #main, #document-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
        }
    }
});