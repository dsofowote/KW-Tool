integration.meta = {
	'sectionID' : '127286',
	'siteName' : 'Kuechengoetter - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708029',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	//"plr_FramePositionCSS" : "border-right:120px solid transparent"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ad-sb").css({
			"height" : "0px"
		});

		$("#main-container-wrapper").css({
			"left" : "120px",
			"position" : "relative"
		});

	}
});
