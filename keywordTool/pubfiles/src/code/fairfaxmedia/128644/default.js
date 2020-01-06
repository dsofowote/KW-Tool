integration.meta = {
	'sectionID' : '128644',
	'siteName' : ' Drive - Tablet - (AU) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1028296',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("div.content main > div.home").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("div.header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -75
			});
			$('#inskinanchor').css({
				"margin-top" : "55px",
				"position" : "relative"
			});
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.shodowBlock.hero{width: 100% !important;}</style>");
			$("head").append("<style>.range-explorer-wrapper, .main-wrapper, div.footer, .hero, .hero .heroGallery .slick-slide{margin: 0 !important;}</style>");
			$("head").append("<style>.leaderboard, .searchPlain, .nav2, .nav2.hasNav, .searchAll.im5, .sell-your-car-page{margin: 0 !important;}</style>");
			$('.content').parent().css({
				"margin" : "0px"
			});
		}
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$(".socialStick").css({
			"left" : sideWidth + 130
		});
		$("head").append("<style>.shodowBlock.hero{width: 100% !important;}</style>");
		$("head").append("<style>.range-explorer-wrapper, .main-wrapper, div.footer, .hero, .hero .heroGallery .slick-slide{width: 1280px !important; margin: 0 auto;}</style>");
		$("head").append("<style>.leaderboard, .searchPlain, .nav2, .nav2.hasNav, .searchAll.im5, .sell-your-car-page{width: 1280px !important; margin: 0 auto;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2;
	$("head").append("<style>#designstudio-button{right: " + (sideWidth - 148) + "px !important;}</style>");
};

