integration.meta = {
    'sectionID' : '129183',
    'siteName' : 'Hawaaworld - Smartphone - (MENA)   ',
    'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061993',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        stylesCSS += '.inskinLoaded #backToTop {right: ' + integration.custom.FrameSideRight + 'px; bottom:' + integration.custom.FrameBottom + 'px}';
        stylesCSS += '.inskinLoaded .mpu {margin:0 auto;position: relative;overflow:visible}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
          try {
              integration.destroy();
          } catch (e) {
          }
      };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var navHeight = $('.navbar').height();
    $(".ism-frame").parent().css({
        "top" : navHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -navHeight,
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
