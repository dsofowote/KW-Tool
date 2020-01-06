integration.meta = {
    'sectionID' : '129689',
    'siteName' : 'Tom\'s Guide -  Desktop - (ASIA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086288',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
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
