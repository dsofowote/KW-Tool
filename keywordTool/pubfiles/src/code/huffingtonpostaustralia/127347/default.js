integration.meta = {
	'sectionID' : '127347',
	'siteName' : 'Huffington Post - ARTICLE PAGES- Desktop - (AU)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '744167',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".inner-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".inner-container > .desktop-only");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -167,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 60
			});
		}
		$("#social_badges").css({
			"z-index" : "9"
		});
		$(".desktop-only > footer").css({
			"width" : "1020px",
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$(".entry-page-content ").css({
			"padding-top" : "10px"
		});
		// publisher request to collapse leaderboard space
		$("#modulous_leaderboard_flex").hide();
		$("footer").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$("head").append('<style>#videos-for-you.stick{z-index: 1 !important;}</style>');
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var width = $(window).width();
	var sideWidth = (width - 984) / 2; /* content width divided by 2 */
	$("head").append('<style>.o2-in-side-view{right: ' + sideWidth + 'px !important;}</style>');
	$("head").append('<style>header{margin-bottom: 0px !important;}</style>');
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/158974260/huffingtonpostau', [728, 90]).setTargeting('InSkinPassback', ['true'])\n.display();\n<\\script>";
};

