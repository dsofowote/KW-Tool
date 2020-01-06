integration.meta = {
	'sectionID' : '128504',
	'siteName' : 'SFR - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1018973',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1340,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

	}
});
integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>html, #lame1, .SFR_MainContent, footer, .SFR_TabInfosProduit.SFR_TabInfosProduit-presentation{margin: 0 !important;} header{margin-left: -20px !important; width: 103.6% !important;}</style>");
			$(".surface, .header, #lame1, .SFR_MainContent, footer, .SFR_TabInfosProduit.SFR_TabInfosProduit-presentation").css({
				"max-width" : "1340px"
			});
		}
		if ($("body > header").length == 1) {
			var headHeight = $("body > header").outerHeight();
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}
		$("#lame1, .SFR_MainContent, footer, .SFR_TabInfosProduit.SFR_TabInfosProduit-presentation").css({
			"max-width" : "1340px",
			"margin" : "auto"
		});
		setTimeout(function() {
			window.dispatchEvent(new Event('resize'));
		}, 300);
		$("#mobileListContainer, .SFR_Section_content.SFR_Section_content-infoUser").css({
			"padding" : "0"
		});

	}
}); 