integration.meta = {
	'sectionID' : '128530',
	'siteName' : ' The Guardian AU - Desktop- (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1020905',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1300,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".top-banner-ad-container").css({"display":"none"});
		$('body').css({
			"max-width" : "1300px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/59666047/theguardian.com', [728, 90]).display();\n<\\script>";
};
