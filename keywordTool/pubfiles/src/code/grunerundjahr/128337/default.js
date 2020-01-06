integration.meta = {
	'sectionID' : '128337',
	'siteName' : 'Jolie - Tablet - ( AT CH DE )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1004568',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("header").height();
		$("<div id='inskinanchor'></div>").insertAfter("#header");
		integration.base.setCfg({
			"plr_AnchorParent" : "#inskinanchor",
			"plr_StartScrollOnAnchor" : true,
			"plr_PageHeightAdjustment" : -headHeight - 20
		});

		$(".page").css({
			"overflow" : "visible"
		});
		$("#wrap").css({
			"left" : "0px"
		});
		$(".container").css({
			"padding" : "0 1.5rem"
		});
		$("footer").css({
			"margin" : "0 auto",
			"padding" : "20px 0px"
		});
		$(".main-footer").css({
			"max-width" : "1280px",
			"margin" : "0 auto"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.wrap{-webkit-box-pack: left; -ms-flex-pack: left; justify-content: left;}</style>");
		}
	}
});

integration.on("layoutChange", function(e) {
	var PageSkinLeftPanel = e.data.plr_FrameSide;
	$("head").append("<style>.cc_banner{left: " + PageSkinLeftPanel + "px !important; max-width: 1280px !important;}</style>");
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
