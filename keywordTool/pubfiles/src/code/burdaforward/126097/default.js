integration.meta = {
	'sectionID' : '126097',
	'siteName' : 'FitforFun Tablet',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708115',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper, header, footer, header[data-role=header] .top-themes").css({
			"max-width" : "1024px",
			"margin-left" : "0px",
			"padding-left" : "0px"
		});
		$("body").css({
			"width" : "auto",
			"min-width" : "1024px",
			"max-width" : "1024px"
		});
		$("footer .centered-content, header[data-role=header] .innercontent, #ad-wrapper").css({
			"padding-right" : "0px",
			"max-width" : "1024px"
		});
		$("#main-navi").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".search-navi, .social-media").css({
			"right" : "73px"
		});

		$("head").append("<style>.header-innercontent, #main-navi > .innercontent, #wrapper, footer .centered-content{left: 0px !important;}</style>");
		$("head").append("<style>#actionbar-container, .container.container-content{max-width: 1024px !important;}</style>");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.custom.isEdge = true;
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#main-navi").css({
				"margin-left" : "0px"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	if (integration.custom.isEdge) {
		$("head").append("<style>#main-navi.sticky{margin-left: " + integration.custom.FrameSide + "px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "15001"
	});
});
