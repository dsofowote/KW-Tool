integration.meta = {
    'sectionID' : '129196',
    'siteName' : 'Euronews INT - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1063317',
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
        stylesCSS += '.inskinLoaded .enw-btn--back-to-top{bottom: 100px ; right: 75px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

integration.on("adServed", function(e) {
    var navHeight = $('.o-menu-top_nav').height();
    $(".ism-frame").parent().css({
        "top" : navHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -navHeight,
    });
});

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
