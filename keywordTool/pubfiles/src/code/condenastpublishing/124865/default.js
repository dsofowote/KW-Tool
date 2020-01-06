integration.meta = {
	'sectionID' : '124865',
	'siteName' : 'Vanityfair - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707684',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("#footer").css({
			"max-width" : "1160px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("head").append("<style>#wrapper_pub{margin: 0 auto !important;} .banner_top{display: none !important;}</style>");
		$("#HautHab__Leaderboard-1").parent().css({
			"margin" : "0"
		});
	}
});

integration.on("layoutChange", function(e) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 152
			});
		}
		lastScrollTop = st;
	});

	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1600 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".page-nav .go_to_heaven").css({
			"right" : sideWidth - 80
		});
	} else {
		$(".page-nav .go_to_heaven").css({
			"right" : "10px"
		});
	}
}