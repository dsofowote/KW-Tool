integration.meta = {
   'sectionID' : '124328',
   'siteName' : 'Ad Ops PageSkin - DO NOT USE',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706087',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 968,
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
