integration.meta = {
    'sectionID': '124731',
    'siteName': 'Telerama - Desktop - (FR)',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707594',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        integration.custom.headHeight = $(".tr-header.header--bar.header--ac").outerHeight();
        if ($(".tr-header.header--bar.header--ac").length == 1) {
            $("body").prepend("<div id='inskinanchor'></div>");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
            });
        }

        $(".header--navbar, footer.footer").css({
            "max-width" : "1040px",
            "margin" : "0 auto"
        });
    }
});

integration.on('adServed', function (e) {
    $("#inskinanchor").css({
        "margin-top": integration.custom.headHeight
    });
});