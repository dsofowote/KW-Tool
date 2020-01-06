integration.meta = {
	'sectionID' : '124840',
	'siteName' : 'AAStocks',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706401',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("#topPanel, #divMasterHead").css({
			"max-width" : "1220px",
			"margin" : "auto"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
