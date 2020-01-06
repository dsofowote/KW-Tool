integration.meta = {
	'sectionID' : '128507',
	'siteName' : 'i24 News - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1019258',
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		//$("<div id='inskinanchor'></div>").prependTo("body");

		integration._addPixel();
		$("#ismIMG").css({
			"height" : "0"
		});

		var headHeight = $("header").height();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		/*
		 integration.custom.FrameSide = e.data.plr_FrameSide;
		 $("header").css({
		 "margin-left" : -integration.custom.FrameSide
		 });
		 */

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});

		}

	}
});

integration.on('layoutChange', function(e) {
	//var cwidth = $(".main_wrapper").width();
	integration.custom.FrameSide = e.data.plr_FrameSide;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var cwidth = $(window).width() - (integration.custom.FrameSide + integration.custom.FrameSideRight);
	$("footer").css({
		"max-width" : cwidth,
		"margin-left" : integration.custom.FrameSide
	});
});
