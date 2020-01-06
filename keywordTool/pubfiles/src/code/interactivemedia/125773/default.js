integration.meta = {
	'sectionID' : '125773',
	'siteName' : 'FuerSie',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707274',
	'plr_PageAlignment' : 'center',
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
		$("#site, #footer").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$("ul.menu").css({
			"right" : "auto"
		});
		$(".meta-navigation .menu li").css({
			"margin-left" : "-10px",
			"margin-right" : "-10px",
			"background-color" : "white"
		});
		$("li.last.leaf a").css({
			"top" : "-90px",
			"left" : "900px"
		});
		$(".meta-navigation .primesite").css({
			"padding-right" : "0px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#site, #footer").css({
				"margin-left" : "0"
			});
		}
	}
});
