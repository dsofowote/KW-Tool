integration.meta = {
	'sectionID' : '128317',
	'siteName' : ' Majalahpama - Desktop - (MY)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1002684',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background-image" : "none"
		});
		$("head").append("<style id='ismResize'></style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismResizeAndScroll();
	$(window).on("resize, scroll", integration.custom.ismResizeAndScroll);
});

integration.custom.ismResizeAndScroll = function() {
	var rightMargin = (($(window).width() - 1200) / 2) + 5;
	var topScroll = $(window).height() + $(document).scrollTop();
	var scrollLimit = $(document).height() - integration.custom.FrameBottom;
	if (topScroll > scrollLimit) {
		var bottomMargin = integration.custom.FrameBottom + 5;
	} else {
		var bottomMargin = 0;
	}
	$("#ismResize").html(".td-more-articles-box.td-front-end-display-block{right: " + rightMargin + "px; bottom: " + (bottomMargin + 40) + "px;}.td-scroll-up.td-scroll-up-visible{right: " + rightMargin + "px; bottom: " + bottomMargin + "px;}")
}