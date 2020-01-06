integration.meta = {
    'sectionID' : '129786',
    'siteName' : 'What Culture - Tablet - (APAC)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088412',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.js-ad-class').css({'display':'none'});
        $('.app-footer').css({'max-width':'1000px', 'margin':'0 auto'});
        if ($("#app-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#app-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
           $('.app-page, .app-footer').css({'left' : -(integration.custom.FrameSideRight)/2, 'position':'relative'})

        }
    }
});
