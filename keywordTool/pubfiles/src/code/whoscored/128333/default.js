integration.meta = {
	'sectionID' : '128333',
	'siteName' : 'Who Scored - (Passback) - Desktop - ( US )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1004034',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/4758\"><\\script>";
};