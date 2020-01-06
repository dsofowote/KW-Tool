integration.meta = {
    'sectionID' : '129376',
    'siteName' : 'Business Insider MY - Tablet - (MY)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074670',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1234,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".td-header-wrap, .td-header-menu-wrap-full").css({"max-width" : "1234px", "margin":"0 auto"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.td-header-wrap').css({'left': -(integration.custom.FrameSideRight)/2});
            $('.td-container').css({'margin-left': '0px'});

        }
    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10000"
    });
});
