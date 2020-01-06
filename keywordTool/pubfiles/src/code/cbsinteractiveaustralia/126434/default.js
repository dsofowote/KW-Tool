integration.meta = {
	'sectionID' : '126314',
	'siteName' : 'CBS News - Tablet - (Europe only)',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706907',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		var push = (wwidth - 1000) / 2;

		$("#dashboard").css({
			"max-width" : "1000px",
			"left" : push
		});

		var hh = $("header").outerHeight();
		$("#smart-banner-cbsn").css({
			"position" : "absolute",
			"top" : hh,
			"right" : "0px"
		});
		$("head").append("<style>.site-header{width:1000px; margin:0 auto;left:0;right:0;}</style>");
		$("head").append("<style>.site-header--is-sticky{width:1000px !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('.body-container').css({
				'max-width' : '1000px'
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("head").append("<style>.site-header--is-sticky{width:1000px !important; margin-top: -" + integration.custom.FrameTop + "px !important;}</style>");
});

