integration.meta = {
	'sectionID' : '126035',
	'siteName' : 'MuensterscheZeitung',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706411',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit": true

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#top-position, #oms_gpt_skyscraper").hide();
		$("#page, #footer").css({
			"max-width" : "1000px"
		});
		$("#footer")
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page, #footer").css({
				"margin-left" : "0px"
			});
		}
	}
});
