integration.meta = {
   'sectionID' : '128405',
   'siteName' : 'BabyHome Taiwan - Smartphone - ( TW )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1009115',
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
     integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
     var navHeight = $(".navbar-fixed-top").height() + 10;
     var pathname = window.location.pathname;
     var current_path = pathname.split('/').pop();

     if ($(".main-wrapper").length == 1) {
             $("<div id='inskinanchor'></div>").insertBefore(".main-wrapper");
             var header = $("<div id='inskinanchor'></div>");
             $(".main-wrapper").prepend(header);
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -navHeight,
                plr_ScrollAdjustment : 0
            });
      }
      $("#inskinanchor").css({
         "top" : navHeight,
         "position" : "relative"
     });
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .main-wrapper{height: auto;}';
      stylesCSS += '.inskinLoaded .sec-row.sec-login {margin-top: ' + navHeight + 'px;}';
      stylesCSS += '.inskinLoaded .head-universal {min-height: 0px;}';
      stylesCSS += '.inskinLoaded #moreLinks {right: ' + integration.custom.PageSkinRightPanel + 'px;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);

      if (current_path == 'mamishow' || current_path == 'event'){
        $(".sec-row").css({
           "padding-top" : "102px"
       });
      }
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
