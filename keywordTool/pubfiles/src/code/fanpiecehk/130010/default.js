integration.meta = {
    'sectionID' : '130010',
    'siteName' : 'Fanpiece - Tablet - (HK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100320',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1045,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#navigation-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#navigation-wrapper");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : 52
			});
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("body").css({"max-width": "1045px"});
            $("#navigation-wrapper").css({"width": "1365px", "margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
