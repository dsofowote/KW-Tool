integration.meta = {
   'sectionID' : '127414',
   'siteName' : 'Entrepreneur - Smartphone (INT)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '718784',
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
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("#nav").css({
		"margin-top" : integration.custom.FrameTop
	});
});