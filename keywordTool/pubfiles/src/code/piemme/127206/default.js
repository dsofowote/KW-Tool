integration.meta = {
   'sectionID' : '127206',
   'siteName' : 'Ilmattino - Smartphone- (IT)   (ID: 127206 )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707963',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_CheckOptOut': true,
   'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg",
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('body').css({
		  "overflow-x" : "visible"
	   });
   }
});
