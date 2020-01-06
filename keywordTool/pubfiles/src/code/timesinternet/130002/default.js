integration.meta = {
    'sectionID' : '130002',
    'siteName' : 'Navbharat Times - Desktop - (US/Canada)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098972',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#gdpr-block").css({"position": "relative", "z-index": "9"});
        // $("#gdpr-block").css({"margin": "0 auto", "max-width": "1000px"});

        window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
    }
});
