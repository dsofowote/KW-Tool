integration.meta = {
	'sectionID' : '127549',
	'siteName' : 'Expert Reviews - Smartphone- (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '743890',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {		
		$("html, body").css({
			"overflow" : "visible"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	$("#menu-extender-list-wrapper.active ul").css({
		"max-width" : contentWidth
	});
}
