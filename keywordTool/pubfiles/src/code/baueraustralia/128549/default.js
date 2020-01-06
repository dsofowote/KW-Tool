integration.meta = {
	'sectionID' : '128549',
	'siteName' : 'Which Car - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1022682',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 67
	//'plr_GetContentHeightVersion' : 2,
	//'plr_EnableActiveResize' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".header-wrapper, .menu-wrapper").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});

		$(".advert-wrapper").css({
			"height" : "0px"
		});

		$("#pageContentGreen, #pageContentBlue").css({
			"position" : "relative"
		});
	}
});
