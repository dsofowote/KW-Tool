integration.meta = {
	'sectionID' : '125838',
	'siteName' : 'NM+ - Desktop - (HK)',
	'platform' : 'desktop'
};


//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707519',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1270,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
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
	if (width < 1830) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1270) / 2;
		/* content width divided by 2 */
		$(".backtotop").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".backtotop").css({
			"right" : "10px"
		});
	}
}
