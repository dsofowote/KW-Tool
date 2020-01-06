integration.meta = {
   'sectionID' : '128103',
   'siteName' : 'RSVP Live - Smartphone - ( IE UK )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '976279',
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
      stylesCSS += '.inskinLoaded {margin-top:85px !important;}';
      stylesCSS += '.inskinLoaded .gpt.sticky-bottom-banner {z-index:1;}';
      stylesCSS += '.inskinLoaded .gig-composebox-site-login {padding:3px 10px !important;}';
      stylesCSS += '.inskinLoaded .comments-header-title{right:14px !important;}';
      stylesCSS += '.inskinLoaded .gpt.top-slot{max-height:0px}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[320,50]])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n <\\script>";
};
