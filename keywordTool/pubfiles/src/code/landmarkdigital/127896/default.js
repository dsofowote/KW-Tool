integration.meta = {
	'sectionID' : '127896',
	'siteName' : 'Breaking News  IE - Desktop - ( IE UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '920745',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		var widgetWidth = $("#shareSidebar").width();
		var sideWidth = (windowWidth - 1000) / 2;

		$("#shareSidebar").css({
			"left" : sideWidth,
			"z-index" : "1000"
		});

		$("footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1001"
	});
});
