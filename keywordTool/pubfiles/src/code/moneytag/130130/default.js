integration.meta = {
    'sectionID' : '130130',
    'siteName' : 'Sports.fr - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104548',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 998,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -130,
                plr_PageHeightAdjustment : -130
			});
        }
        $("#nav").css({"z-index": "6"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#content").css({"max-width": "998px", "margin-left": "0"});
            $("#nav, #top").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
