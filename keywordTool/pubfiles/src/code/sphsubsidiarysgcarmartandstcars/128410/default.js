integration.meta = {
	'sectionID' : '128410',
	'siteName' : 'MyCarForum - (Forum Listing Page) - Desktop - ( SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010113',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var logoHeight = $("#logo_header").height();
		var menuHeight = $("#mcfmainmenu").height();
		var headHeight = logoHeight + menuHeight;

		if ($("#mcfmainmenu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#mcfmainmenu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}

		$("#footer_tools, #footer_description").css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});

	}
});

