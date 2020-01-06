integration.meta = {
   'sectionID' : '127433',
   'siteName' : 'Boerse Frankfurt - Desktop  - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721519',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1170,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".topbanner").css({
		   "display" : "none"
	   });
   }
});
