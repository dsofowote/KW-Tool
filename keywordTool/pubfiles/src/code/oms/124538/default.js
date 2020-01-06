integration.meta = {
   'sectionID' : '124538',
   'siteName' : 'DerWesten - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707758',
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
   	//$("head").append('<style>.ad.ad--stroer .ad__superbanner.ad--desktop, .ad--marker .ad--marker-inner{display: none !important;}</style>');
   } 
});
