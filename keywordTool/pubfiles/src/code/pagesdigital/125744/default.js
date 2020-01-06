integration.meta = {
	'sectionID' : '125744',
	'siteName' : 'PagesDigital',
	
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".container").css({
				"margin-left" : "0"
			});
			$("body").css({
				"width" : "auto"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.frameTop = e.data.plr_FrameTop;
	var topHeight = $(".navbgd-block").height();
	var headerHeight = $("body > .container").height();
	$(".menu").css({
		"top" : integration.custom.frameTop + topHeight + headerHeight
	});
});