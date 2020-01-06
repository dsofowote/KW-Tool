integration.meta = {
    'sectionID' : '129839',
    'siteName' : 'Top Ten Reviews - Tablet - (SG)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089531',
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
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#main").css({"margin-left": "0"});
            $(".primary-nav").css({"margin-left": "-20px"});
            $("#document-footer").css({"margin-left": "0", "max-width": "970px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
