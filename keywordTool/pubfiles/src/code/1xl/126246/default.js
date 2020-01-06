integration.meta = {
	'sectionID' : '126246',
	'siteName' : 'Johnston Press - Mobile (UK)',
	
	'platform' : 'smartphone',
	'restrictions' : '',
	'optimised' : 'true'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707181',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.site-search__fieldset{width: 37% !important;}</style>");
		
		$("footer").css({
			"float" : "none"
		});
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.custom.pageLead = true;
	}
});

integration.on('adServed', function(){
	if (integration.custom.pageLead) {
		$(".ism-anchor").css({
			"z-index" : "10000"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(".sharetool__list").css({
		"width" : "calc(100% - " + integration.custom.FrameRight + "px)"
	});
	$(".site-search__fieldset").css({
		"margin-right" : integration.custom.FrameRight + 5,
		"margin-top" : integration.custom.FrameTop
	});
}); 