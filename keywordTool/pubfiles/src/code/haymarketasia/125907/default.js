integration.meta = {
   'sectionID' : '125907',
   'siteName' : 'Stuff.tv Singapore - (Do Not Use) - Desktop - (INT exc. UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '713728',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : 'leaderboard, [id^=gpt_]',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
    var width = $(window).width();
    var sideWidth = (width - 1030)/2;
		$("#header > div.grey, #header > div.red, #footer-wrapper").css({
			"max-width" : "1030px",
			"margin" : "0 auto"
		});
    $("head").append("<style>#feedbackify .fby-tab-r{right:" + sideWidth + "px !important;}</style>");
		$("head").append("<style>#header{z-index: 100; position : fixed; padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%;}#page {padding-top: 100px !important;}</style>");
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
		if (height < integration.custom.PageSkinTopPanel) {
			var newheight = integration.custom.PageSkinTopPanel - height;
			$("#header").css({
				"top" : newheight
			});

		} else {
			$("#header").css({
				"margin-top" : "0px",
				"top" : "0px"
			});
		}
}
