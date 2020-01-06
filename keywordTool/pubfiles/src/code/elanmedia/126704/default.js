integration.meta = {
	'sectionID' : '126704',
	'siteName' : 'Huffington Post Arabic - Desktop - (UAE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707628',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#wrapper").css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		
		$("#modulous_top_1x1, #ad_top_1x1, [id*='ad_top'], [id*='top_1x1']").css({
			"height" : "0px"
		});
		
		var width = $(window).width();
		var sideWidth = (width - 990) / 2;
		var rowCss = "<style>#social_badges {right :";
		rowCss += sideWidth;
		rowCss += "px !important;}</style>";
		$("head").append(rowCss);
		
		/*
		 * Publisher request for us to collapse all ads for a campaign
		 */
		$("#modulous_right_rail_flex, #modulous_leaderboard_flex, #modulous_right_rail_300x250_lower").hide();
	}
});

integration.on("layoutChange", function(e) {

	integration.custom.floatingButtons();

	$(window).resize(function() {

		integration.custom.floatingButtons();

	});

});

