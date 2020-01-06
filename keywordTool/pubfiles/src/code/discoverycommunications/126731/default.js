integration.meta = {
   'sectionID' : '126731',
   'siteName' : 'Discovery Channel Asia - Desktop - (ASIA)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708081',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("head").append("<style>body{background:transparent !important}</style>");
   	$('body').attr('style', 'background:transparent !important');
   	$("footer").css({
		   "max-width" : "960px",
		   "margin" : "0 auto"
	   });
   }
});
