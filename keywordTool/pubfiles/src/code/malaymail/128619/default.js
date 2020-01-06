integration.meta = {
	'sectionID' : '128619',
	'siteName' : 'Projekmm - (Creative Approval) - Desktop - ( MY SG )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026739',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('body').css({
			"width" : "1140px",
			"margin" : "0 auto"
		});
		$("head").append("<style>#navbar-sticky-wrapper #navbar , #sticky-wrapper .nv-header{width: 1140px !important;} #sticky-wrapper .nv-header > .container{margin: 0 !important;}</style>");
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
	if (width < 1520 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".story #at4-share, .story #at4-soc").css({
			"left" : sideWidth - 78
		});
	} else {
		$(".story #at4-share, .story #at4-soc").css({
			"left" : "0px"
		});
	}
}; 