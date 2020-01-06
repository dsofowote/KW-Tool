integration.meta = {
   'sectionID' : '128296',
   'siteName' : 'Her World MY - (Unpublished until Approved) - Smartphone - ( MY )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1002164',
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
      stylesCSS += '.inskinLoaded {}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
