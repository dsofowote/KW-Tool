integration.meta = {
	'sectionID' : '126066',
	'siteName' : 'Daily Mail US',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1244]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706533',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 984,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'banner',
	'plr_HideElementsByClass' : '',
	'plr_PageScanExclude' : '.nav-primary, .and-footer, .page-footer',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		$("#top.page-banner").css({
			"padding-top" : "0"
		});
		$(".banner-adverts").first().hide();
		$("#js-sky-right, #js-sky-left").hide()
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
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
	if (width < 1540) {
		var sideWidth = (width - 984) / 2;
		$(".floating-buttons").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".floating-buttons").css({
			"right" : "10px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=5fd97cb6-d76c-4f78-a444-90da13e5dab8\"><\\script>";
};