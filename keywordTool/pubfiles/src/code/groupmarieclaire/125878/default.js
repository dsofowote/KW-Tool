integration.meta = {
	'sectionID' : '125878',
	'siteName' : 'Staragora - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706740',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -200,
	'plr_AnchorParent' : '#inskinanchor',
	'plr_ScrollAdjustment' : -120
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.BodyHero .External:not(.is-empty){margin:0;height:0;}</style>");
		if ($("body > #header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > #header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		
		$("footer, .BodyHero, .cookieNotification").css({
			"max-width" : "1020px",
			"margin" : "auto"
		});
	}
});

integration.on('adServed', function(e) {
	if (e.data.hasSkin) {
		$("#inskinanchor").css({
			"margin-top" : "15px"
		});
	}
});
