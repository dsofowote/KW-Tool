integration.meta = {
    'sectionID': '129812',
    'siteName': 'Townsville Bulletin - (Creative Approval) - Header Bidding - (AU)',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId': '1088724',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1020,
    'srv_SectionID': '129812',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin': false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1020,
                'plr_PageAlignment': 'center'
            });

            $(".reimagine-main").css({
                "max-width": "1020px",
                "margin": "0 auto"
            });

            $(".reimagine-main").css({
                "padding-top": "0"
            });

            $(".ad-hybrid-leader-billboard").hide();
            $("head").append("<style id='inskinStaticStyles'>.ad-hybrid.ad-block-728x90 ~ .tgc-headerv2, .ad-hybrid.ad-block-970x250 ~ .tgc-headerv2{top:0px !important;} </style>")

            var styles = "<style id='inskinStyles'></style>";
            $("head").append(styles);
            var headerFix = function () {
                integration.custom.frameTop = e.data.plr_FrameTop;
                var scrollPos = $(window).scrollTop();
                var headHeight = $(".tgc-headerv2").outerHeight();
                var nbarHeight = $(".tgc-headerv2-blackbar").outerHeight();
                var belowHeader = integration.custom.frameTop;
                if ($("body.home").length == 1) {
                    if (scrollPos <= belowHeader) {
                        $("#inskinStyles").html(".tgc-headerv2{position:relative !important;max-width:1020px;margin: 0 auto;}.ad-hybrid.ad-block{top:0px;z-index:1}");
                    } else {
                        $("#inskinStyles").html(".tgc-headerv2{left:0px;right:0px;top:0px !important;position:fixed !important;} .tgc-headerv2_header, .tgc-headerv2-blackbar{max-width:1020px;margin: 0 auto}.ad-hybrid.ad-block{top:0px;} [tgj-scroll-direction='down'] [tgj-scroll-trigger-state='hideHeaderFull'] ~ .tgc-headerv2 .tgc-headerv2_header {transform: translateY(-196px) !important;} [tgj-scroll-direction='up'] [tgj-scroll-trigger-state='showHeaderFull'] ~ .tgc-headerv2 .tgc-headerv2_header, [tgj-scroll-direction='down'] [tgj-scroll-trigger-state='hideHeaderHero'] ~ .tgc-headerv2 .tgc-headerv2_header {transform: translateY(-150px) !important;}");
                    }
                } else if ($("body.category").length == 1) {
                    if (scrollPos <= belowHeader) {
                        $("#inskinStyles").html(".tgc-headerv2_header{position:relative !important;max-width:1020px;margin: 0 auto !important;}.ad-hybrid.ad-block{top:0px;z-index:1} .tgc-headerv2-blackbar {position:relative !important;max-width:1020px;margin:0 auto;}");
                    } else {
                        $("#inskinStyles").html(".tgc-headerv2_header{left:0px;right:0px;top:0px !important;position:fixed !important;max-width:1020px;margin: 0 auto}  .tgc-headerv2-blackbar {top:0px;max-width:1020px !important;left: 0 !important;right: 0 !important;margin: 0 auto !important;} .ad-hybrid.ad-block{top:0px;} [tgj-scroll-direction='down'] [tgj-scroll-trigger-state='hideHeaderFull'] ~ .tgc-headerv2 .tgc-headerv2_header {transform: translateY(-196px) !important;} [tgj-scroll-direction='up'] [tgj-scroll-trigger-state='showHeaderFull'] ~ .tgc-headerv2 .tgc-headerv2_header, [tgj-scroll-direction='down'] [tgj-scroll-trigger-state='hideHeaderHero'] ~ .tgc-headerv2 .tgc-headerv2_header {transform: translateY(-150px) !important;}");
                    }
                } else if ($("body.home").length == 0 && $("body.category").length == 0) {
                    if (scrollPos <= belowHeader) {
                        $("#inskinStyles").html(".tgc-headerv2_header{top:0px !important;position:relative !important;max-width:1020px !important;margin: 0 auto !important;} .tgc-headerv2-blackbar {position:relative !important;max-width:1020px;margin:0 auto;}");
                    } else {
                        $("#inskinStyles").html(".tgc-headerv2_header{top:0px !important;position:fixed !important;margin:40px auto !important;max-width:1020px;left:0px;right:0px;} .tgc-headerv2-blackbar {top:0px;max-width:1020px !important;left: 0 !important;right: 0 !important;margin: 0 auto !important;} [tgj-scroll-direction='up'] [tgj-scroll-trigger-state='showHeaderFull'] ~ .tgc-headerv2 .tgc-headerv2_header, [tgj-scroll-direction='down'] [tgj-scroll-trigger-state='hideHeaderHero'] ~ .tgc-headerv2 .tgc-headerv2_header{transform: translateY(-150px) !important;}");
                    }
                }
            };
            headerFix();

            $(window).on('scroll', function () {
                headerFix();
            });

            integration.on('adServed', function () {
                $(".ism-anchor").css({
                    "z-index": "100000"
                });
                $(".tgc-headerv2-blackbar, .tgc-headerv2_header").css({
                    "z-index": "10000"
                });
            });

            // if ($("body.home").length == 1) {
            //     var navHeight = $(".tgc-headerv2").outerHeight();
            //     if (navHeight == 0){
            //         //force a value incase user scrolled down and nav is collapsed/height calculated incorrectly
            //         navHeight = 190
            //     }
            //     if ($(".tgc-headerv2").length == 1){
            //         $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
            //     integration.base.setCfg({
            //         plr_AnchorParent: "#inskinanchor",
            //         plr_PageHeightAdjustment: -navHeight
            //     });
            //     }


            //     $("#inskinanchor").css({
            //         "margin-top": navHeight
            //     });

            //     $(".tgc-headerv2").css({
            //         "margin-top": -navHeight
            //     });

            //     $(".ad-hybrid").css({
            //         "z-index": "1"
            //     });

            //     $(".reimagine-main").css({
            //         "padding-top": "0px"
            //     });
            // } else if ($("body.home").length == 0 || $("body.category").length == 1){
            //     console.log("test no home", integration.params.plr_PageType);
            //     if ($(".tgc-headerv2").length == 1){
            //         $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
            //     integration.base.setCfg({
            //         plr_AnchorParent: "#inskinanchor",
            //         plr_PageHeightAdjustment: -navHeight
            //     });
            //     }
            // }

        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1020,
                'plr_PageAlignment': 'center'
            });

            if ($(".tgc-headerv2").length == 1) {
                var navHeight = $(".tgc-headerv2").outerHeight();
                if (navHeight == 0) {
                    //force a value incase user scrolled down and nav is collapsed/height calculated incorrectly
                    navHeight = 190
                }
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -navHeight
                });

                $(".ad-hybrid, .tgc-footer-fixed ").css({
                    "z-index": "1"
                });

                $(".reimagine-main").css({
                    "padding-top": "0px"
                });
            }

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $(".reimagine-main").css({
                    "max-width": "1000px",
                    "margin-left": "0px"
                })
            }
        }

        smartphoneIntegration = function () {
            // $(".ad-block.ad-m-banner").append("<div id='ad-block-320x50-1'></div>");
            $(".ad-block.ad-m-banner").hide();
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Fluid': true,
                'plr_Responsive': true
            });

            if ($(".tgc-headerv2").length == 1) {
                var navHeight = $(".tgc-headerv2").outerHeight();
                if (navHeight == 0) {
                    //force a value incase user scrolled down and nav is collapsed/height calculated incorrectly
                    navHeight = 190
                }
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -navHeight
                });
            }

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:76px !important;}';
            stylesCSS += '.inskinLoaded .breakout-left{margin:0px !important;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);
            integration.on('adClose', function (e) {
                $('html').removeClass('inskinLoaded');
                $("#inskinanchor").remove();
            });
        }

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true,
            });
        }

        switch (e.data.device) {
            case 'Desktop':
                desktopIntegration();
                break;
            case 'Tablet':
                tabletIntegration();
                break;
            case 'Smartphone':
                smartphoneIntegration();
                break;
        }
    }
});