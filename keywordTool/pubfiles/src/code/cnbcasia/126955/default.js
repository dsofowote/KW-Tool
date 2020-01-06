integration.meta = {
   'sectionID' : '126955',
   'siteName' : 'CNBC - Tablet - (ASIA)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721516',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1010,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".GlobalNavigation-container").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".GlobalNavigation-container");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }
        $(".Footer-container, .PageBuilder-pageRow, .cnbc-body").css({ "max-width": "1000px", "margin": "0 auto" });
        $(".Footer-wrapper").css({ "max-width": "1000px", "margin": "0 auto", "overflow": "visible" });
        $(".TopBanner-container, #dart_wrapper_topbanner").css({"display": "none"});
        $("head").append("<style>body{margin-right: 0 !important;}</style>");
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            /* PageSkin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
            $(".cnbc-body").css({
                "margin-left": "0"
            });
            $("#cnbc-new-header, .cnbc-new-footer-res").css({
                "margin-left": "-20px"
            });
            $(".cnbc-new-footer-res").css({
                "width": "calc(100% + 20px)"
            });
            $(".dart_wrapper").css({
                "max-width": "980px"
            });
        }
    }
});

integration.on('layoutChange', function(e) {
    var headerHeight = $(".GlobalNavigation-container").outerHeight();
    if ($(".MarketsBanner-containerExpanded").length == 1) {
        $(".ism-anchor").css({ "top": headerHeight + "px" });
    } else if ($(".PageBuilder-pageRow").length > 0) {
        $(".ism-anchor").css({ "top": headerHeight + "px" });
    }
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headerHeight
    });
    integration.custom.BottomFrame = e.data.plr_FrameBottom;
    $("head").append("<style>.cnbc-new-footer-res{margin-top: " + integration.custom.BottomFrame + "px}</style>");
    integration.custom.AboveFooter();
    $(window).resize(function() {
        integration.custom.AboveFooter();
    });
});
