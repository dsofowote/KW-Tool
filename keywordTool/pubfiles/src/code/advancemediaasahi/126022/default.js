integration.meta = {
   'sectionID' : '126022',
   'siteName' : 'Asahi - Desktop - (JP)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706487',
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
   	$("#Header, #Footer").css({
   		"max-width" : "1000px"
   	});
   }
});
