integration.meta = {
	'sectionID' : '128342',
	'siteName' : ' Team Talk - Desktop - (INT) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005607',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("header").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.advert--leaderboard{display: none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/134356868/Planet_Sports/Team_Talk/InSkin_Passback', [970, 250]).display();\n<\\script>";
};
