integration.meta = {
    'sectionID' : '128996',
    'siteName' : 'BBC.com - (Publisher Booking - Sport HP) - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044436',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameSide = e.data.plr_FrameSide;

			$("#comp-pattern-library-2, #orb-modules, #orb-footer, #orb-banner, #page, #sport, #blq-global, #cookiePrompt").css({
				"max-width" : "1300px",
				"margin" : "0 auto"
			});

		$("head").append("<style>@media only screen and (min-width: 1280px) {.lx-c-session-body--fixed .lx-c-sticky{left: " + (integration.custom.FrameSide + 6 ) + "px;}}</style>");
		$("head").append("<style>@media only screen and (min-width: 1280px) {.lx-c-session-body--fixed .lx-c-sticky__item{width: 20% !important;}}</style>");
		if ($("#sport-container").length >= 1) {
			$(".global-header, .nav-top").css({
				"background" : "#ffd230"
			});

			$("html, body").css({
				"background" : "#f2f2e9"
			});
		}
		$("#bbccom_interstitial > div").css({
			"height" : "0px"
		});
		$("head").append("<style>a.bbccom_text.inskin{position: absolute; right: " + (-integration.custom.FrameSideRight) + "px !important; top: -24px; visibility: visible !important; float: none;} a.bbccom_text.inskin:hover {text-decoration: underline;}</style>");
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
	$(".ism-frame").parent().attr("aria-hidden", "true");
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});

	$("head").append("<style>.inskinanchor{margin-top: 20px !important;}</style>");
	//Adding the link and the word "Advertisement" as requested by the publisher
	var TopPanel = $('.ism-frame').first();
	$('<a href="http://www.bbc.com/privacy/cookies/international/" class="bbccom_text inskin" tabindex="-1">Advertisement</a>').insertBefore(TopPanel);
});
