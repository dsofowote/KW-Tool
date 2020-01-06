integration.meta = {
    'sectionID': '128940',
    'siteName': 'Deine Tierwelt - Desktop - ( DE )',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043078',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headHeight = $(".jeg_header_wrapper").outerHeight();

        if ($(".jeg_header_wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".jeg_header_wrapper");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight
            });
        }

        $("#dhd, .footer-holder").css({
            "max-width": "1200px",
            "margin": "0 auto"
        })
    }
});