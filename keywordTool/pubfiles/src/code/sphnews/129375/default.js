integration.meta = {
    'sectionID' : '129375',
    'siteName' : 'Business Insider MY - Desktop - (MY)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1494]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074669',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1234,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $('.td-header-wrap').height();
      $(".td-header-wrap, .td-header-menu-wrap-full").css({"max-width" : "1234px", "margin":"0 auto"});

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
      integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    if (width >1494 || integration.custom.isSuper) {
        var sideWidth = (width - 1234)/2;
        $("head").append("<style> .td-scroll-up{right: " + sideWidth + "px !important; bottom: " + integration.custom.PageSkinBottomPanel + "px !important}</style>");
    } else {
      $("head").append("<style> .td-scroll-up{right: " + sideWidth + "px !important; bottom: " + integration.custom.PageSkinBottomPanel + "px !important}</style>");
    }
}
