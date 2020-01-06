integration.meta = {
    'sectionID': '127642',
    'siteName': 'Download.com - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1430]
};

integration.flaggedTests = [];

integration.params = {

    'mf_siteId': '771613',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true
};

integration.on("adCallResult", function (e) {
    if (e.data.hasSkin) {
        if ($("#page-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#page-header");
            integration.base.setCfg({
                "plr_AnchorParent": "#inskinanchor",
                "plr_PageHeightAdjustment": -60
            });
        }
        $("div.susy-container").css({
            "max-width": "950px",
            "margin": "0 auto",
            "padding-left": "5px",
            "padding-right": "5px"
        });
        $("#rb_skin").css({
            "overflow-x": "visible"
        });
        $("html").css({
            "overflow-x": "hidden"
        });
        $("#wrapper").css({
            "overflow": "initial"
        });
        $("#page-header").css({
            "z-index": "5000004"
        });
    }
});

integration.on('layoutChange', function (e) {
    var frtop = e.data.plr_FrameTop;
    $(".product-comparison-rail.nolinks.component").css({
        "margin-top": "-" + frtop + "px"
    });
    $("#product-v-ideocontainer.popOut").css({
        "margin": "auto"
    });
    var vidRight = ($(window).width() / 2) - ($("div.susy-container").width() / 2);
    $("head").append("<style id='inskinEventStyles2'>.popOut{right: " + vidRight + "px !important;}</style>");

    $(".ism-frame").parent().css({
        "z-index": "5000003"
    });
    $(window).resize(function () {
        var frside = e.data.plr_FrameSide;
        var hideWidth = 1470 + (frside * 2)
        if ($(window).width() < hideWidth) {
            $(".product-comparison-rail.nolinks.component").css({
                "left": "-300px"
            });
        } else {
            $(".product-comparison-rail.nolinks.component").css({
                "left": "0px"
            });
        }
        var vidRight = ($(window).width() / 2) - ($("div.susy-container").width() / 2);
        newValue = ".popOut{right: " + vidRight + "px !important;}";
        document.getElementById('inskinEventStyles2').innerHTML = newValue;
    });


    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $(document).scroll(function () {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function () {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if (docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel) - docheight;
        $("#product-video-container").css({
            "bottom": footermargin + "px"
        });
    } else {
        $("#product-video-container").css({
            "bottom": "0"
        });
    }
}