integration.meta = {
   'sectionID' : '127030',
   'siteName' : 'Channel NewsAsia - (PUBLISHER BOOKING) - Desktop - (Asia)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706990',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^="div-gpt-ad"]',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("header, footer, #wrapper").css({
			"max-width" : "1200px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
		$("head").append("<style>header .nav-area{max-width: 1200px; margin: 0 auto;}</style>");

		$(".u-grid .grid__col-12").css({
			"width" : "100%"
		});	
	}
});

integration.on('layoutChange', function(e){
	$(".ism-frame").parent().css({
		"z-index" : "15"
	});
});
