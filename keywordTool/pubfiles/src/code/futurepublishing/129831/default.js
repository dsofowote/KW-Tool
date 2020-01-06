integration.meta = {
    'sectionID' : '129831',
    'siteName' : 'Top Ten Reviews - Tablet - (ASIA)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089523',
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
        var headHeight = $('.primary-nav').height();
        $('.slot-lightbox1').css({'display':'none'});
        $('#document-footer').css({'max-width':'970px', 'margin':'0 auto'});
        if ($(".primary-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,
                plr_ScrollAdjustment: -headHeight

            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#main, #document-footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});