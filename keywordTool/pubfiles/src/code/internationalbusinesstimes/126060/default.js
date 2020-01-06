integration.meta = {
	'sectionID' : '126060',
	'siteName' : 'IB Times - Desktop - International',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	"desktop_resolution" : [1563]
};

integration.telemetry.setup({
	'url' : true
});

integration.params = {
	'mf_siteId' : '706730',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1303,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#navi-wrap.fixed, #leaderboard{right: 0; left: 0 !important}</style>");
		$("head").append("<style>.ismNav{position: relative !important; top: 0 !important;}</style>");
		$("#leaderboard").css({
			"max-width" : "1303px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		//$('#leaderboard-box').hide();
		$("#breaking-news").css({
			"z-index" : "10000"
		});
	}
});

integration.on("adServed", function(e) {
	$("header, main, footer, #navi-wrap").css({
		"width" : "1303px",
		"margin" : "0 auto"
	});
	$("body").addClass("PageSkinDisplayed");
	integration.custom.InSkinTabHide();
	$(window).resize(function() {
		integration.custom.InSkinTabHide();
	});

	/* The following has been added to force all page content to adjust to the new class being added */
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	integration.custom.InSkinTopNav();
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
		integration.custom.floatingButtons();
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinTabHide = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1380;
	if (windowWidth < minWindowWidth) {
		$('.addthis_floating_style ').hide();
	} else {
		$('.addthis_floating_style ').show();
	}
}

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#leaderboard").css({
			//"margin-top" : newheight
		});
		$("#navi-wrap").addClass("ismNav");
	} else {
		$("#leaderboard").css({
			"margin-top" : "0px"
		});
		$("#navi-wrap").removeClass("ismNav");
	}
};

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 1303) / 2;
	$(".stuck > .vjs-box, .stuck > .close_tvplayer").css({
		"margin-right" : sideWidth
	});
}

integration.custom.InSkinBottomNav = function() {
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var scrollTop = $(document).scrollTop();
	if (docHeight - integration.custom.PageSkinBottomPanel < winHeight + scrollTop) {
		var footerMargin = (winHeight + scrollTop + integration.custom.PageSkinBottomPanel ) - docHeight;
		$(".stuck > .vjs-box, .stuck > .close_tvplayer").css({
			"margin-bottom" : footerMargin
		});
	} else {
		$(".stuck > .vjs-box, .stuck > .close_tvplayer").css({
			"margin-bottom" : "0px"
		});
	}
};
