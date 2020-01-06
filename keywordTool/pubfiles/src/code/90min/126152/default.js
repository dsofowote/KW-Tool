integration.meta = {
	'sectionID': '126152',
	'siteName': '90min - Desktop - UK',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1575]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId': '706891',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1315,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_StartScrollOnAnchor': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': 'ad',
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
window.ISMPassback = function () {
	return "<!-- Passback Light AdSlot 1 for Ad Unit '90-min/Passback/Desktop/970x250' ### Size: [[970,250]] -->\n<div data-glade id='glade-aslot-1'\n      data-ad-unit-path='/175840252/90-min/Passback/Desktop/970x250'\n      width='970' height='250'\n      data-click-url='%%CLICK_URL_UNESC%%'\n      data-json='{\"targeting\": {\"Passback\": [\"InSkin\"]}}'></div>\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n<!-- End -->";
};
