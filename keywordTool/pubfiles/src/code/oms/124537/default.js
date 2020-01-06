integration.meta = {
	'sectionID' : '124537',
	'siteName' : 'RP-Online - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706720',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".park-header__nav").outerHeight();
		if ($(".park-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".park-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$(".park-header").css({
			"padding-top" : headHeight,
			"z-index" : "10"
		});
		$("#park-main").css({
			"margin" : "auto"
		});
		$(".park-fakebody").css({
			"padding-top" : "14px"
		});
		$(".park-footer__wrapper").css({
			"margin" : "auto"
		});
		$(".park-section-portal-top__content").css({
			"margin-bottom" : "0"
		});
		$(".park-navigation").css({
			"z-index" : "6"
		});
		$(".park-article__buttons-wrapper").css({
			"margin" : "auto"
		});
		$(".park-portal--superbanner").css({
			"display" : "none"
		});
		$("head").append("<style>.park-footer {max-width:980px !important; margin: auto !important;} </style>");
	}
});
