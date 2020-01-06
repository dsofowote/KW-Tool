integration.meta = {
    'sectionID': '129986',
    'siteName': 'Bunte - Header bidding - ( AT CH DE )',
    'platform': 'header bidding'
};

integration.params = {
    'mf_siteId' : '1098957',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1200,
    'srv_SectionID': '129986',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1200,
                'plr_PageAlignment': 'center',
                'plr_ScrollAdjustment': 60,
                "plr_PageHeightAdjustment": -140,
            });

            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var headHeight = $("#header").height();
            var headHeight2 = $(".bi-main-header-container").height();
            $("head").append("<style>body{border: none !important;} .fe-cosmobar{padding: 15px 0 30px !important; width: 1210px; margin: 0;} footer, {width: 1210px; margin: 0;}</style>");
            $("head").append("<style>.fe-cosmobar .fe-container, main .fe-container, #footer .fe-container, .fe-headline-wrap{margin: 0 !important;} #header > .fe-container, .fe-nav-secondary > .fe-container{margin-left: " + integration.custom.FrameSideRight + "px !important;}</style>");
            $("head").append("<style>.bg-grey-dark .fe-container{margin-left: 0 !important;}</style>");
            $("head").append("<style>.bi-main-navigation-container.fixed, .bi-main-header-container.fixed{position:fixed;top:0px}</style>");
            $("head").append("<style>.fe-container.fixed{width: 1200px !important;}</style>");

            $(".top-themes, footer.footer, main > .container-fluid, .top-themes > .container, .bg-grey-dark, #app, #moderatorBar, .navTabs").css({
                "max-width": "1200px",
                "margin": "0"
            });

            $("main").css({
                "margin-top": headHeight2
            });

            $("#app").css({
                "margin-top": headHeight
            });

            $("main").css({
                "margin-left": "0"
            });

            integration.on('adServed', function () {
                var headHeight = $("#header").outerHeight();
                var headHeight2 = $(".bi-main-header-container").outerHeight();

                console.log(headHeight, headHeight2);
                if (headHeight != null) {
                    $(".ism-frame").parent().css({
                        "top": headHeight,
                        "position": "relative"
                    });
                } else {
                    $(".ism-frame").parent().css({
                        "top": headHeight2,
                        "position": "relative"
                    });
                }
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1200,
                'plr_PageAlignment': 'center',
                
            });

            integration.custom.FrameSide = e.data.plr_FrameSide;
            $("head").append("<style>#header > .fe-container, .fe-nav-secondary > .fe-container{margin-left: " + integration.custom.FrameSide + "px !important;}</style>");
            $("head").append("<style>.bg-grey-dark .fe-container{margin: 0 auto;}</style>");
            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                /* Pageskin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left',
                    'plr_FastInit': true
                });
                $("head").append("<style>.bg-grey-darkest .fe-container, .bg-grey-dark .fe-container{margin: 0 !important;}</style>");
            }
            var headHeight = $("#top").height();
            $("head").append("<style>body{border: none !important;} .fe-cosmobar{padding: 15px 0 30px !important; width: 1000px; margin: 0;} .fe-cosmobar > .container, footer{width: 1000px; margin: 0;} .bg-grey-darkest > .container{margin: 0 !important;}</style>");
            if ($("#header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#header");
                integration.base.setCfg({
                    "plr_AnchorParent": "#inskinanchor",
                    "plr_StartScrollOnAnchor": true,
                    "plr_PageHeightAdjustment": -140,
                    'plr_ScrollAdjustment': 60,
                });
            }
            $("#inskinanchor").css({
                "margin-top": "140px",
                "position": "relative"
            });
            $(".top-themes, footer.footer, main > .container-fluid, .top-themes > .container, .bg-grey-dark, .bg-grey-darkest .fe-container, .relative").css({
                "max-width": "1000px",
                "margin": "0"
            });
            $("main").css({
                "margin-left": "0"
            });
            $(".fe-promo-main").css({
                "display": "none"
            });
            $("head").append("<style>.fe-cosmobar > .fe-container{margin: 0 auto;} main > .fe-container{margin-left: 10px; width: 1000px}</style>");
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true,
                'plr_PageHeightAdjustment': '-20',
                'plr_FastInit': true
            });

            var windowWidth = $(window).width();
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var contentWidth = windowWidth - integration.custom.FrameSideRight;

            $('body').addClass('inskinLoaded');
            var stylesCSS = '<style id="inskinStyles" type="text/css">';
            stylesCSS += '.inskinLoaded ul.ob-widget-items-container, .inskinLoaded .ob-widget-header, .inskinLoaded .ob-unit{width:' + (contentWidth - 15) + 'px;margin:0 auto}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adClose', function (e) {
                $('body').removeClass('inskinLoaded');
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