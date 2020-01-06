integration.meta = {
    'sectionID': '128921',
    'siteName': ' Liberation - (next.liberation) - Desktop - (FR)   ',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1042340',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("#main-content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-content");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }

        $(".pub-container").css({
            "height" : "0px",
            "margin" : "0px"
        });
    }
});