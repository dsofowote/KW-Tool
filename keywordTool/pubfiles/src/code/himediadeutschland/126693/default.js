integration.meta = {
   'sectionID' : '126693',
   'siteName' : 'Computerbase - Smartphone - (INT)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   if ($("body > header").length == 1) {
		   $("<div id='inskinanchor'></div>").insertAfter("body > header");
		   integration.base.setCfg({
		   plr_AnchorParent : "#inskinanchor",
		   plr_PageHeightAdjustment : -50,
		   });
		   }
	   $('body').css({
		  'min-width' : 'initial' 
	   });
   }
});
