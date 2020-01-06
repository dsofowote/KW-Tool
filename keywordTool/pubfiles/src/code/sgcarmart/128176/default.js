integration.meta = {
	'sectionID' : '128176',
	'siteName' : 'SGCarMart - Tablet - (SG)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '987053',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 7
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#headerblank1").css({
			"height" : "initial"
		});
		$("#topheader").css({
			"width" : "initial"
		});
		$("#topheader ul#menu").css({
			"margin" : "0"
		});
		var headerHeight = $("#headerblank1").height() + 7;
		if ($("#headerblank1").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#headerblank1");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_ScrollAdjustment : -headerHeight
			});
		}

		$(".compare_tab").css({
			"left" : "150px"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#contentblank, #footerblank").css({
				"margin-left" : "10px"
			});
			$("head").append("<style>#header{width: 980px;}</style>");
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

integration.on('layoutChange', function(e) {
	//integration.custom.FrameSide = e.data.plr_FrameSide;
	var wwidth = $(window).width();
	var shortlistLeft = ((wwidth - 980) / 2) + 5;
	$("#shortlist_history_toolbar").css({
		"margin-left" : shortlistLeft
	});
	
	var headerItems = $("#topheader ul#menu li a");
	var headerItems2 = $.makeArray(headerItems);
	headerItems2.shift(); 
	var headerItemWidth = ($(window).width() - 48) / 8;
	$(headerItems2).css({
		"width" : headerItemWidth,
		"height" : "auto"
	});
});
