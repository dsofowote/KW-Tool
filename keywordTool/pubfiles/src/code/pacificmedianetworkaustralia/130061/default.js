integration.meta = {
    'sectionID' : '130061',
    'siteName' : 'Men\'s Health - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1505]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102185',
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
    }
});
