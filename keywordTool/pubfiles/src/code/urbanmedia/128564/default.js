integration.meta = {
	'sectionID': '128564',
	'siteName': 'Monopol - Desktop - DE',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1023469',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1180,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("#page-wrapper").css({
			"max-width": "1160px",
			"margin": "0 auto"
		});

		$("body, html").css({
			"height": "initial"
		});

		$("head").append('<style>#animation-logo-start-wrapper{display: none !important;}</style>');
	}
});
