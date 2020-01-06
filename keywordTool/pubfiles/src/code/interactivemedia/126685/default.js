integration.meta = {
	'sectionID' : '126685',
	'siteName' : 'Intouch - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".aboimage div").css({
			"margin-left" : "10px"
		});

		$(".iconNavigation ul ul, header.navigation nav ul").css({
			"zoom" : "0.7",
			"margin-left" : "15px"
		});

	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var fwidth = $(window).width();
	$(".gridContainer .row, .navigation sticky, header, .slider.slider-default.slick-initialized.slick-slider, .gridContainer .row .col.col-6 img, .article .articletext, #divSponAds, .plista_widget_underArticle, section.facebook").css({
		"max-width" : fwidth - integration.custom.FrameSideRight + "px",
		"margin-left" : "0px"
	});

	$(".gridContainer .row").css({
		"max-width" : fwidth - integration.custom.FrameSideRight + "px"
	});

	$(".slider.slider-default.slick-initialized.slick-slider img").css({
		"min-width" : fwidth - integration.custom.FrameSideRight + "px"
	});
}
