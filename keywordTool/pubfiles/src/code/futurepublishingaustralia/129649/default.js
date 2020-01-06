integration.meta = {
    'sectionID' : '129649',
    'siteName' : 'Cycling News - Tablet - ( SG )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086259',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('.global-banner ').css({'display':'none'});
        $('.nav-panel, .global-footer, .feedback-bar').css({'max-width':'1000px', 'margin':'0 auto'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.nav-panel, #page-canvas').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});

        }
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".bottom-navbar-wrap").height();
        integration.base.setCfg({
        plr_ScrollAdjustment: headHeight,
        });
     });