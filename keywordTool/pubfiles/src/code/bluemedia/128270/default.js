integration.meta = {
	'sectionID' : '128270',
	'siteName' : 'T Spain - Desktop - ( ES )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '996183',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".td-header-logo.td-sticky-header, #top").css({
			"display" : "none"
		});

		$("#td-outer-wrap").css({
			"overflow" : "visible"
		});

		integration.custom.FrameBottom = e.data.plr_FrameBottom;
		integration.custom.topButton();
		$(window).on("scroll", function() {
			integration.custom.topButton();
		})
	}
});

integration.custom.topButton = function() {
	var topButtonRight = (($(window).width() - 1150) / 2) + 10;
	var bottomHeight = $(document).height() - $(window).height() - integration.custom.FrameBottom;
	var pageScroll = $(document).scrollTop();
	if (pageScroll > bottomHeight) {
		var topButtonBottom = integration.custom.FrameBottom + 5;
	} else {
		var topButtonBottom = 5;
	}
	$(".td-scroll-up-visible").css({
		"right" : topButtonRight,
		"bottom" : topButtonBottom
	});
}
