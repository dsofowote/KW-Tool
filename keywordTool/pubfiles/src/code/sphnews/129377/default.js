integration.meta = {
    'sectionID' : '129377',
    'siteName' : 'Business Insider MY - (Pagelead) - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074671',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 10000 !important;}';
        stylesCSS += '.inskinLoaded #td-mobile-nav, .inskinLoaded .td-menu-background, .inskinLoaded .td-search-wrap-mob, .inskinLoaded .td-search-background{z-index: 10001 !important;}';
        stylesCSS += 'body.inskinLoaded.td-menu-mob-open-menu .ism-anchor{position: absolute !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        integration.custom.indicatorPos = $(".td-header-menu-wrap-full").outerHeight();
        integration.custom.closePos = $(".td-header-menu-wrap-full").outerHeight();
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
