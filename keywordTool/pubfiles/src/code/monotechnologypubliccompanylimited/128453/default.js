integration.meta = {
	'sectionID' : '128453',
	'siteName' : 'Mthai - Desktop - ( TH )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1015203',
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

		$('.off-canvas-wrapper, #page, .off-canvas-content').css({
			"max-width" : "1200px",
			"margin" : "0 auto",
			"overflow" : "visible"
		});
		//Styling for all of the different nav bars as they have different classes/id's
		$("head").append("<style>div#site-menu.top-bar.show-for-large.sticky, header#top-bar.top-bar.sticky.is-at-top, div#site-menu.top-bar.show-for-large, #wapper-top-menu-bar, #widemenu div.sticky, .site-nav{max-width: 1200px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
		$("head").append("<style>.site-social, .site-social-group{margin-right: 15px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	var marginRight = $(".off-canvas-content").css("marginRight");
	$("head").append('<style>div#site-menu.off-canvas.position-right.is-transition-push.is-open{right: ' + marginRight + ' !important;}</style>');
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(window).scroll(function() {
		if ($(window).scrollTop() <= integration.custom.FrameTop) {
			$('div#site-menu.off-canvas.position-right.is-transition-push.is-open').css({
				"top" : integration.custom.FrameTop
			});
		} else {
			$('div#site-menu.off-canvas.position-right.is-transition-push.is-open').css({
				"top" : 0
			});
		}
	});
});
