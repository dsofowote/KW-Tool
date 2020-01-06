integration.meta = {
	'sectionID' : '126763',
	'siteName' : 'Le Monde - Smartphone - (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708075',
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
		var windowWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = windowWidth - integration.custom.FrameSideRight;

		$(".ol-sticky-top__top-container").css({
			"max-width" : contentWidth
		});

		$("footer").css({
			"margin-bottom" : "0px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	content = wwidth - integration.custom.FrameSideRight;

	$("#container").css({
		"max-width" : content
	});
}
