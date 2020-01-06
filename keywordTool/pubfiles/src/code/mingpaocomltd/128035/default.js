integration.meta = {
   'sectionID' : '128035',
   'siteName' : 'MingPao - (Programmatic) - Smartphone - ( HK )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '970807',
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
   	integration._addPixel();
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .bgcolor{width: inherit;} .inskinLoaded #share_wrap{width: initial;}';
      stylesCSS += '.inskinLoaded .share_wrapper2{margin-left: 0px;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	  var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded #footer_nav, .inskinLoaded .navbar-fixed-bottom{width: calc(100% - '+ integration.custom.FrameSideRight +'px);}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "2000"
    });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});