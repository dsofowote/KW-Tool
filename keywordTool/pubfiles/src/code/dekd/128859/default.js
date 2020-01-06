integration.meta = {
    'sectionID' : '128859',
    'siteName' : 'Dek D  - Desktop - ( TH )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1037839',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        var headerHeight = $("#theme-wrapper").height();
        $("#toolbar").css({
            "background-color": "transparent"
        });
        $(".toolbar").css({
            "position": "fixed",
            "top" : "0"
        });
        $("head").append("<style>.comment-post-wrapper.-sticky{width: 1030px !important; z-index: 4;}</style>");
        if ($("#theme-wrapper").length > 0) {
          $(".toolbar").css({
              "top" : headerHeight
          });
        }

    }
});
integration.on("adServed", function(e) {
    var headHeight = $(".toolbar").outerHeight() + $("#theme-wrapper").outerHeight();
    $(".ism-frame").parent().css({
        top: headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    })
});
