integration.meta = {
    'sectionID' : '129996',
    'siteName' : 'Timeout Asia - (Pagelead) - Smartphone - (SG)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
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
           //Set code to check for a CSS class
    integration.custom.pl_behaviour = "scroll";
    //Select class to check CSS property of
    integration.custom.headHeight = $("header").outerHeight();
    //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = 0;
    //state 1 when class is present
    integration.custom.pl_scrollState1 = 0;
    // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = integration.custom.headHeight ;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded  .ism-frame:nth-of-type(1){z-index: 10 !important}';
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