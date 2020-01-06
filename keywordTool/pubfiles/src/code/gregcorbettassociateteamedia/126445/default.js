integration.meta = {
	'sectionID' : '126445',
	'siteName' : 'Le Parisien - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706895',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('header').height();
		if ($(".outer-main__nav--grey").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".outer-main__nav--grey");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : headerHeight,
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$("body").css({
			"width" : "auto"
		});
		$("header, .header--une~#main").css({
			"top" : "0"
		});
		$(".outer-main__nav--toUpper").css({
			"margin-top" : headerHeight
		});
		$(".section-locality-header > nav.section-locality-header__navbar.tag-container").css({
			"margin-right" : "0px"
		});
		$("#outer-main, .premium-banner.collapse-premium, .container-fluid.footer-squid, #footer").css({
			"width" : "1020px",
			"margin" : "0 auto",
		});
		//collapse leaderboard
		$("#dfp_banniere-haute").css({
			"display" : "none"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#main, .premium-banner.collapse-premium, .container-fluid.footer-squid, .footer").css({
				"margin-left" : "0px"
			});
			$(".outer-main__nav, .header").css({
				"margin-left" : "-20px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#outer-main, .premium-banner.collapse-premium, .container-fluid.footer-squid, #footer").css({
				"margin" : "0"
			});
		}
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('header').height();
	$(".ism-frame").parent().css({
		"top" : headerHeight,
		"position" : "relative"
	});
});