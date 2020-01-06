integration.meta = {
	'sectionID' : '124841',
	'siteName' : 'AAStocks',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '706685',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1260,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration._addPixel(); 
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$(".container").css({
				"margin-left" : "10px"
			});
			$(".floatL").parent().css({
				"margin-left" : "0"
			});
			$(".floatL").css({
				"margin-left" : "5px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
