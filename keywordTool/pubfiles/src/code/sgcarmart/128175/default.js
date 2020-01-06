integration.meta = {
	'sectionID' : '128175',
	'siteName' : 'SGCarMart - Desktop - ( SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '987052',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		var headerHeight = $("#headerblank1").height();
		if ($("#headerblank1").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#headerblank1");
			integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -headerHeight,
			plr_ScrollAdjustment : -headerHeight
			});
		}

		$("#sell_top_head").css({
			"max-width" : "970px"
		});
		$(".compare_tab").css({
			"left" : "150px"
		});
		$("#headerblank1").css({
			"width" : "100%"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on('layoutChange', function(e) {
	//integration.custom.FrameSide = e.data.plr_FrameSide;
	var wwidth = $(window).width();
	var shortlistLeft = ((wwidth - 970) / 2) + 5;
	$("#shortlist_history_toolbar").css({
		"margin-left" : shortlistLeft
	});
});
