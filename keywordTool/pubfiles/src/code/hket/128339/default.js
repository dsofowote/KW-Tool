integration.meta = {
	'sectionID' : '128339',
	'siteName' : 'HKET - (New Layout) - Tablet - ( HK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1004723',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1350,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("head").append("<style> .sticky-header-container.stick .sticky-header{width: 1350px !important; margin: 0 auto; left: 0; right: 0;} .back-to-top-button{right: " + (integration.custom.FrameSideRight + 10) + "px !important;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{width: 1350px;} .sticky-header-container.stick .sticky-header{margin-left: 20px;}</style>");
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9999"
	});
});

