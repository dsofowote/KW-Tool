integration.meta = {
   'sectionID' : '127119',
   'siteName' : 'Planet F1 - Desktop - (UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707457',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1180,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#siteContainerInner").css({
		   "attr" : "value"
	   });
   }
});
