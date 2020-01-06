integration.meta = {
	'sectionID' : '127944',
	'siteName' : ' Free Ads - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '953709',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>#_main_container .main_section > div.fa_700{display: none !important;}</style>');
		$("head").append('<style>.main_section div > div.fa_700{display: none !important;}</style>');
		$("#_main_container").css({
			"max-width" : "1050px",
			"margin" : "auto",
			"padding" : "0px 1px"
		});
		$("#header > section > .container, footer > div > .container").css({
			"max-width" : "1030px"
		});
		$(".adpage-sticky-header, .main_section.home .container, .content_block, .container.fa_detail_page, #sticky_contact_nav > .container").css({
			"max-width" : "1050px",
			"margin" : "auto"
		});
		$("#offer_sticky").css({
			"margin-right" : "10px"
		});
		$("#buynow_sticky").css({
			"margin-right" : "5px"
		});
		$(".container.fa_listing").css({
			"max-width" : "1050px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;

	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});

	$("#menu-toggle").on("click", function() {
		integration.custom.ismResizeShading();
	});

});

integration.custom.ismResize = function() {
	var width = $(window).width();

	if ($(window).width() > 1070) {
		var sideWidth = (width - 1050) / 2;
	} else {
		var sideWidth = 0;
	}

	$("#nav_main").css({
		"left" : sideWidth,
		"top" : integration.custom.FrameTop
	});

	if ($(window).width() < 1000) {
		$(".nav_main .nav li a").css({
			"padding" : "0px 12px"
		});

		$(".footer .col_fix, .footer .col_last").css({
			"max-width" : "inherit",
			"margin-right" : "inherit"
		});

		$(".footer .col_fix.socials").css({
			"max-width" : "inherit"
		});

		$(".footer .col_left").css({
			"max-width" : "inherit"
		});

		$(".footer .col_right").css({
			"max-width" : "inherit"
		});
	} else {
		$(".nav_main .nav li a").css({
			"padding" : "0px 30px"
		});

		$(".footer .col_fix, .footer .col_last").css({
			"max-width" : "180px",
			"margin-right" : "20px"
		});

		$(".footer .col_fix.socials").css({
			"max-width" : "302px"
		});

		$(".footer .col_left").css({
			"max-width" : "39%"
		});

		$(".footer .col_right").css({
			"max-width" : "61%"
		});
	}
}

integration.custom.ismResizeShading = function() {
	setTimeout(function() {
		var shadingHeight = integration.custom.FrameTop + integration.custom.FrameBottom + $("#nav_main").height();
		$("head").append("<style>#overlay {height: " + shadingHeight + "px !important;}</style>");
	}, 500);
}
