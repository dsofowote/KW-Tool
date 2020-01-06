integration.meta = {
	'sectionID' : '127166',
	'siteName' : 'Campaign Asia - (Marketing Use Only) - Desktop - (ASIA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708136',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footerWrap, .footerWrap, #advertBodyBottom, #advertTop").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
	}
}); 