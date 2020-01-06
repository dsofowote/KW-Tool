integration.meta = {
	'sectionID' : '127141',
	'siteName' : 'SABQ - Desktop - ( MENA )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707423',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>html{overflow-x: visible;} .container{width: 1130px !important; margin: 0 auto;} .sp-image-container .sp-image{max-width: 100% !important;}</style>");
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		$('.sp-image').css({
			"max-width" : "100%"
		});
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
}); 