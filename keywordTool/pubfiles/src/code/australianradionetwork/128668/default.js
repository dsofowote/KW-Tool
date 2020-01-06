integration.meta = {
	'sectionID' : '128668',
	'siteName' : '	Kiis Network - Tablet - (AU)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1029462',
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
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		}
		$(".po-audio-player__main-container").css({
		 "width" : "1140px",
		 "margin" : "auto",
		 "position" : "relative",
		 "margin-top" : "70px"
		});
		$(".po-audio-player__spacer--is-visible").css({
		 "height" : "0px"
		});
		$("#page").css({
			"background-image" : "none"
		});
		$("body").css({
		 "background" : "none"
		});
		$("#primary-nav").css({
		 "z-index" : "12"
		});
		$("#bg_ad").css({
		 "display" : "none"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append('<style>#page{width: 980px !important; margin: 0 !important;} #header-now-playing, .module-desktop-navigation{left: 0 !important;}</style>');
		}
	}
});

integration.on("adServed", function(e) {
    var headHeight = $("#primary-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
