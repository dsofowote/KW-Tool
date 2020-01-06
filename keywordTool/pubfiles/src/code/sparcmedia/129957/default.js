integration.meta = {
    'sectionID' : '129957',
    'siteName' : 'Australian Geographic - (Publisher booking) - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1060,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header').height() + $('.main-nav').height() + $('.alt-nav').height();
        $('.footer').css({'max-width':'1060px','margin':'0 auto'});
        $('.columnwide, .top-banner, .full-banner').css({'display':'none'});
        if ($(".main-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".main-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment: -headHeight
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.flexwrap, .footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});
