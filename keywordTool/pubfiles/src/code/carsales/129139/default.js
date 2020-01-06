integration.meta = {
    'sectionID' : '129139',
    'siteName' : 'Carsales - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058406',
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
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      var windowWidth = $(window).width();
      var contentWidth = windowWidth - integration.custom.PageSkinRightPanel;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .button--s-lg{width:' + (contentWidth - 60 ) + 'px !important;}';
        stylesCSS += '</style>'
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

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
