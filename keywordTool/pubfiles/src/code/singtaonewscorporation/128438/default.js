integration.meta = {
	'sectionID' : '128438',
	'siteName' : 'Sing Tao Daily - Desktop - ( HK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013415',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('body').css({
			"max-width" : "1230px",
			"margin" : "0 auto",
			"overflow-x" : "visible"
		});
		$("head").append("<style>.header.desktop-fixed .fixed-wrapper{left: 0 !important; right: 0 !important;} #wrapper{position: relative;}</style>");
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
	if (width < 1615 || integration.custom.isSuper) {
		var sideWidth = (width - 1194) / 2;
		$("#scrollUp").css({
			"right" : sideWidth
		});
	} else {
		$("#scrollUp").css({
			"right" : "15px"
		});
	}
}