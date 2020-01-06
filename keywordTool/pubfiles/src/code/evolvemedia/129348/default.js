integration.meta = {
    'sectionID' : '129348',
    'siteName' : 'LiveOutdoors - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072972',
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
      if ($(".container-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".container-header");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor"
        });
      }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .wrapper {min-width: calc(100% - 74px) !important}';
        stylesCSS += '.inskinLoaded .coverpanel-wrapper {display: flex}';
        stylesCSS += '.inskinLoaded .coverpanel-wrapper > li {width: calc(100% - 74px) !important}';
        stylesCSS += '.inskinLoaded .ism-anchor {top: 54px}';
        stylesCSS += '.inskinLoaded .bx-viewport {height: 284px !important}';
        stylesCSS += '.inskinLoaded .inner-wrapper {padding-top: 54px}';
        stylesCSS += '.inskinLoaded .floating {margin-top: 54px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index": "999999999"});
    $(".container-header").css({"z-index": "1000000001"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
