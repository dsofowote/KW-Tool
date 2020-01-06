integration.meta = {
	'sectionID' : '126543',
	'siteName' : ' Marie Claire (Competitions) - Desktop - (UK)',
	'platform' : 'desktop'
};
integration.testParams = {
	'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707046',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#header, #header > nav').css({
			'max-width' : '1030px'
		});
		$('#header, #header > nav').css({
			'padding-right' : '0px',
			'padding-left' : '0px',
			'margin' : '0 auto'
		});
		$('#footer').css({
			'width' : '1030px'
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
