integration.meta = {
    'sectionID' : '129565',
    'siteName' : 'ESPN Cricinfo - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085467',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#pane-main{width: 1300px !important; margin: 0;}</style>");
		}
		var navHeight = $("#global-scoreboard").height() + $("#global-nav").height();
		var subHeadHeight = $(".subnav-wrap").outerHeight();
		var headHeight = navHeight + subHeadHeight;
		if ($(".subnav-wrap").length > 0) {
			$("<div id='inskinanchor'></div>").insertAfter(".subnav-wrap");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}

		if ($(".subnav-wrap").length == 0) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});

			$("#inskinanchor").css({
				"top" : headHeight,
				"position" : "relative"
			});
		}

		$("head").append("<style> #header-wrapper{z-index:10000001 !important;}</style>");
		$("head").append("<style> #global-nav, #global-nav-secondary, #global-nav-tertiary{box-shadow:none !important;} </style>");
    window.unloadPageskin = function() {
      try {
        integration.destroy();
      } catch (e) {
      }
    };
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
		$("#news-feed.js-fixed .sidebar").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#news-feed.js-fixed .sidebar").css({
			"margin-bottom" : "0"
		});
	}
};
