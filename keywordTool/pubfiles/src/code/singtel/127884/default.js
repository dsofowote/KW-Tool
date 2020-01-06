integration.meta = {
   'sectionID' : '127884',
   'siteName' : 'HungryGoWhere - Smartphone - ( SG )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '916168',
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
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('layoutChange', function(e) {
   var wwidth = $(window).width();
   integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
   var cwidth = wwidth - integration.custom.FrameSideRight;
   $("head").append("<style>.inskinLoaded .list-socialmedia{max-width: " + cwidth + "px;}</style>");
});

integration.on('adServed', function(e) {
   $(".ism-frame").parent().css({
       "z-index" : "10"
   });
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});
