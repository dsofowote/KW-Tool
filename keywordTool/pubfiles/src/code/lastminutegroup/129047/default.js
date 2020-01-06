integration.meta = {
    'sectionID' : '129047',
    'siteName' : 'Last Minute - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046717',
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
		$('[data-kind="hub-row"]').css({"margin": "0 auto", "max-width": "1210px"})
    }
});
