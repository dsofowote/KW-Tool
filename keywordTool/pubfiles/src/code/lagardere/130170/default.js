integration.meta = {
    'sectionID' : '130170',
    'siteName' : 'Parismatch - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1105200',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -80,
                plr_PageHeightAdjustment : -150
			});
        }
        $("#header").css({"margin-bottom": "0px"});
        $(".sitefre").css({"display": "none"});
        $("#footer").css({"margin": "0 auto", "max-width": "1000px"});
        $("#social_sidebar").css({"top": "485px", "margin-left": "-20px"});
    }
});