integration.meta = {
	'sectionID' : '126510',
	'siteName' : 'Tour Magazin - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707028',
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScaleElement' : '#app'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".card-sharing.floating").css({
			"margin-left" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
