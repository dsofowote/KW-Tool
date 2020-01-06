integration.meta = {
	'sectionID': '128469',
	'siteName': ' Business Insider - Desktop - (AU)',
	'platform': 'desktop'
};

integration.testParams = {

	'desktop_resolution': [1450]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1016494',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1190,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_ForceFrameBottom': 0,
	'plr_FastInit' : true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("body").css({
			"height": "auto"
		});
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor"
			});
		}

		$('head').append('<style type="text/css">.site-header.header--fixed.header--slide-in {width : 1170px;margin : 0 auto;left : 0;right : 0;}</style>');
		$('head').append('<style type="text/css">.leaderboard-container .leaderboard--fixed {width : 1170px;margin : 0 auto;left : 0;right : 0;}</style>');

		$(window).scroll(function () {
			skinPlacement();
		});
	}
});

var skinPlacement = function () {
	var headHeight = $(".site-header").outerHeight();
	if ($(".site-header").css('position') == 'fixed' || $(".site-header").hasClass("header--fixed")) {
		integration.base.setCfg({
			plr_StartScrollOnAnchor: false
		});
		$("#inskinanchor").css({
			"position": "relative",
			"top": headHeight
		});
	} else {
		integration.base.setCfg({
			plr_StartScrollOnAnchor: true
		});
		$("#inskinanchor").css({
			"position": "relative",
			"top": "0px"
		});
	}
}

integration.on("layoutChange", function (e) {
	skinPlacement();
});

integration.on('adServed', function (e) {
	$(".ism-frame").parent().css({
		"z-index": "10"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/businessinsider', [-1, -1]).display();<\\script>";
};
