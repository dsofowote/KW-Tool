integration.meta = {
	'sectionID' : '125597',
	'siteName' : 'LObs',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* International integration - No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707338',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 993,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_ScrollAdjustment' : 80
	
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".obs-header").css({
			"max-width" : "993px",
			"margin-left" : "-497px",
			"left" : "50%"
		});
		$(".obs-footer").css({
			"max-width" : "993px",
			"margin" : "0 auto"
		});
		$("#ObsMain").css({
			"padding-top" : "0px"
		});
		if ($("#ObsHeader").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#ObsHeader");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
}
	}
});

integration.on("adServed", function(e) {
	var headHeight = $("#ObsHeader").outerHeight();
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
	$("#inskinanchor").parent().css({
		"margin-top" : headHeight
	});
	
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".obs-header").css({
			"top" : newheight
		});
	} else {
		$(".obs-header").css({
			"margin-top" : "0px",
			"top" : "0px"
		});
	}
}
