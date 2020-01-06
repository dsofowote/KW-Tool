integration.meta = {
    'sectionID': '129466',
    'siteName': 'F1.com - (PUBLISHER BOOKINGS) - Desktop - ( INT )',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1078415',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("main").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("main");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        } else if ($(".site-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".site-nav");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .event-tracker{margin:0px !important;}';
        stylesCSS += '.inskinLoaded .breakout-left{margin:0px !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);

        $(".f1-up-next, .template").css({
            "max-width": "1320px",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
    }
});

integration.on('adServed', function (e) {
    $(".ism-frame").parent().css({
        "z-index": "10"
    });

    if ($(".event-tracker").length == 1) {
        var headHeight = $(".site-nav").outerHeight() + $(".event-tracker").outerHeight();
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight
        });
    } else if ($(".site-nav").length == 1) {
        var headHeight = $(".site-nav").outerHeight();
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight + 20
        });
    }
});

/* Passback Tag */
window.ISMPassback = function () {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> " + window.inskinPassback + "<\\script>";
    //return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/21703060983/www_formula1.com/www_formula1.com_article-view/article_mpu_passback', [300, 250]).display();\n<\\script>";
};