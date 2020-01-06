integration.meta = {
    'sectionID': '129203',
    'siteName': 'Mobile Marketing Magazine - Tablet - ( UK )',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1063706',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("header#head").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header#head");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }

        $(".body_wrap, section.footer_section").css({
            "float": "none"
        });

        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            $(".nav_wrap .row, .row.home-wrap, .footer_section .row,").css({
                "margin-left" : "0px",
            });

            $(".main_advert_section, .body_wrap").css({
                "max-width" : "1200px"
            });

            $(".main_advert_section, ")
            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
    }
});

integration.on('adServed', function (e) {
    var headHeight = $(".nav_wrap .contain-to-grid").outerHeight();
    console.log(headHeight);
    $(".ism-frame").parent().css({
        "position": "relative",
        "top": headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    });
});