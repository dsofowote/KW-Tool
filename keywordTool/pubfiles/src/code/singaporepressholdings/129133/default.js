integration.meta = {
    'sectionID' : '129133',
    'siteName' : 'HerWorldPlus - (Unpub till Approv - InApp) - Tablet - ( SG )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058028',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -50,
	"plr_FastInit" : true,
	//"plr_AdProviders" : "MFAD"
}

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$("body").css({
			"max-width" : "1060px",
			"margin" : "0 auto"
		})
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.custom.IsEdge = true

			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
    }
});

integration.on('layoutChange', function(e) {

});