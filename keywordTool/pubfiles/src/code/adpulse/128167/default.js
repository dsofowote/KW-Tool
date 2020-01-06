integration.meta = {
	'sectionID' : '128167',
	'siteName' : 'ellahoy - Desktop - ( ES )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '984317',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('.header-wrap').height() + 31;
		if ($(".sub-menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".sub-menu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hHeight
			});
		}else if ($(".header-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-wrap");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hHeight
			});
		}
		$("#wrapPageContainer, .footer-wrap").css({
			"width" : "1170px",
			"margin" : "0 auto"
		});
		$("article h1").css({
			"margin-left" : "0px"
		});
		$("article header, footer.wrapper").css({
			"padding-left" : "5px"
		});
	}
});
