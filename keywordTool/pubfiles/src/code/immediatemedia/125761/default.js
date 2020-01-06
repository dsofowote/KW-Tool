integration.meta = {
	'sectionID' : '125761',
	'siteName' : 'Plan Your Perfect Wedding',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
  'mf_siteId': '681691',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#whole-wrapper, #leaderboard, #footer").css({
				"margin-left" : "0"
			});
			$("#om-menu-megamenu-ul-wrapper").css({
				"max-width" : "990px",
				"margin-left" : "20px"
			});
		}
	}
});

integration.on("adServed", function() {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
}); 