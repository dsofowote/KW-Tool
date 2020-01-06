integration.meta = {
    'sectionID' : '130027',
    'siteName' : 'Property Station - (Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100309',
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
    integration.custom.pl_behaviour = "scroll";
    integration.custom.pl_initState = 0;
    integration.custom.pl_scrollState1 =0 ;
    integration.custom.pl_scrollState2 = 80;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 10 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
if (e.data.fixedTop == false) {
    integration.custom.pl_behaviour = "n/a";
    newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important; z-index: 0 !important}';
    $("#inskinPL").html(newValue);
}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});