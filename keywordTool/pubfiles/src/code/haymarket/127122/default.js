integration.meta = {
	'sectionID' : '127122',
	'siteName' : 'Campaign Asia - Smartphone- (ASIA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707699',
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
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	})
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var wheight = $(window).height();
	if (wwidth < 335) {
		$(".mobNavButton").css({
			"position" : "relative",
			"left" : "-10px"
		});
		$("#mobSearch").css({
			"position" : "relative",
			"right" : "-12px"
		});
	} else {
		$(".mobNavButton").css({
			"position" : "relative",
			"left" : "0px"
		});
		$("#mobSearch").css({
			"position" : "relative",
			"right" : "0px"
		});
	}

}
