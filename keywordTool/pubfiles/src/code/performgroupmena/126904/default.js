integration.meta = {
	'sectionID' : '126904',
	'siteName' : 'cricbuzz - Desktop - (UAE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707902',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'srv_Keywords' : 'pspd_b, ISM_TEST',
	//'plr_FramePositionCSS' : 'margin: 0 auto; border-left: transparent solid 10px;',
	//'plr_GetContentHeightVersion' : 2,
	//'plr_EnableActiveResize' : false,
	//'plr_PageHeightAdjustment': 0,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		var cwidth = $('.page').width();
		var center = (wwidth - cwidth) / 2;
		$(".cb-footer").css({
			"max-width" : "980px",
			"left" : center,
			"float" : "none"
		});

		$("#top").css({
			"min-height" : "0px"
		});
		$("head").append("<style>#leaderboard{display: none !important;}</style>");
	}
});
