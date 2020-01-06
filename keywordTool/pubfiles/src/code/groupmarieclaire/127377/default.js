integration.meta = {
   'sectionID' : '127377',
   'siteName' : 'Supertoinette - Smartphone- (FR)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717187',
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
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	console.log(integration.custom.FrameTop);
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function (){
	var windowWidth = $(window).width();
	
	$("#header-logo ul").css({
		"position" : "absolute",
		"top" : integration.custom.FrameTop + 10,
		"right" : integration.custom.FrameSideRight + 10
	});
}
