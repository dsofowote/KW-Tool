integration.meta = {
	'sectionID' : '127474',
	'siteName' : 'RojakLah - Tablet - (ASIA)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725758',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#at-share-dock").css({
			"max-width" : "1050px",
			"margin" : "0 auto",
			"z-index" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#body-wrapper, #body-top-sidebar, #at-share-dock").css({
				"margin-left" : "15px"
			});
			$(".footer").css({
				"max-width" : "1050px"
			});
			$(".menu-container, ").css({
				"margin-left" : "-20px"
			});
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});


integration.on('adServed', function(e) {
	var headHeight = $('.menu-container').outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight,
		"z-index" : "100"
	});
});
