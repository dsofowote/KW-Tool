integration.meta = {
	'sectionID' : '127295',
	'siteName' : 'Les Echos - Tablet ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '735327',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 67,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".bandeau-bourse").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".bandeau-bourse");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -72,
			});
		}
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("footer, .pre-footer-hp").css({
				"width" : "1000px",
				"margin-left" : "0px"
			});
			$(".container").css({
				"margin-left" : "0"
			});
			$("head").append("<style>.bandeau-bourse{margin-left:-20px !important;}</style>");
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		$(".item-solutions, .item-partenaires").css({
			"display" : "none"
		});

	}
});

//Readjusting the .bandeau-bourse position
integration.on("layoutChange", function(e) {
	integration.custom.height = $(".main-header").outerHeight();
	$("body").css({
		"padding-top" : integration.custom.height +"px"
	});
});

integration.on("adServed", function(e) {
	try {
		jQuery(window).trigger("resize");
	} catch(e) {
	};
	$(".item-solutions, .item-partenaires").css({
		"display" : "inline-block"
	});
});

