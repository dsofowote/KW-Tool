integration.meta = {
	'sectionID' : '126292',
	'siteName' : 'Golf Magic - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708082',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

function setWindow() {
    return currentWindow.top;
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.header.js-header').css({
			'max-width' : '960px',
			'margin' : 'auto',
			'margin-top' : '-9px',
		});

		$('.footer').css({
			'max-width' : '960px',
			'margin' : 'auto',
			'display' : 'block',
			'margin-bottom' : '-9px'
		});
	}
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/9616\"><\\script>";
};
