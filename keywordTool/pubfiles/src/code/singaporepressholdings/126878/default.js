integration.meta = {
   'sectionID' : '126878',
   'siteName' : 'Home and Decor - Desktop - (SG)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707147',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1060,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("body").css({
		   "background" : "none"
	   });
   }
});
