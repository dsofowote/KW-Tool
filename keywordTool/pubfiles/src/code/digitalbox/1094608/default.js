integration.meta = {
    'sectionID': '129876',
    'siteName': 'The Daily Mash - Desktop (HEADER BIDDING) - UK  ',
    'platform': 'header bidding'
};

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1094608',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129876',
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
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center',
                "plr_FastInit": true,
            });

            $("#ecd_opt_in_banner").css({
                "max-width": "1000px",
                "margin": "0 auto"
            });
        }

        tabletIntegration = function () {
            integration.base.setCfg({
                'plr_ContentW': 1000,
                'plr_PageAlignment': 'center'
            });

            if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
                $("#wrapper").css({
                    "margin-left": "0"
                });
                $("#ecd_opt_in_banner").css({
                    "width": "1002px"
                });
                integration.base.setCfg({
                    plr_PageAlignment: "left"
                })
            }
        }

        smartphoneIntegration = function () {
            integration.base.setCfg({
                'plr_FluidAnchor': true,
                'plr_Responsive': true
            });

            // if ($("#header").length == 1) {
            //     $("<div id='inskinanchor'></div>").insertAfter("#header");
            //     integration.base.setCfg({
            //         plr_AnchorParent: "#inskinanchor"
            //     });
            // }

            var windowWidth = $(window).width();
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            var contentWidth = windowWidth - integration.custom.FrameSideRight;
            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded .at-share-dock.atss{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
            stylesCSS += '.inskinLoaded .InSkinHide{display: none !important;}';
            stylesCSS += '.inskinLoaded{padding-right: 76px !important;}';
            stylesCSS += '.inskinLoaded .share-buttons-fixed-container {max-width:' + contentWidth + 'px}'
            stylesCSS += '</style>';
            $('head').append(stylesCSS);

            integration.on('adClose', function (e) {
                $('html').removeClass('inskinLoaded');
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