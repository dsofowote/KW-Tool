integration.meta = {
   'sectionID' : '127905',
   'siteName' : 'InSing - (Publisher Booking) - Desktop - ( SG )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '919964',
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

