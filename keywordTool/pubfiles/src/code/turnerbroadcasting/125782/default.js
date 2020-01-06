integration.meta = {
	'sectionID' : '125782',
	'siteName' : 'CNN',
	
	'platform' : 'tablet',
	'restrictions' : 'iOS 7+ only (responsive)'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".l-container, footer").css({
			"padding-left" : "5px",
			"padding-right" : "5px",
		});
		$(".nav .logo").css({
			"height" : "60px"
		});
		$("head").append("<style>.sibling.sibling--next{ right: 101px;}</style>");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body{margin-left:0px !important}</style>");
			$("head").append("<style>.sibling.sibling--next{ right: 301px;}</style>");

		}
	}
});
