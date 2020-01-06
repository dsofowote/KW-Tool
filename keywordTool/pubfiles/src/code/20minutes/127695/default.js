integration.meta = {
	'sectionID' : '127695',
	'siteName' : '20 Minutes - Desktop - (  FR )',
	'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '829559',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1196,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 48
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".header").height() + $(".subheader").height() + $(".highlights").height();
		$("footer").css({
			"max-width" : "1196px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("#page-content").css({
			"padding" : "0"
		});
		$("#backtotop").css({
			"right" : "0px"
		});
		if ($(".highlights").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".highlights");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	//Unloads PageSkin if browser width falls below 1456px
	$(window).on('resize', function() {
		var screenwidth = window.top.innerWidth;
		if (screenwidth <= 1456) {
			integration.base.unloadAd();
			$('#inskinanchor').remove();
			integration.telemetry.recordCustom('PageSkin unloaded');
		}
	});
});
