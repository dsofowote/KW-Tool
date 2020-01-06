integration.meta = {
	'sectionID' : '127546',
	'siteName' : 'Gumtree - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '743887',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_GetContentHeightVersion' : 2,
	'plr_EnableActiveResize' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#top_takeover").hide();
		$("#homeSideAd").hide();
		$(".home-side-ad").hide();
		$("body, html").css({
			"overflow" : "visible"
		});
		$('header, .viewport, #top_takeover, footer, .grid-container, .container, .footer-banner-container').css({
			"max-width" : "1320px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('header, .viewport, #top_takeover, footer, .grid-container, .container, .footer-banner-container').css({
				"margin-left" : "0"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel('footer');

	}
});
