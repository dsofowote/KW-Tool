integration.meta = {
    'sectionID': '128923',
    'siteName': 'Liberation - (next.liberation) - Smartphone - (FR)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1042342',
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
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    var hh1 = $(".header-fix-nav").outerHeight();
    var hh2 = $(".next-nav").outerHeight();
    console.log(hh1, hh2);
    var headHeight = hh1 + hh2;
    $('.ism-frame').parent().css({
        "top" : headHeight,
        "position" : "relative"
    });
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});