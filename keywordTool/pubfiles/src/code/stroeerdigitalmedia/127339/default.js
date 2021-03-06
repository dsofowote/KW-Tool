integration.meta = {
   'sectionID' : '127339',
   'siteName' : 'Paradisi - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713127',
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
     $('#Cookies').css({
         'width': '980px',
         "margin" : "0 auto",
         "left" : "0",
         "right" : "0"
     });

   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000"
    });
});
