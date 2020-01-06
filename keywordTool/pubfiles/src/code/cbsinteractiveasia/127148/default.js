integration.meta = {
	'sectionID' : '126313',
	'siteName' : 'CBS News - Desktop - (UK)',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707861',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$('header.site-header, footer.site-footer').css({
			'max-width' : '990px',
			'margin' : 'auto',
		});

		$('#videoContainer').css({
			'max-width' : '1000px',
			'margin' : 'auto',
		});
		$('.row.col-12.article-video-player').css({
			'margin-right' : '40px'
		});

	}
});
