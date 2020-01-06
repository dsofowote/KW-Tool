integration.meta = {
	'sectionID' : '126228',
	'siteName' : 'Hamburger Abendblatt Tablet',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			
			$(".page-wrapper").css({
				"margin-left" : "10px"
			});
			
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
