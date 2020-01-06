integration.meta = {
	'sectionID' : '124681',
	'siteName' : 'U Beauty - Desktop - (HK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706254',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		var stickyHeadHeight = $(".progress-header").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : stickyHeadHeight
		});
		$("#global-menu, #ulifestyle-header").css({
			"position" : "relative"
		});
		$(".nav-bottom").css({
			"left" : "0",
			"right" : "0"
		});
		$("#section-bar, .nav-bottom, #global-menu, .ub-footer").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$("head").append('<style>section.article-head .img-bg, section.break {max-width : 1220px; margin: 0 auto;} </style>');

		$(".pagestart").css({
			"position" : "relative"
		});
		$("body").attr("style", "margin-top: 0 !important;");
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
	if (width < 1800) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$("#spopup").css({
			"right" : sideWidth + 10
		});
	} else {
		$("#spopup").css({
			"right" : "5px"
		});
	}
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
