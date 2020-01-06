integration.meta = {
    'sectionID' : '130211',
    'siteName' : 'ITavisen - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

function setWindow() {
    return currentWindow.top;
  };

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1107680',
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
        stylesCSS += '.inskinLoaded {overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded #contents, .story {overflow: visible !important}';
        stylesCSS += '.inskinLoaded .banner{display: none !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .ism-frame:nth-of-type(2){top: -10px !important}';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({"z-index" : "10002"});

});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});