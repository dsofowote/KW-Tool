integration.meta = {
	'sectionID' : '128056',
	'siteName' : 'The Canary - Desktop - (UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '971880',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinPlusSuperwide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('#page-header, #header-navigation, #page-content, #page-footer').css({
			"width" : "1180px",
			"margin" : "0 auto"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1550 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("head").append('<style>.drip-header{top: ' + integration.custom.FrameTop + 'px !important; left: ' + (sideWidth - 76) + 'px !important; box-shadow: none !important;}</style>');
	}
}