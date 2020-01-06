integration.meta = {
	'sectionID' : '127272',
	'siteName' : 'Quotidien - Desktop - (LU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708025',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var docScroll;
		$(window).scroll(function() {
			docScroll = $(window).scrollTop();
			if (docScroll > 360) {
				integration.base.setCfg({
					"plr_StartScrollOnAnchor" : true
				});
			} else {
				integration.base.setCfg({
					"plr_StartScrollOnAnchor" : true,
					"plr_ScrollAdjustment" : 0
				});
			}
		});
		$('footer, .footer-bottom, .wrapper, #main-nav').css({
		"max-width" : "1220px",
		"margin" : "0 auto",
		"right" : "0"
		});
		$('#leaderboard').css({
			"margin-top" : "10px"
		});
		$("head").append("<style>body{zoom: 1 !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
