integration.meta = {
    'sectionID' : '129334',
    'siteName' : 'Cycling News - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072734',
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
        var navHeight = $(".top-navbar-wrap").outerHeight();
        stylesCSS += '.inskinLoaded .global-banner{display: none}';
        stylesCSS += '.inskinLoaded #page-canvas{margin-top: ' + navHeight  + 'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headerHeight = $(".nav-panel").outerHeight();
        $(".ism-anchor").css({"top" :headerHeight});
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headerHeight,
          })
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\\\"https://www.googletagservices.com/tag/js/gpt.js\\\">\\n    googletag.pubads().definePassback(\\\"/10518929/Passback_CyclingNews/Inskin\\\", [320, 50]).display();\\n<\\\\script>";
};
