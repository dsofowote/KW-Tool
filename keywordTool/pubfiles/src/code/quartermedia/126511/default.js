integration.meta = {
	'sectionID' : '126511',
	'siteName' : 'Golfpost - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706879',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -210
			});
		}
		$("head").append("<style>.skyscraper.visible-lg{display: none !important;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.cc_container{max-width: 1100px;}</style>");
			$("#content").css({
				"max-width" : "1100px",
				"margin-left" : "0"
			});
			$("#top-bar, #header").css({
				"margin-left" : "-20px"
			});
		} else {
			$("head").append("<style>.cc_container{max-width: 1100px; margin: 0 auto;}</style>");
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("#gotoTop").css({
		"right" : integration.custom.FrameSideRight + 15
	});
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var scrollTop = $(document).scrollTop();
	if (docHeight - integration.custom.PageSkinBottomPanel < winHeight + scrollTop) {
		var footerMargin = (winHeight + scrollTop + integration.custom.PageSkinBottomPanel ) - docHeight;
		$("#gotoTop").css({
			"bottom" : footerMargin + 10
		});
	} else {
		$("#gotoTop").css({
			"bottom" : "10px"
		});
	}
};
