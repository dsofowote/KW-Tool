integration.meta = {
	'sectionID' : '128226',
	'siteName' : 'Holidogtimes - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '993075',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1070,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_GetContentHeightVersion' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style id='ismResize'></style>");
		$("head").append("<style id='ismScroll'></style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
	integration.custom.ismScroll();
	$(window).on("scroll", function() {
		integration.custom.ismScroll();
	});
});

integration.custom.ismResize = function() {
	var resizeMargin = (($(window).width() - 1070) / 2);
	$("#ismResize").html("html .gs-buttons.gs-flat-colors.gs-floating:not(.gs-icon-highlight).gs-left{left: " + (resizeMargin + 14) + "px !important;} .impactify-AM-player{right: " + resizeMargin + "px !important;}");
}

integration.custom.ismScroll = function() {
	var scrollTop = $(document).scrollTop() + $(window).height();
	if (($(document).height() - scrollTop) < (integration.custom.FrameBottom + $(".impactify-AM-player").height())) {
		var videoBottom = integration.custom.FrameBottom;
	} else {
		var videoBottom = 0;
	}
	$("#ismScroll").html(".impactify-AM-player{bottom: " + videoBottom + "px !important;}");
}