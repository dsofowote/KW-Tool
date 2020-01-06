integration.meta = {
    'sectionID' : '129688',
    'siteName' : 'Tom\'s Guide - Desktop - (ASIA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086287',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.primary-nav, #document-footer').css({
			"max-width" : "970px",
			"margin" : "0 auto",
			"left" : 0,
			"right" : 0
		});
	}
});
