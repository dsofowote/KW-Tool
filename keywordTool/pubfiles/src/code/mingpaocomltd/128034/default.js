integration.meta = {
	'sectionID' : '128034',
	'siteName' : 'MingPao - (Programmatic) - Tablet - ( HK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '970806',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		$(".menuitem1").css({
			"display" : "block"
		});
		$("#mainportal").css({
			"float" : "none"
		});
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#mainportal").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#mainportal");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("#outer_wrapper .container").css({
				"margin" : "0"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "12"
	});
});
