integration.meta = {
   'sectionID' : '128351',
   'siteName' : 'BFI - Desktop - ( UK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1005013',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_GetContentHeightVersion': 2
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $("#page_top, #sliding-popup, .footer").css({
         "width" : "1000px",
         "margin" : "0 auto"
     });
     $("#sliding-popup, .footer").css({
         "left" : "0",
         "right" : "0"
     });
     $(".social_sidebar").css({
         "margin-left" : "-499px"
     });
   }
});
