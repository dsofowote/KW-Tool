integration.meta = {
   'sectionID' : '127711',
   'siteName' : 'Welt - (DE campaigns only) - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '838821',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".c-browser-container").css({
		   "overflow-x" : "visible"
	   });
   }
});
