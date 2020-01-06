integration.meta = {
	'sectionID' : '128086',
	'siteName' : ' TV Today - Desktop - (DE)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1304]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '974919',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 984,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_PageHeightAdjustment' : -130
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		if ($("body header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('main, footer').css({
			"margin" : "0 auto",
			"width" : "984px"
		});
	}
});
