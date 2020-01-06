integration.meta = {
    'sectionID' : '129838',
    'siteName' : 'Top Ten Reviews - Desktop - (SG)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089530',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headerHeight = $(".primary-nav").outerHeight();
        if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight,
                plr_ScrollAdjustment : -headerHeight
			});
        }
        $("#document-footer").css({"margin": "0 auto", "max-width": "970px"});
    }
});
