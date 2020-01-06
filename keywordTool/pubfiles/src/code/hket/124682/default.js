integration.meta = {
	'sectionID' : '124682',
	'siteName' : 'U Beauty - Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707374',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".container, #ub-footer").css({
				"margin-left" : "10px"
			});
			/* Short css rule additions (1-2 rules) */
			$("head").append("<style> html > body { margin-left : 20px !important; } #ulifestyle-header { margin-left : 20px !important; left : 0 !important;} </style>");
		}
		
	   /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	   integration._addPixel();
		
		$("body").attr("style", "margin-top: 0 !important;");
		$(".container").css({
			"margin-top" : "36px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.topFrame = e.data.plr_FrameTop;
	$("#ulifestyle-header").css({
		"top" : integration.custom.topFrame,
		"max-width" : "1000px",
		"margin-left" : "-500px",
		"left" : "50%"
	});
});
