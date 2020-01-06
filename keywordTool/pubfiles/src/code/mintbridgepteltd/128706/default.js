integration.meta = {
    'sectionID' : '128706',
    'siteName' : 'Pets - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1031841',
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

      if ($(window).width() <= 405) {
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .page .slim aside.sidebar{position: relative; left: -15px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
      }
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
