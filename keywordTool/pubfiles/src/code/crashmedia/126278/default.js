integration.meta = {
	'sectionID' : '126278',
	'siteName' : 'Visordown - Desktop - (UK)',
	'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707597',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$("#footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("#ismIMG").css({
			"height" : "1px",
			"max-height" : "1px",
			"min-height" : "1px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/9617\"><\\script>";
};
