integration.meta = {
	"sectionID" : "126895",
	"site" : "Ten Play - Desktop - (AU)",
	"product" : "PageSkin on desktop"
};
integration.testParams = {
	"desktop_resolution" : []
};
integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707177',
	"srv_Keywords" : "pspd_i",
	"plr_FastInit" : true,
	"plr_PageAlignment" : "center",
	"plr_ContentW" : 1260,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true,
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style type="text/css">.layout__bottom-four-ad {margin:0 auto !important;}</style>');
		if ($("#searchNav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#searchNav");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -60
			})
		}

		$("body > div.page-wrapper").css({
			"overflow" : "visible"
		});
		$("#wrapper > section.n03.navigation, .video-player-row.layout__video-player, .layout__bottom-four-ad, footer, .my-tv__svg-container, .show-navigation, .marquee-component--dark").css({
			"width" : "1260px",
			"margin" : "0 auto"
		});
		$("footer > div").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		})
	}
});

integration.on('layoutChange', function(e) {
	$('.toggle-mega-menu').toggle(function() {
		integration.base.setCfg({
			'plr_StartScrollOnAnchor' : false,
			'plr_ScrollAdjustment' : -467
		});
	}, function() {
		integration.base.setCfg({
			'plr_StartScrollOnAnchor' : true,
			'plr_ScrollAdjustment' : 0
		});
	});
	$('.top-nav__btn-search').toggle(function() {
		integration.base.setCfg({
			'plr_StartScrollOnAnchor' : false,
			'plr_ScrollAdjustment' : -153
		});
	}, function() {
		integration.base.setCfg({
			'plr_StartScrollOnAnchor' : true,
			'plr_ScrollAdjustment' : 0
		});
	});
});

