integration.meta = {
   'sectionID' : '127916',
   'siteName' : 'Salzgitter Zeitung - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '928923',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".ad__superbanner").hide();
   }
});