integration.meta = {
	'sectionID' : '126375',
	'siteName' : 'Emma - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706901',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer-bottom, body > nav").css({
			"max-width" : "1020px"
		});
		$(".emm-subscription-ad").css({
			"margin-left" : "250px"
		});
		integration.custom.InSkinFooter();
		$(window).resize(function() {
			integration.custom.InSkinFooter();
		});
	}
});

integration.custom.InSkinFooter = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1020;
	if (windowWidth < minWindowWidth) {
		$("#footer-bottom, body > nav").css({
			"left" : "0",
			"margin-left" : "0"
		});
	} else {
		$("#footer-bottom, body > nav").css({
			"left" : "50%",
			"margin-left" : "-510px"
		});
	}
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
}); 