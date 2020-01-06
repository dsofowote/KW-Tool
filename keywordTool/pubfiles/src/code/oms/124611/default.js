integration.meta = {
	'sectionID' : '124611',
	'siteName' : 'Mitteldeutsche Zeitung - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707569',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : '36',
	'plr_PageHeightAdjustment' : -200,
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".dm_special_topics.header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".dm_special_topics.header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -170
			});
		}
		$(".dm_ad.dm_ad-leaderboard, .dm_ad.dm_ad-skyscraper").css({
			"display" : "none"
		});
		$(".dm_container, .dm_footer_service.lp_service, .dm_page_footer.lp_footer, .dm_special_topics.footer").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
	}
});

integration.on('adServed', function(e) {
	var headHeight = $(".dm_page_header").outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : headHeight
	});
});
