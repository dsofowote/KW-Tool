integration.meta = {
    'sectionID': '128860',
    'siteName': 'Dek D  - Smartphone - ( TH )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1037840',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on("adCallResult", function (e) {
    if (e.data.hasSkin) {
        var width = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = width - integration.custom.FrameSideRight;

        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += ".inskinLoaded #main-topnews-slide .topnew-bucket {width: " + (contentWidth - 20) + "px !important;}";
        stylesCSS += ".inskinLoaded #main-topnews-slide .main-showslide .slide-desc {width: " + (contentWidth - 10) + "px !important; box-sizing: border-box;}";
        stylesCSS += ".inskinLoaded .comment-post-wrapper.-sticky.-socialshare {width: " + contentWidth + "px !important;min-width: " + contentWidth + "px !important;}";
        stylesCSS += ".inskinLoaded #toolbar{position:fixed}";
        stylesCSS += "</style>";
        $("head").append(stylesCSS);

        if ($(".page.header-container.z-layer-8").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".page.header-container.z-layer-8");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true
            });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $(".comment-post-wrapper.-sticky.-socialshare").css({
            "bottom" : "100px"
        });
    }else{
        $(".comment-post-wrapper.-sticky.-socialshare").css({
            "bottom" : "0px"
        });
    }
};

integration.on("adServed", function (e) {
    var headHeight = $("#toolbar").outerHeight();
    $(".ism-frame").parent().css({
        "margin-top" : headHeight
    });
    integration.base.setCfg({
     plr_PageHeightAdjustment : -headHeight,
    });
});

integration.on("adClose", function (e) {
    $("body").removeClass("inskinLoaded");
    $('body').remove('#inskinanchor');
});
