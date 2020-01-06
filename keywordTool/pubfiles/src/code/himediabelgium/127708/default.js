integration.meta = {
   'sectionID' : '127708',
   'siteName' : 'Comment Ca Marche  - Desktop - (BE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '838818',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("header, footer").css({
		   "max-width" : "1000px",
		   "margin" : "0 auto"
	   });
   }
});
