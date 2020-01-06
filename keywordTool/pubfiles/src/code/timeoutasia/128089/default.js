integration.meta = {
	'sectionID' : '128089',
	'siteName' : 'Timeout Singapore - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '975154',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'ad, ad-header',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.xs-mr5 { margin: 0 2.75rem 0 0 !important;}</style>");
		$(".br-row").css({"padding": "0 0.5rem"});
		$("#main-container, #content").css({
			width : "1150px",
			margin : "0 auto"
		});
		$("head").append("<style>.sticky-lg, .js-header-ad-wrapper > .sticky{left: 0 !important; right: 0 !important}</style>");
		$("head").append("<style>.js-header-ad-wrapper > .sticky, div.container{width: 1150px !important; margin: 0 auto !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var headerHeight = $("div.navigation-wrapper").height();
	if ($("div.navigation-wrapper").hasClass("sticky-lg")) {
		integration.base.setCfg({
			plr_ScrollAdjustment : headerHeight
		});
	} else {
		integration.base.setCfg({
			plr_ScrollAdjustment : 0
		});
	}
};

