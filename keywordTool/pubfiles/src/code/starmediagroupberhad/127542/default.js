integration.meta = {
	'sectionID' : '127542',
	'siteName' : 'The Star Online - Tablet - (MY)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '740328',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".container").css({
				"max-width" : "960px"
			});
			$(".row").css({
				"padding" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	$("#dailyalertbox").css({
		"right" : integration.custom.FrameSideRight +"px",
		"bottom" : integration.custom.FrameBottom +"px"
	});
});
