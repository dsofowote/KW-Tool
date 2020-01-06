integration.meta = {
    'sectionID': '130183',
    'siteName': 'Elle - (Pagelead) - Smartphone - ( AU )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1105539',
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


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {

        integration.custom.pl_behaviour = "class";
        integration.custom.pl_class = ".header-wrapper--hidden";
        integration.custom.pl_scrollState1 = -105;
        integration.custom.pl_scrollState2 = 0;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-anchor {top: 105px }';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_PageHeightAdjustment: -105
        });
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({ 'plr_FixedTop': true, 'plr_EnableSwipe': true });
    }
});

integration.on('pagelead:layoutChange', function(e) {
    if (e.data.fixedTop == false) {
        integration.custom.pl_behaviour = "class";
        integration.custom.pl_class = ".header-wrapper--hidden";
        integration.custom.pl_indState1 = -105;
        integration.custom.pl_indState2 = 0;
        integration.custom.pl_closeState1 = -105;
        integration.custom.pl_closeState2 = 0;
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});