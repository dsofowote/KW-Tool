integration.meta = {
	'sectionID' : '127169',
	'siteName' : ' Coconuts - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707956',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -102,
	'plr_ScrollAdjustment' : -102
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
							integration.base.setCfg({
									"plr_ScrollAdjustment": 0
							});
		}
		$("head").append("<style>#page {height:auto !important;}</style>");
		$("#footer, .ad-unit-top, main, main .container:first-of-type, .co-channel, .co-channel__container > .row, #branch-banner").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$(".co-channel__container").css({
			"margin-left" : "-10px"
		});
		$(".co-channel-travel__inner").css({
			"left" : "7px"
		});
		$(".co-channel-travel__inner .row").css({
			"left" : "5px",
			"width" : "970px",
			"margin" : "0px auto",
			"left" : "-20px",
			"position" : "relative",
		});
		$(".block-2.block-2--ad-unit .inner").css({
			"padding" : "0px"
		});
		$("head").append("<style>#rev_slider_2_1_wrapper, #rev_slider_2_1_forcefullwidth, #rev_slider_2_1, .tp-thumbs{max-width:1000px !important; margin:30px auto !important}</style>");
		$("head").append("<style>#rev_slider_2_1_wrapper{left:0px !important;} #sidebar-account{z-index: 99;}</style>");
		$("#header").css({
			"z-index" : "10"
		});
		$(".branch-banner-is-active").css({
			"margin-top" : "0px"
		});

		if ($("header.container-fluid").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.container-fluid");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on("adServed", function(e) {
			$("head").append("<style>#branch-banner-iframe, .branch-banner-desktop, #branch-banner{min-width:1000px !important; margin:0px auto !important}</style>");
});

integration.on("layoutChange", function(e) {
		integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
		integration.custom.InSkinTopNav();
		$( document ).scroll(function() {
				integration.custom.InSkinTopNav();
		});
});

integration.custom.InSkinTopNav = function() {
		var height = $(document).scrollTop();
		var headerHeight = $("#header").outerHeight();
		if( height < integration.custom.PageSkinTopPanel + headerHeight){
				var newheight = integration.custom.PageSkinTopPanel - height;
				$("#branch-banner-iframe").css({
					"display" : "none"
				});
		}else{
				$("#branch-banner-iframe").css({
						"display" : "block"
				});
		}
}
