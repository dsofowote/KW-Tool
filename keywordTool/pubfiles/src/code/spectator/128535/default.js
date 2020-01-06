integration.meta = {
    'sectionID' : '128535',
    'siteName' : 'Spectator - (Creative Approval) - Desktop - (US)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1021232',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1210,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body").hasClass("section-life")) {
			//Section - Life
			$(".desktop-bar, .site-header").css({
				"max-width" : "1100px",
				"margin" : "0 auto",
				"margin-top" : "30px"
			});
			integration.base.setCfg({
				'plr_ContentW' : 1110
			});
		} else {
			//Section - other
			$(".desktop-bar, .site-header").css({
				"max-width" : "1200px",
				"margin" : "0 auto",
				"margin-top" : "30px"
			});
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 52
			});
		}
		$(".top-banner").hide();
	}
});
