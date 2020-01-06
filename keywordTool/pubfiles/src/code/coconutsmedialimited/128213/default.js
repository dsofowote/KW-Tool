integration.meta = {
   'sectionID' : '128213',
   'siteName' : 'Coconuts Singapore - (Publisher Booking) - Smartphone - ( Asia )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '990502',
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
      stylesCSS += '.inskinLoaded #page{ height: auto;}';
      stylesCSS += '.inskinLoaded .footer-co{ display: block;}';
      stylesCSS += '.inskinLoaded .mm-slideout{ z-index: 4;}';
      stylesCSS += '.inskinLoaded .mce-EMAIL{ padding: 0; width: 103%;}';
      stylesCSS += '.inskinLoaded .essb_links.essb_links_right{ text-align: left;}';
      stylesCSS += '.inskinLoaded .mm-menu.mm-offcanvas.mm-front, .inskinLoaded .mm-menu.mm-offcanvas.mm-next{ transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0); transform: translate(0,0); -webkit-transform: translate(0,0);}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "999"
    });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
