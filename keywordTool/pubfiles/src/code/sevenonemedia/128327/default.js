integration.meta = {
   'sectionID' : '128327',
   'siteName' : 'Fem - Smartphone - ( DE )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1003662',
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


integration.on('adCallResult', function(e) {
  if ($("#page").length == 1) {
              $("<div id='inskinanchor'></div>").insertBefore("#page");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : -50,
              });
          }
          var rightPanel = e.data.plr_FrameSideRight;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded #page{padding-top:0px;}';
      stylesCSS += '.inskinLoaded #social-buttons, .inskinLoaded #flyout-recommended-content{width:calc(100% - '+ rightPanel +'px);}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
      $("#inskinanchor").css({
        "margin-top" : "50px",
        "z-index" : "100"
      });

});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $("#inskinanchor").remove();
});
