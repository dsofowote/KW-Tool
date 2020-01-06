integration.meta = {
	'sectionID' : '126876',
	'siteName' : 'Mens Folio - Desktop - (SG) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707162',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20,
	'plr_GetContentHeightVersion' : 2,
	'plr_EnableActiveResize' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		var sides = (wwidth - 980)/2

		$("footer").css({
			"max-width" : "980px",
			"margin-left" : sides
		});
	}
});
