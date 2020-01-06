integration.meta = {
	'sectionID' : '128079',
	'siteName' : 'Hello Magazine - Tablet - (IE) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973719',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1260,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#all").css({
				"max-width" : "1240px"
			});
			$("body").css({
				"width" : "auto"
			});
			$(".shareBar .news-share").css({
				"margin" : "0"
			});
			$("head").append('<style>.menu-left-open{margin-left: 380px !important;}</style>');
		}
		$(".shareBar .news-share").css({
			"width" : "1240px",
			"left" : "0",
			"right" : "0",
			"margin" : "0 auto",
			"z-index" : "55"
		});
		$("head").append('<style>.menu-left-open{margin-left: 510px;}</style>');
	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "60"
	});
});

