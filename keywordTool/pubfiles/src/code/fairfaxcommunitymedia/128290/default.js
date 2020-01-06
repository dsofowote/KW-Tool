integration.meta = {
	'sectionID' : '128290',
	'siteName' : 'Fairfax Community Media Titles - (Template 1) - Tablet- (AU)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1000351',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("#ismIMG").css({
			"height" : "0px"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		if ($(".zone.zone-navigation.zone-editable.zone-danger").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".zone.zone-navigation.zone-editable.zone-danger");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0,
				plr_ScrollAdjustment : -40
			});
		}
		$("#nav--secondary__wrap").css({
			"margin-bottom" : "0"
		});
		$("#main, .footer").css({
			"max-width" : "960px",
			"margin" : "auto"
		});
	}
});
