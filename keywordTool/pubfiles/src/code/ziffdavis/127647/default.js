integration.meta = {
	'sectionID' : '127647',
	'siteName' : 'What to expect - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1035955',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 102
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#global-page-wrapper').css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
	}
});
