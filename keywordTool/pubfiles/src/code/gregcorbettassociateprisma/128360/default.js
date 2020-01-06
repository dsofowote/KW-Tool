integration.meta = {
   'sectionID' : '128360',
   'siteName' : 'Femme Actuelle - Smartphone - ( FR )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1007015',
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
      integration.custom.ww = $(window).width();
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .sharebar{width:calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
      stylesCSS += '.inskinLoaded .swiper-slide.swiper-slide-active{width:' + integration.custom.cw + 'px!important;}';
      stylesCSS += '.inskinLoaded .input-group-btn, .inskinLoaded .input-group-btn>.btn{max-width:' + (integration.custom.cw - 10) + 'px!important;}';
      stylesCSS += '.inskinLoaded div.input-group-btn > p{font-size: 15px!important;}';
      stylesCSS += '.inskinLoaded div.input-group-btn > a{font-size: 17px!important;}';
      stylesCSS += '.inskinLoaded .p-all-md{padding: 15px 0px!important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "11"
    });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
