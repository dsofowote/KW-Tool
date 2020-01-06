integration.meta = {
    'sectionID' : '129158',
    'siteName' : 'Morgenweb - Smartphone - ( AT CH DE )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1060707',
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
        var headHeight = $('.nfy-collapse-navigation').height();
        var contentWidth = $(window).width() - 74;
        stylesCSS += '.inskinLoaded #container_banner{display: none}';
        stylesCSS += '.inskinLoaded .Desktop_OutOfPage{display: none}';
        stylesCSS += '.inskinLoaded #collapse-navigation, .nfy-mobile-sticky-buttons{max-width: ' + contentWidth + 'px}';
        stylesCSS += '.inskinLoaded .billboard{margin: 5px 0px 35px}';
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
