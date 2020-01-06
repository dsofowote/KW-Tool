integration.meta = {
   'sectionID' : '127990',
   'siteName' : 'Asia Pacific Boating  - (Creative Approval) - Desktop - ( HK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1258]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '965020',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1018,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $("#header, #footer, .footer-border").css({
         "width" : "1018px",
         "margin" : "0 auto"
     });
   }
});
integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "overflow" : "visible"
    });
});