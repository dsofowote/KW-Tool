integration.meta = {
	'sectionID': '128007',
	'siteName': 'Floor 8 - Smartphone - ( UK ES US )',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '965950',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var windowWidth = $(window).width();
		integration.custom.frameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = windowWidth - integration.custom.frameSideRight;
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .social-header{margin-left: 0;}';
		stylesCSS += '.inskinLoaded .share-buttons-header-wrapper{margin-left: -15px;}';
		stylesCSS += '.inskinLoaded .instagram-media.instagram-media-rendered{max-width:' + contentWidth + 'px !important;min-width:' + contentWidth + 'px !important}'
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		// if ($("body > header").length == 1) {
		// 	$("<div id='inskinanchor'></div>").insertBefore("body > header");
		// 	integration.base.setCfg({
		// 		plr_AnchorParent : "#inskinanchor",
		// 		plr_PageHeightAdjustment : -44
		// 	});
		// }

	}
});

integration.on('adServed', function (e) {
	var headerHeight = $("header").outerHeight();
	var leaderboardHeight = $(".ad").first().height();
	var navHeight = $(".mobile-nav-main-wrapper").height();
	var totalHeight = navHeight + headerHeight + leaderboardHeight;
	$(".ism-anchor").css({
		"top": headerHeight,
		"position": "relative"
	});
});

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/175840252/Floor8.com/Passback/1x1', [[1,1]])\n  .setTargeting('Passback', ['InSkin'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n<\\script>";
};