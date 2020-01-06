integration.meta = {
	'sectionID' : '127899',
	'siteName' : ' Irish Examiner - IE - Desktop - (IE)',
	'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '920748',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".top-bar, .main, .main > .container, body > footer").css({
			"width" : "1010px",
			"margin" : "0 auto"
		});
		$('.cbp-spmenu').parent('.container').css({
			"width" : "1010px",
			"margin" : "0 auto"
		});
	}
});
