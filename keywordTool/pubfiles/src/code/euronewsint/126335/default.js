integration.meta = {
	'sectionID' : '126335',
	'siteName' : 'Euronews INT - Tablet - (INT exc. UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '706826',
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
				'plr_ScrollAdjustment' : -headerHeight - 10
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<div data-glade data-ad-unit-path=\"/6458/Passback_tag/Inskin\" height=\"90\" width=\"728\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};