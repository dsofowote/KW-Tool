integration.meta = {
   'sectionID' : '128352',
   'siteName' : 'Trainingsworld - Desktop - ( DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1448]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1005014',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1128,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".main-wrap").css({
         "float" : "inherit",
         "width" : "1128px",
         "margin" : "0 auto",
         "padding-top" : "10px"
     });
     $('[i-amphtml-fixedid="F0"]').css({
         "display" : "none"
     });
   }
});
