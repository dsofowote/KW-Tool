integration.meta = {
	'sectionID' : '126419',
	'siteName' : 'Gartenzeitung - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#mainmenu, #footer, #promo").css({
			"max-width" : "1180px",
			"margin" : "0 auto"
		});
		
		$("#header").css({
			"padding-top" : "0px"
		});

		$("section#content").css({
			"background-image" : "none",
			"z-index" : "0"
		});

		$("#footer #copyright").css({
			"margin-bottom" : "0px"
		});

		$("#mainmenu.nav_fixed").css({
			"position" : "relative"
		});

		$("head").append("<style>section#content, #content:before{background-image:none !important;background:none !important}</style>");
		
		$("head").append("<style>#header:before{background-image:none !important;background:none !important}</style>");
		

	}
});
