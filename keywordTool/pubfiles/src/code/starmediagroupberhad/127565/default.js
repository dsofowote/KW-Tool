integration.meta = {
   'sectionID' : '127565',
   'siteName' : 'The Star Online - Desktop - (MY)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '749139',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1260,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $("#navbar-main").height() + 1;
     integration.base.setCfg({
         plr_ScrollAdjustment : headHeight
     });
     $(".Inline.Ads-slot, .highlights, .footer, .footer-bottom").css({
       "margin" : "0 auto",
       "width" : "1260px"
     });
     $("#navbar-main.navbar").css({
       "border" : "none"
     });
     $("head").append("<style>#thestar-global-bar .global-bar-color{box-shadow:none !important; -webkit-box-shadow: none !important;}</style>");

   }
});
