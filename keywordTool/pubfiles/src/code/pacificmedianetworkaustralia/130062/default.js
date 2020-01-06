integration.meta = {
    'sectionID' : '130062',
    'siteName' : 'Men\'s Health - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102186',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1245,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".Header").outerHeight();
        if ($(".Header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".Header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
			});
        }
        $(".PageWrap").css({"overflow-x": "visible"});
        $('head').append('<style type="text/css">.Ad-leaderboard-wrapper, .ScrollableCarousel {margin: 0 auto; max-width: 1242px}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#PageBody").css({"max-width": "1245px"});
            $(".Header").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
