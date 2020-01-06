integration.meta = {
    'sectionID': '129933',
    'siteName': ' Sport Bible - (HEADER BIDDING) - Desktop (INT)   (ID: 129933 )',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1097720',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1300,
    'srv_SectionID': '129933',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_Multiwin' : false,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {

        window.top.unloadPageskin = function () {
            try {
                integration.destroy();
            } catch (e) {}
        }

        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1300,
                'plr_PageAlignment': 'center'
            });

            if ($("body > header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("body > header");
                integration.base.setCfg({
                    "plr_AnchorParent": "#inskinanchor",
                    "plr_PageHeightAdjustment": -108,
                    "plr_StartScrollOnAnchor": true
                });
            }
            $(".article__next-up, .advert, .takeover, .category__banner, footer, .carousel--ondark, header").css({
                "margin": "0 auto",
                "max-width": "1300px"
            });
            $("head").append("<style>body{padding-top: 0 !important;} div.advert{position: relative !important;} body > header{margin-bottom: 0px !important;}</style>");
            $("html").addClass("skin__opt--three  skin__opt--three-collapsed");
            $("head").append("<style>.inskin-article-body{width: calc(100% - 340px - 50px);}</style>");
            $(".article__container").css({
                "max-width": "1300px"
            });
            // fix for social media icons
            $("head").append("<style>.skin__opt--three .share-controls--sticky .share-controls, .skin__opt-three-collapsed .share-controls--sticky .share-controls{width: 5% !important;} .skin__opt--three .share-controls--sticky.share-controls__container--bottom .share-controls {width: 24.75% !important;}</style>");
            $("head").append("<style>.container.share-controls__container.share-controls--sticky {max-width: 1300px !important;}</style>");

            integration.on("layoutChange", function (e) {
                integration.custom.articleBody();
                $(window).on("resize", function () {
                    integration.custom.articleBody()
                })
            });

            integration.custom.articleBody = function () {
                var winWidth = $(window).innerWidth();
                if (winWidth >= 1263) {
                    $(".article__body").addClass("inskin-article-body")
                } else {
                    $(".article__body").removeClass("inskin-article-body")
                }
            };

            integration.on("adServed", function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "1200"
                })
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1300,
                'plr_PageAlignment': 'center'
            });

            $("html").addClass("skin__opt--three");
            $('section, footer').css({
                "max-width": "1280px",
                "margin": "0 auto"
            });
            $('header').css({
                "max-width": "1280px",
                "min-width": "1280px",
                "margin": "0 auto"
            });
            $('.container.promo--container.promo--editors-picks').css({
                "max-width": "1200px",
                "margin": "0 auto"
            });
            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                /* PageSkin Edge specific changes */
                integration.base.setCfg({
                    'plr_PageAlignment': 'left'
                });
                $('body').css({
                    "overflow-x": "visible"
                });
                $('header, section, footer').css({
                    "margin": "0"
                });
                integration.custom.isEdge = true;
            }

            integration.on('layoutChange', function (e) {
                integration.custom.FrameBottom = e.data.plr_FrameBottom;
                integration.custom.FrameSide = e.data.plr_FrameSide;
                $("head").append("<style>body{overflow-y: hidden !important; padding-bottom: " + integration.custom.FrameBottom + "px;}</style>");
                if (integration.custom.isEdge) {
                    $("head").append("<style>body{margin-left: 0 !important; padding-left: " + integration.custom.FrameSide + "px !important;}</style>");
                }
            });

            integration.on("adServed", function (e) {
                $(".ism-frame").parent().css({
                    "z-index": "10"
                });
            });

        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
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