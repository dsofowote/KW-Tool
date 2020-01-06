integration.meta = {
	'sectionID' : '125969',
	'siteName' : 'U Lifestyle - Desktop - (HK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706625',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var stickyHeadHeight = $(".progress-header").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : stickyHeadHeight
		});
		$("header, .uhk-footer, #section-bar, .stick-share, #global-menu, section.article-head .img-bg").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$(".stick-share").css({
			"left" : "0",
			"right" : "0"
		});
	}
});
