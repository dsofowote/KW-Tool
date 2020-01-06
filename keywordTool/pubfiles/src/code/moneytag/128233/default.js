integration.meta = {
   'sectionID' : '128233',
   'siteName' : 'Skyrock - Desktop - ( FR )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '993245',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
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
               } catch (e) {}
      };
     $("#footer, #header, #social_bar").css({
         "width" : "980px",
         "margin" : "0 auto"
     });
     $("body").css({
         "background" : "none"
     });
     $("#social_bar").css({
         "left" : "0",
         "right" : "0",
         "z-index" : "4"
     });

   }
});
