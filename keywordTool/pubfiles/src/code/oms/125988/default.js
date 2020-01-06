integration.meta = {
	'sectionID' : '125988',
	'siteName' : 'Rhein Main Presse',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706645',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
	$("#page").css({
		"padding-top" : "0px"
	});
	$('#skyscraper').hide();
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"margin-left" : "0px"
			});
			$("#footer, #service").css({
				"padding-right" : "20px",
				"max-width" : "1080px",
				"margin-left" : "0"
			});
		} else {
			$("#footer, #service").css({
				"padding-right" : "20px",
				"max-width" : "1080px",
				"margin" : "0 auto"
			});
		}
		$("#page, .wrapper").css({
			"padding-right" : "0px"
		});
		$("#page").css({
			"padding-top" : "0px"
		});
	}
});
