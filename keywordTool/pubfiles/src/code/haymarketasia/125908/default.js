integration.meta = {
   'sectionID' : '125908',
   'siteName' : 'Stuff.tv Singapore - (Do Not Use) - Tablet - (INT exc. UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '713739',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#header{z-index: 100; position : relative !important;} #page{padding-top: 0px !important;}</style>");
    $("head").append("<style>#feedbackify #fbya #fbyb .fby-tab-r{right : 130px !important;}</style>");
		$("#header, #footer-wrapper, #sliding-popup").css({
			"max-width" : "1030px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"max-width" : "1030px"
			});
      $("head").append("<style>#feedbackify #fbya #fbyb .fby-tab-r{right : 300px !important;}</style>");
		}
	}
});

integration.on('layoutChange', function(e){
	$(".ism-frame").parent().css({
		"z-index" : "2147483647"
	});
});
