integration.meta = {
    'sectionID' : '129958',
    'siteName' : 'Australian Geographic - (Publisher booking) - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $('window').width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .ipad{width: 135px !important;  left: 164px !important }';
        stylesCSS += '.inskinLoaded .current-ipad{max-width: 135px !important; margin: 0 !important; margin-top: 18px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3), .ism-frame:nth-of-type(2){z-index: 100000 !important}';
        stylesCSS += '.inskinLoaded .footer-ad{width: 75% !important}';
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
