integration.meta = {
   'sectionID' : '127244',
   'siteName' : 'Russell Grant - Smartphone- (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707418',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_Responsive" : true,
   "plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});
