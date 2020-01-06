integration.meta = {
	'sectionID' : '126808',
	'siteName' : 'Goal.com MENA - (Arabic) - Desktop - (AE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707399',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -90,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.page-container-bg{background-color: transparent !important;} .page-container{z-index: 9 !important;}</style>");
		if ($("body .widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body .widget-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		if ($(".widget-ad-masthead.widget-ad-masthead--active").length == 1) {
			var headerHeight = $("header.widget-header.widget-header--top").outerHeight();
			var bannerHeight = $(".widget-ad-masthead.widget-ad-masthead--active").outerHeight();
			var topMargin = headerHeight + bannerHeight;
			$("#inskinanchor").css({
				"margin-top" : topMargin
			});
			var pageHeight = -80 - topMargin;
			integration.base.setCfg({
				plr_PageHeightAdjustment : pageHeight,
				plr_ScrollAdjustment : -headerHeight
			});
		}

		$("html, body").css({
			"background-image" : "none",
			"overflow-x" : "visible"
		});
		$(".widget-header--top").css({
			"width" : "1230px",
			"margin" : "0 auto"
		});
		$(".ad-leaderboard").css({
			"width" : "1230px",
			"margin" : "10px auto"
		});
		$(".page-container-bg").css({
			"padding-top" : "0"
		});
		$(".page-container").css({
			"padding-top" : "10px"
		});
		$(".widget-footer").css({
			"width" : "1230px",
			"margin" : "0 auto 10px"
		});
		$(".widget-media-group.clearfix").css({
			"max-width" : "1230px",
			"margin" : "auto"
		});
		$(".ad-leaderboard").css({
			"display" : "none"
		});
		$("head").append("<style id='ismStickyVideo'></style>");
	}
});


integration.on("layoutChange", function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismStickyVideo();
	integration.custom.responsive();
	$(window).on("scroll resize", function() {
		integration.custom.ismStickyVideo();
		integration.custom.responsive();
	});
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismStickyVideo = function() {
	var width = $(window).width();
	var sideWidth = ((width - 1230) / 2) + 2;
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	var videoBottom = 0;
	if (docheight - integration.custom.FrameBottom < winheight + scrolltop) {
		videoBottom = ((winheight + scrolltop + integration.custom.FrameBottom ) - docheight) + 2;
	}
	$("#ismStickyVideo").html('.card.card-4.news-card-video-player iframe, .article-container .body iframe{right: ' + sideWidth + 'px !important; bottom: ' + videoBottom + 'px !important;}');
}

integration.custom.ismResize = function() {
	var wwidth = $(window).width();
	$("header.widget-header.widget-header--top").css({
		"width" : wwidth
	});
}
