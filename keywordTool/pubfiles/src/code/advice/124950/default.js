integration.meta = {
	'sectionID' : '124950',
	'siteName' : 'Postillon - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706297',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page-wrap, #page-outer, #upperAds").css({
			"width" : "970px",
			"margin" : "0 auto"
		});
		//$("#reklame-skyscraper, #topads-wrapper").hide();
		$("head").append("<style>body{overflow-x: visible !important;} .advice-logo{right: 5px !important; top: 40px !important;} .blogger-infected{width: 960px !important;}</style>");
		$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
		$("head").append("<style> #mittigpopulis, .at4m-dock-toggle{display : none;} </style>");
		$("head").append("<style> #at4m-dock, #at4m-mobile-container {width: 970px; left: 50%; margin-left: -485px;} </style>");
		$("#gutter-right").css({
			"min-width" : "0px"
		});
		$("#reklame-skyscraper, #gutter-right, .advice-logo").hide();
		$("#page-outer").css({
			"margin-top" : "-20px"
		});
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$("#page-outer, #upperAds, #page-wrap").css({
				"margin-left" : "0px"
			});
			$("head").append("<style> #at4m-dock {width: 970px; left: 0%; margin-left: 20px;} .blogger-infected{margin: 0 !important;}</style>");
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100001"
	});
	$("#at4m-mobile-container").css({
		"z-index" : "100000"
	});
});
