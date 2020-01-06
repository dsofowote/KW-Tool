integration.meta = {
	'sectionID' : '127070',
	'siteName' : 'Goal - Desktop - (Asia)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708061',
	'plr_PageAlignment' : 'center',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -80
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ismStickyVideo');
		var ContentSize = $('.page-container').width();
		integration.base.setCfg({
			plr_ContentW : ContentSize
		});
		if ($(".widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".widget-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$(".widget-footer").css({
			"width" : "1280px",
			"margin" : "0 auto"
		});
		$(".widget-header").css({
			"z-index" : "6"
		});
		$("head").append('<style>@media only screen and (max-width: 1580px){.widget-footer{width: 980px !important;}}</style>');
		$("head").append('<style>@media only screen and (max-width: 980px){.widget-footer{width: 100% !important;}}</style>');
		$("body").css({
			"background-image" : "none"
		});
		$("body > div.page-wrapper > div.top-section.clearfix > div.module.module-sliding-panel.clearfix > div.arrow.prev").css({
			"left" : "0"
		});
		$("body > div.page-wrapper > div.top-section.clearfix > div.module.module-sliding-panel.clearfix > div.arrow.next").css({
			"right" : "0"
		});
		$("body").css({
			"overflow" : "visible",
		});
		$(".ad-leaderboard").css({
			"display" : "none"
		});
		$("head").append("<style id='ismStickyVideo'></style>");
	}
});

// integration.on('adServed', function(e) {
// 	var headHeight = $(".widget-header").outerHeight();
// 	var leaderboardHeight = $('.widget-ad-masthead--active').outerHeight();
// 	$(".ism-frame").parent().css({
// 		"top" : headHeight,
// 		"z-index" : "4"
// 	});
// 	if ($(".widget-ad-masthead--active").length == 1) {
// 		$(".ism-frame").parent().css({
// 			"top" : (headHeight + leaderboardHeight)
// 		});
// 		integration.base.setCfg({
// 			plr_PageHeightAdjustment : (-80 - leaderboardHeight),
// 			plr_ScrollAdjustment : -leaderboardHeight
// 		});
// 	}
// });

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
	var ContentSize = $('.page-container').width();
	var sideWidth = ((width - ContentSize) / 2) + 2;
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	var videoBottom = 0;
	if (docheight - integration.custom.FrameBottom < winheight + scrolltop) {
		videoBottom = ((winheight + scrolltop + integration.custom.FrameBottom ) - docheight) + 2;
	}
	$("#ismStickyVideo").html('.card.card-4.news-card-video-player .picture iframe, .article-container .body iframe{right: ' + sideWidth + 'px !important; bottom: ' + videoBottom + 'px !important;}');
}

integration.custom.responsive = function() {
	var ContentSize = $('.page-container').width();
	var PageskinSize = $(".ism-frame").parent().width();
	var windowSize = $(window).width();
	if (windowSize <= 980) {
		integration.base.hideAd();
	} else if (windowSize <= 1580 && (PageskinSize > ContentSize)) {
		integration.base.hideAd();
	} else if (windowSize >= 1580 && (PageskinSize < ContentSize)) {
		integration.base.hideAd();
	} else if (windowSize <= 1580 && (PageskinSize == ContentSize)) {
		integration.base.showAd();
	} else if (windowSize >= 1580 && (PageskinSize == ContentSize)) {
		integration.base.showAd();
	}
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Goal_responsive', [728, 90]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};
