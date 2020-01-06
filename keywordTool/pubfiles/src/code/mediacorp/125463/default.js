integration.meta = {
	'sectionID' : '125463',
	'siteName' : 'Today Online - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706743',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "[id^=block-block]",
	"plr_HideElementsByClass" : "newstream_ad",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1,
	'plr_URLKeywords' : 1,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('in-skin');

		$(".ad-leaderboard").css({
			"max-width" : "970px"
		});

		window.onunload = function() {
			$('body').removeClass('in-skin');

			$(".ad-leaderboard").css({
				"max-width" : "initial"
			});

			try {
				integration.destroy()
			} catch (e) {}
		}
	}
});
