integration.meta = {
	'sectionID': '126019',
	'siteName': 'La Repubblica - Desktop',

	'platform': 'desktop',
	'restrictions': ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '707290',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1012,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("#page-footer").css({
			"max-width": "1012px",
			"margin": "0 auto"
		});
		$('.has_domination #network-extra-container').css({
			'margin': '0 auto',
			'left': '0px',
			'right': '0px'
		});
		$('body,html').css({
			'overflow': 'visible'
		});
	}
});