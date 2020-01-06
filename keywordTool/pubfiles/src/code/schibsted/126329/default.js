integration.meta = {
	'sectionID' : '126329',
	'siteName' : 'Aftenposten - Desktop - (Norway)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708048',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};
integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#content-wrapper, .menu-container").css({
			"overflow" : "visible",
			'margin' : "0 auto",
			"width" : "1000px"
		});
		$(".ch-core-header .ch-header-main, #ch-menu").css({
			'margin' : "0 auto",
			"width" : "1000px",
			'left' : 0,
			'right' : 0
		});

		$(".footer-main, .gototop").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		})

		$("#topboard").css({
			"display" : "none"
		});

		$("#ch-menu, .ch-header-main").css({
			"position" : "absolute"
		});

		$("head").append("<style>#page{margin-top: 0 !important;} body{width: 100% !important;}</style>");
		$("head").append("<style>.ch-header-main{top: 0 !important;} #ch-menu{top: 56px !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	var frtop = e.data.plr_FrameTop;
	$(window).scroll(function() {
		if ($(window).scrollTop() === 0) {
			$("#ch-menu, .ch-header-main").css({
				"position" : "absolute"
			});
		} else if ($(window).scrollTop() > frtop) {
			$("#ch-menu, .ch-header-main").css({
				"position" : "fixed"
			});
		} else {
			$("#ch-menu, .ch-header-main").css({
				"position" : "absolute"
			});
		}
	});
});
