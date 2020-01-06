integration.meta = {
	'sectionID' : '128486',
	'siteName' : 'l\'Officiel - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1467]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1017680',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1207,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -40,
	'plr_ScrollAdjustment' : 40
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".site-header__left").height();
		if ($("header.site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_ScrollAdjustment : -headerHeight,
				plr_PageHeightAdjustment : -headerHeight
			});
		}

		$(".site-content, .site-footer").css({
			"max-width" : "1207px",
			"margin" : "0 auto"
		});

		$(".site-content").css({
			"padding-top" : "0px"
		});
		$(".site-footer").css({
			"padding-top" : "10px"
		});

		$(".slider__item").css({
			"height" : "auto"
		});
	}
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({
		"margin-top" : "114px"
	});
});
