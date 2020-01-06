integration.meta = {
   'sectionID' : '127142',
   'siteName' : 'Sabq - Smartphone - (MENA) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707895',
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
     window.unloadPageskin = function() {
       try {
         integration.destroy();
       } catch (e) {
       }
     };
     var headHeight = $(".navbar").outerHeight();
     integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
     var contentWidth = $(window).width() - integration.custom.FrameSideRight;
     if ($("#menu").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#menu");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }

     $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .cd-header.is-fixed{width: ' + contentWidth + 'px;}';
      stylesCSS += '.inskinLoaded header, .inskinLoaded #menu{width: 100vw !important; margin-right: ' + -integration.custom.FrameSideRight + 'px !important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
