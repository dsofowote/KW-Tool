integration.meta = {
    'sectionID' : '129724',
    'siteName' : 'New Straits Times - (Creative Appr.) - Tablet - (ASIA)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087304',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1235,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('body').append('<style>.ins-backtotop{right:' + integration.custom.FrameSideRight + 'px !important}</style>');
        $('header, .navbar-wrapper , .main-container, #bottom, #bottom-left-right, #bottom-secondary, #bottom-wide, .footer').css({'max-width':'1235px', 'margin':'0 auto'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('header, .navbar-wrapper , .main-container, #bottom, #bottom-left-right, #bottom-secondary, #bottom-wide, .footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"z-index" : "10002"});

});
