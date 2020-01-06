integration.meta = {
    'sectionID' : '126567',
    'siteName' : 'Goal.com - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706805',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_PageHeightAdjustment' : -80,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("body > .widget-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > .widget-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -50
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded{overflow:visible}';
        stylesCSS += '.inskinLoaded .body > iframe{width: 100%; height: auto;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    $("[data-element='sliding-container'] > .news-card-media-slider").last().addClass("inskinSpecial");
    $("head").append("<style>.inskinSpecial{margin-left: -28px;}</style>");
    $(window).on('orientationchange', function() {
        $("[data-element='sliding-container'] > .news-card-media-slider").last().removeClass("inskinSpecial");
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
    setTimeout(function() {
        $("[data-element='sliding-container'] > .news-card-media-slider").last().removeClass("inskinSpecial");
    }, 1000);
}); 