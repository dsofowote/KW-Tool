integration.meta = {
    'sectionID' : '129912',
    'siteName' : ' Der Postillon - Smartphone - (DE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1095158',
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
        var headHeight = $('.main-menu').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #at-custom-mobile-bar{width: '+ contentWidth +'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 100021 !important}';
        stylesCSS += '.inskinLoaded #steady-floating-button{padding: 0 5px !important';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_ScrollAdjustment : headHeight
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});