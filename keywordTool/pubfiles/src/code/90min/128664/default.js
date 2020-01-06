integration.meta = {
    'sectionID' : '128664',
    'siteName' : '90min - Desktop - ( IT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1600]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029125',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1340,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor"
			});
		}
		$("head").append("<style>.ad-width--970{height:0px !important;margin-top:0px !important;}</style>")

		$("body > div.page-wrap > main, #site-footer").css({
			"padding-right": "10px",
			"padding-left": "10px"
		});
		$("#site-footer").css({
			"max-width": "1330px",
			"margin": "0 auto"
		});


	}
});

integration.on("adServed", function (e) {
	var hh1 = $("#site-header").outerHeight();
	var hh2 = $(".mobile-nav-main-wrapper").outerHeight();
	var headHeight = hh1 + hh2;

	$(".page-wrap").css({
		"max-width": "1330px",
		"margin": "auto",
		"margin-top": headHeight - 20,
		"padding-top": "15px"
	});

	$(".ism-frame").parent().css({
		"top": headHeight,
		"position": "relative"
	});
});

integration.on("layoutChange", function (e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;

	// integration.custom.InSkinTopNav();
	// $(document).scroll(function () {
	// 	integration.custom.InSkinTopNav();
	// });
});

integration.custom.InSkinTopNav = function () {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#site-header").css({
			"margin-top": newheight
		});
	} else {
		$("#site-header").css({
			"margin-top": "0px"
		});
	}
};
