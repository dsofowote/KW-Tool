integration.meta = {
    'sectionID' : '129208',
    'siteName' : 'Traveller.com.au - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063879',
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
        var headHeight = $('.header-wrap').height();
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1) {z-index: 12 !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3) {z-index: 3 !important}';
        stylesCSS += '.inskinLoaded .ism-indicator {display: block !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
            plr_PageHeightAdjustment: -headHeight,
        })
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('.header-wrap').height();
        $(".ism-frame").parent().css({"margin-top" : headHeight});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
