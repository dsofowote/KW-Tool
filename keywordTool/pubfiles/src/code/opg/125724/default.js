integration.meta = {
   'sectionID' : '125724',
   'siteName' : 'ONCC - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1314]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706438',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1054,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#sitemapCTN, #footer").css({
			"max-width" : "1044px",
			"margin" : "0 auto"
		});

	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});