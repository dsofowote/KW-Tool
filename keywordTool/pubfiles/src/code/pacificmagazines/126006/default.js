integration.meta = {
	'sectionID' : '126006',
	'siteName' : 'InStyle AU',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#sb-site").css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow-x" : "visible"
		});
		$("head").append("<style>.fixed-menu{max-width: 1024px; width: 100%;} #sb-site{max-width: 1024px; margin: 0 auto;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#sb-site").css({
				"margin-left" : "0"
			});
			$("head").append("<style>.fixed-menu{margin-left: 20px;}");
		}
	}
});
