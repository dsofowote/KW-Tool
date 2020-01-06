integration.meta = {
   'sectionID' : '126666',
   'siteName' : 'Sky News - Smartphone - (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '708097',
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
      $('html').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var contentWidth = $(window).width() - integration.custom.FrameSideRight;
      stylesCSS += '.inskinLoaded body{overflow-x: visible !important}';
      stylesCSS += '.inskinLoaded #mast-c-notification__signin{max-width: '+ contentWidth +'px !important; left: 0px}';
      stylesCSS += '.inskinLoaded #mast-header-overlay{max-width: '+ contentWidth +'px !important}';
      stylesCSS += '@media screen and (max-width: 320px){.inskinLoaded .sdc-site-share__link{margin-right: 0 !important;} .inskinLoaded .sdc-news-footer__list{margin: .5em !important;}}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('html').removeClass('inskinLoaded');
});

