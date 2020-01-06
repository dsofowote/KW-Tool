integration.meta = {
	'sectionID' : '129007',
	'siteName' : 'Bride &amp;amp; Groom - Tablet - ( AU )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045582',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".header").outerHeight();
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_StartScrollOnAnchor' : true
			});
		}
		$('.footer, .content__directory, .content__blog, .banner, .image-cover, .content__cate, .content__result, .content__gallery').css({
			"max-width" : "1180px",
			"margin" : "0 auto"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>html, body, .wrapper{overflow: visible !important;}</style>");
			$("head").append("<style>.footer, .content__directory, .content__blog, .banner, .image-cover, .content__cate, .content__result, .content__gallery{margin: 0 !important;}</style>");
			$("head").append("<style>header{margin-left: -20px !important;}</style>");
		}
	}
});
