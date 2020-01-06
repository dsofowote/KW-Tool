integration.meta = {
	'sectionID' : '128344',
	'siteName' : ' Planet Rugby - Desktop - (INT) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005222',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.advert--leaderboard{display: none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/134356868/Planet_Sports/Planet_Rugby/InSkin_Passback', [970, 250]).display();\n<\\script>";
};
