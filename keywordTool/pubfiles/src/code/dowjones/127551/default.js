integration.meta = {
	'sectionID' : '127551',
	'siteName' : 'Heat Street - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '744563',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -80
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#st-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#st-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("#st-container").css({
			"max-width" : "1020px",
			"margin" : "0 auto",
			"margin-top" : "40px"
		});

		$(".section.copyright.dark").css({
			"margin-bottom" : "10px"
		});
	}
});

integration.on('adServed', function(e) {
	var hh1 = $(".leaderboard-ad-container").outerHeight();
	var hh2 = $("#site-header").outerHeight();
	var headHeight = hh1 + hh2;
	$("#inskinanchor").css({
		"top" : "80px",
		"z-index" : "100",
		"position" : "relative"
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(".single-post-bg").css({
		"margin-top" : -headheight
	});

});

