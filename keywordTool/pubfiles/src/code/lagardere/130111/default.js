integration.meta = {
    'sectionID' : '130111',
    'siteName' : 'Europe1 - Tablet - ( FR )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104191',
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
        var headHeight = $('.nav-bottom').outerHeight() + 10;
        $('.bloc_launcher').css({'max-width':'1000px','margin':'0 auto'});
        $('.ellefre').css({'display':'none'});
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment: headHeight
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#main, #Europe1_footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            $('.affix-top').css({'margin-left':'-20px'});

        }
    }
});