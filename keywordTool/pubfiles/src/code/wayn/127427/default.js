integration.meta = {
	'sectionID' : '127427',
	'siteName' : 'WAYN - Tablet - (US)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '719816',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1380,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -49
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footerContent").css({
			"max-width" : "1380px",
			"margin" : "0 auto"
		});

		$("#content").css({
			"max-width" : "1380px",
			"margin" : "0 auto"
		});
		if ($("#TopMenu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#TopMenu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$("#content").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	var headHeight = $('#TopMenu').outerHeight();
	console.log(headHeight);
	$("#inskinanchor").css({
		"margin-top" : headHeight
	});
}); 