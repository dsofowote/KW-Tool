integration.meta = {
	'sectionID' : '129006',
	'siteName' : 'Bride &amp;amp; Groom - Desktop - ( AU )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045581',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".header").outerHeight();
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_StartScrollOnAnchor' : true
			});
			$('.footer, .content__directory, .content__blog, .banner, .image-cover, .content__cate, .content__result, .content__gallery').css({
				"max-width" : "1180px",
				"margin" : "0 auto"
			});
		}
	}
});
