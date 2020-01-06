integration.meta = {
   'sectionID' : '127935',
   'siteName' : 'CNN  - Smartphone - ( HK SG )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '952777',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_ShowCloseButton' : true,
   'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .nav__logo{height:50px}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});
