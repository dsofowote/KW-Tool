integration.meta = {
	'sectionID' : '128292',
	'siteName' : ' Who Scored - (Non Passback Tag) - Desktop - (ROW ex ES, IT, SG, MY)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

function setWindow() {
    return currentWindow.top;
}

integration.params = {
	'mf_siteId' : '1000523',
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
		$("#header-wrapper, #footer-wrapper, #user-bar-wrapper, .cookie-disclaimer").css({
			"width" : "990px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=886\"><\\script>";
};