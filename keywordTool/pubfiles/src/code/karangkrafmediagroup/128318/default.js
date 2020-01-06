integration.meta = {
	'sectionID' : '128318',
	'siteName' : ' Keluarga - Desktop - (MY) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1002685',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1080,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : "48"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$('#td-outer-wrap').css({
			"width" : "1080px",
			"margin" : "0 auto",
			"overflow" : "visible"
		});
		$('div.f1').parent().css({
			"width" : "1080px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.td-front-end-display-block{right: " + (sideWidth - 20) + "px !important;}</style>");
		$("head").append("<style>.td-header-menu-wrap.td-affix{left: 0 !important;}</style>");
		$("head").append("<style>.td-header-style-5 .td-main-menu-logo a{margin-left: 10px !important;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
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
	var sideWidth = (width - 984) / 2;
	if (width < 1440 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		/* content width divided by 2 */
		$(".td-scroll-up").css({
			"right" : sideWidth - 45
		});
	} else {
		$(".td-scroll-up").css({
			"right" : "5px"
		});
	}
}