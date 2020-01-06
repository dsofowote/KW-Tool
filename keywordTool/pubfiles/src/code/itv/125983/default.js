integration.meta = {
	'sectionID' : '125983',
	'siteName' : 'ITV',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -100
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("nav.main-nav ").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("nav.main-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$(".site-container, .itv-glob-foot").css({
			"max-width" : "1160px",
			"margin" : "0 auto"
		});
		$(".main-nav__dropdown").css({
			"z-index" : "1000"
		});
	}
});

integration.on("adServed", function(e){
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

/**** Move to-top-of-page button inside PageSkin when overlaps ****/ 
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1560) { /* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1160)/2; /* content width divided by 2 */
		$(".back-to-top").css({
			"right" : sideWidth
		});
	} else {
		$(".back-to-top").css({
			"right" : "0px"
		});
	}
}