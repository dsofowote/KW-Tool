integration.meta = {
	'sectionID' : '127466',
	'siteName' : 'VR-Zone - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725755',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1090,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
    "plr_StartScrollOnAnchor" : true,
    "plr_ScrollAdjustment" : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#masthead");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -236
			});
		}
		var navheight = $(".menu-block ").outerHeight();
		console.log(navheight);
		console.log($("body > .menu-block").height());
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$("#masthead, .vmag-newsticker-wrapper.header-layout2").css({
				"margin-left" : "-20px"
			});
			$("#content, footer").css({
				"max-width" : "1090px"
			});
			$("head").append("<style>.is-sticky > #site-navigation {max-width: 1090px !important;left: 20px;}</style>");
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			integration.custom.isEdge = true;
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("#scroll-up").css({
        "right" : integration.custom.FrameSideRight + 15
    });
	if (integration.custom.isEdge) {
		$(".menu-block ").css({
			"margin-left" : 0 - integration.custom.FrameSide
		});
		$(".main-content-w").css({
			"margin-left" : "-35px"
		});
		$("head").append("<style>#dd_ajax_float{left: -235px !important;}</style>");
	} else {
		$(".main-content-w").css({
			"margin-left" : integration.custom.FrameSide - 35
		});
		$("head").append("<style>#dd_ajax_float{left: -55px !important;}</style>");
	}
	$("head").append("<style>.ismOnScreen{margin-right: " + (integration.custom.FrameSideRight + 5) + "px !important;}</style>");
	integration.custom.notification();
	$(window).on("scroll", function() {
		integration.custom.notification();
	});
});

integration.custom.notification = function() {
	setTimeout(function() {
		var onScreen = $("#upprev_box").css("right") == "5px";
		console.log("Right: " + onScreen);
		if (onScreen) {
			$("#upprev_box").addClass("ismOnScreen");
		} else {
			$("#upprev_box").removeClass("ismOnScreen");
		}
	}, 500);

}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000"
	});
});
