integration.meta = {
   'sectionID' : '128313',
   'siteName' : 'Soccerway - Tablet - ( DE )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1002166',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	var headerHeight = $("#site-header").height() + $(".banner-content").outerHeight();
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	if ($("body > header").length == 1) {
		$("<div id='inskinanchor'></div>").insertAfter("body > header");
		integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -headerHeight,
			plr_ScrollAdjustment : -headerHeight
		});
	}

	$("body").css({
		"overflow" : "visible"
	});
	$("head").append("<style>#registration-banner-container{max-width: 980px; margin-left: " + integration.custom.FrameSide + "px; padding: 10px;}</style>");
	if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
		/* PageSkin Edge specific changes */
		integration.base.setCfg({
			'plr_PageAlignment' : 'left'
		});
		$(".page-container").css({
			"margin-left" : "0"
		});
		$("#logo-bar").css({
			"margin-left" : "20px"
		});
		$(".ad-leaderboard, body > footer").css({
			"width" : "980px"
		});

		$("body").css({
			"margin-right" : integration.custom.FrameSideRight
		});
		$("#main").css({
			"padding" : "0"
		});
		$("#doc4").css({
			"padding-left" : "0px"
		});
		var wwidth = 1000 + integration.custom.FrameSideRight + integration.custom.FrameSide;
		$("#site-header, .banner-content").css({
			"min-width" : wwidth,
			"margin-left" : -integration.custom.FrameSide
		});
		$(".main-container-inner").css({
			"max-width" : "100%"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismScroll();
	$(window).on("scroll", integration.custom.ismScroll);
});

integration.custom.ismScroll = function() {
	var scrollLimit = $(document).height() - integration.custom.FrameBottom;
	var scroll = ($(document).scrollTop() + $(window).height());
	if (scrollLimit < scroll) {
		var bannerBottom = scroll - scrollLimit;
	} else {
		var bannerBottom = 0;
	}
	$("#registration-banner-container").css({
		"bottom" : bannerBottom
	});
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Soccerway/ROS/SKIN\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};