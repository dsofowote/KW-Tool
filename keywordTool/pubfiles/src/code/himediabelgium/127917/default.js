integration.meta = {
	'sectionID' : '127917',
	'siteName' : "L'Internaute - Desktop - (BE)",
	'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '928924',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1300,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body > div.ccmcss_offcanvas_1 > div > header, body > div.ccmcss_offcanvas_1 > div > footer').css({
			'max-width' : '1300px',
			'margin' : '0 auto'
		});
	}
}); 