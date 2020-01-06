integration.meta = {
	'sectionID' : '125649',
	'siteName' : 'Goal.com - Desktop - (AU)',
	'platform' : 'desktop'
};


integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707220',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -80,
	'plr_FastInit': true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".widget-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("html, body").css({
			"background-image" : "none",
			"overflow-x" : "visible"
		});
		$(".ad-leaderboard").css({
			"display" : "none"
		});
		$(".widget-footer").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		});
		$("head").append('<style>@media only screen and (min-width: 1580px) {.layout-master .page-container{max-width: 1230px !important; min-width: 76.9375rem !important;}}</style>');
		$("head").append('<style>#inskinanchor > div{z-index: 1 !important;}</style>');
		$(".widget-media-group.clearfix").css({
			"max-width" : "1200px",
			"margin" : "auto"
		});
		$("head").append("<style id='ismStickyVideo'></style>");
	}
});

integration.on('adServed', function(e) {
	var headHeight = $("header").outerHeight();
	var leaderboardHeight = $('.widget-ad-masthead--active').outerHeight();
	if ($(".widget-ad-masthead--active").length == 1) {
		$(".ism-frame").parent().css({
			"top" : (headHeight + leaderboardHeight),
		});
		$(".page-container, .widget-footer").css({
			"top" : (headHeight + leaderboardHeight)
		});
		integration.base.setCfg({
			plr_PageHeightAdjustment : 0,
			plr_ScrollAdjustment : -leaderboardHeight
		});
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


/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_GBL/goalcom_responsive', [728, 90]).display();\n<\\script>";
};
