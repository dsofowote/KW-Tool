integration.meta = {
	'sectionID' : '128872',
	'siteName' : ' Beliebte Vornamen - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1039709',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.site-footer').css({
			"width" : "1040px",
			"margin" : "0 auto"
		});
	}
});
