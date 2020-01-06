integration.meta = {
    'sectionID' : '128982',
    'siteName' : 'Homesales - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1044412',
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
      if ($(".main-wrapper").length == 1) {
        var hHeight = $(".navbar").outerHeight();
        $("<div id='inskinanchor'></div>").insertBefore(".main-wrapper");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          'plr_PageHeightAdjustment' : -hHeight
        });
      }
      if ($(".page").length == 1) {
        var hHeight = $(".menu-button").outerHeight();
        $("<div id='inskinanchor'></div>").insertBefore(".page");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          'plr_PageHeightAdjustment' : -hHeight
        });
      }

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #inskinanchor {margin-top: '+ hHeight +'px}';
        stylesCSS += '.inskinLoaded .main-wrapper {margin-top: 0!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
