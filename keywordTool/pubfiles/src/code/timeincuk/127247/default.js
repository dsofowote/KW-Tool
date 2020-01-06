integration.meta = {
	'sectionID' : '127247',
	'siteName' : 'Health - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707583',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 45,
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.header-top').outerHeight();
		$("html, body").css({
			"overflow" : "initial"
		});
		$(".header-wrapper").css({
			"min-width" : "calc(100% - " + integration.custom.FrameSideRight + "px)",
			"min-height" : headerHeight
		});
		if ($(".header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	$("head").append("<style>#_evh-link{margin-right:" + integration.custom.FrameSideRight + "}</style>");
}
