integration.meta = {
   'sectionID' : '128105',
   'siteName' : 'Harper\'s Bazaar - (Creative Approval) - Smartphone - ( SG )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '976462',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_Responsive' : true,
   'plr_FixedCloseButton': true
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .mobile-overlay-nav.home.sticky{z-index: 101;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("layoutChange", function(e){
  integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
  integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
  integration.custom.ww = $(window).width();
  $('body').addClass('inskinLoaded');
  var stylesCSS = '<style type="text/css">';
  stylesCSS += '.inskinLoaded #tulsa-optin{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
  stylesCSS += '.inskinLoaded .mobile-overlay-nav.home{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
  stylesCSS += '.inskinLoaded .tulsa-outer-wrap{margin: 0!important;}';
  stylesCSS += '.inskinLoaded .mobile-overlay-nav.home{top: calc(' + integration.custom.PageSkinTopPanel + 'px);}';
  stylesCSS += '.inskinLoaded .mobile-overlay-nav.home.sticky{top: 0;}';
  stylesCSS += '</style>'
  $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
