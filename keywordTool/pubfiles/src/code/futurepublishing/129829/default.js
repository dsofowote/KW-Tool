integration.meta = {
    'sectionID' : '129829',
    'siteName' : 'Top Ten Reviews - Smartphone - (Pagelead) - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089521',
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
    //           //Set code to check for a CSS class
    integration.custom.pl_behaviour = "scroll";

    // //Select class to check CSS property of
    integration.custom.headHeight = $(".primary-nav").outerHeight();
    integration.custom.FrameTop = e.data.plr_FrameTop;

    // //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = 0;
    // //state 1 when class is present
    integration.custom.pl_scrollState1 = 0;
    // // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = -integration.custom.headHeight;

    integration.custom.indicatorPos = 0 ;
    integration.custom.closePos = 0;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var headHeight = $('.primary-nav').height();
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 2 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 9996 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".primary-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,

            });
        }
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
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}.inskinLoaded .primary-nav{top:0px}';
    $("#inskinPL").html(newValue);
}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});