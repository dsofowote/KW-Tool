integration.meta = {
    'sectionID' : '128815',
    'siteName' : 'Who Scored - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1035683',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header-wrapper, #footer-wrapper, #user-bar-wrapper, .cookie-disclaimer").css({
			"width" : "990px",
			"margin" : "0 auto"
		});
	}
});
