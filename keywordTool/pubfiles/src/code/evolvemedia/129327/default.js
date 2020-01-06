integration.meta = {
    'sectionID' : '129327',
    'siteName' : 'Momtastic - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072372',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1270,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
      integration.custom.PageSkinBottomSide = e.data.plr_FrameBottom;
        $('header').css({'z-index' :'3'});
        $('head').append('<style>.scrollup{right: ' + integration.custom.PageSkinFrameSide + 'px !important; bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}</style>')
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
            $('.wrapper').css({'left': (- integration.custom.PageSkinFrameSide)/2});
        }
    }
});

integration.on("adServed", function(e) {
    var headerHeight = $("header").outerHeight();
        $(".ism-anchor").css({"top" :headerHeight , "z-index" :"3" });
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headerHeight,
          })
});
