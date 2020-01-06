integration.meta = {
	'sectionID' : '128751',
	'siteName' : 'Huff Post AU - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1034047',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2
	$('#hp_cconsent, .master-container, #desktop__main_footer').css({
		'width' : '1170px',
		'margin' : '0 auto'
	});
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
	$('.newsletter-toaster__inner-container').css({
		"left" : sideWidth - 80
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

