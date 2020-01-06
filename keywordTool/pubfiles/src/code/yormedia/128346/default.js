integration.meta = {
	'sectionID' : '128346',
	'siteName' : ' Planet F1 - Desktop - (INT) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005224',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".advert--leaderboard").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/134356868/Planet_Sports/Planet_F1/InSkin_Passback', [970, 250]).display();\n<\\script>";
};
