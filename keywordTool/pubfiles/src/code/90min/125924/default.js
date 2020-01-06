integration.meta = {
	'sectionID' : '125924',
	'siteName' : '90min - Desktop - INT',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {
   'desktop_resolution' : [1632]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681812',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1312,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_StartScrollOnAnchor' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'ad',
	'plr_FastInit' : true
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/90-min/Passback/Desktop/970x250', [[970,250],[728,90]])\n.setTargeting('Passback', ['Inskin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};