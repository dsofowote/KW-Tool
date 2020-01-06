integration.meta = {
	'sectionID' : '127586',
	'siteName' : 'Entrepreneur - Tablet - (INT ex US)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '757966',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1206,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#h3, #navheader").css({
			"max-width" : "1206px",
			"margin" : "0 auto"
		});
		$("#page-scroller, #cookiepolicy").css({
			"width" : "1206px",
			"margin" : "0 auto"
		});
		$("#cookiepolicy").css({
			"width" : "1206px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".page-holder").css({
			"padding-top" : "0"
		});
		$("#navheader").css({
			"position" : "relative"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#h3").css({
				"margin-left" : "0"
			});
			$("#container, .page-footer, #navheader, #page-scroller").css({
				"max-width" : "1206px",
				"padding-bottom" : "0"
			});
			$("body").css({
				"width" : "auto"
			});
			integration.custom.isEdge = true;
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	if (!integration.custom.isEdge) {
		$(".topblock").css({
			"padding-left" : integration.custom.FrameSide,
			"padding-right" : integration.custom.FrameSideRight
		});
	} else {
		$(".topblock").css({
			"padding-right" : integration.custom.FrameSideRight
		});
	}
	$("head").append("<style>#nav-flyout.sfo{left:" + integration.custom.FrameSide + "px;}</style>");
	$("head").append("<style>#navheader.sfo, #page-scroller.sfo {left:calc(" + integration.custom.FrameSide + "px + 151px);}</style>");
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000000"
	});
});
