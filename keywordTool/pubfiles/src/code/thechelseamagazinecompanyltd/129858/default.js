integration.meta = {
    'sectionID' : '129858',
    'siteName' : 'Wedding Ideas - Tablet - (UK) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1093672',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var navHeight = $('.td-header-menu-wrap').height();
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var sideWidth = integration.custom.PageSkinRightPanel + 42;
        $('#4db9dc91-6fb5-4d95-ab71-fdedf0fe4ef5').css({'max-width':'1170px', 'margin':'0 auto'});
        $('body').append('<style>.pb-stream-sticky-on{right:'+ sideWidth + 'px !important}</style>');
        $(".td-scroll-up").css({"right" : integration.custom.PageSkinRightPanel});
        integration.base.setCfg({
            plr_ScrollAdjustment : navHeight
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#td-outer-wrap, #4db9dc91-6fb5-4d95-ab71-fdedf0fe4ef5').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
        }
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "10000"});

});