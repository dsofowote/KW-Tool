integration.meta = {
	'sectionID' : '128379',
	'siteName' : 'Mandatory - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1007237',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$(".inspire-inner-container").css({
			"max-width" : "1000px"
		});
		$("head").append("<style>.single-inspire article{padding: 40px !important;}.single-inspire .featured-image img{height: auto !important;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".container, .footer").css({
				"margin" : "0"
			});
			$(".header").css({
				"margin-left" : "-20px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".header, .menu-sidebar, .search-form").css({
		"z-index" : "99"
	});
}); 