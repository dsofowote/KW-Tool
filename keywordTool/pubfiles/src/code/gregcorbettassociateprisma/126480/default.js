integration.meta = {
   'sectionID' : '126480',
   'siteName' : 'Prima - Desktop - ( FR )',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1005847',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1032,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -13,
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     integration._addPixel();
     $("#main_footer, #cookieconsent").css({
       "width" : "1032",
       "margin" : "0 auto"
     });
     $("#main_footer").css({
       "float" : "inherit"
     });
     $("#col_right").css({
       "margin" : "0 0 0 53px"
     });

   }
});
