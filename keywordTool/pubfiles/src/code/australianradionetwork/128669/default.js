integration.meta = {
    'sectionID' : '128669',
    'siteName' : 'Pure Gold Classic Hits Network - Tablet- (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029463',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#global-footer").css({"margin": "0 auto", "max-width": "1140px"})
        if ($("#main-body-container").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-body-container");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -140
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $('head').append('<style type="text/css">.inner-content-container {margin-left : 0px !important;}</style>');
            $('head').append('<style type="text/css">#main-content-body {margin-left : 0px !important;}</style>');
            $("#global-footer").css({"margin-left": "0px"})
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
        window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
    }
});

integration.on('adServed', function(e) {
    $("#main-body-container").css({"padding-top": "0px"});
    $("#inskinanchor").css({"margin-top": "140px"});
});