integration.meta = {
    'sectionID' : '129723',
    'siteName' : 'Harian Metro - (Creative Appr.) - Tablet - ( MY )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086937',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1310,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
      $('body').append('<style>.ins-backtotop{right:'+ integration.custom.PageSkinFrameSide +'px !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
         $('#navbar, .top-container, .top-left-right-container, .main-container, #bottom,.footer ').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})
        }
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"z-index" : "100000000"});
});
