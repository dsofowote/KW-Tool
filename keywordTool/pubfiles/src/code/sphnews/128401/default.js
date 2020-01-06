integration.meta = {
   'sectionID' : '128401',
   'siteName' : 'The Straits Times - Smartphone - (SG)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1009001',
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
   	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .sbackground-premium{width: 100% !important; margin-left: 0 !important;}';
      stylesCSS += '.inskinLoaded .it-pays-to-know-area .close-button{right: -10px !important; top: -10px !important;}';
      stylesCSS += '.inskinLoaded .it-pays-to-know-area .title{background-size: 100% !important;}';
      stylesCSS += '.inskinLoaded .ads .pane-content{margin-left: -10px !important;}';
      stylesCSS += '.inskinLoaded .back-to-top{right: '+ integration.custom.FrameSideRight +'px !important;}';
      stylesCSS += '.inskinLoaded .navbar-collapse nav .block-nav-search.mobileonly .navbar-toggle-search{right: 7.5rem !important;}';
      stylesCSS += '.inskinLoaded .navbar-collapse nav .navbar-toggle-user{right: 0.5rem !important;}';
      stylesCSS += '.inskinLoaded .navbar-collapse nav .navbar-sph-sites li a.sph-sites-toggle{left: 10px !important;}';
      stylesCSS += '.inskinLoaded .SB_4.ob-widget .ob-rec-text{max-height: 100% !important; height: auto !important;}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on("adServed", function(e) {
	setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 250);
});


integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
	setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 250);
});

