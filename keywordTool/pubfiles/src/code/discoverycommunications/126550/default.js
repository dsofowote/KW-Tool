integration.meta = {
	'sectionID' : '126550',
	'siteName' : 'Eurosport - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '707429',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1270,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		var navHeight = $('header').height() + $('nav').height();
		$("#content, #content-top").css({
			"max-width" : "1270px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.related-content-video__wrapper, .storyfull__wrapper{width: 1270px !important; padding: 0 15px !important;}</style>");
		if ($("#content-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content-top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : navHeight
			});
		}
		$("head").append("<style>.video_section_video_player_bis_v8_5{width: 100% !important; padding: 0 !important;}</style>");
		$("head").append("<style>.video-player-container .outbrain-container, .video-player__container{margin-left: 0 !important; margin-right: -90px;}</style>");
		$("head").append("<style>.storyfull__content-picture{margin-left: 0 !important;} .storyfull__container, .storyfull__container-content{padding-right: 0 !important;} </style>");
		$("head").append("<style>.storyfull__header-picture > div > img{top: calc(-88.75% + " + integration.custom.FrameTop + "px) !important; }</style>");
		$("head").append("<style>.storylist_related_bis_v8_5 .related-content-story--sponsored{padding: 0 15px !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1540 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#backtotop").css({
			"right" : sideWidth - 120
		});
	} else {
		$("#backtotop").css({
			"right" : "10px"
		});
	}
};