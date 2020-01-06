integration.meta = {
	'sectionID' : '127144',
	'siteName' : 'Sayidaty - Desktop - (MENA)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707808',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 100
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#main-wrap, #sticky-header").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		});
	}
});
