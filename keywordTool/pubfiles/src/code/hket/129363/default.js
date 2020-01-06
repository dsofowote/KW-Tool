integration.meta = {
    'sectionID' : '129363',
    'siteName' : 'HKET - (Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074360',
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


    if ($(".page-header").length == 1) {
        integration.custom.pl_behaviour = "scroll";
        //Select class to check CSS property of
        integration.custom.headHeight = $(".sticky-top-menu-area").outerHeight();
        // integration.custom.headHeight1 = $(".global-header-body").outerHeight();
        integration.custom.FrameTop = e.data.plr_FrameTop;
        integration.custom.headHeight2 = integration.custom.headHeight + integration.custom.FrameTop;

        //scroll states for the amount you want to push pagelead down by
        integration.custom.pl_initState = 0;
        //state 1 when class is present
        integration.custom.pl_scrollState1 =0 ;
        // //state 2 when class isnt present
        integration.custom.pl_scrollState2 = 80;

        integration.custom.indicatorPos = 80;
        integration.custom.closePos = 80;


    }else {
                  //Set code to check for a CSS class
    integration.custom.pl_behaviour = "scroll";
    //Select class to check CSS property of
    integration.custom.headHeight = $(".sticky-header").outerHeight();
    // integration.custom.headHeight1 = $(".global-header-body").outerHeight();
    integration.custom.FrameTop = e.data.plr_FrameTop;
    integration.custom.headHeight2 = integration.custom.headHeight + integration.custom.FrameTop;

    //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = 0;
    //state 1 when class is present
    integration.custom.pl_scrollState1 =0 ;
    // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = integration.custom.headHeight;

    integration.custom.indicatorPos = $(".sticky-header").outerHeight();
    integration.custom.closePos = $(".sticky-header").outerHeight();

    }

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 20 !important}';
        stylesCSS += '.inskinLoaded .main-component:before, .header-ad {display:none !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 901!important}';
        stylesCSS += '.inskinLoaded .page-header{z-index: 902!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
    //This IF statement can be used to make changes related to when Pagelead is not fixed
if (e.data.fixedTop == false) {
    //Stops all scrolling behaviours once Pagelead is no longer fixed
    integration.custom.pl_behaviour = "n/a";
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
    $("#inskinPL").html(newValue);
}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
