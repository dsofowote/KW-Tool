integration.meta = {
   'sectionID' : '127456',
   'siteName' : 'Pocket Lint - Tablet - (INT ex UK & US)',
   'platform' : 'tablet'
};

function setWindow() {
	return currentWindow.top;
}


integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '725469',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 986,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#container',
	'plr_PageHeightAdjustment' : -94
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/*$("body").css({
			"padding-top" : "0"
		});
		$("head").append("<style>nav.main{position: relative !important;}</style>");*/
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes 
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});*/
			$("#container").css({
				"margin-left" : "20px"
			});
		}
	}
});
integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"left" : "-8px"
	});

});