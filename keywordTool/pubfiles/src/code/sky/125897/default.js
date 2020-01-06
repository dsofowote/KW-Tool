integration.meta = {
	'sectionID' : '125897',
	'siteName' : 'MTV - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '707206',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("#page-header").height();
		if ($("#page-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		$("head").append("<style>main.hub, .site-header.cf, #page-footer{max-width: 1170px; margin: 0 auto;}</style>");
		$("head").append("<style>#page-content{max-width: 1170px;}</style>");
		$("head").append("<style>.pane-content, .vimn-subject-submenu{max-width: 1170px;}</style>");
		$("head").append("<style>.page{overflow: visible;}</style>");
	}
});
