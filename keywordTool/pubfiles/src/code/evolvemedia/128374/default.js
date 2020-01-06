integration.meta = {
	'sectionID' : '128374',
	'siteName' : 'The Fashion Spot - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1007232',
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on('adServed', function(e) {
  var headHeight = $('header').height();
	$(".ism-anchor").css({
		"top" : headHeight,
    "z-index": 100
	});
		integration.base.setCfg({
			plr_PageHeightAdjustment : -headHeight
		});
});
