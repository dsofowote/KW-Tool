integration.meta = {
	'sectionID' : '127992',
	'siteName' : 'Gonzoo - Desktop - ( ES )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965100',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : '28'
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#ui-20m-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#ui-20m-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("head").append("<style>.banner-header{display: none !important;}</style>");
	}
});
