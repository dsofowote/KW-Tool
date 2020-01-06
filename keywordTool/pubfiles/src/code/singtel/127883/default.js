integration.meta = {
	'sectionID' : '127883',
	'siteName' : 'HungryGoWhere - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '916167',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#layout').css({
			"max-width" : "1050px",
			"margin" : "0 auto"
		});
		$('#main-navi .link').css({
			"margin-right" : "28px",
			"margin-left" : "10px"
		});
		$('#logo').css({
			"margin-left" : "10px"
		});
		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Pageskin Edge specific changes */
			$("#layout").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
