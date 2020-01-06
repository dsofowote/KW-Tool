integration.meta = {
    'sectionID' : '130151',
    'siteName' : 'RugbyLAD - Tablet - (UK IE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1104917',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#footer, #at-custom-mobile-bar").css({
        "margin" : "0 auto",
        "max-width" : "1120px"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#header, #footer, #at-custom-mobile-bar, .emadparent, #page .container-inner").css({
              "margin-left" : "0"
            });
        }
    }
});

integration.on("adServed", function(e) {
    var headHeight = $(".nav-wrap").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
