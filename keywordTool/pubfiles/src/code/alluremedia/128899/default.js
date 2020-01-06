integration.meta = {
	'sectionID': '128899',
	'siteName': 'Kotaku - Smartphone - ( AU )',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1040963',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_ForceFrameBottom': 0,
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration.custom.headHeight = $('.site-header').outerHeight();
		integration.custom.socialHeight = $(".meta__social").outerHeight();
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				'plr_PageHeightAdjustment': -integration.custom.headerHeight
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded header .site-header--fixed{z-index: 9999 !important;top:0px}';
		stylesCSS += '.inskinLoaded .ad.mobile-leaderboard{display: none !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.custom.indicatorPos = $(".site-header").outerHeight();
		integration.custom.closePos = $(".site-header").outerHeight();
		if ($(".meta__social").css("z-index") === "101"){
			integration.custom.pl_initState = integration.custom.socialHeight;
		} else {
			integration.custom.pl_initState = integration.custom.headHeight;
		}
		integration.base.setCfg({
			'plr_FixedTop': true,
			'plr_EnableSwipe': true
		});
	}
});



integration.on('layoutChange', function (e) {
	integration.custom.pl_behaviour = "property";
	integration.custom.pl_class = ".meta__social";
	integration.custom.elProperty = "display";
	integration.custom.elValue = "flex";

	var articlePage = $(".article-pagetype");
	if (articlePage) {
		integration.custom.pl_scrollState1 = integration.custom.socialHeight;
		integration.custom.pl_scrollState2 = integration.custom.headHeight;
	} else {
		integration.custom.pl_scrollState1 = 0;
		integration.custom.pl_scrollState2 = 0;
	}
});

integration.on('pagelead:layoutChange', function (e) {
	if (e.data.fixedTop == false) {
		integration.custom.pl_behaviour = "n/a";
		newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.headHeight + 'px !important;}.inskinLoaded .site-header--fixed{top:0px}';
		$("#inskinPL").html(newValue);
	}
});

integration.on('adClose', function (e) {
	integration.custom.pl_behaviour = "n/a";
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1027487/mobile-kotaku', [320, 50]).display();\n<\\script>";
};
