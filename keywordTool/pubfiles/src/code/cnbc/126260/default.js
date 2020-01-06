integration.meta = {
    'sectionID': '126260',
    'siteName': 'CNBC - Tablet (UK)',
    'platform': 'tablet',
    'restrictions': ''
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {


    'mf_siteId': '707128',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1010,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }
        $(".Footer-container, .PageBuilder-pageRow").css({ "max-width": "1000px", "margin": "0 auto" });
        $(".Footer-wrapper").css({ "max-width": "1000px", "margin": "0 auto", "overflow": "visible" });
        $(".TopBanner-container, #dart_wrapper_topbanner").css({"display": "none"});
        $("head").append("<style>body{margin-right: 0 !important;}</style>");
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            /* PageSkin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
            integration.custom.SideFrame = e.data.plr_FrameSideRight;
            $('header').css({'left':'0px'});
            $('#MainContent, .Footer-container').css({'left': -(integration.custom.SideFrame)/2});

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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/259619298/newpassback728X90',\n[[728,90]])           \n.setClickUrl('%%CLICK_URL_UNESC%%')   \n.display();\n<\\script>";
};