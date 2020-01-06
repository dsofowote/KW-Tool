integration.meta = {
	'sectionID' : '128569',
	'siteName' : ' Annahar - Desktop - (MENA)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1023811',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("header > .main").height();
		if ($("#site > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		$(".page").css({
			"margin-top" : headHeight,
			"padding-top" : "0px"
		});
		$(".add_author, .main_image").css({
			"max-width" : "980px",
			"margin" : "auto"
		});
		var toTopRight = ($(window).width() - 1000) / 2;
		$(".toTop").css({
			"right" : toTopRight + 20
		});
	}
});
