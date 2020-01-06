integration.meta = {
	'sectionID' : '128609',
	'siteName' : 'Rundschau Online - Desktop - ( DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026053',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"overflow" : "visible"
		});
		$('.dm_page_content').css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		var headerHeight = $('header').height();
		var navHeight = $('.dm_navigation').height();
		if ($(".dm_spacer").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".dm_spacer");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_StartScrollOnAnchor' : true,
				'plr_ScrollAdjustment' : navHeight,
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
	}
});
