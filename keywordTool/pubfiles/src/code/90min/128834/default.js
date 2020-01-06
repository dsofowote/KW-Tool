integration.meta = {
	'sectionID' : '128834',
	'siteName' : 'FortniteIntel - Tablet- (UK) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1037183',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1021,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#td-outer-wrap{margin: 0 !important;}</style>");
		}
		$('#td-outer-wrap').css({
			"width" : "1021px",
			"margin" : "0 auto"
		});
		$('body .td-make-full').css({
			"padding-left" : "10px"
		});
		$("head").append("<style>._3zEEtS_0KXn3fBbZiqO5nS, .td-scroll-up{right: " + (integration.custom.FrameSideRight + 10) + "px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});
