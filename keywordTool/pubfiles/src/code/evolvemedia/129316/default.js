integration.meta = {
    'sectionID' : '129316',
    'siteName' : 'Wrestlezone - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072257',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
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
       $(".ism-anchor").css({"top" :headerHeight });
       integration.base.setCfg({
           plr_PageHeightAdjustment : -headerHeight,
           plr_ScrollAdjustment:-headerHeight
         })
});
