integration.meta = {
   'sectionID' : '127984',
   'siteName' : 'CLEO MY - (Unpublished until approval) - Smartphone - ( MY )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '978397',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FixedCloseButton': true
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded div#wrapper {margin-top: 20px;}';
      stylesCSS += '.inskinLoaded #s {margin-left: 35px!important;}';
      stylesCSS += '.inskinLoaded #scroll_totop {z-index: 3;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("layoutChange", function(e) {
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
      var sideWidth = integration.custom.FrameSideRight + 20;
      var windowWidth = $(window).width();
      var contentWidth = windowWidth - integration.custom.FrameSideRight;
      $('body').addClass('inskinLoaded2');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded2 #scroll_totop {right: ' + sideWidth + 'px!important;}';
      stylesCSS += '.inskinLoaded2 table {width: ' + contentWidth + 'px!important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);

      integration.custom.InSkinBottomNav();
      $( document ).scroll(function() {
          integration.custom.InSkinBottomNav();
      });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $('body').removeClass('inskinLoaded2');
});
