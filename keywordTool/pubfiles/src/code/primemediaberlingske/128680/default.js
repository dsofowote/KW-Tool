integration.meta = {
	'sectionID' : '128680',
	'siteName' : 'Berlingske - Tablet - (DK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029514',
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
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>div.advert-unit.banner, .main-content, .site-footer{width: 1000px !important; margin: 0 !important;}</style>");
		}
		if ($("header.site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -100,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 50
			});
		}

		$(".main-wrapper").css({
			"overflow" : "visible"
		});
	}
});
