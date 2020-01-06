integration.meta = {
	'sectionID' : '128151',
	'siteName' : 'Allocine - Desktop - ( BE )',
	'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '984077',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("#main-header").height();
		if ($("#main-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#main-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -(headerHeight + 10),
				plr_ScrollAdjustment : -59
			});
		}
		$("#back-top").css({
			"margin-left" : "28.5rem"
		});
	}
});
