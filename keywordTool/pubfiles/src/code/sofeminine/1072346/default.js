integration.meta = {
    'sectionID' : '129321',
    'siteName' : 'Alfemminile - (HB All) - Headerbidding - (IT)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1072346',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1030,
    'srv_SectionID': '129321',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1030,
                'plr_PageAlignment': 'center'
            });

            $("head").append("<style>body{overflow-x: visible !important;}</style>");
            var headerHeight = $('#header').height();
            if ($("body > #header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("body > #header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -headerHeight,
                    plr_StartScrollOnAnchor: true
                });
            }
            $('.sas_FormatID_117').css({
                "margin-top": "10px"
            });
            $('footer').css({
                "width": "1040px",
                "margin": "0 auto"
            });


        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1030,
                'plr_PageAlignment': 'center'
            });

            try {
                jQuery(window).trigger("resize");
            } catch (e) {}

            $("#header").css({
                /*Place header at top of page*/
                "position": "absolute",
                "top": "0",
                "width": "100%"
            });


            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
                $(".af_contentBack, footer, #content").css({
                    /*Move content left*/
                    "max-width": "1060px",
                    "margin-left": "0px"
                });
               
                $("#head-nav, #sub").css({
                    /*The width of the site + PageSkin Edge*/
                    "width": "1380px",
                    "margin-left": "-20px"
                });
                integration.custom.edgeskin = true;
                integration.base.setCfg({
                    plr_ScrollAdjustment: 120,
                });
                $("#main-nav-container, #header-content, #main-nav, #sub").css({
                    /*The width of the site + PageSkin Edge*/
                    "width": "98%"
                });

            } else {
                $("footer").css({
                    /*Place header at top of page*/
                    "max-width": "1060px",
                    "margin": "0 auto"
                });
            }

            integration.on('adServed', function () {
                var headHeight = $("#header").outerHeight();
                integration.custom.frameTop = e.data.plr_FrameTop;
                console.log("inskin ad", headHeight);
                $(".ism-anchor").css({
                    "top": headHeight,
                    "position": "relative",
                    "z-index": "100000"
                });

                if (integration.custom.edgeskin) {
                    $("#content").css({
                        "margin-top": integration.custom.frameTop + 80
                    });
                } else {
                    $("#content").css({
                        "margin-top": integration.custom.frameTop
                    });
                }

                integration.base.setCfg({
                    plr_PageHeightAdjustment: -headHeight,
                });
            });

            integration.custom.InSkinTopNavSubMenu = function () {
                /* This function is to push the navigation bar below menu when the sub menu is present */
                var width = $(window).width();
                if (width >= 1008) {
                    $(".ism-frame").parent().css({
                        "top": "193px" /*Height of the navigation bar with sub menu*/
                    });
                    integration.base.SetCfg({
                        plr_PageHeightAdjustment: -140
                    });
                } else {
                    $(".ism-frame").parent().css({
                        "top": "50px" /*Height of fixed navigation bar*/
                    });
                    integration.base.SetCfg({
                        plr_PageHeightAdjustment: -50
                    });
                }
            }

            integration.custom.InSkinTopNav = function () {
                /* This function is to push the navigation bar below the menu */
                var width = $(window).width();
                if (width >= 1008) {
                    $(".ism-frame").parent().css({
                        "top": "152px" /*Height of the navigation bar*/
                    });
                    integration.base.SetCfg({
                        plr_PageHeightAdjustment: -100
                    });
                } else {
                    $(".ism-frame").parent().css({
                        "top": "50px" /*Height of fixed navigation bar*/
                    });
                    integration.base.SetCfg({
                        plr_PageHeightAdjustment: -50
                    });
                }
            }

            integration.custom.InSkinTopNavSubMenuContent = function () {
                /* This function is to push the content below the PageSkin when the sub menu is present */
                var width = $(window).width();
                if (width >= 1008) {
                    $(".af_contentBack, #content").css({
                        "margin-top": "193px" /*Height of the navigation bar with sub menu*/
                    });
                } else {
                    $(".af_contentBack, #content").css({
                        "margin-top": "50px" /*Height of the fixed navigation bar*/
                    });
                }
            }

            integration.custom.InSkinTopNavContent = function () {
                /* This function is to push the content below the PageSkin */
                var width = $(window).width();
                if (width >= 1008) {
                    $(".af_contentBack, #content").css({
                        "margin-top": "152px" /*Height of the navigation bar*/
                    });
                } else {
                    $(".af_contentBack, #content").css({
                        "margin-top": "50px" /*Height of the fixed navigation bar*/
                    });
                }
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });

            integration.custom.frameSideRight = e.data.plr_FrameSideRight;
            var windowWidth = $(window).width();
            var contentWidth = windowWidth - integration.custom.frameSideRight;

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:75px}';
            stylesCSS += '.inskinLoaded body{overflow:visible}';
            stylesCSS += '.inskinLoaded #af-scrollspy{max-width:' + contentWidth + 'px;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adServed', function () {
                var headHeight = $("#header-content").outerHeight();
                $(".ism-anchor").css({
                    "margin-top": headHeight,
                    "z-index": "100000"
                });
            });
        }

        if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({
                'plr_FixedTop': true,
                'plr_EnableSwipe': true,
            });
        }

        window.unloadPageskin = function () {
            try {
                integration.base.unloadAd();
                $("#inskinanchor").remove();
            } catch (e) {
                console.log("Inskin Unload error");
                integration.telemetry.recordCustom("Unload Error");
            }
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

