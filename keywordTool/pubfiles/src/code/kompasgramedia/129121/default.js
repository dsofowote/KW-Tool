integration.meta = {
    'sectionID' : '129121',
    'siteName' : 'Tribunnews - Smartphone - ( ID )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1057062',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    "plr_FastInit" : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.headHeight = $(".theader").outerHeight();

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
    $(".ism-anchor").css({"z-index": "99999"})
    $(".ism-frame").parent().css({
        "margin-top" : integration.custom.headHeight
    });
    $(".main").css({"padding-top": "0px"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
