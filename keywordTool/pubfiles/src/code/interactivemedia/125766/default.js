integration.meta = {
	'sectionID' : '125766',
	'siteName' : 'Petra',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706508',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'adtop, [id^=div-gpt-ad-]',
	'plr_HideElementsByClass' : 'pane-advertising-pane',
	//'plr_FramePositionCSS' : "margin:0 auto;border-right:",
	"plr_FastInit" : true,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".site.col-md-12.col-lg-10, footer .footer__inner").css({
			"margin-left" : "96px"
		});
		$("#cookie-1, .cookiebar__wrapper").css({
			"max-width" : "960px",
			"margin" : "10px auto 0",
			"padding-left" : "0px",
			"padding-right" : "0px",
			"left" : "0",
			"right" : "0"
		});
		$(".footer, .footer > .container").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$("#adright").hide();
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});
