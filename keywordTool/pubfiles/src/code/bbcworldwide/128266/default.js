integration.meta = {
	'sectionID' : '128266',
	'siteName' : 'BBC.com - (HP, Sport) - Desktop - ( INT exc. UK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '994987',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1260,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''//,
	//'plr_ScaleElement' : '#sport-container'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}

		$("head").append("<style>#orb-banner, .nav-top, .ptz.ptz--default{max-width: 1260px; margin: auto;}</style>");
		$("head").append("<style>.tv-radio-recommendations-container, .radio-recommendations-container{max-width: 1260px;}</style>");
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().attr("aria-hidden", "true");
});