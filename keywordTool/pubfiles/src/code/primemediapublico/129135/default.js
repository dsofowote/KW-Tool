integration.meta = {
    'sectionID' : '129135',
    'siteName' : 'Publico - Desktop - (PT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1420]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058030',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        var headerHeight = $(".masthead__menu").outerHeight();
        var headHeight = $(".masthead__wrapper").height() + $(".masthead__menus").height() + $(".masthead__menu").height() + headerHeight;
        var scrollHeight = $(".masthead__wrapper").height();
        $("#main, #colophon").css({
            "max-width": "1160px",
            "margin": "0 auto"
        });
        $("#main").css({
            "padding-top": "30px"
        });
        $("#masthead").css({
            "margin-bottom": "0px"
        });
        $(".content").css({
            "overflow": "visible"
        });
        if ($("#masthead").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#masthead");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight
            })
        }
    }
});
