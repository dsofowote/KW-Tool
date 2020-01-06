integration.meta = {
	'sectionID' : '126291',
	'siteName' : 'Stylebook - (DE campaigns only) - Tablet - (AT CH DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708019',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("#header--small").height();
		integration.base.setCfg({
			'plr_ScrollAdjustment' : headerHeight
		});
		$("#mashbar-header").css({
			"margin" : "0 auto",
			"width" : "1040px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".container").css({
				"margin-left" : "0"
			});
			$("#mashbar-header").css({
				"margin" : "0 0 0 20px"
			});
		}
	}
});
