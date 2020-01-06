integration.meta = {
	'sectionID' : '124962',
	'siteName' : 'Metro PageSkin Tablet',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
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


  'mf_siteId': '681738',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_PageScanExclude' : '#widget-area-home-2, #post-extra, .trending-sidebar'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page-container").css({
				"max-width" : "1010px"
			});
			$("#page-container").css({
				"margin-left" : "0px"
			});
		}
	}
});
