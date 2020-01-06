integration.meta = {
    'sectionID' : '129105',
    'siteName' : '8world - (Desktop) - (SG)',
    'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055029',
    'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        $(".highlight-topics, .top-stories, .footer").css({
            width: "1170px",
            margin: "auto"
        });

        $(".highlight-topics .right-info").css({
            "max-width" : "960px"
        });

        $(".livebroadcast .right-info").css({
            "right" : "280px",
            "position" : "relative"
        });

        window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
    }
});
integration.on("adServed", function(e) {
    var headHeight = $("#header").height();
    $(".ism-frame").parent().css({
        top: headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    })
});
