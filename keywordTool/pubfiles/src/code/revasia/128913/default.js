integration.meta = {
	'sectionID' : '128913',
	'siteName' : 'SirapLimau - (Creative Approval ) -  - ( MY )',
	'platform' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1041634',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50,
	'plr_ScrollAdjustment' : 50,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#main-nav-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#main-nav-wrap");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$(".fly-to-top").css({
			"right" : integration.custom.FrameSideRight + 10,
			"bottom" : "40px"
		});
		$('#inskinanchor').css({
			"margin-top" : "50px",
			"position" : "relative"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#site, #body-main-wrap{margin: 0 !important;} .at-share-dock.atss{margin-left: 20px !important;}</style>");
		}
		$(".ism-frame").parent().addClass("inskinanchor");
		$("#site-wrap").addClass("clearfix");
		$("#site").addClass("clearfix");
		$("head").append("<style>#site, #site-wrap{overflow: visible !important; float: none !important;}</style>");
		$("head").append("<style>#site, #body-main-wrap{width: 970px !important; margin: 0 auto;}</style>");
		$("head").append("<style>.clearfix{overflow: auto;} .clearfix::after{content:''; clear: both; display: table;}</style>");
		$("head").append("<style>#foot-bot-wrap, #foot-top-wrap{width: 99% !important; padding: 0 1%;} .fly-to-top{z-index: 999 !important;}</style>");
		$("head").append("<style>.ismClicked{visibility: hidden !important;} .at-share-dock.atss{width: 970px !important; margin: 0 auto;}</style>");
		$("head").append("<style>#main-nav-wrap{position: fixed !important; left: 0; right: 0; top: 0 !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	$(".fly-but-wrap").click(function() {
		if ($(this).hasClass("fly-open")) {
			$(".ism-frame").parent().addClass("ismClicked");
		} else {
			$(".ism-frame").parent().removeClass("ismClicked");
		}
	});
});
