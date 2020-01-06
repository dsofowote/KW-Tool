integration.meta = {
	'sectionID' : '127617',
	'siteName' : 'Jelita - Desktop - (MY)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768224',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html div#om-kk7czh5ncmdxeiaz').css({
			"right" : "25%"
		});
		$("head").append('<style>.ism-frame, .shiftnav{z-index: 9999999 !important;}</style>');
	}
});
