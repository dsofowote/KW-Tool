integration.meta = {
    'sectionID': '129143',
    'siteName': 'Free Ads - All Devices - (UK)',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1058437',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1050,
    'srv_SectionID': '129143',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1050,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': ''
            });

            var headHeight = $('#header').height();
            $("head").append('<style>#_main_container .main_section > div.fa_700{display: none !important;}</style>');
            $("footer > div > .container").css({
                "max-width": "1030px"
            });
            $("footer").css({
                "max-width": "1050px",
                "margin": "auto"
            });
            if ($("#header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -headHeight,
                    plr_ScrollAdjustment: -headHeight,
                });
            };

            integration.on('layoutChange', function (e) {
                integration.custom.FrameTop = e.data.plr_FrameTop;
                integration.custom.FrameBottom = e.data.plr_FrameBottom;
                integration.custom.ismResize();
                $(window).on("resize", function () {
                    integration.custom.ismResize();
                });
            });

            integration.custom.ismResize = function () {
                var width = $(window).width();
                if ($(window).width() < 1000) {
                    $(".footer .col_fix, .footer .col_last").css({
                        "max-width": "inherit",
                        "margin-right": "inherit"
                    });

                    $(".footer .col_fix.socials").css({
                        "max-width": "inherit"
                    });

                    $(".footer .col_left").css({
                        "max-width": "inherit"
                    });

                    $(".footer .col_right").css({
                        "max-width": "inherit"
                    });
                } else {
                    $(".nav_main .nav li a").css({
                        "padding": "0px 28px"
                    });

                    $(".footer .col_fix, .footer .col_last").css({
                        "max-width": "180px",
                        "margin-right": "20px"
                    });

                    $(".footer .col_fix.socials").css({
                        "max-width": "302px"
                    });

                    $(".footer .col_left").css({
                        "max-width": "39%"
                    });

                    $(".footer .col_right").css({
                        "max-width": "61%"
                    });
                }
            };
            /* Passback Tag */
            window.ISMPassback = function () {
                return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/306025875/Inskin_Desktop_Passback', [970, 250]).setTargeting('desktopskin', ['true']).display();\n<\\script>";
            };
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_PageAlignment': 'center',
                'plr_Responsive': true,
                'plr_Fluid': true,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': ''
            });

            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* Pageskin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left',
                    "plr_PageHeightAdjustment": -20
                });
                $("head").append("<style>body{margin-left: 0px !important;}</style>");
            }

            $(".post_fa.pull-right").css({
                "margin-right": "10px"
            });
            $("#_main_container *").not(".slick-track").css({
                "max-width": "100%"
            });

            integration.on('layoutChange', function (e) {
                integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
                integration.custom.FrameSide = e.data.plr_FrameSide;
                var cwidth = $(window).width() - (integration.custom.FrameSide + integration.custom.FrameSideRight);

                $("head").append("<style>#_main_container{max-width: " + cwidth + "px; margin: auto;}</style>");

                $("head").append("<style>.container > .navbar-header{margin-left: 0 !important;}</style>");
                $("head").append("<style>.nav_main .nav li a{padding: 0 32px;}</style>");
                $("head").append("<style>.footer_inner .container{max-width: 95% !important; margin: auto;}</style>");

                $("head").append("<style>.footer .col_fix{margin-right: 0; width: 210px;}</style>");
                $("head").append("<style>.footer .col_last{width: 145px;}</style>");
                $("head").append("<style>.footer .col_left{width: 37%;}</style>");
                $("head").append("<style>.footer .col_fix.socials{width: 310px; margin-left: 10px;}</style>");
                $("head").append("<style>.footer .col_right{width: 63%;}</style>");

                $("head").append("<style>.page_top{margin-top: 25px;}</style>");
            });
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Fluid': true,
                'plr_Responsive': true,
                'plr_ShowCloseButton': true,
                'plr_ContentType': 'PAGESKINEXPRESS',
                'plr_UseFullVersion': true,
                'plr_UseCreativeSettings': true,
                'plr_HideElementsByID': '',
                'plr_HideElementsByClass': '',
                "plr_FastInit": true
            });

            var headerHeight = $('section.head_top"').height();
            if ($("section.head_top").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("section.head_top");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    'plr_PageHeightAdjustment': -headerHeight,
                    'plr_StartScrollOnAnchor': true
                });
            }
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $("body").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded .bottom_sticky_box{display:none !important;}';
            stylesCSS += '.inskinLoaded section.head_top{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
            stylesCSS += '.inskinLoaded .link, .inskinLoaded .link.long{width: 78px !important;}';
            stylesCSS += '.inskinLoaded #socials ul li{margin-right: 20px;}';
            stylesCSS += '@media only screen and (min-width: 375px) {.inskinLoaded .fa_listing .control_bar .filter_btn .styled-select{width: 80px !important;}}';
            stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .fa_gallery .view_all{right: 0 !important;} .inskinLoaded .fa_gallery span.trusted_member img{width: 120px !important;}}';
            stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .fa_listing .control_bar{width: 300px !important; margin-left: -10px !important;}}';
            stylesCSS += '.inskinLoaded .fa_700, .inskinLoaded .fa_300, .inskinLoaded .fa_mpu_box, .inskinLoaded .ctx_afs_main, .inskinLoaded .becovi_m{display: none !important;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);


            integration.on("adServed", function (e) {
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            });

            integration.on('adClose', function (e) {
                $('body').removeClass('inskinLoaded');
                $('.next-arrow').trigger("click");
            });

            integration.on('layoutChange', function (e) {
                var fixedBar = $('.adpage-sticky-header').outerHeight();
                $(document).scroll(function () {
                    if ($(".adpage-sticky-header").length == 1) {
                        integration.base.setCfg({
                            'plr_ScrollAdjustment': fixedBar
                        });
                    }
                });
            });

            /* Passback Tag */
            window.ISMPassback = function () {
                return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().definePassback('/306025875/Passback_Mobile_ROS_BTF_300x250', [300, 250]).display();\n<\\script>";
            };
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