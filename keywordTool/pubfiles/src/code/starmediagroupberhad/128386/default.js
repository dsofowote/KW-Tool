integration.meta = {
   'sectionID' : '128386',
   'siteName' : 'Carsifu - (Classified) - Desktop - ( MY )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1390]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1007963',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1128,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.telemetry.recordCustom("browserWidth ")
		$("footer").css({
			"max-width" : "1130px",
			"margin" : "0 auto"
		});
	}
});
