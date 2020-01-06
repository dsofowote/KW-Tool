integration.meta = {
	'sectionID' : '128510',
	'siteName' : ' Over60 - Desktop - (AU)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1365]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1019873',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1105,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 0,
	/* Australian publishers need plr_ComscoreDevice set to desktop */
	'plr_ComscoreDevice' : 'desktop',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>main > .container{max-width: 1105px !important; margin: 0 auto;}</style>");
		var headHeight = $(".fixed-top").height();
		if ($(".fixed-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".fixed-top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		$("footer, .pre-footer").css({
			"max-width" : "1105px",
			"margin" : "auto"
		});
		$("body").css({
			"background-color" : "#f1f1f1"
		});
	}
});
