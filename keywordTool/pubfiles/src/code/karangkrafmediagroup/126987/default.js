integration.meta = {
	'sectionID' : '126987',
	'siteName' : 'Sinar Online - Tablet - (ASIA)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707175',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>body{background: none !important;}</style>");
		$(".main-mobile").nextAll().css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$(".main-mobile").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$("head").append("<style>#nav{top: 0 !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".wrapper").css({
				"margin-left" : "0"
			});
			$(".main-mobile").nextAll().css({
				"margin-left" : "0"
			});
			$(".main-mobile").css({
				"margin-left" : "0"
			});
		}
	}
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".main-mobile").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".main-mobile");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -38,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 38
			});
		}
	}
});
