integration.meta = {
	'sectionID' : '128445',
	'siteName' : 'New York Times   - Desktop - ( ASIA )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013636',
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
		if ($("#mini-navigation").length == 1) {
			var headHeight = $("#mini-navigation").height();
			integration.base.setCfg({
				plr_ScrollAdjustment : headHeight
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	if ($(".collection-header").length == 1) {
		integration.custom.ismScroll();
		$(window).on("scroll", function() {
			integration.custom.ismScroll();
		});
		$(".quick-navigation.button-group").css({
			"left" : "5px"
		});
		$(".ism-frame").parent().css({
			"z-index" : "1000000071"
		});
	}
	$("head").append("<style>#masthead-placeholder{display: none !important;}</style>");
	$("head").append("<style>.StoryBodyCompanionColumn, #site-index{max-width: 1150px !important;}</style>");
	$("head").append("<style>#app header{max-width: 1200px; margin: auto;}</style>");
	var bottomNavLeft = ($(window).width() - 1200) / 2;
	$("head").append("<style>#story nav{max-width: 1200px; left: " + bottomNavLeft + "px;}</style>");
});

integration.custom.ismScroll = function() {
	var position = $(document).scrollTop();
	var limit = integration.custom.FrameTop;
	var navTop = integration.custom.FrameTop - position;
	if (position > limit) {
		navTop = 0;
	}
	$("#masthead").css({
		"top" : navTop,
		"max-width" : "1200px"
	});
}
