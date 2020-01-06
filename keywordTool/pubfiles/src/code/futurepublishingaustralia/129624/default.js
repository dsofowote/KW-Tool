integration.meta = {
    'sectionID' : '129624',
    'siteName' : 'Space Australia - Desktop - (SG) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086234',
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

    }
});

integration.on("adServed", function(e) {
	var headHeight = $('header').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});