integration.meta = {
   'sectionID' : '126112',
   'siteName' : 'InSing - Desktop  - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706791',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "8"
	});
});
