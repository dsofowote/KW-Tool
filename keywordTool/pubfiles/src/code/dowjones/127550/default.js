integration.meta = {
	'sectionID' : '127550',
	'siteName' : 'Market Watch - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '744562',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1300,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -68
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body > *:not(.lightbox lightbox--search), #site-nav").css({
			"width" : "1300px",
			"margin" : "0 auto"
		});
		$(".fixed").css({
			"width" : "1300px"
		});
		$("#main-hole").css({
			"overflow" : "auto"
		});
		$("#share-tools-fixed").css({
			"width" : "1300px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"overflow" : "auto",
			"z-index" : "8"
		});
		$("#site-nav").css({
			"z-index" : "100"
		});
		$(".lightbox.lightbox--search").css({
			"attr" : "value"
		});
		$(".container--bannerAd").css({
			"display" : "none"
		});
	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});
});
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).scroll(function() {
		integration.custom.floatingButtons();
	});
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 2035) {
		var sideWidth = (width - 1300) / 2;
		$(".fyre-notifier").css({
			"right" : sideWidth
		});
	} else {
		$(".fyre-notifier").css({
			"right" : "0px"
		});
	}
}
