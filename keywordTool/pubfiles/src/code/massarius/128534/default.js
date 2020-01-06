integration.meta = {
	'sectionID' : '128534',
	'siteName' : 'Limburger - Tablet - ( NL )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1021231',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -90,
	'plr_ScrollAdjustment' : 90
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"overflow-x" : "hidden"
		});

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	var headHeight = $("header.site-header-sticky").outerHeight();
	var subHeight = $(".site-subnav-sticky").outerHeight();

	$(".ism-frame").parent().css({
		"top" : headHeight + subHeight,
		"position" : "relative"
	});
});
