integration.meta = {
    'sectionID' : '129075',
    'siteName' : 'Zero US Sports - Tablet - AU',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1048325',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1090,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      integration.custom.FrameBottom = e.data.plr_FrameBottom;

      $(".td-header-wrap, .td-header-menu-wrap").css({"max-width": "1090px", "margin": "auto"});
      $(".td-scroll-up").css({"right": integration.custom.FrameSideRight, "bottom": integration.custom.FrameBottom});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#td-outer-wrap").css({"max-width": "1090px"});
            $(".td-menu-background").css({"display": "none"});
            $("#menu-zero-us-sports-1").css({"padding-left": "60px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
