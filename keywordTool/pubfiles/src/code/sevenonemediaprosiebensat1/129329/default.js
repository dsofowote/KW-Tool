integration.meta = {
    'sectionID' : '129329',
    'siteName' : 'Goal - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1600]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072374',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : 'mp_wrapper4, mp_wrapper2',
    'plr_HideElementsByClass' : 'module-eplayer, module-ad',
    'plr_PageHeightAdjustment' : -80
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").css({
			"background-image" : "none"
		});
		$("#ad728x90").css({
			"width" : "1270px",
			"margin" : "0 auto"
		});
		$(".page-container").css({
			"margin-top" : "40px"
		});
		$("footer.widget-footer.clearfix").css({
			"width" : "1280px",
			"margin" : "0 auto"
		});
		$("body > div.page-wrapper > div.top-section.clearfix > div.module.module-sliding-panel.clearfix > div.arrow.prev").css({
			"left" : "0"
		});
		$("body > div.page-wrapper > div.top-section.clearfix > div.module.module-sliding-panel.clearfix > div.arrow.next").css({
			"right" : "0"
		});
		$("body").css({
			"overflow" : "visible",
		});
		$(".ad-leaderboard").css({
			"display" : "none"
		});
	}
});

integration.on('adServed', function(e) {
	var headHeight = $("header").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight
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
	if (width < 1754) {
		var sideWidth = (width - 1280) / 2;
		$("#toast-container").css({
			"right" : sideWidth + 20
		});
	} else {
		$("#toast-container").css({
			"right" : "10px"
		});
	}
}
