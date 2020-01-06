integration.meta = {
    'sectionID' : '129039',
    'siteName' : 'Gentside - Tablet - (UK)  ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1046169',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.wrapper, .footer, .article-container{width: 980px !important; margin: 0 !important; padding: 0 !important;}</style>");
		}
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$(".invite-popin").css({
			"left" : integration.custom.FrameSide
		});
		$(".button-share__button").css({
			"right" : integration.custom.FrameSideRight
		});
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -64
			});
		}
		$("head").append("<style>.mdc-toolbar--fix{margin-top: 0 !important;}</style>");
		$('.wrapper, .footer, .article-container').css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$('#inskinanchor').css({
			"position" : "relative",
			"margin-top" : 64
		});
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
