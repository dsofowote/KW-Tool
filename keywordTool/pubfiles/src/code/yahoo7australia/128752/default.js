integration.meta = {
	'sectionID' : '128752',
	'siteName' : 'Huff Post AU - Tablet - (AU) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1034048',
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
		$("head").append("<style> .share-bar--sticky {left: 1080px !important;}</style>");
		$(".share-bar--sticky").css({
			"z-index" : "1"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#hp_cconsent, .master-container, #desktop__main_footer{margin: 0 !important;} .newsletter-toaster__inner-container{left: 20px !important;}</style>");
			$("head").append("<style> .share-bar--sticky {left: 950px !important;}</style>");

		}
	}
});

integration.on("adServed", function(e) {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2
	$('#hp_cconsent, .master-container, #desktop__main_footer').css({
		'width' : '1000px',
		'margin' : '0 auto'
	});
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
	$('.newsletter-toaster__inner-container').css({
		"left" : sideWidth
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.isMenuStuck();
	$(window).on("scroll", function() {
		integration.custom.isMenuStuck();
	});
});

integration.custom.isMenuStuck = function() {
	var hasDownClass = $("body").hasClass("sticky-nav-on");
	if (hasDownClass) {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 60
		});
	} else {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 0
		});
	}
};
