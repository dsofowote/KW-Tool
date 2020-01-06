integration.meta = {
	'sectionID' : '126376',
	'siteName' : 'Emma - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707440',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer-bottom, body > nav").css({
			"max-width" : "1020px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".emm-subscription-ad").css({
			"margin-left" : "250px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"margin-left" : "-20px"
			});
			$("#footer-bottom, .emm-nav-fixed-container").css({
				"margin-left" : "20px"
			});
			$(".emm-subscription-ad").css({
				"margin-left" : "50px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
}); 