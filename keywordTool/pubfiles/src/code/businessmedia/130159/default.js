integration.meta = {
    'sectionID' : '130159',
    'siteName' : 'Business',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1315]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105054',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1055,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#header, #footer").css({"margin": "0 auto", "max-width": "1055px"});
        var scrollAdjust = $("#header-small").outerHeight();
		integration.base.setCfg({
			plr_ScrollAdjustment : scrollAdjust
		});
    }
});
