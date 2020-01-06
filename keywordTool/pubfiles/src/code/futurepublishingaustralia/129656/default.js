integration.meta = {
    'sectionID' : '129656',
    'siteName' : 'PC Gamer - Desktop - (NZ)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086266',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".primary-nav, #document-footer").css({"margin": "0 auto", "max-width": "960px"});
    }
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({
		"z-index" : "9999"
    });
});