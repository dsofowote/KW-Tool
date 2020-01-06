integration.meta = {
    'sectionID' : '130181',
    'siteName' : 'Harper\'s Bazaar - (Pagelead) - Smartphone - (AU) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105538',
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
    integration.custom.pl_behaviour = "class";
    //Select class to check CSS property of
    integration.custom.pl_class = "header.header--hidden";
    integration.custom.headHeight = $(".header").height();
    console.log('integration.custom.headHeight');
    //scroll states for the amount you want to push pagelead down by
    integration.custom.pl_initState = integration.custom.headHeight;
    //state 1 when class is present
    integration.custom.pl_scrollState1 = 0;
    // //state 2 when class isnt present
    integration.custom.pl_scrollState2 = integration.custom.headHeight;

        integration.custom.indicatorPos = integration.custom.headHeight ;
        integration.custom.closePos = integration.custom.headHeight ;


        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-close{margin-top: 100px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});