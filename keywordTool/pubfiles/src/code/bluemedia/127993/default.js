integration.meta = {
	'sectionID' : '127993',
	'siteName' : 'Cultura Inquieta - Tablet - ( ES )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965311',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
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
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append('<style>#gkHeader, #gkPageContent, #gkBottom1, #gkBottom2, #gkBottom3, #gkBottom3>div, #gkFooter>div{margin: 0 20px !important;}</style>');
		}
		$('.megabanner').css({
			"margin" : "0 auto"
		});
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('.rstboxes .rstbox.rstbox_bottom-right').css({
		"right" : integration.custom.FrameSideRight,
		"bottom" : "10%"
	});
});
