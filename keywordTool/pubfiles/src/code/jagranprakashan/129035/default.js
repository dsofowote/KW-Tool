integration.meta = {
    'sectionID': '129035',
    'siteName': 'Jagran - Desktop - ( IN )',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1046075',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headerHeight = $("header").outerHeight();
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headerHeight
            });
        }
        $(".ls-area.body-fix, .bottomLinks.menuLinks").css({
            "max-width" : "1020px",
            "margin" : "0 auto"
        });
        $(".bottomLinks").css({
            "float" : "none"
        });
        $(".topads").css({
            "display" : "none"
        });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" class=\"teads\" src=\"//a.teads.tv/page/70739/tag\" async=\"true\"><\\script>";
};
