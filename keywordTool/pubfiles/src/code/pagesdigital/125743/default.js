integration.meta = {
	'sectionID' : '125743',
	'siteName' : 'PagesDigital',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706735',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("layoutChange", function(e) {
	integration.custom.frameTop = e.data.plr_FrameTop;
	var topHeight = $(".navbgd-block").height();
	var headerHeight = $("body > .container").height();
	$(".menu").css({
		"top" : integration.custom.frameTop + topHeight + headerHeight
	});
	integration.custom.InSkinTopNav();
	$(window).resize(function() {
		integration.custom.InSkinTopNav();
	});
	$(window).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.custom.InSkinTopNav = function() {
	var width = $(window).width();
	if (width < 769) {
		var height = $(document).scrollTop();
		if (height < integration.custom.frameTop) {
			var newheight = integration.custom.frameTop - height;
			$(".header-mobile-top, .slicknav_menu").css({
				"margin-top" : newheight
			});
		} else {
			$(".header-mobile-top, .slicknav_menu").css({
				"margin-top" : "0px"
			});
		}
	} else {
		$(".header-mobile-top, .slicknav_menu").css({
			"margin-top" : "0"
		});
	}
}
