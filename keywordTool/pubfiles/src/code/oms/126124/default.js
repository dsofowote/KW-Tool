integration.meta = {
	'sectionID' : '126124',
	'siteName' : 'Lampertheimer Zeitung Tablet',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706864',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit": true

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#skyscraper, #supersize").hide();
		$("head").append("<style>#page {padding: 0 !important; max-width: 1024px;}</style>");
		$("#service, #footer").css({
			"max-width" : "1024px",
			"margin" : "0 auto"
		});
		$("#service > .wrapper").css({
			"padding-right" : "20px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page, #service, #footer").css({
				"margin-left" : "0"
			})
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
