integration.meta = {
	'sectionID' : '128229',
	'siteName' : ' Time Out Spain - Desktop - (ES) ',
	'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '993078',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#main-container, #content").css({
			width : "1150px",
			margin : "0 auto"
		});
		$("head").append("<style>.sticky-lg, .js-header-ad-wrapper > .sticky{left: 0 !important; right: 0 !important;}</style>");
		$("head").append("<style>.js-header-ad-wrapper > .sticky, div.container{width: 1150px !important; margin: 0 auto !important;}</style>")
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav()
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
