integration.meta = {
	'sectionID' : '126544',
	'siteName' : 'Marie Claire (Competitions) - Tablet - (UK) ',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706898',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#header,#footer,#webHolder').css({
				'margin-left' : '0px'
			});
		} else {
			$('#header,#footer').css({
				'margin' : '0 auto'
			});
		}
		$('#header,#footer').css({
			'overflow' : 'hidden',
			'width' : '1030px',
		});
		$('#header > nav').css({
			'max-width' : '1030px'
		});
		$('.leaderboard-advert').css({
			'max-width' : '0px',
			'min-width' : '0px',
			'width' : '0px'
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
