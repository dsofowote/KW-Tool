integration.meta = {
	'sectionID' : '127953',
	'siteName' : ' Four Four Two Arabia - Desktop - (MENA)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '954521',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -10,
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("head").append('<style>html, body{position: relative; margin-top: 30px; overflow: visible;} #ismIMG{height: 1px !important;}</style>');
		$("head").append('<style>#mvp-prev-post-wrap{left: 350px !important;} #mvp-next-post-wrap{right: 350px;}</style>');
		$("head").append('<style>.mvp-fly-top{right: 19%; bottom: 7%;} .ism-frame{z-index: 999 !important;}</style>');
		$("head").append('<style>#mvp-post-trend-wrap{width: 1200px; left: 343px;}</style>');
		$("head").append('<style>#mvp-foot-wrap{content: ""; clear: both; display: table; width: 1200px; margin: 0 auto; float: none;}</style>');
	}
});

