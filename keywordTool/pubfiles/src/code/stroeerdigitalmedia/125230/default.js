integration.meta = {
    'sectionID' : '125230',
    'siteName' : 'Freenet - Desktop - (AT CH DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707431',
    "plr_ContentType" : "PAGESKINEXPRESS",
    "plr_PageAlignment" : "custom",
    "plr_UseCreativeSettings" : true,
    "plr_ContentW" : 1280,
    "plr_UseFullVersion" : true,
    "plr_HideElementsByID" : "[id^=div-gpt-ad-],plista_widget_slide",
    "plr_HideElementsByClass" : "frn_adbox",
    'plr_GetContentHeightVersion' : 1,
    'plr_StartScrollOnAnchor' : true,
    'plr_ScrollAdjustment' : 35,
    'plr_BarneyThresholdClicks' : 4,
    'plr_BarneyThresholdRate' : 1,
    'plr_FramePositionCSS' : 'margin-left: 0; border-right: transparent solid 154px',
    "plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1280)/2 + 154;
        if ($("#frnRahmen").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#frnRahmen");
            integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor",
                "plr_PageHeightAdjustment" : -120
            });
        }
        integration._addPixel();
        $("#frnRahmenWrapper").css({
            "position" : "relative",
            "padding-top" : "115px",
            "margin-top" : "0px"
        });
        $("#frnBanner").css({
            "display" : "none"
        });
        $(".frn_startseite #frnGoToTop").css({
            "margin-right" : sideWidth
        });
    }
});
integration.on("layoutChange", function(e) {
    $(window).on("resize", function() {
        integration.custom.pageskinResize();
    });
    integration.custom.firstLoad = 0;
    integration.custom.pageskinResize();
    $(".frn_adbox_absolute").css({
        "margin-top" : "-100px"
    });
});
integration.custom.InSkinTabHide = function() {
    var windowWidth = $(window).width()
    var minWindowWidth = 1435;
    if (windowWidth < minWindowWidth) {
        $(".frn_feedback_btn").hide();
    } else {
        $(".frn_feedback_btn").show();
    }
}
integration.custom.pageskinResize = function() {
    var width = $(window).width();
    if (width < 1600) {
        integration.base.hideAd();
        $("#inskinanchor").hide();
        if (integration.custom.firstLoad === 0) {
            integration.telemetry.recordCustom("PageSkin unloaded");
        }
        integration.custom.firstLoad = 1;
    }
}
