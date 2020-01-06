integration.meta = {
	'sectionID' : '125711',
	'siteName' : 'Evo',
	
	'platform' : 'tablet',
	'restrictions' : 'iOS 7+ only (responsive)'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
  'mf_siteId': '681755',
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#feedbackify").hide();
		$("#block-dfp-skin").css({
			"max-width" : "1px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			//integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
			$("#block-evo-review-selector-review-selector-block").css({
				"right" : "380px"
			});
			$("#main-menu").css({
				"margin-left" : "0px"
			});

		}
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "15"
	});
})
