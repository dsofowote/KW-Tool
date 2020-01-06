integration.meta = {
	'sectionID': '126603',
	'siteName': 'Just Run Lah - Desktop - (Asia)',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '707993',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1080,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		if ($(".td-header-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".td-header-wrap");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment : -200
			});
		}
		$(".adspace").hide();
		$("body, #td-outer-wrap").css({
			"overflow": "visible"
		});
		$(".td-footer-wrapper, .td-sub-footer-container, .td-full-screen-header-image-wrap").css({
			"max-width": "1080px",
			"margin": "0px auto"
		});
		$(".td-header-menu-wrap").css({
			"right": "0px",
			"left": "0px"
		});
		$(".td-more-articles-box").css({
			"width": "270px"
		});
		$("head").append("<style>.cc_container{max-width:1080px;margin:0 auto}</style>");
	}
});

integration.on("layoutChange", function (e) {
	var width = $(window).width();
	var sideWidth = (width - 984) / 2;
	/* content width divided by 2 */
	$(".td-scroll-up").css({
		"right": sideWidth - 44
	});
});