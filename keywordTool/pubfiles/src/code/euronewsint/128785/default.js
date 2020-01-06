integration.meta = {
    'sectionID' : '128785',
    'siteName' : 'Euronews INT - Desktop - ( AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034787',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
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
				plr_PageHeightAdjustment : -navHeight,
				'plr_ScrollAdjustment' : headerHeight
			});
		}
		$('#enw-main-content > div.breadcrumbs__scroll, #enw-main-content, .enw-block-fluid, .media__article-reading.stick, footer.enw-footer').css({
			'width' : '1280px',
			'margin' : '0 auto'
		});
		
		$("head").append("<style>.mailmunch-scrollbox{left: " + (integration.custom.FrameSide * 2.5) + "px !important; z-index: 999 !important;} .enw-btn--back-to-top.is-visible{right: " + (integration.custom.FrameSide * 2.5) + "px !important;}</style>");
		
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
    return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=26085\"><\\script>";
};