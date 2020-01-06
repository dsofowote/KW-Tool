integration.meta = {
	'sectionID' : '125627',
	'siteName' : 'Stuff',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707700',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : -25
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		};
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -96
			});
		};
		$("#block-carouselslide-carouselslide-container .flexslider .flex-direction-nav li .flex-prev").css({
			"left" : "0"
		});
		$("#block-carouselslide-carouselslide-container .flexslider .flex-direction-nav li .flex-next").css({
			"right" : "0"
		});

		$("#footer-wrapper").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$("head").append('<style>#leaderboard{display: none !important;} .ism-frame{z-index: 9999999 !important;} </style>');
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var newheight = integration.custom.PageSkinTopPanel - height;
	$("head").append('<style>#feedbackify .fby-tab-r{margin-top: ' + newheight + 'px !important;}</style>');
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1350 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 980) / 2;
		/* content width divided by 2 */
		$("head").append('<style>#feedbackify .fby-tab-r, #newsletter-prompt.bottom-right{right: ' + sideWidth + 'px !important;}</style>');
	} else {
		var sideWidth = (width - 980) / 2;
		$("head").append('<style>#feedbackify .fby-tab-r{right: 10px !important;} #newsletter-prompt.bottom-right{right: ' + sideWidth + 'px !important;}</style>');
	}
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\'https://www.googletagservices.com/tag/js/gpt.js\'>\n  googletag.pubads().definePassback(\'/8527/HCM_Passbacks/CE_Passbacks\', [970, 250]).display();\n</script>";
};
