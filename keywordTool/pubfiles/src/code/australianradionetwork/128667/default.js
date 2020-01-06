integration.meta = {
    'sectionID' : '128667',
    'siteName' : 'iHeart Radio- Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029461',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append('<style>#page{margin: 0 !important;}</style>');
        }
        $("head").append('<style>#page{width: 980px !important; background-image: none !important; margin: 0 auto;}</style>');
		$("head").append('<style>.module-desktop-navigation{left: 0px !important;}</style>');
		$("head").append('<style>.header-leaderboard-wrapper{margin: 10px 0;}</style>');
		$("head").append('<style>.page-content{margin-top: 0px !important;}</style>');
    }
});

integration.on('layoutChange', function(e) {
	var HeaderHeight = $(".module-desktop-navigation").height();
	$(".ism-frame").parent().addClass("inskinanchor");
	$("head").append('<style>.inskinanchor{margin-top: ' + HeaderHeight + 'px !important}</style>');
}); 