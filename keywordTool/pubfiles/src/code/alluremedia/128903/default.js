integration.meta = {
    'sectionID' : '128903',
    'siteName' : 'Business Insider - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040967',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
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

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
			integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
			$("#content .container").css({
				"margin": "0px"
			});
        }
    }
});
var skinPlacement = function () {
	var headHeight = $(".site-header").outerHeight();
	if ($(".site-header").css('position') == 'fixed' || $(".site-header").hasClass("header--fixed")) {
		integration.base.setCfg({
			plr_StartScrollOnAnchor: false,
      plr_ScrollAdjustment: - headHeight
		});
		$("#inskinanchor").css({
			"position": "relative",
			"top": headHeight
		});
	} else {
		integration.base.setCfg({
			plr_StartScrollOnAnchor: true,
      plr_ScrollAdjustment: - headHeight
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
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n       googletag.defineOutOfPageSlot('/1027487/businessinsider', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'businessinsider.com.au');\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};
