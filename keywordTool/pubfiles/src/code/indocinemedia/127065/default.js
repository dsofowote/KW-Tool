integration.meta = {
   'sectionID' : '127065',
   'siteName' : 'Robb Report - Desktop - (TH)',
   'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1262]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707908',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1002,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"max-width" : "1002px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.top-menu{max-width: 1002px !important; margin: 0 auto !important; left: auto !important; right: auto !important; width: 100% !important;}</style>");
	}
});

integration.on("layoutChange", function(e){
	integration.custom.floatingButtons();
	$(window).resize(function(){
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1410) {
		var sideWidth = (width - 1002)/2;
		$(".badge-scroll-to-top").css({
			"right" : sideWidth + 10
		});
	} else {
		$(".badge-scroll-to-top").css({
			"right" : "10px"
		});
	}
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});