integration.meta = {
    'sectionID' : '129621',
    'siteName' : 'Space Australia - Tablet - (ASIA)  ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086231',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.main-content').css({'max-width':'980px','margin':'0 auto','margin-top':'60px'});
        $('.featured-slider__cover-background, .featured-slider__cover-content').css({'position':'absolute'});
        if ($("#shopify-section-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#shopify-section-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.main-content').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('header').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});