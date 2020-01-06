integration.meta = {
    'sectionID' : '130017',
    'siteName' : 'The Roar - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099528',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1188,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.po-nav-top').height();
        $('.pm-ad-unit').css({'display':'none'});
        $('.o-footer, #banner, .po-nav-sub  ').css({'max-width':'1188px', 'margin':'0 auto'});
        if ($(".po-nav-top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".po-nav-top");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.o-container, .po-nav-sub, .o-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
        }
    }
});
