integration.meta = {
    'sectionID' : '130121',
    'siteName' : 'News18 - Desktop - ( IN US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1505]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104367',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1245,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    "plr_GetContentHeightVersion" : 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".top-nav, .secont-lnav, .sub-nav, nav, header, .video-tbox, footer, #infinite-scroll").css({
            "margin": "0 auto",
            "max-width": "1244px"
        });
        $(".fmid").css({"padding": "0px 10px"})
        $("head").append("<style>.adcls, .fixed-header {max-width: unset !important}</style>");
        $("head").append("<style>#infinite-scroll {left: unset !important}</style>");
        var navHeight = $('nav').outerHeight();
		integration.base.setCfg({
            plr_ScrollAdjustment : navHeight
		});
    }
});
