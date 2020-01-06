integration.meta = {
	'sectionID' : '125059',
	'siteName' : 'Westfaelische Nachrichen - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706744',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 800,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
			try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
		var headerHeight = $('.avNavigation').height();
		integration.base.setCfg({
				plr_PageHeightAdjustment : -headerHeight
			});
		$("head").append("<style>body{max-width: 800px;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#footer, #page").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
			});
			$(".footer-item").css({
				"max-width" : "1000px"
			});
		} else {
			$("#page, .footer-item").css({
				"max-width" : "1000px"
			});
			$("#footer").css({
				"max-width" : "1000px",
				"margin" : "0 auto"
			});
		}

	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('.avNavigation').height();

	$('.ism-frame').parent().css({
		"margin-top" : headerHeight
	});
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	}
});
