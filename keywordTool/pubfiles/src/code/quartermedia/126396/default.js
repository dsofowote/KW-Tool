integration.meta = {
	'sectionID' : '126396',
	'siteName' : 'FVW - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 940,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("#alignment, #south, .fvw-footer, #page, .footerAction").css({
			"max-width" : "940px",
			"margin" : "0 auto"
		});

		$('body').attr('style', 'background : none !important');
		$("#alignment").removeClass("withskyscraper")
		
		$(".hatNav .inner").css({
			"max-width" : "870px"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$("#alignment, .fvw-footer, .footerAction, #south").css({
				"margin-left" : "0px"
			});

			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});
