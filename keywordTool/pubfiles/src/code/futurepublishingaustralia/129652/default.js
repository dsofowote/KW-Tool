integration.meta = {
    'sectionID' : '129652',
    'siteName' : 'PC Gamer - Desktop - (SG) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086262',
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