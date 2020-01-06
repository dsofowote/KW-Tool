integration.meta = {
    'sectionID': '129175',
    'siteName': 'Motory - Smartphone - (MENA)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1061787',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_GetContentHeightVersion': 2,
    'plr_EnableActiveResize' : false
};


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headHeight = $("#header-mobile").outerHeight();
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded, .inskinLoaded body {overflow:visible}';
        stylesCSS += '.inskinLoaded footer, .inskinLoaded .wrap-newsletter{z-index:100}';
        stylesCSS += '.inskinLoaded .sidebar-widget.block-ads-mobile{display:-webkit-box}';
        stylesCSS += '.inskinLoaded {overflow:visible}';
        stylesCSS += '.inskinLoaded #header-mobile{margin-top:' + headHeight + 'px;z-index:1000 !important;min-height:0px;padding:0px;}';
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
    var headHeight = $(".top-fixed-mobile").outerHeight();
    $(".ism-frame").parent().css({
        "top": headHeight,
        "position": "relative"
    })
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});