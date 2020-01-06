integration.meta = {
	'sectionID' : '125974',
	'siteName' : 'U Know - Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1210,
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
			$("#container").css({
				"max-width" : "1010px"
			});
			$("#content").css({
				"margin-left" : "0px",
				"padding-left" : "0px"
			});
			$("#footer").css({
				"max-width" : "1210px",
				"margin-left" : "0"
			});
		} else {
			$("#footer").css({
				"max-width" : "1210px",
				"margin-left" : "auto",
				"margin-right" : "auto"
			});
		}
		$("<div style='clear:both;'></div>").insertAfter("#footer");
		$("#top_bg_").css({
			"max-width" : "1210px",
			"margin" : "0 auto"
		});
		$("#footer").css({
			"float" : "none",
			"position" : "relative"
		});
	}
});
