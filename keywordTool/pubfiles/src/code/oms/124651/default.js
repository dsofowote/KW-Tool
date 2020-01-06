integration.meta = {
    'sectionID' : '124651',
    'siteName' : 'Radio Salue - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707242',
    'plr_PageAlignment' : 'center',
    'plr_ContentW' : 1200,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    "plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".top-navigation").css({
            "width" : "1200px",
            "left" : "50%",
            "margin-left" : "-600px"
        });
        $(".row.banner").css({
            "display" : "none"
        });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $(document).scroll(function() {
        integration.custom.InSkinTopNav();
    });
    integration.custom.InSkinNavMargin();
    $(window).on('resize', function() {
        integration.custom.InSkinNavMargin();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if (height < integration.custom.PageSkinTopPanel) {
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".top-navigation.sticky.is-at-top.is-stuck.slide-in-down.mui-enter.mui-enter-active").css({
            "margin-top" : newheight
        });
    } else {
        $(".top-navigation.sticky.is-at-top.is-stuck.slide-in-down.mui-enter.mui-enter-active").css({
            "margin-top" : "0px"
        });
    }
}

integration.custom.InSkinNavMargin = function() {
    // Timeout necessary to work with resize on maximize 
    setTimeout(function() {
        var navMargin = "-" + ($(".top-navigation").width() / 2) + "px"
        $(".top-navigation").css({
            "margin-left" : navMargin
        });
    }, 500);
}
