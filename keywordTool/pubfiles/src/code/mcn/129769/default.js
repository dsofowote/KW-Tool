integration.meta = {
    'sectionID' : '129769',
    'siteName' : 'Swellnet - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087632',
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

         //Set code to check for a CSS class
    integration.custom.pl_behaviour = "scroll";
    //Select class to check CSS property of
    integration.custom.headHeight = $(".global-header").outerHeight();
    integration.custom.headHeight1 = $(".global-header-body").outerHeight();
    integration.custom.FrameTop = e.data.plr_FrameTop;
    integration.custom.headHeight2 = integration.custom.headHeight + integration.custom.FrameTop;

    //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = integration.custom.headHeight;
    //state 1 when class is present
    integration.custom.pl_scrollState1 =0;
    // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = 0;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var headHeight = $('.global-header').height();
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3), .ism-frame:nth-of-type(1){z-index: 1000 !important}';
        stylesCSS += '.inskinLoaded .global-sponsor{display:none !important}';
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