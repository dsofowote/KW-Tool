integration.meta = {
    'sectionID' : '129526',
    'siteName' : 'Kiis Network - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085435',
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
        var headHeight = $("#primary-nav").height();
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .po-audio-player__main-container{position: relative;}';
        stylesCSS += '.inskinLoaded .po-audio-player__spacer--is-visible{height: 0;}';
        stylesCSS += '.inskinLoaded #main-body-container{padding-top: 0;}';
        stylesCSS += '.inskinLoaded #primary-nav{z-index: 12;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
    window.unloadPageskin = function() {
      try {
        integration.destroy();
      } catch(e) {
      };
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#primary-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight,
        "z-index" : "13"
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
