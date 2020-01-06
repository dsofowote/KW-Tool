integration.meta = {
	'sectionID' : '126131',
	'siteName' : 'TOPick - Desktop - (HK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013249',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 1320)/2 + 15;
		var stickyHeadHeight = $(".sticky-header").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : stickyHeadHeight
		});
		$('.corner-btns-container').css({
		 "right" : sideWidth
		});
		$("body").css({
			"overflow" : "visible"
		});
		$(".top-news-container").css({
			"width" : "1320px",
			"margin" : "0 auto"
		});
	}
});
