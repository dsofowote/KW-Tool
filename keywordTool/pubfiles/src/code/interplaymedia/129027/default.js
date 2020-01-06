integration.meta = {
    'sectionID' : '129027',
    'siteName' : 'Fan Footy - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045588',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $("#nav-main-wrapper").outerHeight();
        $('#site, #wrapper, #nav-main-wrapper, #main-wrapper, #footer-wrapper, .score-wrapper, #content-outer, #leader-wrapper, #copyright, #footer-nav').css({
          "float" : "none"
        });
        $('#footer-wrapper').css({
          "width" : "980px",
          "margin" : "0 auto"
        });
        $('.score-wrapper').css({
          "padding-top" : "10px"
        });
        $('#main-wrapper').css({
          "top" : headHeight
        });
        $('#main-wrapper, #footer-wrapper').css({
          "background-color" : "#1D4088"
        });
        $('#leader-wrapper').css({
          "margin-bottom" : "20px"
        });
        $('#top-spacer').css({
          "height" : "20px"
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            var leftPanel = e.data.plr_FrameSide;
            $('#main-wrapper, #footer, #footer-wrapper').css({
              "margin-left" : "0"
            });
        }
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#nav-main-wrapper").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
