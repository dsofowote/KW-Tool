integration.meta = {
	'sectionID' : '127264',
	'siteName' : 'Mac Welt - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707042',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});

		$("#ad_leadfull").css({
			"margin" : "15 auto 0px"
		});
	}
});
