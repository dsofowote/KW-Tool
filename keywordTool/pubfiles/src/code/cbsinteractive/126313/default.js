integration.meta = {
	'sectionID' : '126313',
	'siteName' : 'CBS News - Desktop - (UK)',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '681780',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	"plr_FastInit" : true
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.site-header').height();
		if ($("body > div.body-container > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > div.body-container > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$("body > div.body-container > footer").css({
			"width" : "990px",
			"margin" : "0 auto",
			"padding-bottom" : "0px"
		});
		$("body > div.body-container > header").css({
			"z-index" : "5000015"
		});
		$("#mantle_skin > div.container").css({
			"padding-left" : "0"
		});
		$("head").append("<style>#mantle_skin, #videoContainer{width : 990px !important; margin : 0 auto !important;}</style>");
		$(".body-container").css({
			"overflow" : "visible"
		});
		$("#dashboard").css({
			"width" : "990px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".module-follow-us").css({
			"overflow" : "hidden"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(document).on("scroll", function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$(".module-livestream-player.is-sticky .livestream-player-wrapper").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$(".module-livestream-player.is-sticky .livestream-player-wrapper").css({
			"margin-bottom" : "0"
		});
	}
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "5000010"
	});
});
