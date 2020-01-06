integration.meta = {
	'sectionID' : '127521',
	'siteName' : 'NUYOU - (CREATIVE APPROVAL) - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734576',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".nav-wrapper.cf").height();
		if ($(".nav-wrapper.cf").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".nav-wrapper.cf");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -51,
				plr_ScrollAdjustment: headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		$("footer").css({
			"max-width" : "960px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
	}
});
