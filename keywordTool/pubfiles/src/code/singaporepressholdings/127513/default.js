integration.meta = {
   'sectionID' : '127513',
   'siteName' : 'Torque - (CREATIVE APPROVAL) - Desktop - (SG)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '733366',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
       
        //Footer is absolute positioned, therefore we do not account for its height by default
       var footerHeight = $("#footer").height();
       integration.base.setCfg({
        "plr_PageHeightAdjustment" : footerHeight
       });
   }
});
