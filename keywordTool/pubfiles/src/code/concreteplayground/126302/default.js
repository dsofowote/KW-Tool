integration.meta = {
	'sectionID' : '126302',
	'siteName' : 'Concrete Playground - Tablet - (AU)',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '.wrapper',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 78
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("html").css({
			"overflow-x" : "visible"
		});
		$("body > .wrapper").css({
			"max-width" : "1024px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("body > .wrapper").css({
				"margin-left" : "0"
			});
		} else {
			$("body > .wrapper").css({
				"margin" : "0 auto"
			});
		}
	}
});
