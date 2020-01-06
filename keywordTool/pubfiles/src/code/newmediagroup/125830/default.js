integration.meta = {
	'sectionID' : '125830',
	'siteName' : 'WeekendHK',
	'platform' : 'desktop',
	'restrictions' : ''
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1495]
};

function setWindow() {
	return currentWindow.top;
}

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707574',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1235,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".a2a_kit").css({
			"margin-top" : "200px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("head").append("<style>.navigation--is-visible .navigation{margin-top: " + integration.custom.FrameTop + "px;}</style>");

	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1480) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1100) / 2;
		/* content width divided by 2 */
		$(".a2a_kit").css({
			"right" : sideWidth
		});
	} else {
		$(".a2a_kit").css({
			"right" : "10px"
		});
	}
}
