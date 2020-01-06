integration.meta = {
	'sectionID' : '126756',
	'siteName' : 'Chip - Desktop - (INT campaigns only)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707741',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("footer, #footer-white-global, #DealBar, div[id^='contentad-footer']").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("div[id^='contentad-topbanner']").css({
			"display" : "none"
		});
		$(".DownloadListing").css({
			"margin-top" : "0"
		});
	}
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "800"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 1000) / 2;
	$(".video-wrapper").css({
		"right" : sideWidth + 10,
		"bottom" : "10px"
	});
}
