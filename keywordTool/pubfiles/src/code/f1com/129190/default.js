integration.meta = {
    'sectionID': '129190',
    'siteName': 'F1.com - Tablet - (INT) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1062548',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .breakout-left{margin:0px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        if ($(".event-tracker").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".event-tracker");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        } else if ($(".site-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".site-nav");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }

        $(".f1-up-next, .template").css({
            "max-width": "1320px",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
            /* Pageskin Edge specific changes */
            $(".template, main").css({
                "margin-left": "0",
                "left": "0",
            });
        }
    }
});

integration.on('adServed', function () {
    $(".ism-frame").parent().css({
        "z-index" : "10"
    });

    if ($(".event-tracker").length == 1) {
        var headHeight = $(".site-nav").outerHeight() + $(".event-tracker").outerHeight();
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight + 20
        });
    } else if ($(".site-nav").length == 1) {
        var headHeight = $(".site-nav").outerHeight();
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight + 20
        });
    }

    $(".f1-up-next").css({
        "max-width": "1320px",
        "margin": "0 auto",
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/21703060983/www_formula1.com/www_formula1.com_article-view/article_mpu_passback', [300, 250]).display();\n<\\script>";
};