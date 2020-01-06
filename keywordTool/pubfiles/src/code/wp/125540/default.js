integration.meta = {
	'sectionID' : '125540',
	'siteName' : 'Pudelek',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706486',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Left align content */
			$("body > .page").css({
				"margin-left" : "0px"
			});
			/* Left align cookie bar */
			$(".cookie__wrapper").css({
				"margin-left" : "10px"
			});
			/* Remove margin on right hand site. This overides width 100% on body. */
			$("body").css({
				"width" : "initial"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
