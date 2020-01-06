integration.meta = {
    'sectionID' : '129068',
    'siteName' : 'New Straits Times  - (Pagelead) - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047314',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ins-backtotop {z-index: 9999 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3) {z-index: 10000 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2) {z-index: 10001 !important}';
        stylesCSS += '.inskinLoaded .dropdown-menu, .inskinLoaded .owl-carousel {z-index: 0 !important}';
        stylesCSS += '</style>'
        $("head").append("<style> .view-footer {display: none !important;}</style>");
        $("head").append("<style> .ad-unit {display: none !important;}</style>");
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
