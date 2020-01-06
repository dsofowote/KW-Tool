integration.meta = {
    'sectionID': '129096',
    'siteName': 'Whatculture - (Header Bidding) - Desktop - (UK) ',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1050391',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129096',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        desktopIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            if ($("#app-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#app-header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor"
                });
            }
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            if ($("#app-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("#app-header");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor"
                });
            }

            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                $(".app-wrapper").css({
                    "margin-left" : "0px"
                })
                integration.base.setCfg({
                    plr_PageAlignment: 'left'
                });
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });

            var windowWidth = $(window).width();
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var contentWidth = windowWidth - integration.custom.FrameSideRight;

            $("#app-header, .app-page, body, html").css({
                "max-width": contentWidth,
                "margin": "0"
            });

            $("#app-header").css({
                "z-index" : "1000001"
            });

            integration.on("adServed", function () {
                $(".ism-frame").parent().css({
                    "z-index": "1000000"
                });
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