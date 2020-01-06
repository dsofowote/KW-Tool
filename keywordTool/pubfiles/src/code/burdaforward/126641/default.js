integration.meta = {
	'sectionID' : '126641',
	'siteName' : 'Huffingtonpost - Tablet - (AT CH DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706983',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$('.inner-container, footer').css({
			"max-width" : "1170px",
			"margin" : "0 auto"
		});

		$('body').css({
			"background" : "none",
			"overflow-x" : "visible"
		});

		$(".newsletter-toaster > div").css({
			"left" : sideWidth - 70
		});
		$("head").append('<style>.nav-sticky, .stickyNav{z-index: 99999999 !important;}</style>');
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('.inner-container, footer').css({
				"margin" : "0"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.stickyNav();
	$(window).scroll(function() {
		integration.custom.stickyNav();
	});
});

integration.custom.stickyNav = function() {
	var headerHeight = $('.nav-sticky').height();
	if ($(".sticky-nav-on").length == 1) {
		integration.base.setCfg({
			plr_ScrollAdjustment : headerHeight
		});
	}
}

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '9999999'
	});
});
