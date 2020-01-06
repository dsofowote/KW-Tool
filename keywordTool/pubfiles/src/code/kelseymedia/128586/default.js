integration.meta = {
	'sectionID' : '128586',
	'siteName' : 'Stuff.tv - Tablet - ( UK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1024434',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			$("#page").css({
				"max-width" : "1000px",
				"margin" : "0"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$("head").append("<style>#header.stickynav-active .red .container, #header.stickynav-active .over .container{margin:0px}</style>");
	}
});

integration.on('adServed', function(e) {
	//To overlap header
	$(".ism-frame").parent().css({
		"z-index" : "100000000"
	});
}); 