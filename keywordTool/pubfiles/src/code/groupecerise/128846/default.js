integration.meta = {
	'sectionID' : '128846',
	'siteName' : 'Ohmymag - Tablet - (ES) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1037569',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.wrapper{margin-left: 0 !important;}</style>");
		}
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$(".invite-popin").css({
			"left" : integration.custom.FrameSide
		});
		var headHeight = $(".navbar").outerHeight();
		var leftMargin = ($(window).width() - 980) / 2;
		var breadcrumb = $(".breadcrumb").outerHeight();
		$("head").append("<style>.mdc-toolbar--fix {margin-top: 0 ;} .home-slide__bg{background-size: auto !important;}</style>");
		$(".wrapper").css({
			"width" : "980px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
		$(".wrapper").css({
			"margin-top" : "15px"
		});
		$(".breadcrumb").css({
			"margin-top" : breadcrumb
		});
		$(".button-share__button").css({
			"right" : integration.custom.FrameSide
		});
		$(".channel-bar").css({
			"max-width" : "980px",
			"margin" : "auto",
			"top" : headHeight
		});
		if ($(".navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navbar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
			});
		}
	}
});

integration.on("adServed", function(e) {
	var headHeight = $(".navbar").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight
	});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
