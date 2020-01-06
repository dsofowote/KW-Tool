integration.meta = {
	'sectionID' : '127046',
	'siteName' : 'PC Mag - Tablet - (SEA)',
	'platform' : 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707436',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 95,
	'plr_URLKeywords' : 1
};

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSide;
	$('head').append('<style type="text/css">#share_container .share_menu.vertical.left {left: ' + integration.custom.PageSkinSidePanel + 'px !important;}</style>');
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('header').height();
		$('body').css({
			"padding-top" : headerHeight + 9
		});
		$('#adkit_billboard').css({
			"display" : "none"
		});
		$('#main').css({
			"margin-top" : "10px"
		});

		$('footer').css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$('body').css({
				"max-width" : "1024px"
			});
			$('header').css({
				"left" : "0"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
}); 