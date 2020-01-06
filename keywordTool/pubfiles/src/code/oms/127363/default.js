integration.meta = {
   'sectionID' : '127363',
   'siteName' : 'WAZ - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '714886',
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
	   $(".ad__superbanner, .ad__skyscraper").css({
		  "display" : "none"
	   });
   }
});
