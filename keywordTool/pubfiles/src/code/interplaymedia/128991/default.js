integration.meta = {
	'sectionID' : '128991',
	'siteName' : 'Show &amp;amp; Tell - Tablet - ( AU )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1044417',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navHeight = $(".header-top").outerHeight();
		var headerHeight = $(".header-fixed").outerHeight();
		if ($(".header-fixed").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".header-fixed");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : headerHeight,
				plr_PageHeightAdjustment : -navHeight
			});
		}
		$('.navbar').css({
			"margin-bottom" : 0
		});
		$('.section, .container, .footer').css({
			"width" : "1024px",
			"margin" : "0 auto"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body > .container, .section, .section > .container, .section > .footer, .footer').css({
				"margin" : "0"
			});
			$("head").append("<style>.header-top{margin-left: -20px;}</style>");
		}
	}
});
