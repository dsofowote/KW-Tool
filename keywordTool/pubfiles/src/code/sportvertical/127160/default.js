integration.meta = {
	'sectionID' : '127160',
	'siteName' : 'Fussball Europa - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708030',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.isEdge = false;
		$("header, #at-share-dock").css({
			"margin" : "0 auto",
			"max-width" : "960px"
		});
		$("#at-share-dock").css({
			"position" : "fixed",
			"bottom" : "0"
		});
		$("head").append("<style>#sb-site{min-height:100% !important}</style>");
		$("#sb-site").css({
			"min-height" : "100%"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.custom.isEdge = true;
			$("#In").css({
				"max-width" : "960px"
			});
			$("#at-share-dock").css({
				"margin" : "0 15px 0"
			});
			$("head").append("<style>body{margin-left: 0px !important}</style>");
			$("body, header, #sbsite, #In .content").css({
				"margin-left" : "0px"
			});
			$(".content").css({
				"padding-left" : "15px"
			});
			$("header").css({
				"margin" : "0 0 0 25px",
				"max-width" : "930px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left',
			});
		}

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;

	if (integration.custom.isEdge) {
		$(".sb-menu").css({
			"margin-left" : "0px",
			"margin-top" : integration.custom.PageSkinTopPanel
		});
	} else {
		$(".sb-menu").css({
			"margin-left" : integration.custom.FrameSideRight,
			"margin-top" : integration.custom.PageSkinTopPanel
		});
	}

});

integration.on('adServed', function(e) {
	if (integration.custom.isEdge) {
		console.log('fired edge');
		$(".ism-frame").parent().css({
			"margin-left" : "15px"
		});
	}
	$(".ism-frame").parent().css({
		"z-index" : "5"
	});
});
