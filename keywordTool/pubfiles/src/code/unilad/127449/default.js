integration.meta = {
   'sectionID' : '127449',
   'siteName' : 'Unilad -(Publisher Booking) - Smartphone ',
   'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '723011',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".prl-span-12, #m-section, #sidebar").css({
		   "max-width" : "100%"
	   });
   }
});


