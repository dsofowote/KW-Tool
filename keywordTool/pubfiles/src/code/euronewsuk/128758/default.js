integration.meta = {
	'sectionID' : '128758',
	'siteName' : 'Livingit - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1034495',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight + 5;
		$("head").append("<style>#js-back-to-top{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#js-header, .js-main, #js-footer, .header--special-event{margin: 0 !important;}</style>");
		}
		$('#js-header, .js-main, #js-footer').css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$('.header--special-event').css({
			"width" : "1000px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("head").append("<style>.t-special-event .widget--size-fullscreen{max-width: 820px !important; margin: 0 auto;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	$(window).scroll(function() {
		if ($('header').hasClass('is-visible')) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 86
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0
			});
		}
	});
});

