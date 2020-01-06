integration.meta = {
   'sectionID' : '126927',
   'siteName' : 'Freenet - Smartphone - (AT CH DE)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '708089',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('layoutChange', function(e) {
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var width = $(window).width();
      var cwidth = width - integration.custom.FrameSideRight;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded #frnMain{max-width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
      stylesCSS += '.inskinLoaded #frnKopf_Neu{max-width: ' + cwidth + 'px !important;}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
});

integration.on('adServed', function(e) {
setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 100);
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});
