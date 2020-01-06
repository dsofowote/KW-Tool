integration.meta = {
	'sectionID' : '127947',
	'siteName' : 'Shape - (Creative Approval) - Desktop - ( SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '957247',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer, #page-bottom-bg").css({
			"max-width" : "1080px",
			"margin" : "0 auto",
			"position" : "relative"
		});
	}
});
