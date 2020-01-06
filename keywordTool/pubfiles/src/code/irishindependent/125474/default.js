integration.meta = {
	'sectionID' : '125474',
	'siteName' : ' Irish Independent - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '963517',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -30
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>.ism-frame{margin-bottom: -10px !important; }</style>');
		$("head").append('<style>html, body, #root{max-width: 970px !important; margin: 0 auto;}</style>');
		$('.sticky').css({'display':'none'});
	}
});
