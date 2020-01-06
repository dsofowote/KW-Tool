integration.meta = {
	'sectionID' : '125900',
	'siteName' : 'hk.mensuno.asia',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#header.scroll_fixed{ max-width:1200px;margin-left:auto;margin-right:auto;left:0;right:0;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#page").css({
				"margin-left" : "0px"
			});
			$("head").append("<style>#header.scroll_fixed{ margin-left:20px;}</style>");

		}
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
})