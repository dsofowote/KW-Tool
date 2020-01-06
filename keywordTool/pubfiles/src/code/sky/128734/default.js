integration.meta = {
	'sectionID' : '128734',
	'siteName' : 'SKY NEWS - (PUBLISHER BOOKING) - TABLET (UK) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1033550',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.sdc-article-sibling-links{width: 1024px !important; margin: 0 auto; left: 0; right: 0;} .sdc-article-sibling-links[class]{margin: 0 auto;}</style>");
		$(".ad--leaderboard").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".viewport, #cookie-notice").css({
				"max-width" : "1024px"
			});
			//$("head").append("<style>.sdc-article-sibling-links[class]{margin: 0 0 0 20px !important;}</style>");
		}
	}
});
