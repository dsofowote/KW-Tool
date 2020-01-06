integration.meta = {
    'sectionID' : '129519',
    'siteName' : 'Svenska Dagbladet - Desktop - (SE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085428',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".CoreNavigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".CoreNavigation");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
                'plr_PageHeightAdjustment' : -100,
                'plr_ScrollAdjustment' : -48
			});
        }
        $(".Page").css({"overflow": "visible"});
        // $("header").css({"margin": "0 auto", "max-width": "1300px"});
    }
});
