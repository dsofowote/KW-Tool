integration.meta = {
    'sectionID' : '129252',
    'siteName' : 'BusinessFocus - (Creative Appr.) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1068793',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var headHeight = $('#header').height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        stylesCSS += '.inskinLoaded .back-top{right: ' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.FrameBottom + 'px !important;}';
        stylesCSS += '.inskinLoaded #header {max-width: calc(100% - 74px)}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        // if ($("#header").length == 1) {
        //     $("<div id='inskinanchor'></div>").insertAfter("#header");
        //     integration.base.setCfg({
        //         plr_AnchorParent : "#inskinanchor",
        //         plr_PageHeightAdjustment : -headHeight
        //     });
        // };
        window.unloadPageskin = function () {
          try {
            integration.destroy();
          } catch (e) {}
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

// integration.on("adServed", function(e) {
//     var headHeight = $('#header').height();
//         $(".ism-frame").parent().css({"top" : headHeight});
// });

integration.on("layoutChange", function(e) {
    $('head').append('<style type="text/css">.topZero {top : 0px !important;}</style>');
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    $("#header").css({ "top": integration.custom.PageSkinTopPanel + "px" });
    $(".ism-anchor").css({"z-index": "99"})
    $('.ism-close').on('click', function() {
        $(".inskinLoaded #header").css({
            "top": "0"
        });
        $(document).off('scroll');
    });
    $('.top-header__hamburger').on('click', function() {
        $(".inskinLoaded #header").toggleClass("topZero")
    });
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function() {
    var scrolltop = $(document).scrollTop();
    var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
    if (headerTop > 0) {
        $(".inskinLoaded #header").css({
            "top": headerTop + "px"
        });
    } else {
        $(".inskinLoaded header").css({
            "top": "0"
        });
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('inskinanchor');
});
