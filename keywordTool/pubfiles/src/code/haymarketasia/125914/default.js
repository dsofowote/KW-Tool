integration.meta = {
	'sectionID' : '125914',
	'siteName' : 'FourFourTwo Singapore',
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706712',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>header, #footer-wrapper, #navigation, .fake-body{margin: 0 !important;}</style>");
			$(".top-background").css({
				"max-width" : "1100px",
				"margin-top" : "100px"
			});
		}
		$("header, #footer-wrapper, #navigation, .fake-body").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$(".top-background").css({
			"margin-top" : "100px"
		});
		$("#leaderboard").css({
			"max-width" : "1100px"
		});
		integration.custom.InSkinTabHide();
		$(window).resize(function() {
			integration.custom.InSkinTabHide();
		});
		$("#main-menu").css({
			"max-width" : "973px"
		});
		$(".top-background").css({
			"background-color" : "transparent",
			"box-shadow" : "none"
		});
		$("#page").css({
			"margin-top" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>.close #InSkinBrowser0_x span {margin-right: 0px !important; position: static !important; background-color: transparent !important;}</style>");
	$("head").append("<style>.close #InSkinBrowser0_x, .close #InSkinBrowser0_c {margin-right: 0px !important;}</style>");
	$("head").append("<style>body{padding-top: 0px !important;}</style>");
	$('.ism-frame').parent().css({
		"z-index" : "9999999999"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>#feedbackify #fbya #fbyb .fby-tab-r{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
});

integration.custom.InSkinTabHide = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1430;
	if (windowWidth < minWindowWidth) {
		$("#fby-tab-8261").hide();
	} else {
		$("#fby-tab-8261").show();
	}
}