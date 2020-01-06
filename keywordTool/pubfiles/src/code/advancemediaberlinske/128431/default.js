integration.meta = {
	'sectionID' : '128431',
	'siteName' : 'B.dk - Desktop - ( DK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013024',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1260,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var HeaderHeight = $('.header-sticky > .sticky-inner').height();
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -HeaderHeight - 25,
				'plr_StartScrollOnAnchor' : true,
				'plr_ScrollAdjustment' : HeaderHeight
			});
		}
		$('body').css({
			"overflow" : "visible"
		});
		$('.main-wrapper, .site-footer, .offcanvas-menu').css({
			"overflow" : "visible",
			'max-width' : "1260px",
			"margin" : "0 auto"
		});
	}
});
