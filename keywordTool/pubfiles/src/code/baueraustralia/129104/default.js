integration.meta = {
    'sectionID': '129104',
    'siteName': 'Women\'s Weekly Food - Smartphone - ( AU )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1055493',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.custom.headHeight = $(".header").outerHeight();
        integration.custom.pl_initState = integration.custom.headHeight;
        integration.custom.pl_behaviour = "class";
        integration.custom.pl_class = ".header-wrapper--hide";
        integration.custom.pl_scrollState1 = 0;
        integration.custom.pl_scrollState2 = integration.custom.headHeight;
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});



integration.on('adServed', function (e) {
    $(".ism-frame").parent().css({
        "top": headerHeight,
        "position": "relative"
    });
});

integration.on('pagelead:layoutChange', function (e) {
    if (e.data.fixedTop == false) {
        integration.custom.pl_behaviour = "n/a";
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.headHeight + 'px !important;}';
        $("#inskinPL").html(newValue);
    }
});


integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        //Stop changes once Pagelead is closed
        integration.custom.pl_behaviour = "n/a";
    }
});