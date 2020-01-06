integration.meta = {
    'sectionID' : '129883',
    'siteName' : 'Baby Magazine - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094966',
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
        $('.container-fluid, .bm-wrapper, #Unit1').css({'display':'none'});
        $('.bm-wrapper').css({'max-width':'1170px', 'margin':'0 auto'});
    }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#td-outer-wrap').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
            $('.td-menu-background').css({'display':'none'});
        }

});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({"z-index" : "2"});

});
