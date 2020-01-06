integration.meta = {
	'sectionID' : '128406',
	'siteName' : 'Liberty Times Net  - Desktop - ( TW )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010110',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1260,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -102
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var headerHeight = $('header').height();
		var TotalHeight = headerHeight + integration.custom.FrameTop;
		if ($("div.blake").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("div.blake");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_StartScrollOnAnchor' : true
			});
			$('#inskinanchor').css({
				"top" : headerHeight,
				"position" : "relative"
			});

		}
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_StartScrollOnAnchor' : true
			});
			$('#inskinanchor').css({
				"top" : headerHeight,
				"position" : "relative"
			});

		} else {
			$('#inskinanchor').css({
				"top" : 0,
				"position" : "relative",
			});

		}
	}
});
