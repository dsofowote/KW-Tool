integration.meta = {
    'sectionID' : '129275',
    'siteName' : '9 Coach - (Creative App) - (Pagelead) - Smartphone - ( AU NZ )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070209',
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
        var headerHeight = $(".ldfWxI ").height();
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .ism-indicator, .ism-close {top: ' + headerHeight + 'px !important}';
        stylesCSS += '.inskinLoaded ._1KsG7rOa{display: none !important}';
        stylesCSS += '.inskinLoaded .ldfWxI {z-index: 9999 !important}';
        stylesCSS += '.inskinLoaded .fGLsfC {height: 44px !important}';
        stylesCSS += '.inskinLoaded .onReM, .bhImBG, .hMHYMx > h2 {z-index: 0 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
