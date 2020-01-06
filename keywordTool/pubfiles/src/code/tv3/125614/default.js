integration.meta = {
	'sectionID' : '125614',
	'siteName' : 'Xpose',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706521',
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
		$(".navbar").css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		$(".navbar-right").css({
			"margin-right" : "0"
		});
		$(".footer").css({
			"position" : "relative",
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		integration._addPixel();
		$("body").css({
			"margin-bottom" : "0"
		});
	}
	if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
		/* PageSkin Edge specific changes */
		integration.base.setCfg({
			'plr_PageAlignment' : 'left'
		});
		$(".navbar, #wrapper, .footer").css({
			"margin-left" : "0"
		});
	}
});
