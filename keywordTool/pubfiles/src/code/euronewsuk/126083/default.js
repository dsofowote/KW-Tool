integration.meta = {
   'sectionID' : '126083',
   'siteName' : 'Euronews - Tablet - (UK)',
   'platform' : 'tablet'
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707257',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1, 
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#enw-main-content > div.breadcrumbs__scroll, #enw-main-content, .enw-block-fluid, .media__article-reading.stick, footer.enw-footer{margin: 0 !important;}</style>");
			$("head").append("<style>#js-header{margin-left: -20px !important; width: 101.2% !important;}</style>");
		}
		integration.custom.FrameSide = e.data.plr_FrameSide;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("body").css({
			'background-color' : '#fff'
		});
		$('.base-leaderboard').css({
			'height' : '0px'
		});
		var headerHeight = $("#js-header-sticky").height();
		var navHeight = $("#js-header").height();
		if ($("#enw-main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#enw-main-content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight - headerHeight - 10,
				'plr_ScrollAdjustment' : -headerHeight
			});
		}
		$('#enw-main-content > div.breadcrumbs__scroll, #enw-main-content, .enw-block-fluid, .media__article-reading.stick, footer.enw-footer').css({
			'width' : '1000px',
			'margin' : '0 auto'
		});

		$("head").append("<style>.mailmunch-scrollbox{left: " + integration.custom.FrameSide + "px !important; z-index: 99 !important;} .enw-btn--back-to-top.is-visible{right: " + integration.custom.FrameSide + "px !important;}</style>");

	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
	$("#js-header-sticky").css({
		"z-index" : "9999"
	});
}); 