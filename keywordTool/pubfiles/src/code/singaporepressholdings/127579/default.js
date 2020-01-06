integration.meta = {
    'sectionID' : '127579',
    'siteName' : 'Singapore Women\'s Weekly - (Unpub. until approv) - Desktop - ( Asia )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '752183',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$('.pre-footer, .footer-bg').css({'max-width':'1040px', 'margin':'0 auto'});
		var headHeight = $('header').height() + $('.masthead').height();
		var headHeight1 = $('.masthead').height();
		if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight1
            });
		}
    }
});
