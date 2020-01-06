integration.meta = {
	'sectionID' : '126200',
	'siteName' : 'Metro - Desktop - (UK)',
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1244]
};

integration.channelHome = [
   '/',
   '/news/',
   '/sport/football/',
   '/entertainment/',
   '/sport/',
   '/news/uk/',
   '/lifestyle/',
   '/news/world/',
   '/news/tech/',
   '/tag/liverpool-fc/',
   '/tag/soap-spoilers/'
];

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '681721',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 984,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});
