integration.meta = {
    'sectionID': '127071',
    'siteName': 'Goal.com ASIA - Smartphone - (HK ID MY PH SG TH)',
    'platform': 'smartphone'
};




integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '708137',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_FastInit": true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("body > .widget-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > .widget-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -50
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded{overflow-x:visible}';
        //stylesCSS += ' body.inskinLoaded > iframe{width: 100%; height: auto;}';
        stylesCSS += '.inskinLoaded [id^="wrapper-eplayer-"] {margin-right: 74px !important; margin-bottom: 20px}';
        stylesCSS += '.inskinLoaded .widget-header {width: calc(100% + 74px); z-index: 11}';
        stylesCSS += '.inskinLoaded .p0c-competition-tables__table-container {width: unset !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    $(".news-card-media-slider").last().addClass("inskinSpecial");
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Goal_Responsive', [1, 1]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};