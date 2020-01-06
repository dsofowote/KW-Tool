integration.meta = {
    'sectionID' : '130142',
    'siteName' : 'Money Smart - Desktop - (SG)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104778',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header-wrapper').height();
        if ($(".header-wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1430 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1170)/2; /* content width divided by 2 */
        // integration.custom.FrameTop = e.data.plr_FrameTop;
        $(".ism_wrap").css({
            "left" : sideWidth,
            "top": "40%"
        });
    } else {
        $(".ism_wrap").css({
            "left" : "10px",
            "top": "40%"
        });
    }
}
