integration.meta = {
  'sectionID': '128000',
  'siteName': 'Rugby Pass - Smartphone - (INT)',
  'platform': 'smartphone'
};

integration.testParams = {
  'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '965377',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive': true,
  'plr_ShowCloseButton': true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};


integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    $('html').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded body, .inskinLoaded #template{overflow:visible;}';
    stylesCSS += '.inskinLoaded body{padding-top:0px !important;}';
    stylesCSS += '.inskinLoaded .menu-header-ad{display:none !important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
    window.unloadPageskin = function() {
      try {
        $('body').removeClass('inskinLoaded');
        integration.destroy();
      } catch (e) {};
    }
  }
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});
