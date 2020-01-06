integration.meta = {
	'sectionID': '126444',
	'siteName': 'Le Parisien - Desktop - (France)',
	'platform': 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '706814',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1000,
	'plr_FastInit': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_StartScrollOnAnchor': true,
	'plr_ScrollAdjustment': 0,
	'plr_FastInit': true,
	'plr_StartScrollOnAnchor': true

};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('#outer-main').css({
			'margin-top': '10px'
		});
		$('html').css({
			'overflow': 'initial'
		});
		$("footer, #main, .premium-banner, .footer-squid").css({
			"max-width": "1000px",
			"margin": "0 auto"
		});
		var headerHeight = $(".lp-grid.header__container").outerHeight();
		var pageHeightAdjustment = $(".outer-main__nav.outer-main__nav--toUpper.outer-main__nav--noborder").height() + $(".outer-main__nav.outer-main__nav--grey").height();
		if ($(".outer-main__nav.outer-main__nav--grey").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".outer-main__nav.outer-main__nav--grey");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -pageHeightAdjustment,
				plr_ScrollAdjustment: headerHeight
			});
		}  else if ($("header.header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -pageHeightAdjustment,
				plr_ScrollAdjustment: headerHeight
			});
		}
	}
});

integration.on('adServed', function(){
	var headerHeight = $("header.header").outerHeight();
	if ($(".outer-main__nav.outer-main__nav--grey").length == 0 && $("header.header").length == 1) {
		$(".ism-frame").parent().css({
			"top" : headerHeight,
			"position" : "relative"
		});
	}
});

integration.on('layoutChange', function (e) {
	integration.custom.ismResize();
	$(window).on("resize", integration.custom.ismResize);
});

integration.custom.ismResize = function () {
	var windowWidth = $(window).width();
	var navLeft = (windowWidth - 1000) / 2;
	$(".outer-main__nav.outer-main__nav--toUpper.outer-main__nav--noborder, .outer-main__nav.outer-main__nav--grey").css({
		"width": windowWidth,
		"margin-left": -navLeft
	});
};