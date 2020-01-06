integration.meta = {
	'sectionID' : '126025',
	'siteName' : 'Sportauto',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706729',
	'plr_PageAlignment' : 'center',
	/*'plr_PageAlignment' : 'custom',
	 'plr_FramePositionCSS' : 'margin: 0 auto; border-right: transparent solid 160px;',*/
	'plr_StartScrollOnAnchor' : true,
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body > .p").css({
			"padding-right" : "0px"
		});
		$('head').append('<style type="text/css">.v-A_-wrapper--stroer {padding: 0;}</style>');
		$("#div-gpt-ad-banner").css({
			"height" : "0px"
		});
		$(".v-A_-header-sticky, .v-A_-subnav.v-A_-subnav-sticky").css({
				"left" : "50%"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -134
			});
		}
	}
});
