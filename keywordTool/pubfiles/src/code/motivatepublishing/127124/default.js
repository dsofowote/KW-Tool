integration.meta = {
	'sectionID' : '127124',
	'siteName' : 'Emirates Woman- Desktop - (UAE) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707658',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		var headerHeight = $("header .row.single-logo").outerHeight();
		//Only for article pages with fixed nav
		if ($("header .row.single-logo").length == 1) {
			$("<div id='inskinanchor' style='top:" + headerHeight + "px;position:relative;'></div>").insertAfter("header .row.single-logo");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 60
			});
		}

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			$(".social_links").css({
				"display" : "none"
			});
		}

		$(".ad-728x90").css({
			"height" : "0px",
		});


		$(".top-banner, .subscribe, .footer-main, .top_area").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});

		$("nav.ttop").css({
			"margin" : "0 auto",
			"max-width" : "1220px",
			"margin-top" : "0px",
			"position" : "relative"
		});

		$(".ttop2").css({
			"max-width" : "1220px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});

		$(".container-fluid > ul > li:last-of-type").css({
			"padding" : "20px 30px 0 0"
		});

		$(".menu-item").css({
			"padding" : "20px 20px 10px 0"
		});

		$("head").append("<style>.ism-head {margin: 0 auto !important; position: fixed !important; left: 0; right: 0;} </style>");
		$("head").append("<style>.ism-head-rel{position: relative !important;}</style>");
		$("head").append("<style>.ism-head-rel{position: relative !important;}</style>");
		$("head").append("<style>.ism-head-rel{top: 0 !important}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.headerHeight = $("header.top-banner").height();
	integration.custom.InSkinTopNav();
	$(document).on("scroll", function() {
		integration.custom.InSkinTopNav();
	});
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();

	if (wwidth < 1680) {
		$(".social_links").css({
			"display" : "none"
		});
	} else {
		$(".social_links").css({
			"display" : "block"
		});
	}
}

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < (integration.custom.PageSkinTopPanel + integration.custom.headerHeight)) {
		$("body > .ttop, .ttop2").removeClass("ism-head");
		$("body > .ttop, .ttop2").addClass("ism-head-rel");
	} else {
		$("body > .ttop, .ttop2").addClass("ism-head");
		$("body > .ttop, .ttop2").removeClass("ism-head-rel");
	}
};
