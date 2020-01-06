integration.meta = {
	'sectionID' : '127972',
	'siteName' : ' What\'s On Netflix - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961286',
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
		if ($("#navholder").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#navholder");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -125
			});
		}
		$("#wrapper").css({
			"overflow" : "visible"
		});
		$("#subfooter").css({
			"max-width" : "1024px",
			"margin" : "40px auto 0"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSideLeft = e.data.plr_FrameSide;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;

	integration.custom.ismResize();
	$(window).on("resize scroll", function() {
		integration.custom.ismResize();
	});

	$("head").append("<style>.spnf_text{visibility: hidden;}</style>");
	$("head").append("<style>.spnf_expanded .spnf_text{visibility: visible !important;}</style>");
	$("head").append("<style>.spnf_open{max-width: 500px !important; z-index: 2147483547 !important; visibility: visible !important;}</style>");
});

integration.custom.ismResize = function() {
	var cWidth = $(window).width() - (integration.custom.FrameSideRight + integration.custom.FrameSideLeft);
	cWidth -= 1024;
	cWidth = (cWidth / 2);
	cWidth += $(window).scrollLeft();
	var toTopRightMargin = cWidth + integration.custom.FrameSideRight + 30;
	var spnfRightMargin = cWidth + integration.custom.FrameSideRight;
	var toTopBotMargin = integration.custom.FrameBottom + 30;

	$("#scroll_totop").css({
		"right" : toTopRightMargin,
		"bottom" : toTopBotMargin
	});
	$(".spnf_ticker.spnf_right").css({
		"right" : spnfRightMargin,
		"z-index" : "2147483545"
	});
	$(".spot-im-newsfeed-module.spnf_newsfeed-module.spnf_visible").css({
		"right" : spnfRightMargin,
		"max-width" : integration.custom.FrameSideRight,
		"z-index" : "-10",
		"visibility" : "hidden"
	});
}

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "2147483546"
	});
});
