integration.meta = {
	'sectionID' : '126421',
	'siteName' : 'Hausgarten - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1348]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706870',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1028,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -15,
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('footer, #footer-block').css({
			"width" : "1028px",
			"margin" : "0 auto"
		});
		$('#qmdfp').css({
			"width" : "1028px",
			"margin" : "10px auto"
		});

	}
});
