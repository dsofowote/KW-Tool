integration.meta = {
	'sectionID' : '128757',
	'siteName' : 'Livingit - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1034494',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 86
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.floatingButtons();
		$('#js-header, .js-main, #js-footer').css({
			"width" : "1200px",
			"margin" : "0 auto"
		});
		$('.header--special-event').css({
			"width" : "1200px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("head").append("<style>.t-special-event .widget--size-fullscreen{max-width: 990px !important; margin: 0 auto;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});

integration.on("layoutChange", function(e) {
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
		$(".button--back-to-top").css({
			"right" : sideWidth - 80
		});
	} else {
		$(".button--back-to-top").css({
			"right" : "16px"
		});
	}
};
