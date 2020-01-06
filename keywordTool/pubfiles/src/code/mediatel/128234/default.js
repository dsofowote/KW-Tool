integration.meta = {
	'sectionID' : '128234',
	'siteName' : 'Mediatel - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '993282',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var pageHeight = ($(".application_workspace").height() + $(".footer_bottom").outerHeight()) - ($("#application").height() - $("#application > .headerboard").height());
		var headHeight = $("#application > .headerboard").outerHeight() + $("#brand").height();
		if ($("#application > .headerboard").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#application > .headerboard");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : pageHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}	
	}
});
