integration.meta = {
    'sectionID': '126491',
    'siteName': 'Mobile Marketing Magazine - Smartphone - (UK)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1063704',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
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

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .body_wrap, .inskinLoaded section.footer_section{float:none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    var headHeight = $(".nav_wrap .contain-to-grid").outerHeight();
    $(".ism-frame").parent().css({
        "position": "relative",
        "top": headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    });
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});