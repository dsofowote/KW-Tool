integration.meta = {
   'sectionID' : '127126',
   'siteName' : 'Gulf Business - Desktop - (UAE) ',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [1542]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707992',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1282,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	
   }
});
